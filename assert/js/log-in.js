let users = JSON.parse(localStorage.getItem("users")) || [];

function checkUserName(){
    var userInput = document.getElementById("user");

    const matchedUser = users.find(u => u.username === userInput.value);

    if(matchedUser){
        userInput.style.border = "2px solid green";
        return true;
    }else{
        userInput.style.border = "2px solid red";
        return false;
    }

}

function checkEmail(){
    var email = document.getElementById("email");
    const matchedUser = users.find(u => u.email === email.value);
    if(matchedUser){
        email.style.border = "2px solid green";
        return true;
    }else{
        email.style.border = "2px solid red";
        return false;
    }
}

function checkPassword(){
    var password = document.getElementById("password");
    const matchedUser = users.find(u => u.password === password.value);
    if(matchedUser){
        password.style.border = "2px solid green";
        return true;
    }else{
        password.style.border = "2px solid red";
        return false;
    }
}

function logIn(){
    const username = document.getElementById("user").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    
    const matchedUser = users.find(u =>
        u.username === username &&
        u.email === email &&
        u.password === password
    );

    if( checkUserName() && checkEmail() && checkPassword()){
        alert("Chúc mùng đăng nhập thành công.");
        localStorage.setItem("currentUser", JSON.stringify(matchedUser));
        reset();
        window.location.href = '../html/home.html';
    }else{
        alert("Vui lòng kiểm tra lại tên đăng nhập, mật khẩu, email.");
    }
    
}

function reset(){
    document.getElementById("user").innerHTML = "";
    document.getElementById("password").innerHTML = "";
    document.getElementById("email").innerHTML = "";
}

function setName() {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    if (currentUser && currentUser.username) {
        document.getElementById("nameUser").innerHTML = currentUser.username;
    }
}

function handleLogout(){
    if (localStorage.getItem("userName")) {
        document.getElementById("nameUser").textContent = localStorage.getItem("userName");
        document.getElementById("logout").style.display = "block";
        
        document.querySelector('a[href="../html/log-in.html"]').style.display = "none";
        document.querySelector('a[href="../html/sign-up.html"]').style.display = "none";
    } else {
        document.querySelector('a[href="../html/log-in.html"]').style.display = "block";
        document.querySelector('a[href="../html/sign-up.html"]').style.display = "block";
        document.getElementById("logout").style.display = "none";
    }

    // Xử lý sự kiện Đăng xuất
    document.getElementById("logout").addEventListener("click", function() {
        // Xóa thông tin người dùng trong localStorage
        localStorage.removeItem("userName");
        
        // Chuyển hướng về trang Đăng nhập
        window.location.href = "../html/log-in.html";
    });

}
