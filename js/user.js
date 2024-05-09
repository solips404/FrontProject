const user = new Vue({
    el:"#user",
    data(){
        return{
            userName:"",
            passWord:"",
            userList:[],
        }
    },
    mounted(){
    },
    methods:{
        userLogin(){
            userData = {
                userName:this.userName,
                passWord:this.passWord
            }
            axios
            .post('http://localhost:8080/UserLogin',userData)
            .then(response =>{
                this.userName = response.data.userName;
                this.passWord = response.data.passWord;
            })
            .catch(error=>{
                console.error(error);
            })
        }
    }
})