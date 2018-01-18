ANGULAR 2+

O Angular JS é composto por 8 partes que são:
- Componentes
- Diretivas
- Roteamento
- Serviços
- Templates
- Metadata
- Data Binding
- Injeção de dependencias

Componentes: É nada mais nada menos que a view da aplicação e são compostos por Template(HTML), metadata(processamento das classes), Data Binding (Dados a serem mostrados na tela) e Comportamento da View. Os componentes tem como objetivo principal de mostrar os dados.

Diretiva: É responsável por modificar elementos DOM e/ou seu comportamento. Os Componentes são diretivas, pois eles também modificam o DOM.

Roteamento é o responsável pela navegação.

O que são módulos?
É o arquivo que vai ajudar a organizar a aplicação, para fazer com que a aplicação seja modularizada.

O app.modules é o módulo raiz da aplicação o metadado "Bootstrap" só irá existir no módulo raiz. Já no módulo features os metadados são quase que semelhantes ao módulo raiz, mas não temos a opção de "Bootstrap".



- Binding de propriedades + interpolação
    O que é data binding: É a forma de associar informações que estão no componente para o template e vise-versa. Se tempo variáveis, atributos ou métodos que retornam valores, podemos mostrar as informações no template.

    No Angular existem 4 formas de fazer o data binding.

    - Interpolation: {{ valor }} - Aqui pegamos um valor de um atributo ou um método e conseguimos ter a saída do valor no template.
    - Bindind de propriedade: [propriedade]="valor" - Aqui pegamos o valor de um atributo e conseguimos ter a saída para um template.
    - (evento)="handler" - Aqui é semelhante ao Binding de propriedade, mas aqui nós escutamos um evento no template, como um evento de clique, e retornamos o valor para o componente executar alguma lógica de programação ou executar algum método.
    - Two-way data binding: [(ngModel)]="propriedade" - Com essa forma nós conseguimos deixar tanto o componente como o template atualizados ao mesmo tempo. Nós podemos usar o two-way data binding na manipulação de um formulários.

- Classes e Style Binding: É a forma de fazer o property bindind só que com CSS.

O Angular tem uma propriedade chamada ngModel que é uma representação de uma entidade, que pode ser uma string e até mesmo um objeto.


- Ciclo de vida do Componente.
    - ngOnChanges:           Antes #2 e quando valor property-binding é atualizados.
    - ngOninit:              Quanto o Component é inicializado.
    - ngDoCheck:             A cada ciclo de verificação de mudanças.
    - ngAfterContentInit:    Depois de inserir conteúdo externo na view.
    - ngAfterContentChecked: A cada verificação de contéudo inserido.
    - ngAfterViewChecked:    A cada verificação de conteúdo / conteúdo filho.
    - ngOnDestroy:           Antes da diretiva/component ser destruído.

- Tipos de arquivos do Angular

    +---------------------------+---------------------------------------+
    |        Tipo Arquivo       |                Comando                |
    +---------------------------+---------------------------------------+
    |       Component           | ng g component nome-do-component      |
    +---------------------------+---------------------------------------+
    |       Service             | ng g service nome-do-servico          |
    +---------------------------+---------------------------------------+
    |       Directive           | ng g directive nome-da-diretiva       |
    +---------------------------+---------------------------------------+
    |       Pipe                | ng g pipe nome-do-pipe                |
    +---------------------------+---------------------------------------+
    |       Class               | ng g class nome-da-classes            |
    +---------------------------+---------------------------------------+
    |       Interface           | ng g interface nome-da-interface      |
    +---------------------------+---------------------------------------+
    |       Enum                | ng g enum nome-do-enum                |
    +---------------------------+---------------------------------------+
    |       Application         | ng g applictaion nome-da-application  |
    +---------------------------+---------------------------------------+
    |       Guard               | ng g enum nome-do-enum                |
    +---------------------------+---------------------------------------+
    |       Module              | ng g enum nome-do-enum                |
    +---------------------------+---------------------------------------+


- Como definir qual pré processador usar no inicio do projeto.
    ng new nome-do-projeto --style=sass
    ng new nome-do-projeto --style=less
    ng new nome-do-projeto --style=stylus

- Caso o projeto já exista e você queira mudar o pré processador do projeto.
    ng set defaults.styleExt scss
    ng set defaults.styleExt less
    ng set defaults.styleExt styl

    OBS: Lembrando que os CSS's dos componentes que já existem a extensão dos arquivos não são alteradas.

-Dependencies
    @angular/core - Pacote principal do framework Angular que contém decorators e metadados, Component, Directive, injeção de dependências e os hooks de ciclo de vida do component.

    @angular/common - Serviços, pipes e diretivas comuns fornecidas pelo time de dev do Angular.

    @angular/compiler - Template de compilação do angular. Entende o código dos templates e converte em código que faz a app ser executada e renderizada. Desenvolvedores não interagem com esse pacote diretamente (apenas usamos seu código).

    @angular/forms - Contém todo o código para construção de formulário no angular 2.

    @angular/platform-browser - Contém todo o código relacionado ao DOM e ao browser, especialmente as partes que ajudam a renderizar o DOM. Esse pacote também contém o método para fazer o bootstrap da aplicação para builds de produção que pré-compila os templates.

    @angular/platform-browser-dynamic - Contém os Providers e o método para iniciar as aplicações que compilam templates no lado cliente. Não usa compilação offline. Usada para fazer bootstrap durante desenvolvimento e exemplos plunker.

    @angular/http - Fornece o cliente HTTP.

    @angular/router - Classes de roteamento.

