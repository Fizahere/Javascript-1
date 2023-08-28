const buttonTwo = document.querySelector("#button2");
const outputCustomer = document.querySelector("#customers");

buttonTwo.addEventListener("click",function(event){
  event.preventDefault();
  fetch('customers.json')
  .then(function(customersData){
    return customersData.json();
  })
  .then(function(data){
    // console.log(data,'data');
    if(data.length > 0){
      data.forEach(function(value){
        // console.log(value,'value');
        outputCustomer.append(`<tr>
        <td>${value.id}</td>
        <td></td>
        <td></td>
        <td></td>
        </tr>`)
        
      })
    }
  })
  .catch(function(error){
    console.log(error);
  })
})
