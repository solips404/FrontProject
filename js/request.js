/*function sendServlet(){
    var username = $("#username").val();
    var password = $("#password").val();
    if(password === ""){
        alert("密碼不能含有空白字元");
    }else{
        if(!password.match(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)[A-Za-z\d]{8,16}$/)){
            if(!/[A-Za-z]/.test(password)){
                alert("密碼中必須要含有一個(或以上)的大小寫英文字母");
            }else if(!/\d/.test(password)){
                alert("密碼中必須要含有一個(或以上)的數字(0 到 9)");
            }else if(!/^[a-zA-Z0-9]+$/.test(password)){
                alert("密碼不能含有特殊字元");
            }else{
                alert("密碼中必須符合8-16碼及含有一個(或以上)數字及大小寫英文字母");
            }
        }else{
            const data={
                username:username,
                password:password
            }
            $.ajax({
                url: "http://localhost:8080/IndexPage",
                type: "GET",
                data:data,
                success: function(data) {
                    alert(JSON.stringify(data));
                },
                error: function(jqXHR, textStatus, errorThrown) {
                    console.error(textStatus, errorThrown);
                }
            });
        }
    }
}*/
const request = new Vue({
    el: '#box',
    data() {
      return {
        userName: '',
        passWord: ''
      };
    },
    methods: {
      sendServlet() {
        if (this.passWord === "") {
          alert("密碼不能含有空白字元");
          return;
        } else if (!this.passWord.match(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)[A-Za-z\d]{8,16}$/)) {
          if (!/[A-Za-z]/.test(this.passWord)) {
            alert("密碼中必須要含有一個(或以上)的大小寫英文字母");
          } else if (!/\d/.test(this.passWord)) {
            alert("密碼中必須要含有一個(或以上)的數字(0 到 9)");
          } else if (!/^[a-zA-Z0-9]+$/.test(this.passWord)) {
            alert("密碼不能含有特殊字元");
          } else {
            alert("密碼中必須符合8-16碼及含有一個(或以上)數字及大小寫英文字母");
          }
          return;
        } else {
          requestData = {
            userName: this.userName,
            passWord: this.passWord,
          }
          axios
            .post('http://localhost:8080/SubmitPage',requestData)
            .then(response => {
              alert(JSON.stringify(response.data));
            })
            .catch(error => {
              console.error(error);
            });
        }
      }
    }
});  