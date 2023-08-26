//Common Variables
const apiBaseUrl = "https://jsonplaceholder.typicode.com";
const selectTbody = document.querySelector("#todos-listing");
const selectCreatePostFormElement = document.querySelector("#create-post-form");

//Get Posts From Api when js file is loaded
const getPostsData = async function () {
  fetch(`${apiBaseUrl}/posts`)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      // console.log(data, "posts data");
      if (Array.isArray(data)) {
        data.forEach(function (singlePostData) {
          const tableRowElement = document.createElement("tr"); //<tr></tr>
          tableRowElement.innerHTML = `<td id="post_id">${singlePostData.id}</td>
          <td>${singlePostData.userId}</td>
          <td>${singlePostData.title}</td>
          <td>
            <a class="btn btn-primary edit-btn"  data-post-id="${singlePostData.id}" data-toggle="modal" href="#edit-post">Edit</a>
          </td>
          <td><a href="#" class="btn btn-danger delete-btn" data-post-id="${singlePostData.id}" >Delete</a></td>`;

          // console.log(tableRowElement, "tableRowElement");
          selectTbody.appendChild(tableRowElement);
        });
      }
    })
    .catch(function (error) {
      console.error(error);
    });
};

//call this function;
getPostsData();

/*
Request Methods

GET	    /posts              (get all posts)
GET	    /posts/1            (get post by id)
GET	    /posts/1/comments   (get post comments by postId)
GET	    /comments?postId=1  (get post comments by postId)
POST	  /posts              (create post)
PUT	    /posts/1            (update specific post with all data like title,body)
PATCH	  /posts/1            (update specific post partially with some data like only title or body)
DELETE  /posts/1            (delete post by id)



Rest Api Pattern
*/

selectCreatePostFormElement.addEventListener("submit", function (event) {
  event.preventDefault();
  // alert("form is submitted");
  const getPostTitleField = document.querySelector("#post_title");
  const getPostBodyField = document.querySelector("#post_body");
  const postCreateBtn = document.querySelector("#post-create-btn");

  //dono mein se koi ek bi na ho to error dekar return kardo
  if (!getPostTitleField.value || !getPostBodyField.value) {
    alert("Please Fill the Values");
    return;
  }

  const formBody = {
    title: getPostTitleField.value,
    body: getPostBodyField.value,
  };

  // console.log(formBody, "formBody");

  postCreateBtn.setAttribute("disabled", "disabled");

  fetch(`${apiBaseUrl}/posts`, {
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify(formBody),
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      //if you have created the post successfully!

      getPostTitleField.value = "";
      getPostBodyField.value = "";

      $("#create-todo").modal("hide");

      postCreateBtn.removeAttribute("disabled");

      getPostsData();
    })
    .catch(function (error) {
      console.log(error);
      postCreateBtn.removeAttribute("disabled");
    });
});

//event bubling event listener
selectTbody.addEventListener("click", function (event) {
  event.preventDefault();
  // console.log(event.target);
  const currentElement = event.target;
  // currentElement.classList.contain('')
  // console.log(currentElement.classList.contains("delete-btn"));
  //if you are clicking on delete button
  if (currentElement.classList.contains("delete-btn")) {
    // console.log(currentElement.dataset.postId, "currentElement");
    const deletePostId = currentElement.dataset.postId;
    if (confirm("Are you Sure")) {
      fetch(`${apiBaseUrl}/posts/${deletePostId}`, {
        method: "DELETE",
      })
        .then(function (response) {
          getPostsData();
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  }

  if (currentElement.classList.contains("edit-btn")) {
    const editPostId = currentElement.dataset.postId;

    fetch(`${apiBaseUrl}/posts/${editPostId}`)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        // console.log(data, "data");
        const editPostTitleInputField =
          document.querySelector("#edit_post_title");
        const editPostBodyInputField =
          document.querySelector("#edit_post_body");

        editPostTitleInputField.value = data.title;
        editPostBodyInputField.value = data.body;

        //select hidden input field
        const hiddenPostIdField = document.querySelector("#edit_post_id");
        // hiddenPostIdField.value = data.id;
        hiddenPostIdField.value = editPostId;
      })
      .catch(function (error) {
        console.log(error);
      });
  }
});

// /post/1
// request method put
// payload

const selectEditFormElement = document.querySelector("#edit-post-form");

selectEditFormElement.addEventListener("submit", function (event) {
  event.preventDefault();
  const editPostTitleInputField = document.querySelector("#edit_post_title");
  const editPostBodyInputField = document.querySelector("#edit_post_body");
  const hiddenPostIdField = document.querySelector("#edit_post_id");

  const formBody = {
    title: editPostTitleInputField.value,
    body: editPostBodyInputField.value,
  };

  fetch(`${apiBaseUrl}/posts/${hiddenPostIdField.value}`, {
    headers: {
      "Content-Type": "application/json",
    },
    method: "PUT",
    body: JSON.stringify(formBody),
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      $("#edit-post").modal("hide");
      getPostsData();
    })
    .catch(function (error) {
      console.error(error);
    });
});
