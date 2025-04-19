// danh sach cac san pham
const products = [
    {
        id: "sp1-socolaDark",
        name: "Socola Đen 70%",
        image: "../img/product/dark-chocolates/sp1.jpg",
        description: "Vị đậm đà, thơm ngon của socola đen nguyên chất với 70% cacao, mang đến sự lựa chọn lý tưởng cho những tín đồ yêu thích vị đắng mạnh mẽ của socola đen.",
        price: 70000,
        type: 'dark'
    },
    {
        id: "sp2-socolaDark",
        name: "Thanh Socola Đen 70%",
        image: "../img/product/dark-chocolates/sp2.jpg",
        description: "Thanh socola đen 70% cacao, mang đến một vị đắng nhẹ nhàng, thích hợp cho những ai đang tìm kiếm một món ăn nhẹ bổ dưỡng mà không lo tăng cân.",
        price: 120000,
        type: 'dark'
    },
    {
        id: "sp3-socolaDark",
        name: "Socola Hộp Cao Cấp",
        image: "../img/product/dark-chocolates/sp3.jpg",
        description: "Hộp socola đen cao cấp với thiết kế sang trọng, mang đến trải nghiệm tuyệt vời cho những ai yêu thích socola đen hảo hạng và muốn thưởng thức sự hoàn hảo trong từng miếng.",
        price: 200000,
        type: 'dark'
    },
    {
        id: "sp4-socolaDark",
        name: "Hộp Socola Mix Nhiều Loại",
        image: "../img/product/dark-chocolates/sp4.jpg",
        description: "Hộp socola với sự kết hợp giữa các hương vị khác nhau như sữa, đen và trái cây, là món quà tuyệt vời để thưởng thức cùng bạn bè và người thân trong các dịp đặc biệt.",
        price: 150000,
        type: 'dark'
    },
    {
        id: "sp5-socolaDark",
        name: "Hộp Socola Đỏ Sang Trọng",
        image: "../img/product/dark-chocolates/sp5.jpg",
        description: "Hộp socola cao cấp thiết kế cổ điển, với hương vị tinh tế, mang đến sự sang trọng và là món quà lý tưởng cho những dịp quan trọng như lễ Tết, sinh nhật.",
        price: 200000,
        type: 'dark'
    },
    {
        id: "sp6-socolaDark",
        name: "Thanh Socola 100% Cacao",
        image: "../img/product/dark-chocolates/sp6.jpg",
        description: "Socola nguyên chất 100% cacao, cực kỳ đắng và giàu dinh dưỡng, là lựa chọn tuyệt vời cho những ai yêu thích sự thuần khiết và muốn cảm nhận được hương vị cacao mạnh mẽ nhất.",
        price: 150000,
        type: 'dark'
    },
    {
        id: "sp7-socolaDark",
        name: "Socola Đen Luxury",
        image: "../img/product/dark-chocolates/sp7.png",
        description: "Socola đen cao cấp với bao bì sang trọng, là món quà lý tưởng cho các dịp đặc biệt, mang đến hương vị tinh tế và trải nghiệm thú vị cho người thưởng thức.",
        price: 160000,
        type: 'dark'
    },
    {
        id: "sp8-socolaDark",
        name: "Socola Đắng Figo",
        image: "../img/product/dark-chocolates/sp8.png",
        description: "Socola thủ công Figo, với độ đắng vừa phải và hương vị thanh khiết, mang đến sự hài hòa trong mỗi miếng socola, dễ dàng chiều lòng những người yêu thích sự nhẹ nhàng và thanh tao.",
        price: 147000,
        type: 'dark'
    },
    {
        id: "sp9-socolaDark",
        name: "Socola Đen Nhân Hạnh Nhân",
        image: "../img/product/dark-chocolates/sp9.jpg",
        description: "Socola đen kết hợp với nhân hạnh nhân giòn rụm, tạo nên sự kết hợp hoàn hảo giữa vị đắng của socola và độ giòn bùi của nhân, mang đến một trải nghiệm thú vị cho người thưởng thức.",
        price: 130000,
        type: 'dark'
    },
    {
        id: "sp10-socolaDark",
        name: "Socola Sữa & Giáng Sinh",
        image: "../img/product/dark-chocolates/sp10.png",
        description: "Socola sữa với thiết kế bao bì theo phong cách Giáng Sinh, là món quà tuyệt vời trong mùa lễ hội, mang đến không khí ấm áp, vui tươi cho gia đình và bạn bè.",
        price: 100000,
        type: 'dark'
    },
    {
        id: "sp1-socolaWhite",
        name: "Socola Trắng Alluvia Hương Chanh",
        image: "../img/product/white-chocolates/sp1.jpg",
        description: "Socola trắng kết hợp với hương chanh tươi mát, mang đến sự kết hợp hoàn hảo giữa vị chua nhẹ và vị béo ngậy, là lựa chọn lý tưởng cho những ai yêu thích sự tươi mới và thanh khiết.",
        price: 130000,
        type: 'white'
    },
    {
        id: "sp2-socolaWhite",
        name: "Hạnh Nhân Bọc Socola Trắng Beryl's",
        image: "../img/product/white-chocolates/sp2.jpg",
        description: "Hạnh nhân giòn rụm được bao phủ lớp socola trắng mịn màng, tạo nên hương vị thơm ngon với sự kết hợp tuyệt vời giữa sự bùi của hạnh nhân và vị béo ngậy của socola trắng.",
        price: 150000,
        type: 'white'
    },
    {
        id: "sp3-socolaWhite",
        name: "Socola Trắng DARS",
        image: "../img/product/white-chocolates/sp3.jpg",
        description: "Thanh socola trắng DARS với độ mịn hoàn hảo, tan chảy ngay khi thưởng thức, mang đến cảm giác béo ngậy và mềm mại trong từng miếng socola.",
        price: 90000,
        type: 'white'
    },
    {
        id: "sp4-socolaWhite",
        name: "Socola Trắng Matcha",
        image: "../img/product/white-chocolates/sp4.jpg",
        description: "Sự kết hợp giữa socola trắng ngọt ngào và trà xanh matcha thanh mát, mang đến một trải nghiệm mới mẻ và thú vị cho những ai yêu thích sự hòa quyện giữa vị ngọt và đắng.",
        price: 120000,
        type: 'white'
    },
    {
        id: "sp5-socolaWhite",
        name: "Thanh Socola Trắng Nguyên Chất",
        image: "../img/product/white-chocolates/sp5.jpg",
        description: "Thanh socola trắng nguyên chất, giữ trọn vẹn hương vị ngọt ngào và béo ngậy, là lựa chọn lý tưởng cho những ai yêu thích sự tinh khiết và hương vị đặc trưng của socola trắng.",
        price: 140000,
        type: 'white'
    },
    {
        id: "sp6-socolaWhite",
        name: "Socola Trắng Nhân Hạnh Nhân",
        image: "../img/product/white-chocolates/sp6.jpg",
        description: "Thanh socola trắng với nhân hạnh nhân giòn rụm, tạo nên sự kết hợp hoàn hảo giữa sự béo ngậy của socola trắng và vị bùi bùi của hạnh nhân, mang đến hương vị tuyệt vời cho người thưởng thức.",
        price: 160000,
        type: 'white'
    },
    {
        id: "sp7-socolaWhite",
        name: "Hộp Socola Trắng Cao Cấp",
        image: "../img/product/white-chocolates/sp7.jpg",
        description: "Hộp socola trắng cao cấp với thiết kế sang trọng, là món quà tuyệt vời cho những dịp lễ đặc biệt, mang đến sự tinh tế và cảm giác thăng hoa trong mỗi miếng socola.",
        price: 185000,
        type: 'white'
    },
    {
        id: "sp1-giftBox",
        name: "Hộp Socola Trái Tim Đặc Biệt",
        image: "../img/product/gift-box/sp1.jpg",
        description: "Hộp socola hình trái tim với nhiều viên socola nhỏ mang hương vị đặc biệt, là món quà ngọt ngào và lãng mạn dành tặng người thân yêu.",
        price: 350000,
        type: 'box'
    },
    {
        id: "sp2-giftBox",
        name: "Hộp Socola Truffle Cao Cấp",
        image: "../img/product/gift-box/sp2.jpg",
        description: "Hộp quà socola truffle với nhiều hương vị thơm ngon, mang đến sự lựa chọn tuyệt vời cho những dịp lễ tết, giúp bạn thể hiện sự quan tâm đặc biệt đối với người nhận.",
        price: 400000,
        type: 'box'
    },
    {
        id: "sp3-giftBox",
        name: "Bó Hoa Socola Ferrero Rocher",
        image: "../img/product/gift-box/sp3.jpg",
        description: "Sự kết hợp độc đáo giữa hoa hồng và socola Ferrero Rocher, tạo nên một món quà tinh tế và lãng mạn, thích hợp cho những dịp lễ tình nhân, kỷ niệm đặc biệt.",
        price: 550000,
        type: 'box'
    },
    {
        id: "sp4-giftBox",
        name: "Hộp Socola Handmade Cao Cấp",
        image: "../img/product/gift-box/sp4.jpg",
        description: "Hộp socola handmade với thiết kế đẹp mắt và hương vị tinh tế, là món quà tặng đặc biệt cho những người yêu thích sự độc đáo và sự chăm sóc tinh tế.",
        price: 320000,
        type: 'box'
    },
    {
        id: "sp5-giftBox",
        name: "Hộp Socola Đỏ Sang Trọng",
        image: "../img/product/gift-box/sp5.jpg",
        description: "Hộp quà socola đỏ với nhiều thanh socola cao cấp, thể hiện sự tinh tế và sang trọng, là món quà lý tưởng cho những dịp đặc biệt như lễ cưới, sinh nhật.",
        price: 450000,
        type: 'box'
    },
    {
        id: "sp6-giftBox",
        name: "Hộp Socola Tím Lãng Mạn",
        image: "../img/product/gift-box/sp6.jpg",
        description: "Hộp quà socola tím với thiết kế lãng mạn, chứa những viên socola thơm ngon, là lựa chọn tuyệt vời cho các cặp đôi trong dịp Valentine hoặc kỷ niệm tình yêu.",
        price: 429000,
        type: 'box'
    },
    {
        id: "sp7-giftBox",
        name: "Hộp Quà Socola Nhiều Hương Vị",
        image: "../img/product/gift-box/sp7.jpg",
        description: "Hộp quà chứa nhiều thanh socola với các hương vị khác nhau, là lựa chọn lý tưởng cho những ai yêu thích sự đa dạng và mới mẻ trong mỗi món quà.",
        price: 480000,
        type: 'box'
    },
    {
        id: "sp1-otherPro",
        name: "KitKat Matcha Nhật Bản",
        image: "../img/product/other-pro/sp1.jpg",
        description: "Thanh KitKat với hương matcha đặc trưng của Nhật Bản, kết hợp giữa trà xanh và socola, mang đến hương vị thơm ngon, béo ngậy và thanh mát.",
        price: 50000,
        type: 'other'
    },
    {
        id: "sp2-otherPro",
        name: "Socola Kem Hộp Lớn",
        image: "../img/product/other-pro/sp2.jpg",
        description: "Hộp kem socola cao cấp, thơm ngon và mát lạnh, thích hợp cho các bữa tiệc hoặc thưởng thức vào mùa hè.",
        price: 140000,
        type: 'other'
    },
    {
        id: "sp3-otherPro",
        name: "Bánh Oreo Nhân Socola",
        image: "../img/product/other-pro/sp3.jpg",
        description: "Bánh Oreo giòn rụm với nhân socola ngọt ngào, là món ăn vặt tuyệt vời cho các buổi họp mặt bạn bè hoặc những lúc thư giãn.",
        price: 25000,
        type: 'other'
    },
    {
        id: "sp4-otherPro",
        name: "Bộ Socola Kem & Bánh",
        image: "../img/product/other-pro/sp4.jpg",
        description: "Bộ sản phẩm bao gồm kem socola và bánh socola thơm ngon, là món quà ngọt ngào và mới lạ dành cho các dịp đặc biệt.",
        price: 48000,
        type: 'other'
    },
    {
        id: "sp5-otherPro",
        name: "Socola Choco-Pie Hàn Quốc",
        image: "../img/product/other-pro/sp5.jpg",
        description: "Bánh Choco-Pie Hàn Quốc với lớp socola phủ ngoài, mềm mại bên trong, là món ăn nhẹ tuyệt vời cho những bữa xế, tạo cảm giác thỏa mãn ngay lập tức.",
        price: 75000,
        type: 'other'
    },
    {
        id: "sp6-otherPro",
        name: "Thanh Socola Snickers",
        image: "../img/product/other-pro/sp6.jpg",
        description: "Thanh socola Snickers với nhân đậu phộng và caramel, là món ăn nhẹ đầy năng lượng, giúp bạn duy trì năng lượng suốt cả ngày dài.",
        price: 49000,
        type: 'other'
    },
    {
        id: "sp7-otherPro",
        name: "Bánh Socola Ngũ Cốc",
        image: "../img/product/other-pro/sp7.jpg",
        description: "Bánh ngũ cốc phủ socola, giàu dinh dưỡng, thích hợp cho bữa sáng hoặc các bữa ăn nhẹ, giúp bạn bắt đầu ngày mới đầy năng lượng.",
        price: 65000,
        type: 'other'
    },
    {
        id: "sp8-otherPro",
        name: "Oreo Phủ Socola",
        image: "../img/product/other-pro/sp8.jpg",
        description: "Bánh Oreo phủ lớp socola thơm ngon, kết hợp hoàn hảo giữa vị ngọt ngào của socola và độ giòn của bánh, là món ăn vặt lý tưởng cho mọi lứa tuổi.",
        price: 35000,
        type: 'other'
    },
];


