//criacao das variaves
var valorData = 15

//extrututa condicional
function controller() {

    if (valorData <= 6) {
        document.write(" Postado Ha.... " + valorData + " Dias")
    } else if (valorData <= 7) {
        document.write("Postado Ha 1 semana")

    }else if (valorData <= 14) {
        document.write("Postado Ha 2 semana")
    }else if (valorData <= 31) {
        document.write("Postado Ha 1 mes")
    }
}
//EXECUTAR CODIGO
controller()