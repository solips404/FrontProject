/*function login(){
    var username = $("#username").val();
    var password = $("#password").val();
    const data={
        username:username,
        password:password
    }
$.ajax({
    url: "http://localhost:8080/LoginPage",
    type: "GET",
    data:data,
    success: function(data) {
        alert(JSON.stringify(data));
    },
    error: function(jqXHR, textStatus, errorThrown) {
        console.error(textStatus, errorThrown);
    }
});
}*/
const Login = new Vue({
    el:'#box',
    data(){
        return{
            userName: '',
            passWord: ''
        };
    },
    methods:{
        login(){
            loginData = {
                userName:this.userName,
                passWord:this.passWord,
            }
            axios
            .post('http://localhost:8080/LoginPage',loginData)
            .then(response => {
                if(response.data === true){
                    alert(JSON.stringify(response.data));
                    window.location.href = "/backend/BackendPage.html";
                }else{
                    alert(JSON.stringify(response.data));
                }
            })
            .catch(error => {
                console.error(error);
            });
        }
    }
});