const http = new EasyHttp();

//Get Request
http
  .get("https://jsonplaceholder.typicode.com/posts")
  .then((data) => console.log(data, "data"))
  .catch((error) => console.error(error, "error"));

//POST REQUEST
http
  .post("https://jsonplaceholder.typicode.com/posts", {
    title: "Custom Post 2 ASDAS",
    body: "This is a custom post 2 ASDASD",
  })
  .then((data) => console.log(data))
  .catch((error) => console.log(error));

//PUT REQUEST
const dataTwo = {
  title: "Custom Post 2 ASDAS",
  body: "This is a custom post 2 ASDASD",
};
http
  .put("https://jsonplaceholder.typicode.com/posts/1", dataTwo)
  .then((data) => console.log(data))
  .catch((error) => console.log(error));

//DELETE REQUEST
http
  .delete("https://jsonplaceholder.typicode.com/posts/1")
  .then((data) => console.log(data))
  .catch((error) => console.log(error));
