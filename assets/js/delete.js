function reDisplay(classify) {
    switch(classify) {
        case "Trà nóng":
            displayHotTea();
            break;
        case "Trà hoa quả":
            displayFruitTea();
            break;
        case "Smoothies":
            displaySmoothies();
            break;
        case "Bánh":
            displayCake();
            break
    }
}

// Xoá sản phẩm
function deleteProduct(index, classify) {
    switch(classify) {
        case "Trà nóng":
            if(confirm(`Bạn muốn xoá ${hotTeaArr[index].getName()}?`)) {
                hotTeaArr.splice(index, 1);
            }
            break;
        case "Trà hoa quả":
            if(confirm(`Bạn có muốn xoá ${fruitTeaArr[index].getName()}?`)) {
                fruitTeaArr.splice(index, 1);   
            }
            break;
        case "Smoothies":
            if(confirm(`Bạn có muốn xoá ${smoothiesArr[index].getName()}?`)) {
                smoothiesArr.splice(index, 1);   
            }
            break;
        case "Bánh":
            if(confirm(`Bạn có muốn xoá ${cakeArr[index].getName()}?`)) {
                cakeArr.splice(index, 1);
            }
            break;
    }
    reDisplay(classify);
}

