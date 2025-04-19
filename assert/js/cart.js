

function showCart() {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let cartTable = document.getElementById("cart-items");
    let cartProduct = document.getElementById("cart-products");

    if (!cartTable) return; // Đảm bảo phần tử bảng tồn tại

    cartTable.innerHTML = ``; // Xóa nội dung cũ trước khi cập nhật

    if (cart.length === 0) {
        cartProduct.innerHTML = `
        <div class="py-5 text-center">
                <img src="../img/cart/cart.png" alt="gio hang">
                <span class="text-danger fw-medium fs-4 d-block">Giỏ hàng của quý khách hiện đang trống, xin vui lòng chọn mua các sản phẩm của chúng tôi</span>
            </div>
            <div class="d-flex justify-content-center"> 
                <a href="../html/products.html" class="btn btn-warning w-25">Mua Ngay</a>
            </div>`;
        return;
    }

    var tongTien = 0;
    cart.forEach((product )=> {
        let total = product.price * product.quantity; // Tính tổng tiền
        let row = document.createElement("tr");

        tongTien += total;
        row.innerHTML = `
            <td>${product.name}</td>
            <td><img src="${product.image}" alt="${product.name}" width="70"></td>
            <td>${product.description}</td>
            <td><input type="number" value="${product.quantity}" min="1" onchange="updateQuantity('${product.id}', this.value)"></td>
            <td>${product.price.toLocaleString()}</td>
            <td id="total-${product.id}">${total.toLocaleString()}</td>
            <td>
                <button onclick="confirmRemoveFromCart('${product.id}')"  data-bs-toggle="modal" data-bs-target="#modalInfo"
                            style="border: none; background: none; cursor: pointer;">
                            <i class="fas fa-trash-alt" style="color: red; font-size: 18px;"></i>
                </button>
            </td>
        `;
        cartTable.appendChild(row);
    });

    let rowFinal = document.createElement("tr");
    rowFinal.innerHTML =`
        <th colspan="4">Tổng đơn hàng: </th>
        <td colspan="3">${tongTien.toLocaleString('vi-VN') } VNĐ</td>
    `;

    let btnTt = document.createElement("tr");

    btnTt.innerHTML =`<td colspan="7"><button type="button" class="btn btn-warning w-50">Thanh toán</button></td>`;
    cartTable.appendChild(rowFinal);
    cartTable.appendChild(btnTt);
}

// cap nhat so luong
function updateQuantity(productId, newQuantity) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let product = cart.find(p => p.id === productId);

    if (product) {
        product.quantity = parseInt(newQuantity);
        localStorage.setItem("cart", JSON.stringify(cart));
        showCart(); // Cập nhật lại giỏ hàng
    }
}


var idCanXoa = null;
function confirmRemoveFromCart(productId) {
    idCanXoa = productId;
    console.log("ID cần xóa:", idCanXoa);
}

// xoa san pham
function removeFromCart() {
    if(idCanXoa ==null)
        return;

    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart = cart.filter(product => product.id != idCanXoa);

    localStorage.setItem("cart", JSON.stringify(cart));
    showCart(); // Cập nhật giao diện giỏ hàng sau khi xóa
}

function updateTotalQuanlity(){
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    document.getElementById("numberProduct").innerText = cart.length;
}
