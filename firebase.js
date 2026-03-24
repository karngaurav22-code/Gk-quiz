import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import {
getAuth,
createUserWithEmailAndPassword,
signInWithEmailAndPassword,
signOut,
onAuthStateChanged,
updateProfile,
sendPasswordResetEmail

} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";



const firebaseConfig = {

apiKey: "AIzaSyAbPmBLivmSyyFB1sNbZHT6DmrDVHw1m58",

authDomain: "gk-practice-43fd0.firebaseapp.com",

projectId: "gk-practice-43fd0",

storageBucket: "gk-practice-43fd0.firebasestorage.app",

messagingSenderId: "91555221690",

appId: "1:91555221690:web:af85ff97d336d617c9b283",

databaseURL: "https://gk-by-gaurav-default-rtdb.firebaseio.com"

};



const app = initializeApp(firebaseConfig);

const auth = getAuth(app);



window.doRegister = async function(){

const name = document.getElementById("regName").value.trim();

const email = document.getElementById("regEmail").value.trim();

const pass = document.getElementById("regPass").value;

const msg = document.getElementById("registerMsg");

const btn = document.getElementById("registerBtn");



if(!name || !email || !pass){

msg.textContent="All fields required";

return;

}



btn.disabled=true;



try{

const cred = await createUserWithEmailAndPassword(auth,email,pass);

await updateProfile(cred.user,{displayName:name});

msg.textContent="Account created";

}

catch(e){

msg.textContent=e.message;

btn.disabled=false;

}

};





window.doLogin = async function(){

const email = document.getElementById("loginEmail").value.trim();

const pass = document.getElementById("loginPass").value;

const msg = document.getElementById("loginMsg");

const btn = document.getElementById("loginBtn");



if(!email || !pass){

msg.textContent="Enter email password";

return;

}



btn.disabled=true;



try{

await signInWithEmailAndPassword(auth,email,pass);

}

catch(e){

msg.textContent="login error";

btn.disabled=false;

}

};





window.doLogout = async function(){

await signOut(auth);

};





window.doForgotPassword = async function(){

const email = document.getElementById("loginEmail").value;

const msg = document.getElementById("loginMsg");



if(!email){

msg.textContent="enter email";

return;

}



await sendPasswordResetEmail(auth,email);



msg.textContent="reset link sent";

};





onAuthStateChanged(auth,(user)=>{

document.getElementById("loadingScreen").style.display="none";

if(user){

document.getElementById("authScreen").style.display="none";

document.getElementById("appScreen").style.display="block";

document.getElementById("navUname").textContent=user.email;


/* important */
buildTopicGrid();

switchTab("home");


}

else{

document.getElementById("authScreen").style.display="flex";

document.getElementById("appScreen").style.display="none";

}

});



document.getElementById("loadingScreen").style.display="none";



if(user){



document.getElementById("authScreen").style.display="none";

document.getElementById("appScreen").style.display="block";



document.getElementById("navUname").textContent=user.email;



}



else{



document.getElementById("authScreen").style.display="flex";

document.getElementById("appScreen").style.display="none";



}



});
