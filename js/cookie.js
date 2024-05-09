function saveCookie(){
    var username = document.getElementById("userName").value;
    var password = document.getElementById("passWord").value;
    var check = document.getElementById("rememberCheck").checked;
    if (check) {
        localStorage.setItem('savedUsername', username);
        localStorage.setItem('savedPassword', password);
    } else {
        localStorage.removeItem('savedUsername');
        localStorage.removeItem('savedPassword');
    }
}
document.addEventListener('DOMContentLoaded', function() {
    var savedUsername = localStorage.getItem('savedUsername');
    var savedPassword = localStorage.getItem('savedPassword');

    if (savedUsername && savedPassword) {
        document.getElementById('userName').value = savedUsername;
        document.getElementById('passWord').value = savedPassword;
        document.getElementById('rememberCheck').checked = true;
    }
});