const button = document.querySelector("#button");
const outputDiv = document.querySelector("#output");

button.addEventListener("click",function(event){
    event.preventDefault();
    fetch('data.txt')
    .then(function(resolvedData){
        return resolvedData.text();
    })
    .then(function(data){
        outputDiv.innerHTML = data;
    })
    .catch(function(error){
        console.log(error);
    })
})