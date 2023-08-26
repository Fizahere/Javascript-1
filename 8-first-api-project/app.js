const buttonTwo = document.querySelector("#button2");
const outputCustomer = document.querySelector("#customers");

buttonTwo.addEventListener("click", function (event) {
  event.preventDefault();
  fetch("customers.json")
    .then(function (data) {
      return data.json();
    })
    .then(function (data) {
      //check if data is greater than 0
      if (data.length > 0) {
        data.forEach(function (singleData) {
          const TableRow = document.createElement("tr");
          //<tr></tr>

          TableRow.innerHTML = `<td>${singleData.id}</td>
              <td>${singleData.name}</td>
              <td>${singleData.company}</td>
              <td>${singleData.phone}</td>
              <td>${singleData.email}</td>
              `;

          outputCustomer.append(TableRow);

          //   outputCustomer.append(`<tr>
          // <td>${singleData.id}</td>
          //      <td>${singleData.name}</td>
          //      <td>${singleData.company}</td>
          //      <td>${singleData.phone}</td>
          // </tr>`);
        });
      }
    })
    .catch(function (error) {
      console.log(error, "error");
    });
});