localStorage.setItem('products', JSON.stringify(products));


function formatNumber(n) {
    return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

// dinh dang san pham o dang luoi grid va dang cot list
function toggleView(viewType) {
    const productContainer = document.getElementById("productContainer");
    const gridBtn = document.getElementById("gridView");
    const listBtn = document.getElementById("listView");

    productContainer.classList.remove("grid-view", "list-view");

    if (viewType === "grid") {
        productContainer.classList.add("grid-view");
        gridBtn.classList.add("active");
        listBtn.classList.remove("active");
    } else {
        productContainer.classList.add("list-view");
        listBtn.classList.add("active");
        gridBtn.classList.remove("active");
    }
}

//  hien thi danh sach cac san pham theo loai
function showProductByType(type){
    const productContainer = document.getElementById("productContainer");
    productContainer.innerHTML = ""; // Xóa sản phẩm cũ trước khi hiển thị mới

    // Lọc sản phẩm theo loại hoặc hiển thị tất cả
    const filteredProducts = type === "all" ? products : products.filter(p => p.type === type);

    filteredProducts.forEach((product, index) => {
        const productHTML = `
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
        `;
        productContainer.innerHTML += productHTML;
    });
}


function saveCustomerOfProducts(productId) {
    const selectedProduct = products.find(p => p.id === productId);

    if (!selectedProduct) return;

    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let existingProduct = cart.find(item => item.id === selectedProduct.id);

    if (existingProduct) {
        existingProduct.quantity += 1;
    } else {
        cart.push({ ...selectedProduct, quantity: 1 });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Đã thêm vào giỏ hàng của bạn!");
    
}
