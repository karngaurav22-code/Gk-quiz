function switchAuthTab(tab){

document.getElementById("loginForm").style.display="none";
document.getElementById("registerForm").style.display="none";

document.querySelectorAll(".auth-tab").forEach(btn=>{
btn.classList.remove("active");
});

if(tab==="login"){
document.getElementById("loginForm").style.display="block";
document.querySelectorAll(".auth-tab")[0].classList.add("active");
}

if(tab==="register"){
document.getElementById("registerForm").style.display="block";
document.querySelectorAll(".auth-tab")[1].classList.add("active");
}

}



function doLogin(){

let u=document.getElementById("loginUser").value;
let p=document.getElementById("loginPass").value;

if(u==="" || p===""){

document.getElementById("loginMsg").innerText="enter details";

return;

}

document.getElementById("loginMsg").innerText="login success (demo)";

}



function doRegister(){

let n=document.getElementById("regName").value;
let u=document.getElementById("regUser").value;
let p=document.getElementById("regPass").value;

if(n==="" || u==="" || p===""){

document.getElementById("registerMsg").innerText="fill all fields";

return;

}

document.getElementById("registerMsg").innerText="register success (demo)";

}
