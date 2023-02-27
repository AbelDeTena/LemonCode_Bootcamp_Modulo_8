//Importa <=<=
var data = require("./data-business.js");
var data2 = require("./account-business.js");
//Exporta =>=>
module.exports = { getClientElement };


//Esta funcion importa las cuentas con la funcion getAccounts, y las empareja segun el campo client.id 
//Despues crea un (li) al usar la función getClientNode y le asigna como descendiente la importacion de getClientAccounsElement.  
function getClientElement(client) {
    const allAccounts = data.getAccounts();
    const clientAccounts = [];
    
    for (let account of allAccounts) {
        if (account.clientId === client.id) {
            clientAccounts.push(account);
        }
    }
  
    const node = getClientNode(client);
    const ul = data2.getClientAccountsElement(clientAccounts);
  
    node.appendChild(ul);
  
    return node;
  }
  

  //Esta función crea un elemento ("li") que tiene como contenido el nombre completo obtenido a traves de la función getFullName. 
  function getClientNode(client) {
    const li = document.createElement("li");
    li.append(getFullName(client));
  
    return li;
  }
  

  //Esta función devuelve el nombre completo. 
  function getFullName(client) {
    return client.first_name + " " + client.last_name;
  }