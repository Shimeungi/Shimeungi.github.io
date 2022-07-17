//querySelector

const loginInputForm = document.querySelector(".loginInputForm");
const loginForm = loginInputForm.querySelector("#loginForm"); // 로그인 폼
const loginBtn = loginForm.querySelector("#loginBtn"); // 로그인 버튼

const logOutForm = document.querySelector(".logOutForm");
const logOutBtn = logOutForm.querySelector("#logOutBtn"); // 로그아웃 버튼

const userId = loginForm.querySelector("#userId");
const greeting = document.querySelector(".greeting");


// local Storage
const localStorage = window.localStorage;

//className
const HIDDEN_CLASSNAME = "hidden";

// User Id Key
const USER_ID_KEY = "userId"; 


function loginHandler(event){
    event.preventDefault();

    const userIdValue = userId.value;
    
    SavedUserId(userIdValue); // localStorage 에 저장
    loginForm.classList.add(HIDDEN_CLASSNAME);
    paintGreeting(userIdValue);

    toDoBtn.classList.remove(HIDDEN_CLASSNAME);
    logOutBtn.classList.remove(HIDDEN_CLASSNAME);

}

function logOutHandler(event){
    event.preventDefault();
    localStorage.removeItem(USER_ID_KEY);
    
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    

    toDoList.classList.add(HIDDEN_CLASSNAME);
    greeting.classList.add(HIDDEN_CLASSNAME);
    logOutBtn.classList.add(HIDDEN_CLASSNAME);
    toDoBtn.classList.add(HIDDEN_CLASSNAME);
}

function SavedUserId(userIdValue){
    localStorage.setItem(USER_ID_KEY, userIdValue);
}


function paintGreeting(userId){
    greeting.innerText = `${userId}님`;

    greeting.classList.remove(HIDDEN_CLASSNAME);
    logOutBtn.classList.remove(HIDDEN_CLASSNAME);
}

const savedUserId = localStorage.getItem(USER_ID_KEY);
logOutBtn.addEventListener("click", logOutHandler);

console.log(`savedUserId : ${savedUserId}`);
if(savedUserId === null){
    // show the login form
    
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", loginHandler);
} else {
    // show the login Ok  
    toDoBtn.classList.remove(HIDDEN_CLASSNAME);
    
    paintGreeting(savedUserId);
    logOutBtn.addEventListener("click", logOutHandler);
}