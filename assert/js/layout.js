function uiHeader() {
    document.addEventListener("DOMContentLoaded", function () {
        fetch("home.html") // Lấy nội dung từ home.html
            .then(response => {
                if (!response.ok) {
                    throw new Error(`Lỗi HTTP: ${response.status}`);
                }
                return response.text();
            })
            .then(data => {
                let tempDiv = document.createElement("header"); // Sử dụng <div> thay vì <header>
                tempDiv.innerHTML = data;

                let header = tempDiv.querySelector("#site-header"); // Tìm phần header
                if (header) {
                    document.getElementById("header-container").appendChild(header);
                    updateTotalQuanlity();
                    setName();
                } else {
                    console.error("Không tìm thấy #site-header trong home.html");
                }
            })
            .catch(error => console.error("Lỗi tải header:", error));
    });
}

function uiFooter() {
    document.addEventListener("DOMContentLoaded", function(){
        fetch("home.html")
            .then(response=>{
                if(!response.ok){
                    throw new Error(`Lỗi HTTP: ${response.status}`);
                }
                return response.text();
            })
            .then(data => {
                let tempDiv = document.createElement("header"); 
                tempDiv.innerHTML = data;

                let header = tempDiv.querySelector("#site-footer"); 
                if (header) {
                    document.getElementById("footer-container").appendChild(header);
                } else {
                    console.error("Không tìm thấy #site-footer trong home.html");
                }
            })
            .catch(error => console.error("Lỗi tải footer:", error));
    });
}



uiHeader();
uiFooter();
