const users = []

function checkUserName(){
    var reqUserName =/^[A-Za-z\d._]{3,25}$/;
    if(reqUserName.test(document.getElementById("username").value)){
        document.getElementById("errUsername").innerHTML = "";
        document.getElementById("username").style.border = "2px solid green";
        return true;
    }else{
        document.getElementById("errUsername").innerHTML = "Tên đăng nhập chỉ gồm chữ cái, số, dấu chấm hoặc gạch.";
        document.getElementById("username").style.border = "2px solid red";
        return false;
    }

}
function checkPassword(){
    var req = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).{8,}$/;
    if(req.test(document.getElementById("password").value)){
        document.getElementById("errPassword").innerHTML = "";
        document.getElementById("password").style.border = "2px solid green";
        return true;
    }else{
        document.getElementById("errPassword").innerHTML = "Mật khẩu gồm ít nhất số, 1 ký tự hoa, thường, ký tự đặc biệt.";
        document.getElementById("password").style.border = "2px solid red";
        return false;
    }
}
function checkReqPassword(){
    if(document.getElementById("password").value === document.getElementById("againpass").value){
        document.getElementById("errAgainPass").innerHTML = "";
        document.getElementById("againpass").style.border = "2px solid green";
        return true;
    }else{
        document.getElementById("errAgainPass").innerHTML = "Mật khẩu nhập lại không trùng khớp.";
        document.getElementById("againpass").style.border = "2px solid red";
        return false;
    }
}

function checkFullName(){
    var req = /^([A-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠƯỲỴÝỶỸẮẰẲẴẶẤẦẨẪẬẮẰẲẴẶÉÈẼẸẸỀỂỄỆ])[a-zàáâãèéêìíòóôõùúăđĩũơưỳỵỷỹắằẳẵặấầẩẫậéèẽẹệềểễệ]+(\s([A-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠƯỲỴÝỶỸẮẰẲẴẶẤẦẨẪẬẮẰẲẴẶÉÈẼẸẸỀỂỄỆ])[a-zàáâãèéêìíòóôõùúăđĩũơưỳỵỷỹắằẳẵặấầẩẫậéèẽẹệềểễệ]+)+$/;
    if(req.test(document.getElementById("txtHoTen").value)){
        document.getElementById("errHT").innerHTML = "";
        document.getElementById("txtHoTen").style.border = "2px solid green";
        return true;
    }else{
        document.getElementById("errHT").innerHTML = "Họ tên phải viết hoa chữ cái đầu.";
        document.getElementById("txtHoTen").style.border = "2px solid red";
        return false;
    }
}

function checkDate(){
    var birthday =  new Date(document.getElementById("date").value);
    var today = new Date();

    var age = today.getFullYear() - birthday.getFullYear();
    if(age < 15){
        document.getElementById("errDate").innerHTML = "Bạn không đủ tuổi(< 15).";
        document.getElementById("date").style.border ="2px solid red;"
        return false;
    }else{
        document.getElementById("errDate").innerHTML = "";
        document.getElementById("date").style.border ="2px solid green;"
        return true;
    }
}

function checkEmail(){
    var reqEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if(reqEmail.test(document.getElementById("txtEmail").value)){
        document.getElementById("txtEmail").style.border ="2px solid green";
        document.getElementById("errEmail").innerHTML = "";
        return true;
    }else{
        document.getElementById("txtEmail").style.border ="2px solid red";
        document.getElementById("errEmail").innerHTML = "Email không hợp lệ.";
        return false;
    }
}
function checkPhone(){
    var reqPhone = /^(0)[0-9]{9}$/;
    if(reqPhone.test(document.getElementById("sdt").value)){
        document.getElementById("sdt").style.border ="2px solid green";
        document.getElementById("errPhone").innerHTML = "";
        return true;
    }else{
        document.getElementById("sdt").style.border ="2px solid red";
        document.getElementById("errPhone").innerHTML = "Số điện thoại không hợp lệ.";
        return false;
    }
}
function checkAddress(){
    var reqDC = /^[A-Za-z0-9\s,.-]{5,}$/;
    if(reqDC.test(document.getElementById("txtDC").value)){
        document.getElementById("txtDC").style.border ="2px solid green";
        document.getElementById("errDC").innerHTML = "";
        return true;
    }else{
        document.getElementById("txtDC").style.border ="2px solid green";
        document.getElementById("errDC").innerHTML = "";
        return false;
    }
}


function signUp(){
    if(checkAddress() && checkDate() && checkEmail() && checkFullName() && checkPassword() && checkPhone() && checkReqPassword() && checkUserName()){
        alert("Chúc mừng quý khách đăng ký thanh công.");
        setUsers();
        reset();
    }else{
        alert("Vui lòng kiểm tra lại.");
      
    }
}
function reset(){
    document.getElementById("username").innerHTML = "";
    document.getElementById("txtDC").innerHTML = "";
    document.getElementById("txtEmail").innerHTML = "";
    document.getElementById("gender").innerHTML = "";
    document.getElementById("txtHoTen").innerHTML = "";
    document.getElementById("password").innerHTML = "";
    document.getElementById("date").innerHTML = "";
    document.getElementById("sdt").innerHTML = "";
}

function setUsers(){
    const user = {
        username: document.getElementById("username").value,
        password: document.getElementById("password").value,
        name: document.getElementById("txtHoTen").value,
        gender: getGender(),
        address:  document.getElementById("txtDC").value,
        email: document.getElementById("txtEmail").value,
        phone: document.getElementById("sdt").value,
        birthday: document.getElementById("date").value
    }

    users.push(user);

    localStorage.setItem("users", JSON.stringify(users));

}