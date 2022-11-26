let addModal = document.getElementById('modal-add');

function openAddModal() {
    addModal.style.display = "flex";
}

function closeAddModal() {
    addModal.style.display = "none";
}

function addProduct() {
    let addCategory = document.getElementById('category').value;
    let addName = document.getElementById('add-name').value;
    let addImg = document.getElementById('add-img').value;
    let addPrice = +document.getElementById('add-price').value;

    if(addName === "" || addImg === "" || addPrice === "") {
        alert("Bạn chưa điền đầy đủ thông tin");
        return;
    } else {
        switch(addCategory) {
            case "Trà nóng":
                let newHotTea = new Product(addName, addCategory, addImg, addPrice);
                hotTeaArr.push(newHotTea);
                break;
            
            case "Trà hoa quả":
                let newFruitTea = new Product(addName, addCategory, addImg, addPrice);
                fruitTeaArr.push(newFruitTea);
                break;

            case "Smoothies":
                let newSmoothies = new Product(addName, addCategory, addImg, addPrice);
                smoothiesArr.push(newSmoothies);
                break;

            case "Bánh":
                let newCake = new Product(addName, addCategory, addImg, addPrice);
                cakeArr.push(newCake);
                break;
        }
    }
    reDisplay(addCategory);
    closeAddModal();
}