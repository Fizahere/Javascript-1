const buttonTwo = document.querySelector("#button2");
const outputCustomer = document.querySelector("#customers");

buttonTwo.addEventListener("click", function (event) {
  event.preventDefault();
  fetch('customers.json')
    .then(function (customersData) {
      return customersData.json();
    })
    .then(function (data) {
      // console.log(data,'data');
      if (data.length > 0) {
        data.forEach(function (value) {
          const tableRow = document.createElement("tr");
          tableRow.innerHTML = ` <td>${value.id}</td>
                                 <td>${value.name}</td>
                                 <td>${value.company}</td>
                                 <td>${value.phone}</td>
                                 <td>${value.email}</td>`
          // console.log(value,'value');
          outputCustomer.append(tableRow);

        })
      }
    })
    .catch(function (error) {
      console.log(error);
    })
})
