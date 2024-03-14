import GerenciadorPessoas from "./gerenciador.pessoas";

describe('Inserção de Pessoas', () => {

    test('Nao aceitar Cliente com nome null', () => {
        const PessoaTeste = {
            nome: null,
            sobrenome: "Silva",
            cpf: "12345678900",
            dtNasc: "2001-08-23"
        }
        const gerenciadorPessoas = new GerenciadorPessoas()
        expect(() => {
            gerenciadorPessoas.inserirCliente(PessoaTeste)
        }).toThrow(Error)
    })

    test('Nao aceitar cliente com sobrenome null', () => {
        const PessoaTeste = {
            nome: "Gustavo",
            sobrenome: null,
            cpf: "12345678900",
            dtNasc: "2001-08-23"
        }
        const gerenciadorPessoas = new GerenciadorPessoas()
        expect (() => {
            gerenciadorPessoas.inserirCliente(PessoaTeste)
        }).toThrow(Error)
    })

    test('Cpf deve conter 11 caracteres', () => {
        const PessoaTeste = {
            nome: "Gustavo",
            sobrenome: "Silva",
            cpf: "1",
            dtNasc: "2001-08-23"
        }
        const gerenciadorPessoas = new GerenciadorPessoas()
        expect (() => {
            gerenciadorPessoas.inserirCliente(PessoaTeste)
        }).toThrow(Error)
    })
    test('Não aceitar menores de idade', () => {
        const PessoaTeste = {
            nome:"Nycole",
            sobrenome: "Sofia",
            cpf: "12345678900",
            dtNasc: "2008-08-23"
        }
        const gerenciadorPessoas = new GerenciadorPessoas()
        expect (() => {
            gerenciadorPessoas.inserirCliente(PessoaTeste)
        }).toThrow(Error)
    })

})