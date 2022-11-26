const userName = "NAM TEA";
const userPassword = "123456";
let inputUserName = document.getElementById("name");
let inputUserPassword = document.getElementById("password");
let modal = document.getElementById("modal");

function openLoginModal() {
  modal.style.display = "flex";
}

function closeLoginModal() {
  modal.style.display = "none";
}

// Login Admin
function acceptLogin() {
  if (
    inputUserName.value == userName &&
    inputUserPassword.value == userPassword
  ) {
    let result = "";
    result += `<i class="fa-solid fa-user"></i>
                   <input id="userName" class="header__notify-right-items-input" value="Tài khoản" readonly></input>`;
    document.getElementById("account").innerHTML = result;
    document.getElementById("userName").value = userName;
    displayHotTea();
  } else {
    alert("Sai tên đăng nhập hoặc mật khẩu!");
  }
}

function clickLogin() {
  acceptLogin();
  closeLoginModal();
}
