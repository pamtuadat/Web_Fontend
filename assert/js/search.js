// Trong search.js
const urlParams = new URLSearchParams(window.location.search);
const keyword = urlParams.get("keyword");
document.getElementById("js-title").textContent = keyword;

// Giả sử bạn có mảng sản phẩm
const products = JSON.parse(localStorage.getItem('products')) || [];

const filtered = products.filter(p => p.name.toLowerCase().includes(keyword.toLowerCase()));
const content = document.getElementById("productContainer");
content.innerHTML = filtered.map(product => `
    <div class="col-md-3 col-sm-6 mb-3 product-item">
        <div class="card">
            <div class="card-header">
                <img src="${product.image}" alt="${product.name}" class="img-fluid">
            </div>
            <div class="card-body">
                <h5 class="card-title">${product.name}</h5>
                <span>Giá: ${formatNumber(product.price)  + " VNĐ"} <br></span>
                <button type="button" class="btn btn-product" onclick="saveCustomerOfProducts('${product.id}')">
                    <i class="fas fa-shopping-cart"></i>
                </button>
            </div>
        </div>
    </div>
`).join("");

function formatNumber(n) {
    return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}