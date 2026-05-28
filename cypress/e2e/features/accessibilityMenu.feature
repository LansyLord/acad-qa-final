#language: pt

Funcionalidade: Menu de Acessibilidade Visual
    Eu, como usuário com baixa visão
    Quero ativar o alto contraste do site
    Para conseguir ler o conteúdo de forma confortável.

    Contexto: Estar na página inicial do site
        Dado que eu estou na página incial do site

    Cenário: Ativar e desativar Alto Contraste
        Quando eu clico no botão de "Alto Contraste"
        Então a página deve aplicar os estilos visuais de alto contraste