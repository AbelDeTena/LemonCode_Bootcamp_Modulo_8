//Importa <=<=
import { getAccounts } from "./data-business.js";
import { getClientAccountsElement } from "./account-business.js";
//Exporta =>=>
export {getClientElement};


//Esta funcion importa las cuentas con la funcion getAccounts, y las empareja segun el campo client.id 
//Despues crea un (li) al usar la función getClientNode y le asigna como descendiente la importacion de getClientAccounsElement.  
function getClientElement(client) {
    const allAccounts = getAccounts();
    const clientAccounts = [];
    
    for (let account of allAccounts) {
        if (account.clientId === client.id) {
            clientAccounts.push(account);
        }
    }
  
    const node = getClientNode(client);
    const ul = getClientAccountsElement(clientAccounts);
  
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