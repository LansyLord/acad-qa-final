#language: pt

Funcionalidade: Navegar pelas seções do site através da navbar
    Eu, como usuário de sistema
    Quero testar diferentes páginas do site através da navbar.
    Para garantir que a navbar está funcionando corretamente.

    Contexto: Estar na página inicial do site
        Dado que eu estou na página incial do site
    
    Cenário: NavBar - Botão Órgãos do Governo
        Quando eu clico no botão da navbar "Órgãos do Governo"
        Então eu devo ser redirecionado para a página de "Órgãos do Governo"

    Cenário: NavBar - Botão Acesso à Informação
        Quando eu clico no botão da navbar "Acesso à Informação"
        Então eu devo ser redirecionado para a página de "Acesso à Informação"

    Cenário: NavBar - Botão Acessibilidade
        Quando eu clico no botão da navbar "Acessibilidade"
        Então eu devo ser redirecionado para a página de "Acessibilidade"