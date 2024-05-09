 const EditPage = new Vue({
      el: '#edit',
      data() {
        return {
          editForm: {
            id: '',
            userName: '',
            passWord: ''
          }
        };
      },
      mounted() {
        const userId = new URLSearchParams(window.location.search).get('id');
        axios
        .get(`http://localhost:8080/search/${userId}`)
        .then(response =>{
          this.editForm.id = userId;
          this.editForm.userName = response.data.userName;
          this.editForm.passWord = response.data.passWord;
        })
        .catch(error =>{
          console.error('Failed to save user:',error)
        })
      },
      methods: {
        saveUser() {
          axios
            .put(`http://localhost:8080/users/${this.editForm.id}`, this.editForm)
            .then(response => {
              alert(JSON.stringify(response.data));
              window.location.href ='BackendPage.html';
              const savedUser = response.data;
              console.log('User saved:', savedUser);
            })
            .catch(error => {
              console.error('Failed to save user:', error);
            });
        },
        backPage(){
          window.location.href='BackendPage.html'
        }
      }
});