import GerenciadorPessoas from "./gerenciador.pessoas";

jest.mock("./repositorio.pessoas");

describe(' Validação de Pessoas', () => {
    
    beforeAll(() => {});

    let gerenciadorPessoas;

    beforeEach(()=>{
        gerenciadorPessoas = new GerenciadorPessoas()
        gerenciadorPessoas.repositorioPessoas.getAll.mockReturnValue([])
    })

    test('Nao aceitar Cliente com nome null', () => {
        const PessoaTeste = {
            nome: null,
            sobrenome: "Silva",
            cpf: "12345678900",
            dtNasc: "2001-08-23"
        }
        expect(() => {
            gerenciadorPessoas.validaCliente(PessoaTeste)
        }).toThrow(Error)
    })

    test('Nao aceitar cliente com sobrenome null', () => {
        const PessoaTeste = {
            nome: "Gustavo",
            sobrenome: null,
            cpf: "12345678900",
            dtNasc: "2001-08-23"
        }
        expect (() => {
            gerenciadorPessoas.validaCliente(PessoaTeste)
        }).toThrow(Error)
    })

    test('Cpf deve conter 11 caracteres', () => {
        const PessoaTeste = {
            nome: "Gustavo",
            sobrenome: "Silva",
            cpf: "1",
            dtNasc: "2001-08-23"
        }
        expect (() => {
            gerenciadorPessoas.validaCliente(PessoaTeste)
        }).toThrow(Error)
    })
    test('Não aceitar menores de idade', () => {
        const PessoaTeste = {
            nome:"Nycole",
            sobrenome: "Sofia",
            cpf: "12345678900",
            dtNasc: "2008-08-23"
        }
        expect (() => {
            gerenciadorPessoas.validaCliente(PessoaTeste)
        }).toThrow(Error)
    })

    test('Deve permitir inserção de pessoas', () => {
        const PessoaTeste = {
            nome:"Nycole",
            sobrenome: "Sofia",
            cpf: "12345678900",
            dtNasc: "2002-08-23"
        }
        gerenciadorPessoas.repositorioPessoas.getTotal.mockReturnValue(1)
        gerenciadorPessoas.validaCliente(PessoaTeste)
        expect(gerenciadorPessoas.getTotal()).toBe(1);
    })

    test('Não permitir cliente com mesmo cpf', () =>{
        const PessoaTeste = {
            nome:"Nycole",
            sobrenome: "Sofia",
            cpf: "12345678900",
            dtNasc: "2002-08-23"
        }
        gerenciadorPessoas.repositorioPessoas.getAll.mockReturnValue([PessoaTeste])
        expect(gerenciadorPessoas.validaCliente(PessoaTeste)).toThrow(Error)
    })
    
    afterEach (()=> {
        jest.clearAllMocks();
    })

    afterAll(() => {});

})