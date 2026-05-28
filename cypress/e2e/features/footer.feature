#language: pt

Funcionalidade: Validar links do rodapé do site
    Eu, como usuário de sistema
    Quero testar a navegação através dos links do rodapé
    Para garantir o acesso às informações institucionais.

    Contexto: Estar na página inicial do site
        Dado que eu estou na página incial do site

    Cenário: Footer - Validar link sobre o gov.br
        Quando eu clico no link do rodapé "Governo Digital"
        Então eu devo ser redirecionado para o link institucional de sobre

    Cenário: Footer - Validar link de Termo de Uso
        Quando eu clico no link do rodapé "Termos de Uso"
        Então eu devo ser redirecionado para o link institucional de termos