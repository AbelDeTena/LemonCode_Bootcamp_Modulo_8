//Funciones importadas <=<=
import { getNodeStyle } from "./style-business.js";
//Funciones exportadas =>=>
export {getClientAccountsElement};


//Esta función crea una ("ul") que tiene como contenido los ("li") de la función getAccountElement. 
function getClientAccountsElement(accounts) {
    const ul = document.createElement("ul");
    
    for (let account of accounts) {
        ul.append(getAccountElement(account));
    }
  
    return ul;
  }
  

  //Esta función  crea un ("li") donde recoge el saldo y el número de cuenta y les aplica un estilo importando la funcion getNodeStyle. 
  function getAccountElement(account) {
    const li = document.createElement("li");
  
    li.style = getNodeStyle(account);
  
    li.append("[Saldo: " + account.money + "] IBAN: " + account.iban);
    
    return li;
  }
  