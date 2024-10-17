document.addEventListener('DOMContentLoaded',()=>{
    const loginform=document.getElementById("loginform");
    const registerform=document.getElementById("registerform");
    const switchtoregister=document.getElementById("switchtoregister");
    const switchtologin=document.getElementById("switchtologin");


    switchtoregister.addEventListener("click" ,()=>
    {
        loginform.classList.add("hidden");
        registerform.classList.remove("hidden");
    });

    switchtologin.addEventListener("click",()=>
        {
            registerform.classList.add("hidden");
            loginform.classList.remove("hidden");
        });


    registerform.addEventListener('submit',(e)=>{
        e.preventDefault();
        const user=document.getElementById("registeruser").value;
        const password=document.getElementById("registerpass").value;
        if(user && password){
            localStorage.setItem(user,password);
            alert("registreation is successfully done");
            registerform.reset();
            registerform.classList.add("hidden");
            loginform.classList.remove("hidden");
        }
        else{
            alert("please fill the content");
        }

    });

    loginform.addEventListener('submit',(e)=>{
        e.preventDefault();
        const username = document.getElementById('loginuser').value;
        const password = document.getElementById('loginpass').value;
    
        const storedPassword = localStorage.getItem(username);
    
        if (storedPassword && storedPassword === password) {
            alert('Login successful!');
            loginform.reset();
        } else {
                alert('Invalid username or password.');
        }
        
    });
});