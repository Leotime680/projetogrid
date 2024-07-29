//criacao das variaves

var nome = "leonildo"
var dados = {
    sala: 20,
    classe: 2,
    curso: "informatica",
}
dados.idade = 10
console.log(dados)
//extrututa condicional
function controller() {

    if ((nome === undefined)) {

        document.write("ensira um nome valido")
    } else if (!(nome === "leonildo")) {

        document.write(" Nao e  " + nome)

    } else if (nome === "leonildo" ) {

        document.write(" Bem vindo  " + nome)
        document.write(" Estes sao os teus dados " + dados)
        console.log(" Estes sao os teus dados " + dados.nome + dados.classe)
        document.write(" Estes sao os teus dados " + dados.nome)


    }
}

controller()