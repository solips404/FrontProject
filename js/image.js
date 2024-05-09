  const image = new Vue({
    el: '#image-management',
    data() {
      return {
        selectedImage: null,
        imageNames: [], // 存放檔案名稱的陣列
        imageName: '',
        uploadedImageUrl: '',
      };
    },
    methods: {
      handleFileUpload(event) {
        this.selectedImage = event.target.files[0];
        this.imageName = event.target.files[0].name;
        this.uploadedImageUrl = URL.createObjectURL(this.selectedImage);
      },
      uploadImage() {
        // 使用Axios來執行POST請求
        const formData = new FormData();
        formData.append('image', this.selectedImage);
        formData.append('imageName', this.imageName);
  
        axios
          .post('http://localhost:8080/upload', formData)
          .then(response => {
            // 上傳成功後將檔案名稱添加到imageNames陣列中
            this.imageNames.push(response.data.fileName);
            console.log('Image uploaded:', response.data);
          })
          .catch(error => {
            console.error('Failed to upload image:', error);
          });
      },
      getImageUrl(imageName) {
        return `http://localhost:8080/download?imageName=${imageName}`;
      },
    },
  });
  