const button = document.querySelector("#button");
const outputDiv = document.querySelector("#output");

button.addEventListener("click", function (event) {
  event.preventDefault();
  fetch("data111.txt")
    .then(function (resolveData) {
      // console.log(resolveData, "resolve data");
      return resolveData.text();
    })
    .then(function (data) {
      // console.log(data, "data");
      outputDiv.innerHTML = data;
    })
    .catch(function (rejectData) {
      console.log(rejectData, "reject data");
    });
});
