Documentação de Casos de Teste (BDD / Cypress)
Este documento descreve a especificação dos casos de teste automatizados para o portal gov.br.

Id: CTSL-01
    Título: Navegação bem-sucedida pelos botões da NavBar
    Objetivo: Garantir que o usuário seja redirecionado corretamente ao clicar nos links principais do menu de navegação superior.
    Pré-condições:
        - Estar na página inicial do site ([https://www.gov.br/pt-br](https://www.gov.br/pt-br)).
        - Fechar modais iniciais ou alertas de cookies que possam interceptar a tela.
    Passos:
        1- Identificar o botão da navbar pelo texto (Ex: "Órgãos do Governo", "Acesso à Informação", "Acessibilidade").
        2- Clicar no botão correspondente.
        3- Aguardar o carregamento da nova página.
    Resultado esperado: A URL final deve incluir o fragmento de rota equivalente ao botão clicado (Ex: /orgaos-do-governo).
    Resultado obtido: Redirecionamento executado com sucesso e rota validada via asserção do Cypress.



Id: CTSL-02
    Título: Busca funcional por múltiplos termos na Home (Esquema do Cenário)
    Objetivo: Validar se o mecanismo de pesquisa global retorna resultados condizentes com as palavras-chave enviadas pelo usuário.
    Pré-condições:
        - Estar na página inicial do site.
        - Ignorar inputs do tipo hidden para manipulação de dados correta.
    Passos:
        1- Localizar o campo de entrada de texto ativo no topo da página.
        2- Limpar o campo e inserir o termo de busca (Ex: "Imposto de Renda", "Passaporte", "CPF").
        3- Localizar e clicar no botão com propriedades de busca/submit do formulário.
        4- Aguardar o carregamento da página de resultados.
    Resultado esperado: A URL deve conter a rota /search e o corpo da página deve exibir em formato de texto o termo pesquisado.
    Resultado obtido: Texto inserido com sucesso via controle de iterações do jQuery e redirecionamento validado.



Id: CTSL-03
    Título: Redirecionamento de links institucionais no Rodapé (Footer)
    Objetivo: Verificar a integridade dos links institucionais de rodapé, garantindo que levem o usuário para as páginas de regulamento e transparência.
    Pré-condições:
        - Estar na página inicial do site.
        - Rolar a página até o container inferior (footer).
    Passos:
        1- Localizar o link correspondente no rodapé através de seu texto (Ex: "Governo Digital", "Termos de Uso").
        2- Clicar de forma forçada no link mapeado.
        3- Validar a nova URL gerada pelo navegador.
    Resultado esperado: O usuário deve cair na página de destino cuja URL combine via expressão regular com o escopo solicitado (Ex: /por-dentro-do-govbr ou /termos-de-uso).
    Resultado obtido: Clique efetuado com sucesso e rota validada sem travar em redirecionamentos.



Id: CTSL-04
    Título: Ativação do modo de Acessibilidade Visual (Alto Contraste)
    Objetivo: Garantir que o recurso de acessibilidade para usuários com baixa visão altere o estado da aplicação de forma persistente.
    Pré-condições:
        - Estar na página inicial do site.
    Passos:
        1- Disparar o comando de atalho de teclado padrão de acessibilidade eleitoral/governamental (Alt + 4) ou clicar no elemento que possua o    atributo accesskey="4".
        2- Aguardar a atualização assíncrona do tema gerenciado pelo framework front-end (Svelte).
        3- Inspecionar o armazenamento persistente do navegador.
    Resultado esperado: A aplicação deve gravar o estado ativo em cookies ou no localStorage sob chaves como contraste ou theme, validando a mudança.
    Resultado obtido: Comportamento disparado via emulação de atalho de teclado e estado verificado com sucesso no armazenamento local.



Id: CTSL-05
    Título: Direcionamento para Serviços Populares em Destaque
    Objetivo: Validar se os atalhos rápidos/cards de serviços mais procurados pelo cidadão na Home encaminham o usuário para a página correta do serviço.
    Pré-condições:
        - Estar na página inicial do site.
    Passos:
        1- Localizar no escopo da página o texto representativo do serviço (Ex: "Trabalho", "Inscrição no CPF").
        2- Clicar de forma forçada no elemento (mesmo que esteja aninhado ou oculto em submenus dinâmicos).
        3- Validar se a página aberta exibe o título esperado.
    Resultado esperado: O elemento principal de título (h1) da nova página carregada deve conter a palavra-chave do serviço correspondente.
    Resultado obtido: Redirecionamento realizado via bypass de visibilidade de submenu e título verificado.