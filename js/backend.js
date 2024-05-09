const backendPage = new Vue({
  el: '#app',
  data() {
    return {
      currentPage: 0,
      userList: [],
      totalPages: 0,
      editForm: {
        id: '',
        userName: '',
        passWord: ''
      }
    };
  },
  mounted() {
    this.loadUserData(this.currentPage);
  },
  methods: {
    loadUserData(page) {
      axios
        .get('http://localhost:8080/IndexPage', {
          params: {
            page: page
          }
        })
        .then(response => {
          this.userList = response.data.userList;
          this.totalPages = response.data.totalPages;
          this.currentPage = page;
        })
        .catch(error => {
          console.error(error);
        });
    },
    deleteUser(id) {
      const url = `http://localhost:8080/users/${id}`;
      axios
        .delete(url)
        .then(response => {
          console.log('用户删除成功:', response);
          this.loadUserData(this.currentPage);
        })
        .catch(error => {
          console.error('用户删除失败:', error);
        });
    },
    editUser(user) {
      const userData = new URLSearchParams()
      userData.set('id',user.id)
      const url = `EditUser.html?${userData.toString()}`
      window.location.href = url
    },
    SearchUser(){
      const name = document.getElementById('search').value
      data ={
        userName:name
      }
      axios.post('http://localhost:8080/SearchQuery',data)
      .then(response =>{
        alert(response.data.userList)
        this.userList = response.data.userList;
        this.totalPages = response.data.totalPages;
        this.currentPage = 0;
      })
    }
  }
});
