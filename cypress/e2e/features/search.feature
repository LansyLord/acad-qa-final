#language: pt

Funcionalidade: Buscar seções do site
    Eu, como usuário de sistema
    Quero testar diferentes cenários de busca.
    Para garantir que o sistema exiba as seções corretamente.

    Contexto: Estar na página inicial do site
        Dado que eu estou na página incial do site
    
    Esquema do Cenário: Buscar termos no site gov.br
        Quando eu insiro o texto "<termo_busca>" na barra de pesquisa
        E clico no botão de buscar
        Então eu devo ser redirecionado para a página com resultados de "<termo_busca>"

        Exemplos:
            | termo_busca      |
            | Imposto de Renda |
            | Assinatura       |
            | Passaporte       |
            | CPF              |