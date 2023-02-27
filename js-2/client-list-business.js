//Importa <=<=
var data = require("./data-business.js");
var data2 = require("./client-business.js");
//Exporta =>=>
module.exports = { printClientsAccounts };

//En esta función crea una ("ul") para cada cliente, importados con la función getClients.
//Y posteriormente les crea como descendientes sus cuentas importadas con la función getClientElement.
function printClientsAccounts() {
  const clients = data.getClients();
  const ul = document.createElement("ul");

  for (let client of clients) {
    const element = data2.getClientElement(client);
    ul.appendChild(element);
  }

  document.getElementById("root").appendChild(ul);
}