- Polyfills: são bibliotecas auxiliares que vão auxiliar a aplicação
    es6-shim - Biblioteca que permite compatibilidade de engines JS antigas com a especificação do ES 2015, ou seja, emula as funcionalidades do ES 2015 em browsers que suportam somente ES5.

    reflect-metadata - Dependência compartilhada entre o Angular e o compilador TypeScript. Permite o uso de decorators no código (annotations). Isso permite ao desenvolvedores fazer upgrade no TypeScript sem precisar de fazer upgrade Angular. Esse é o motivo desta ser uma dependência da aplicação e não do angular.

    rxjs - Extensão para a especificação dos Observables (programação assíncrona). Reactive extesions for JavaScript.

    system.js - Módulo para carregamento dinâmico compátivel com a especificação de módulos do ES 2015. Como alternativa também podemos usar o Webpack. O SystemJS é o módulo utilizando oficialmente na documentação do Angular.

    zone.js - Extensão (plugins) útil para taregas assíncronas (chamadas de Zones).

    angular-cli - Ferramenta de linah de comando para gerenciar projetos angular.

    codelyzer - lint (análise de código) para angular.

    ember-cli-inject-live-reload - Ferramenta de live reload.

    jasmine-core - Arquivos principais jasmine para node.js.

    jasmine-spce-reporter - Relatório em tempo real para BDD com Jasmine.

    karma - Ferramente de testes que cria um web server e executa código de teste em cada um dos browsers conectados.

    karma-chrome-launcher - Launcher do karma para o chrome.

    karma-jasmine - Adaptador para o jasmine.

    protractor - Framework de teste end to end (integração) para angular.

    ts-node - Módulo typescript para node.js.

    tslint - lint (análise de código) para typescript.

    typescript - Compilador typescript.

    typings - Gerenciador de arquivos de definição para typescript.


- Como fazer o build
    Desenvolvimento:
        ng build --target=development --environment=dev
        ng build --dev --e=dev
        ng build --dev
        ng build

    Produção:
        ng build --target=production --environment=prod
        ng build --prod --env=prod
        ng build --prod


- Diretivas : São formas de passar instruções para o template, por exemplo *ngFor.
    Podemos dizer qe os Componentes também são diretivas, mas com templates.

    Diretivas Estruturais: Interagem com a view e modificam a estrutura do Dom e/ou código HTML.
        Exemplo: *ngFor e *ngIf.
    Diretivas de Atributos: Iteragem com o elemento em que foram aplicadas.
        Exemplo: ng-class e ng-style


- Serviços: São classes responsáveis por buscar dados do servidor e evniar dados para o servidor.
    Serviços não são apenas Classe para fazer CRUD, eles também são usados para não repetir código na aplicação.
    Toda lógica de negócio da aplicação fique nas Classes de serviços.
    Os Componentes têm que ser responsáveis apenas por pegar os dados e mostrar o dados na tela, ou seja, interação com usuário.
    Podemos usar Classes de serviços como classes utilitárias.

- Injeção de dependências: Classe 1 precisa da Classe 2 para funcionar.
    Exemplo: No Componente CursosComponent, foi necessário criar uma instância, ou seja, injetar a dependência da Classe CursosService na classe CursosComponent. Mas podemos fazer isso de uma forma muito mais elegante e de forma automatica.

    No conceito de injeção de dependências é possível fazer isso de 3 formas. Através dos construtores, utilizando os métodos setters ou de atributos.

    Para que o Angular entenda que exite uma dependência a ser injetada, basta fazer o uso do Decorator "@Injectable" e fazer o import dele.

    Depois no componente no qual se vai usar a dependência basta passar fazer a injeção de dependência através do construtor, passando como parâmetro. 
    
    Exemplo: 
        constructor(_cursoService: CursosService) {
            this.cursoService = _cursoService;
        }

    Como o service foi criado de forma manual temos que falar para aplicação que ela está forncendo um serviço, ou seja, temos que passar ela no providers do app.module.ts.

- Pipes: O pipe transforma um valor e podemos mostrar o valor transformado dentro de um template.

- O Pipe Assíncrono serve para conseguir fazer a saída de um valor no template, mesmo que o valor a ser atribuido para esse atributo demore um pouco. lembrando que esse Pipe é muito útil ao fazer uma requisição para um servidor.

- Rotas: São compostas de um objeto e esses objetos possuem alguns atributos.
    path: é o caminho.
    component: é o componente que gostariamos de usar.

*Boas prática
- Lógica de negócios são usando em serviços.
