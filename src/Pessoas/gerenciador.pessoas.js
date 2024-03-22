import e from "express";
import RepositorioPessoas from "./repositorio.pessoas";


export default class gerenciadorPessoas {
    constructor() {
        this.repositorioPessoas = new RepositorioPessoas()
    }
    
    validaCliente(pessoa) {
        if(!pessoa.nome) {    
            throw Error("Campo nome nulo")
        }
        if (!pessoa.sobrenome) {
            throw Error("Campo sobrenome nulo")
        }
        if (pessoa.cpf < 11) {
            throw Error("CPF inválido")
        }
        if (new Date(pessoa.dtNasc).getFullYear() +18 > new Date().getFullYear()) {
         throw Error()   
        }
        const pessoas = this.repositorioPessoas.getAll()
        console.log(pessoas.indexOf(pessoa));
        if (pessoas.indexOf(pessoa) >= 0) {
            throw Error()   
        }
        this.repositorioPessoas.save(pessoa)
    }

    getTotal(){
        return this.repositorioPessoas.getTotal()
    }
}