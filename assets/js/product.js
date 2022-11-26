class Product {
    constructor(name, category, img, price) {
        this.name = name;
        this.category = category;
        this.img = img
        this.price = price;
    }

    getName() {return this.name;};
    getCategory() {return this.category;};
    getImg() {return this.img;};
    getPrice() {return this.price;};

    setName(value) {this.name = value;};
    setCategory(value) {this.category = category;};
    setImg(value) {this.img = value;};
    setPrice(value) {this.price = value;};
}

// MENU TRÀ NÓNG
let traPhucBonTu_hot = new Product("Trà phúc bồn tử", "Trà nóng", "./assets/img/Product/Tea/phucbontu.webp", 40000);
let traVai_hot = new Product("Trà vải", "Trà nóng", "./assets/img/Product/Tea/travai.webp", 40000);
let traCamDao_hot = new Product("Trà cam đào", "Trà nóng", "./assets/img/Product/Tea/tracamdao.webp", 40000);
let traTao_hot = new Product("Trà táo", "Trà nóng", "./assets/img/Product/Tea/tratao.webp", 40000);
let traVietQuat_hot = new Product("Trà việt quất", "Trà nóng", "./assets/img/Product/Tea/travietquat.webp", 40000);
let traDauTay_hot = new Product("Trà dâu tây", "Trà nóng", "./assets/img/Product/Tea/tradautay.webp", 40000);
let traXoai_hot = new Product("Trà xoài", "Trà nóng", "./assets/img/Product/Tea/traxoai.webp", 40000);
let traChanh_hot = new Product("Trà chanh", "Trà nóng", "./assets/img/Product/Tea/trachanh.webp", 40000);

let hotTeaArr = [traPhucBonTu_hot, traVai_hot, traCamDao_hot, traTao_hot, traVietQuat_hot, traDauTay_hot, traXoai_hot, traChanh_hot];


// MENU TRÀ HOA QUẢ
let traPhucBonTu = new Product("Trà phúc bồn tử", "Trà hoa quả", "./assets/img/Product/Tea/phucbontu.webp", 40000);
let traVai = new Product("Trà vải", "Trà hoa quả", "./assets/img/Product/Tea/travai.webp", 40000);
let traCamDao = new Product("Trà cam đào", "Trà hoa quả", "./assets/img/Product/Tea/tracamdao.webp", 40000);
let traTao = new Product("Trà táo", "Trà hoa quả", "./assets/img/Product/Tea/tratao.webp", 40000);
let traVietQuat = new Product("Trà việt quất", "Trà hoa quả", "./assets/img/Product/Tea/travietquat.webp", 40000);
let traDauTay = new Product("Trà dâu tây", "Trà hoa quả", "./assets/img/Product/Tea/tradautay.webp", 40000);
let traXoai = new Product("Trà xoài", "Trà hoa quả", "./assets/img/Product/Tea/traxoai.webp", 40000);
let traChanh= new Product("Trà chanh", "Trà hoa quả", "./assets/img/Product/Tea/trachanh.webp", 40000);

let fruitTeaArr = [traVietQuat, traDauTay, traVai, traPhucBonTu, traChanh, traXoai, traCamDao, traTao];


// MENU SMOOTHIES
let smChuoiDua = new Product("Smoothies Chuối Dừa", "Smoothies", "./assets/img/Product/Smoothies/smchuoidua.webp", 55000);
let smDauVietQuat = new Product("Smoothies Việt Quất", "Smoothies", "./assets/img/Product/Smoothies/smdauvietquat.webp", 55000);
let smDau = new Product("Smoothies Dâu", "Smoothies", "./assets/img/Product/Smoothies/smdau.webp", 55000);
let smDauChuoi = new Product("Smoothies Dâu Chuối", "Smoothies", "./assets/img/Product/Smoothies/smdauchuoi.webp", 55000);

let smoothiesArr = [smChuoiDua, smDauVietQuat, smDau, smDauChuoi];


// MENU BÁNH NGỌT
let caPhePhomai = new Product("Bánh Cà Phê Phomai", "Bánh", "./assets/img/Product/Cake/banhcaphephomai.webp", 25000);
let tiramisu = new Product("Tiramisu", "Bánh", "./assets/img/Product/Cake/tiramisu.webp", 25000);
let caramelPhomai = new Product("Caramel Phomai", "Bánh", "./assets/img/Product/Cake/caramen.webp", 25000);
let bongLanCuon = new Product("Bông Lan Cuộn Trà Xanh", "Bánh", "./assets/img/Product/Cake/bonglancuon.webp", 25000);

let cakeArr = [caPhePhomai, tiramisu, caramelPhomai, bongLanCuon];