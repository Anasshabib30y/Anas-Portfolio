
let id = (id) => document.getElementById(id);
let clas = (clas) => document.getElementsByClassName(clas);

let username = id("username"),
    email = id("email"),
    password = id("password"),
    form = id("form"),
    failure_icon = clas("failure-icon"),
    success_icon = clas("success-icon"),
    errorMsg = clas("error");
    form.addEventListener("submit", (e) => {
    e.preventDefault();

    // validation
    enige(username, 0, "username is empty");
    enige(email, 1, "email is empty");
    enige(password, 2, "password is empty");

    // لو كل القيم صح نحول
    if (
        username.value.trim() !== "" &&
        email.value.trim() !== "" &&
        password.value.trim() !== ""
    ) {
        window.location.href = "../home_page/index.html";
        const user_data ={
            username: username.value,
            email: email.value,
            password: password.value
        }
        localStorage.setItem("user_data", JSON.stringify(user_data));
    }
});
function enige(id, index, message) {
    if (id.value.trim() === "") {
        errorMsg[index].innerHTML = message;
        failure_icon[index].style.opacity = "1";
        success_icon[index].style.opacity = "0";
    } else {
        errorMsg[index].innerHTML = "";
        failure_icon[index].style.opacity = "0";
        success_icon[index].style.opacity = "1";

    }
}

