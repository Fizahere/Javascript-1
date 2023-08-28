// const createPost = document.getElementById("createPost");
// createPost.addEventListener('click',function(){
//   fetch('https://jsonplaceholder.typicode.com/todos/1')
//   .then(function(data){
//     return data.json();
//   })
//   .then(function(jsonData){
//     console.log(jsonData,'jsonData');
//   })
// })
const apiUrl = "https://jsonplaceholder.typicode.com";
const selectTbody = document.querySelector("#todos-listing");
const createPostForm = document.querySelector("#create-post-form");
const getPostData = async function () {
  fetch(`${apiUrl}/posts`)
    .then(function (getData) {
      return getData.json();
    })
    .then(function (data) {
      if (Array.isArray(data)) {
        // console.log(data,'data');
        data.forEach(function(singleValue){
          const tableRow = document.createElement("tr");
          tableRow.innerHTML = ` <td>${singleValue.id}</td>
                                 <td>${singleValue.userId}</td>
                                 <td>${singleValue.title}</td>
                                 <td><a class="btn btn-primary edit-btn"  data-post-id="${singleValue.id}" data-toggle="modal" href="#edit-post">Edit</a></td>
                                 <td><a href="#" class="btn btn-danger delete-btn" data-post-id="${singleValue.id}" >Delete</a><</td> `
                                 selectTbody.append(tableRow);
        })
      }
      // console.log(data,'data');
    })
    .catch(function (error) {
      console.log(error, 'error');
    })
}
getPostData();