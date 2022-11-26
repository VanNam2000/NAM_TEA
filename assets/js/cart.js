let cart = [];
function buyProduct(i, category) {
    switch(category) {
        case "Trà nóng":
            cart.push(hotTeaArr[i]);
            break;
        case "Trà hoa quả":
            cart.push(fruitTeaArr[i]);
            break;
        case "Smoothies": 
            cart.push(smoothiesArr[i]);
            break;
        case "Bánh":
            cart.push(cakeArr[i]);
            break;
    }
    displayCart(cart);
    amountProduct();
}

// Hiển thị số hàng trong giỏ
function amountProduct() {
    if(cart.length >= 1) {
        document.getElementById('cart-price').innerHTML = `<span>${cart.length}</span>`;
        document.getElementById('cart-price').style.display = "flex";
    } else {
        document.getElementById('cart-price').style.display = "none";
    }
}

// Xoá hàng trong giỏ hàng
function deleteProductCart(index) {
    cart.splice(index, 1);
    displayCart(cart)
    amountProduct(); 
}

// Hiển thị sản phẩm đã thêm vào giỏ hàng
function displayCart(cart) {
    let cartProduct = document.getElementById('has-product');
    let result = ""
    for(let i = 0; i < cart.length; i++) {
         result += `<li class="header__cart-item">
                            <img src="${cart[i].getImg()}" alt="" class="header__cart-item-img">
                            <div class="header__cart-item-info">
                                <div class="header__cart-item-head">
                                    <h5 class="header__cart-item-name">${cart[i].getName()}</h5>
                                    <div class="header__cart-item-wrap">
                                        <span class="header__cart-item-price">${cart[i].getPrice()}đ</span>
                                        <span class="header__cart-item-multiply"></span>   
                                        <span class="header__cart-item-quantity"></span>
                                    </div>
                                </div>
                                <div class="header__cart-item-body">
                                    <span class="header__cart-item-description">
                                        Phân loại hàng: 
                                        <span id="classifyProduct">${cart[i].getCategory()}</span>
                                    </span>
                                    <span class="header__cart-item-remove" onclick="deleteProductCart(${i})">Xoá</span>
                                </div>
                            </div>
                        </li>`
    }
    cartProduct.innerHTML = result;
    totalMoney(cart);
}

// Tính tổng tiền hàng trong giỏ
function totalMoney(cart) {
    let sum = 0;
    for(let i = 0; i < cart.length; i++) {
        sum += cart[i].getPrice();
    }
    document.getElementById('total').innerHTML = sum;
}