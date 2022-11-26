let modalEdit = document.getElementById('modal-edit');
let editIndex = 0;
let editCategory = 0;
function openEditModal() {
    modalEdit.style.display = "flex";
}

function closeEditModal() {
    modalEdit.style.display = "none";
}

function editProduct(i, category) {
    editIndex = i;
    editCategory = category;
    openEditModal();
    displayEditProduct(i, category);
}

function displayEditProduct(i, category) {
    let editName = "";
    let editImg = "";
    let editPrice = "";

    switch(category) {
        case "Trà nóng":
            editName = hotTeaArr[i].getName();
            editImg = hotTeaArr[i].getImg();
            editPrice = hotTeaArr[i].getPrice();
            break;

        case "Trà hoa quả":
            editName = fruitTeaArr[i].getName();
            editImg = fruitTeaArr[i].getImg();
            editPrice = fruitTeaArr[i].getPrice();
            break;

        case "Smoothies":
            editName = smoothiesArr[i].getName();
            editImg = smoothiesArr[i].getImg();
            editPrice = smoothiesArr[i].getPrice();
            break;

        case "Bánh":
            editName = cakeArr[i].getName();
            editImg = cakeArr[i].getImg();
            editPrice = cakeArr[i].getPrice();
    }
    document.getElementById('nameEdit').value = editName;
    document.getElementById('imgEdit').value = editImg;
    document.getElementById('priceEdit').value = editPrice;
}

function editModal() {
    let editName = document.getElementById('nameEdit').value;
    let editImg = document.getElementById('imgEdit').value;
    let editPrice = +document.getElementById('priceEdit').value;

    switch(editCategory) {
        case "Trà nóng":
            hotTeaArr[editIndex].setName(editName)
            hotTeaArr[editIndex].setImg(editImg)
            hotTeaArr[editIndex].setPrice(editPrice)
            break;

        case "Trà hoa quả":
            fruitTeaArr[editIndex].setName(editName)
            fruitTeaArr[editIndex].setImg(editImg)
            fruitTeaArr[editIndex].setPrice(editPrice)
            break;

        case "Smoothies":
            smoothiesArr[editIndex].setName(editName)
            smoothiesArr[editIndex].setImg(editImg)
            smoothiesArr[editIndex].setPrice(editPrice)
            break;

        case "Bánh":
            cakeArr[editIndex].setName(editName)
            cakeArr[editIndex].setImg(editImg)
            cakeArr[editIndex].setPrice(editPrice)
    }
    reDisplay(editCategory);
    closeEditModal();
}