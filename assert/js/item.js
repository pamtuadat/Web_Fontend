
document.addEventListener("DOMContentLoaded", function() {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');

    // Lấy danh sách sản phẩm từ localStorage
    const products = JSON.parse(localStorage.getItem('products')) || [];
    const selectedProduct = products.find(p => p.id === productId);

    if (selectedProduct) {
        document.getElementById("fromItem").innerHTML = `
            <div class="col-5">
                <img id="product-img" src="${selectedProduct.image}" alt="san pham" height="400px" width="500px">
            </div>
            <div class="col-7">
                <table class="table">
                    <thead>
                        <tr>
                            <th><h3>${selectedProduct.name}</h3></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>${selectedProduct.description}</td>
                        </tr>
                        <tr>
                            <td>Giá: ${formatNumber(selectedProduct.price) + " VNĐ"}</td>
                        </tr>
                        <tr>
                            <td><button type="button" class="btn btn-primary" id="addToCard" onclick="saveCustomerOfProducts('${selectedProduct.id}')">Thêm vào giỏ hàng</button></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        `;

        showProductByType(selectedProduct.type);

    } else {
        // Hiển thị thông báo nếu không tìm thấy sản phẩm
        document.getElementById("fromItem").innerHTML = "<p>Không tìm thấy sản phẩm.</p>";
    }
});  

// document.addEventListener("DOMContentLoaded", function() {
//     var sp = document.getElementById("sameItem");

// });



function formatNumber(n) {
    return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}