import e from "express";

export default class gerenciadorPessoas {
    constructor() {
        this.pessoas = [];
    }
    
    inserirCliente(pessoa) {
        if(!pessoa.nome) {    
            throw Error("Campo nome nulo")
        }
        if (!pessoa.sobrenome) {
            throw Error("Campo sobrenome nulo")
        }
        if (pessoa.cpf < 11) {
            throw Error("CPF inválido")
        }
        if (new Date(PessoaTeste.dtNasc).getFullYear() +18 > new Date().getFullYear()) {
         throw Error()   
        }
    }
}