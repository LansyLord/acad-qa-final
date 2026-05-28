#language: pt

Funcionalidade: Serviços em Destaque
    Eu, como cidadão
    Quero clicar nos serviços mais procurados na home
    Para acessar diretamente o serviço que necessito.

    Contexto: Estar na página inicial do site
        Dado que eu estou na página incial do site

    Esquema do Cenário: Acessar serviço popular
        Quando eu clico no card de serviço chamado "<nome_servico>"
        Então o título principal da nova página deve conter "<termo_esperado>"

        Exemplos:
            | nome_servico             | termo_esperado  |
            | Trabalho                 | Trabalho        |
            | CPF                      | CPF             |