//Importa <=<=
import { getClients } from "./data-business.js";
import { getClientElement } from "./client-business.js";
//Exporta =>=>
export {printClientsAccounts};

//En esta función crea una ("ul") para cada cliente, importados con la función getClients. 
//Y posteriormente les crea como descendientes sus cuentas importadas con la función getClientElement.
function printClientsAccounts() {
    const clients = getClients();
    const ul = document.createElement("ul");
    
    for (let client of clients) {
        const element = getClientElement(client);
        ul.appendChild(element);
    }
  
    document.getElementById("root").appendChild(ul);
  }