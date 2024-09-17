
//輸入格1判段整數的
var password ="";
var bt1 = new Boolean(false);
var bt2 = new Boolean(false);
var bt3 = new Boolean(false);
var bt4 = new Boolean(false);
var bt5 = new Boolean(false);
var bt6 = new Boolean(false);
function intDetection(event) {
    var input = event.target.value;
    if (!/^\d*$/.test(input)) {
        event.target.value = input.replace(/\D/g, '');
    }
    if (parseInt(input) < 1 || parseInt(input) > 10) {
        intError.innerText = "輸入的數字需介於 1 和 10 之間";
        bt1 = false;
        intCheck.style.display = "none";
    } else {
        intError.innerText = ""; // 清除錯誤訊息
        bt1 = true;
        intCheck.style.display = "inline";
    }
}
//輸入格2判斷名字 第二個欄位要輸入的是英文姓名，如果不是英文或數字將會出現錯誤提示；如果輸入正確，移到下個欄位時該欄位右邊會打勾。若是輸入字數小於六
function nameDetection(event) {
    var input = event.target.value;
    if(!/^[a-zA-z0-9]+$/.test(input)|| input.length < 6){
        nameError.innerText = "請輸入英文姓名且字數需大於六";
        bt2 = false;
        nameCheck.style.display = "none";
    }    
    else{
        nameError.innerText = "";
        bt2 = true;
        nameCheck.style.display = "inline";
    }
}

function usernameDetection(event) {
    var input = event.target.value;
    if(!/^[a-zA-z0-9]+$/.test(input)){
        usernameError.innerText = "不正確的文數字格式!";
        bt3 = false;
        usernameCheck.style.display = "none";
    }    
    else if(input.length < 5){
        usernameError.innerText = "請輸入英文且字數大於5"
        bt3 = false;
        usernameCheck.style.display = "none";
    }
    else{
        usernameError.innerText = "";
        bt3 = true;
        usernameCheck.style.display = "inline";
    }
}

function emailDetection(event) {
    var input = event.target.value;
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(!emailPattern.test(input)){
        emailError.innerText = "不正確的電郵格式!";
        bt4 = false;
        emailCheck.style.display = "none";
    }
    else{
        emailError.innerText = "";
        bt4 = true;
        emailCheck.style.display = "inline";
    }
}
function passwordDetection(event){
    var input = event.target.value;

    if (input.length < 9) {
        passwordError.innerText = "密碼需輸入至少九個字元";
        bt5=false;
        passwordCheck.style.display = "none";
    } else {
        passwordError.innerText = "";
        password = input; // 更新全域變數 password
        bt5=true;
        console.log(password);
        passwordCheck.style.display = "inline";
    }
}

function agapasswordDetection(event){
    var input = event.target.value;

    if(input!==password){
        agapasswordError.innerText = "兩次密碼不一樣!";
        bt6=false;
        agapasswordCheck.style.display = "none"; //
    }    
    else{
        agapasswordError.innerText = "";
        bt6=true;
        agapasswordCheck.style.display = "inline";
    }    
}

function checkAllConditions() {
    console.log(bt1 && bt2 && bt3 && bt4 && bt5 && bt6);
    if (bt1 && bt2 && bt3 && bt4 && bt5 && bt6) {
        
        correct.disabled = false;
    }
    else{
        correct.disabled = true;
    }
}
