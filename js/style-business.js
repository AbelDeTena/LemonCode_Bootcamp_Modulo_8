//Funciones Exportadas =>=>
export { getNodeStyle };

//Con esta función se le aplica color a la cuenta en funcion de si el saldo es menor que 0.
function getNodeStyle(account) {
  if (account.money < 0) {
    return "color: red";
  }
  return "color: blue";
}
