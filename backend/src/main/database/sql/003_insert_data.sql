INSERT INTO core.questions (id_levels, questions_description, questions_enabled) VALUES
-- ==========================================
-- HTML (Stack ID: 1)
-- ==========================================
-- Júnior
(1, 'Qual é a finalidade principal do elemento HTML <main>?', true),
(1, 'Para que serve o atributo ''alt'' em uma tag de imagem (<img>)?', true),
(1, 'Qual a diferença básica entre as tags <ul> e <ol>?', true),
(1, 'Como associar corretamente um <label> a um <input>?', true),
(1, 'Quando devemos utilizar a tag <button> em vez de um link <a>?', true),
(1, 'O que significa HTML semântico e cite dois exemplos de tags.', true),
(1, 'Para que serve o atributo ''required'' em campos de formulário?', true),
(1, 'Qual tag deve ser utilizada para representar o cabeçalho principal de uma página ou seção?', true),
(1, 'O que o elemento <fieldset> faz quando agrupado com <legend>?', true),
(1, 'Como definir um link para abrir em uma nova aba do navegador?', true),
-- Pleno
(2, 'Explique a diferença entre elementos de bloco (block) e de linha (inline) no fluxo padrão do DOM.', true),
(2, 'Como o atributo ''aria-live'' melhora a acessibilidade para leitores de tela em conteúdos dinâmicos?', true),
(2, 'Quais são as diretrizes de otimização de SEO on-page utilizando a hierarquia correta de headings (h1 a h6)?', true),
(2, 'Como funcionam os atributos ''defer'' e ''async'' ao carregar scripts externos no <head>?', true),
(2, 'Qual é a utilidade do elemento <picture> para imagens responsivas?', true),
(2, 'Explique o conceito de Web Components e qual o papel do Shadow DOM.', true),
(2, 'Como estruturar tabelas complexas acessíveis utilizando as tags <thead>, <tbody>, <tfoot>, scope e headers?', true),
(2, 'Qual é a diferença de comportamento entre os inputs type="button", type="submit" e type="reset"?', true),
(2, 'Como utilizar o elemento <template> para armazenar conteúdo HTML reutilizável no client-side?', true),
(2, 'Quais cuidados de segurança devem ser tomados ao utilizar o atributo target="_blank" no HTML?', true),
-- Sênior
(3, 'Em termos de performance web e Core Web Vitals, como o HTML afeta diretamente o LCP (Largest Contentful Paint)?', true),
(3, 'Como a especificação HTML5 gerencia o parsing de tags mal estruturadas (Error Handling) pelo navegador?', true),
(3, 'Discuta as implicações de arquitetura e segurança ao injetar HTML dinâmico via innerHTML frente a sanitizadores como DOMPurify.', true),
(3, 'Como implementar estratégias avançadas de Resource Hints (preconnect, preload, dns-prefetch) no documento?', true),
(3, 'Quais são os impactos arquiteturais de renderização SSR (Server-Side Rendering) versus Client-Side Rendering no ciclo de vida do HTML?', true),
(3, 'Como o atributo ''loading="lazy"'' nativo interage com o mecanismo de renderização e cache do navegador?', true),
(3, 'Explique o funcionamento do mecanismo de Content Security Policy (CSP) aplicado a políticas de execução de scripts embutidos.', true),
(3, 'Quais são as melhores práticas de acessibilidade WCAG 2.1 nível AAA aplicadas a formulários complexos em SPAs?', true),
(3, 'Como otimizar a árvore DOM para evitar gargalos de reflow e repaint durante a hidratação de páginas complexas?', true),
(3, 'Discuta o padrão de design shadow DOM encapsulation e seus impactos na manutenção de Design Systems escaláveis.', true),

-- ==========================================
-- JAVASCRIPT (Stack ID: 2)
-- ==========================================
-- Júnior
(1, 'Como declarar uma variável de escopo de bloco moderna em JavaScript?', true),
(1, 'Qual método de array é utilizado para transformar cada elemento e retornar um novo array?', true),
(1, 'Qual a diferença entre os operadores ''=='' e ''===''', true),
(1, 'Como converter uma string numérica em um número inteiro em JavaScript?', true),
(1, 'O que é uma função de callback?', true),
(1, 'Como verificar se um elemento existe dentro de um array?', true),
(1, 'Qual é o resultado da expressão typeof null em JavaScript?', true),
(1, 'Como adicionar um novo elemento ao final de um array?', true),
(1, 'O que significa a sigla DOM no contexto web?', true),
(1, 'Como capturar um erro utilizando try...catch?', true),
-- Pleno
(2, 'Explique o conceito de Closures em JavaScript com um exemplo prático.', true),
(2, 'Como funciona o mecanismo de Event Bubbling e Event Capturing?', true),
(2, 'Qual a diferença entre métodos estáticos e métodos de instância em classes ES6?', true),
(2, 'Como o método Promise.all() lida com falhas em requisições assíncronas concorrentes?', true),
(2, 'Explique o comportamento do contexto do ''this'' em funções tradicionais versus Arrow Functions.', true),
(2, 'O que são Iterators e Generators em JavaScript e para que serve o yield?', true),
(2, 'Como funcionam os Prototypes e a cadeia de protótipos (Prototype Chain)?', true),
(2, 'Qual é a utilidade dos Proxies e Reflect APIs em JavaScript?', true),
(2, 'Como implementar debounce e throttle em funções de alta frequência de disparo?', true),
(2, 'Explique a diferença entre shallow copy (cópia superficial) e deep copy (cópia profunda).', true),
-- Sênior
(3, 'Descreva detalhadamente o funcionamento do Event Loop, Call Stack, Task Queue e Microtask Queue.', true),
(3, 'Como o Garbage Collector (Mark-and-Sweep) gerencia a alocação e liberação de memória em V8?', true),
(3, 'Quais são os trade-offs de desempenho ao utilizar programação funcional imutável em grandes volumes de dados?', true),
(3, 'Como funcionam Web Workers e Shared Workers para processamento paralelo em JavaScript?', true),
(3, 'Explique os mecanismos de otimização JIT (Just-In-Time Compilation) do motor V8 (Ignition e TurboFan).', true),
(3, 'Como implementar um sistema robusto de gerenciamento de estado reativo customizado sem frameworks externos?', true),
(3, 'Quais são os riscos de segurança associados a prototipal pollution e como evitá-los?', true),
(3, 'Como funcionam WeakMap e WeakSet na prevenção de vazamentos de memória (memory leaks)?', true),
(3, 'Discuta sobre metaprogramação em JavaScript utilizando Symbols e Reflect.', true),
(3, 'Como projetar uma arquitetura de microrfrontends desacoplada utilizando Web Components e JavaScript puro?', true),

-- ==========================================
-- PYTHON (Stack ID: 5)
-- ==========================================
-- Júnior
(1, 'Qual a diferença fundamental entre uma list e uma tuple em Python?', true),
(1, 'Como definir uma função padrão utilizando a palavra-chave def?', true),
(1, 'O que é um dicionário (dict) em Python e como acessar seus valores?', true),
(1, 'Como realizar a leitura de um arquivo de texto em Python de forma segura?', true),
(1, 'Qual operador é utilizado para verificar pertinência (ex: se um item está em uma lista)?', true),
(1, 'Como converter um número inteiro em uma string?', true),
(1, 'Qual é a sintaxe básica de uma estrutura condicional if-elif-else?', true),
(1, 'Para que serve o método append() em listas?', true),
(1, 'Como criar um loop de repetição baseado em uma condição booleana?', true),
(1, 'O que são métodos embutidos (built-in functions) como len() e type()?', true),
-- Pleno
(2, 'Como funcionam os decoradores (decorators) em Python e qual sua aplicação típica?', true),
(2, 'Explique a diferença entre geradores (generators) e listas em termos de consumo de memória.', true),
(2, 'Como utilizar list comprehensions e dictionary comprehensions eficientemente?', true),
(2, 'O que são gerenciadores de contexto (context managers) e como criar um customizado com with?', true),
(2, 'Explique o funcionamento de pacotes, módulos e o arquivo __init__.py.', true),
(2, 'Como o tratamento de exceções customizadas é estruturado em Python?', true),
(2, 'Qual é a utilidade do módulo collections (ex: defaultdict, Counter, namedtuple)?', true),
(2, 'Como manipular datas e fusos horários utilizando o módulo datetime?', true),
(2, 'Explique o conceito de duck typing no ecossistema Python.', true),
(2, 'Como utilizar funções de alta ordem como map, filter e reduce em conjunto com lambdas?', true),
-- Sênior
(3, 'Explique detalhadamente o funcionamento do GIL (Global Interpreter Lock) e seu impacto no multithreading.', true),
(3, 'Como implementar concorrência real utilizando o módulo asyncio e programação assíncrona?', true),
(3, 'Quais são os mecanismos internos de resolução de herança múltipla e o algoritmo C3 Linearization (MRO)?', true),
(3, 'Como funcionam os descritores (Descriptors) e a metaclasse (__new__ / __init__) em Python?', true),
(3, 'Discuta estratégias avançadas de profiling e otimização de performance com cProfile e Cython.', true),
(3, 'Como gerenciar dependências e ambientes virtuais isolados em projetos de grande escala empresariais?', true),
(3, 'Explique o funcionamento interno do mecanismo de coleta de lixo geracional e detecção de ciclos em Python.', true),
(3, 'Como projetar APIs robustas orientadas a domínio utilizando Pydantic e FastAPI com validações estritas?', true),
(3, 'Quais são os desafios de serialização e desserialização segura de objetos complexos (evitando vulnerabilidades de pickle)?', true),
(3, 'Como estruturar arquiteturas limpas (Clean Architecture / Hexagonal) em aplicações Python corporativas?', true),

-- ==========================================
-- SQL (Stack ID: 7)
-- ==========================================
-- Júnior
(1, 'Qual comando básico é utilizado para consultar dados em uma tabela?', true),
(1, 'Para que serve a cláusula WHERE em uma instrução SQL?', true),
(1, 'Como ordenar os resultados de uma consulta em ordem decrescente?', true),
(1, 'Qual comando é utilizado para inserir novos registros em uma tabela?', true),
(1, 'Como atualizar dados existentes em uma tabela?', true),
(1, 'Qual comando é utilizado para remover registros de uma tabela?', true),
(1, 'Para que serve a função agregada COUNT()?', true),
(1, 'Como limitar o número de linhas retornadas em uma consulta?', true),
(1, 'O que significa a restrição PRIMARY KEY?', true),
(1, 'Como agrupar linhas que possuem valores em comum utilizando GROUP BY?', true),
-- Pleno
(2, 'Explique a diferença conceitual e prática entre INNER JOIN, LEFT JOIN e FULL OUTER JOIN.', true),
(2, 'Como funcionam as subqueries (subconsultas) correlacionadas versus não correlacionadas?', true),
(2, 'Qual a utilidade das funções de janela (Window Functions) como ROW_NUMBER(), RANK() e OVER()?', true),
(2, 'Como funcionam transações ACID e os comandos COMMIT, ROLLBACK e SAVEPOINT?', true),
(2, 'Qual é a diferença entre restrições UNIQUE, CHECK e FOREIGN KEY?', true),
(2, 'Como utilizar a cláusula HAVING para filtrar resultados após uma agregação?', true),
(2, 'O que são Views (visões) e quais as vantagens de utilizá-las?', true),
(2, 'Como funcionam os operadores UNION, INTERSECT e EXCEPT?', true),
(2, 'Qual a utilidade do comando COALESCE para tratamento de valores nulos?', true),
(2, 'Como estruturar índices compostos eficientes para consultas com múltiplos filtros?', true),
-- Sênior
(3, 'Como analisar a performance de uma query complexa utilizando o comando EXPLAIN ANALYZE?', true),
(3, 'Quais são os impactos de concorrência e níveis de isolamento de transação (Read Committed, Repeatable Read, Serializable)?', true),
(3, 'Como funcionam os índices B-Tree, Hash, GIN e GiST em bancos relacionais modernos?', true),
(3, 'Discuta estratégias de particionamento de tabelas de grande volume (Table Partitioning por range ou hash).', true),
(3, 'Como projetar funções armazenadas (Stored Procedures) e Triggers otimizadas sem gargalos de bloqueio?', true),
(3, 'Quais são as melhores práticas para mitigar ataques de SQL Injection em consultas dinâmicas?', true),
(3, 'Como estruturar estratégias de replicação de banco de dados (Master-Slave / Streaming Replication) e alta disponibilidade?', true),
(3, 'Explique o funcionamento de CTEs (Common Table Expressions) recursivas para processamento de estruturas hierárquicas.', true),
(3, 'Como realizar tuning de parâmetros de memória e cache (shared_buffers, work_mem) em servidores de banco de dados?', true),
(3, 'Discuta arquiteturas de bancos de dados relacionais distribuídos e consistência eventual.', true);

QUESTÕES (3,4,6)
INSERT INTO core.questions (id_levels, questions_description, questions_enabled) VALUES
-- ==========================================
-- CSS (Stack ID: 3)
-- ==========================================
-- Júnior
(1, 'Qual propriedade CSS é utilizada para alterar a cor do texto de um elemento?', true),
(1, 'Como selecionar um elemento pelo seu ID utilizando seletores CSS?', true),
(1, 'Qual é a diferença básica entre margem (margin) e preenchimento (padding)?', true),
(1, 'Como centralizar um elemento em bloco horizontalmente utilizando margens automáticas?', true),
(1, 'Qual propriedade CSS define o tipo de layout flexível (Flexbox)?', true),
(1, 'Para que serve a propriedade "display: none;" em comparação com "visibility: hidden;"?', true),
(1, 'Como aplicar um estilo condicional baseado na largura da tela utilizando Media Queries?', true),
(1, 'Qual propriedade controla a opacidade (transparência) de um elemento?', true),
(1, 'Como alterar o tipo de fonte de um texto em CSS?', true),
(1, 'Qual é a ordem correta de aplicação dos valores na propriedade abreviada de padding (top, right, bottom, left)?', true),
-- Pleno
(2, 'Explique a diferença conceitual e prática entre CSS Grid Layout e Flexbox.', true),
(2, 'Como funcionam as propriedades position (static, relative, absolute, fixed, sticky)?', true),
(2, 'O que são variáveis CSS (Custom Properties) e quais as vantagens de escopo em relação aos pré-processadores?', true),
(2, 'Como o mecanismo de especificidade de seletores CSS é calculado pelo navegador?', true),
(2, 'Explique o funcionamento de unidades relativas como rem, em, vh e vw.', true),
(2, 'Como criar animações fluidas utilizando @keyframes e a propriedade transition?', true),
(2, 'Qual é a utilidade da propriedade z-index e como o conceito de Stacking Context (Contexto de Empilhamento) a afeta?', true),
(2, 'Como implementar design responsivo mobile-first de forma eficiente?', true),
(2, 'O que são pseudo-classes (ex: :nth-child, :not) e pseudo-elementos (ex: ::before, ::after)?', true),
(2, 'Como otimizar o carregamento de folhas de estilo para evitar bloqueio de renderização (render-blocking)?', true),
-- Sênior
(3, 'Como gerenciar a arquitetura CSS em aplicações de grande escala utilizando metodologias como BEM, ITCSS ou Tailwind (Atomic CSS)?', true),
(3, 'Discuta sobre o impacto de seletores CSS complexos na performance de recálculo de estilo (Style Recalculation) do DOM.', true),
(3, 'Como funcionam os recursos modernos de CSS como @container (Container Queries) e :has() no design modular?', true),
(3, 'Quais são as estratégias avançadas de isolamento de estilos (CSS Modules, Styled Components, Shadow DOM)?', true),
(3, 'Como otimizar a performance de animações CSS utilizando propriedades aceleradas por hardware (GPU, transform e opacity)?', true),
(3, 'Explique o comportamento do algoritmo de alinhamento e dimensionamento automático no CSS Grid (minmax, auto-fit, auto-fill).', true),
(3, 'Como estruturar temas dinâmicos (Dark/Light mode) escaláveis utilizando variáveis CSS e prefers-color-scheme?', true),
(3, 'Quais são os trade-offs de desempenho entre o uso excessivo de sombras complexas (box-shadow) e efeitos de backdrop-filter?', true),
(3, 'Como o motor de renderização do navegador lida com reflows induzidos por propriedades visuais do CSS?', true),
(3, 'Discuta a evolução das especificações de CSS Houdini e a criação de Paint Worklets customizados.', true),

-- ==========================================
-- TYPESCRIPT (Stack ID: 4)
-- ==========================================
-- Júnior
(1, 'O que é TypeScript e qual sua principal vantagem em relação ao JavaScript puro?', true),
(1, 'Como declarar uma interface básica definindo propriedades obrigatórias e opcionais?', true),
(1, 'Qual a diferença entre os tipos ''any'' e ''unknown'' em TypeScript?', true),
(1, 'Como definir um tipo personalizado (Type Alias) para union types?', true),
(1, 'Como tipar o retorno de uma função que não retorna nenhum valor?', true),
(1, 'Qual é a sintaxe para tipar um array de strings em TypeScript?', true),
(1, 'O que são Enums em TypeScript e para que servem?', true),
(1, 'Como utilizar asserções de tipo (Type Assertions / as keyword)?', true),
(1, 'Como tipar parâmetros opcionais em funções?', true),
(1, 'O que é o arquivo tsconfig.json e qual sua finalidade?', true),
-- Pleno
(2, 'Explique a diferença entre Interfaces e Type Aliases em cenários de herança e declaração de merge.', true),
(2, 'Como funcionam os Generics em TypeScript e em quais cenários aplicá-los?', true),
(2, 'O que são Utility Types nativos como Partial<T>, Readonly<T>, Pick<T> e Omit<T>?', true),
(2, 'Como utilizar Type Guards (Narrowing) customizados (ex: usando o operador ''is'')?', true),
(2, 'Explique o funcionamento de Mapped Types (tipos mapeados) e Conditional Types (tipos condicionais).', true),
(2, 'Como tipar funções callback complexas e sobrecarga de funções (Function Overloads)?', true),
(2, 'Qual é a diferença entre compilação estrutural (structural typing) e nominal?', true),
(2, 'Como lidar com módulos externos que não possuem tipagens nativas (declaration files .d.ts)?', true),
(2, 'O que é o modo estrito (strict: true) do TypeScript e quais checagens ele ativa?', true),
(2, 'Como utilizar o operador ''infer'' em conditional types para extrair tipos complexos?', true),
-- Sênior
(3, 'Como projetar um sistema de tipos estrito e inviolável (Type Safety) utilizando técnicas de Domain-Driven Design (Branded Types)?', true),
(3, 'Discuta as implicações de performance do compilador TypeScript (tsc) em monorepos gigantescos e estratégias de Project References.', true),
(3, 'Como implementar validação em tempo de execução (runtime validation) sincronizada com tipos estáticos (Zod, io-ts)?', true),
(3, 'Explique o funcionamento interno de tipos recursivos profundos e os limites de inferência do compilador.', true),
(3, 'Como criar bibliotecas open-source agnósticas fortemente tipadas utilizando declarações avançadas de genéricos restritos (constraints)?', true),
(3, 'Quais são os desafios de interoperabilidade ao migrar bases de código legadas gigantescas para o modo strict?', true),
(3, 'Como funcionam os Template Literal Types avançados para manipulação de strings em nível de tipo?', true),
(3, 'Discuta sobre polimorfismo parametrizado e covariância/contravariância em funções no TypeScript.', true),
(3, 'Como escrever type tests robustos (utilizando bibliotecas como dtslint ou expect-type) para garantir contratos de tipos?', true),
(3, 'Como o TypeScript lida com tree-shaking e eliminação de código morto no processo de build transpilado?', true),

-- ==========================================
-- .NET / C# (Stack ID: 6)
-- ==========================================
-- Júnior
(1, 'O que é o ecossistema .NET e qual a diferença entre o antigo .NET Framework e o moderno .NET Core/.NET?', true),
(1, 'Como declarar uma variável utilizando tipagem estrita ou inferência (var) em C#?', true),
(1, 'Qual a diferença fundamental entre tipos de valor (value types) e tipos de referência (reference types)?', true),
(1, 'Como estruturar uma instrução condicional if-else e uma estrutura de repetição foreach em C#?', true),
(1, 'Para que servem os modificadores de acesso (public, private, protected, internal)?', true),
(1, 'O que são propriedades auto-implementadas (Auto-implemented properties) em classes?', true),
(1, 'Como capturar exceções utilizando blocos try-catch-finally em C#?', true),
(1, 'O que é o conceito de Nullable Value Types (?) em tipos primitivos?', true),
(1, 'Como instanciar e utilizar coleções básicas como List<T> e Dictionary<TKey, TValue>?', true),
(1, 'Qual é a utilidade do método ToString() sobrescrito em objetos C#?', true),
-- Pleno
(2, 'Explique o funcionamento de LINQ (Language Integrated Query) utilizando sintaxe de consulta e sintaxe de método.', true),
(2, 'Como funcionam a programação assíncrona e os modificadores async e await em C#?', true),
(2, 'O que é Injeção de Dependência (DI) nativa no .NET e quais são os tempos de vida de serviço (Transient, Scoped, Singleton)?', true),
(2, 'Qual a diferença conceitual e prática entre interfaces e classes abstratas em C#?', true),
(2, 'Como funcionam delegates, eventos (events) e expressões lambda?', true),
(2, 'O que são Value Tasks (ValueTask<T>) e quando utilizá-las em vez de Tasks para otimização de alocação?', true),
(2, 'Como estruturar mapeamentos de objetos eficientes utilizando bibliotecas como AutoMapper ou mapeamento manual?', true),
(2, 'Explique o conceito de Middleware no pipeline de requisições HTTP do ASP.NET Core.', true),
(2, 'Como implementar validação de dados robusta utilizando Data Annotations ou FluentValidation?', true),
(2, 'O que são Extension Methods (métodos de extensão) e como criá-los?', true),
(3, 'Explique detalhadamente o funcionamento interno do Garbage Collector (GC) no .NET, incluindo gerações (Gen 0, 1, 2) e LOH (Large Object Heap).', true),
(3, 'Como projetar APIs de alta performance utilizando Minimal APIs, gRPC e Span<T> / Memory<T> para zerar alocações de heap (Zero-Allocation)?', true),
(3, 'Quais são os mecanismos de concorrência avançada e multithreading (Task Parallel Library, Channels, async streams IAsyncEnumerable)?', true),
(3, 'Como estruturar arquiteturas limpas corporativas (Clean Architecture / Domain-Driven Design) com Entity Framework Core otimizando consultas via AsNoTracking e split queries?', true),
(3, 'Discuta sobre gerenciamento de memória não gerenciada (Unmanaged Resources) e a implementação correta do padrão Dispose e Finalizer.', true),
(3, 'Como implementar resiliência e tolerância a falhas em arquiteturas distribuídas utilizando Polly (Circuit Breaker, Retry, Rate Limiting)?', true),
(3, 'Explique o funcionamento de Reflection, Dynamic e a emissão de código em tempo de execução (IL Emit / Source Generators) no .NET moderno.', true),
(3, 'Como configurar observabilidade avançada, tracing distribuído e métricas nativas com OpenTelemetry no ASP.NET Core.', true),
(3, 'Quais são as implicações de segurança em autenticação e autorização baseada em Claims, JWT e políticas complexas (Policy-based authorization)?', true),
(3, 'Discuta estratégias de testes de integração escaláveis utilizando WebApplicationFactory e Testcontainers para infraestrutura isolada.', true);

--recomendações
INSERT INTO core.study_recommendations (id_stacks, score_min, score_max, recommendations_descriptions) VALUES
(1, 0, 40, 'Você já conhece os fundamentos de HTML e está construindo uma base importante para evoluir. Continue praticando semântica, formulários, acessibilidade e o uso correto dos elementos nativos para ganhar mais segurança na construção de páginas web.'),

(1, 41, 75, 'Você demonstra boa compreensão da estrutura HTML e consegue organizar páginas de forma consistente. Para avançar ainda mais, aprofunde acessibilidade, SEO, semântica avançada e formulários mais complexos.'),

(1, 76, 100, 'Excelente resultado! Você demonstra um domínio sólido de HTML e aplica boas práticas de semântica e acessibilidade. Continue aprimorando conhecimentos sobre performance e SEO para elevar ainda mais a qualidade das suas entregas.'),



(2, 0, 40, 'Você já conhece os principais fundamentos de JavaScript e lógica de programação. Continue praticando manipulação do DOM, funções, escopo, estruturas de repetição e tratamento de erros para ganhar mais confiança em desafios práticos.'),

(2, 41, 75, 'Você demonstra um bom domínio dos conceitos de JavaScript e consegue lidar com cenários comuns do desenvolvimento. Para evoluir, aprofunde temas como assincronicidade, closures, escopo avançado e boas práticas de desenvolvimento.'),

(2, 76, 100, 'Excelente resultado! Você demonstra maturidade no uso de JavaScript e conhecimento consistente dos principais conceitos da linguagem. Continue explorando temas avançados e padrões de arquitetura para se destacar em desafios cada vez mais complexos.'),



(3, 0, 40, 'Você já conhece os conceitos básicos de estilização e está evoluindo na construção de interfaces modernas. Continue praticando modelos de caixa, posicionamento, Flexbox e responsividade para ampliar sua confiança no desenvolvimento de layouts.'),

(3, 41, 75, 'Você demonstra um bom domínio de CSS e consegue criar interfaces responsivas e organizadas. Para avançar ainda mais, aprofunde especificidade, acessibilidade, animações e estratégias de organização de estilos.'),

(3, 76, 100, 'Excelente resultado! Você demonstra domínio avançado de CSS e consegue construir interfaces responsivas e bem estruturadas. Continue explorando arquiteturas escaláveis e otimizações de performance para elevar ainda mais suas entregas.'),



(4, 0, 40, 'Você já compreende os conceitos iniciais de tipagem em TypeScript e está desenvolvendo uma base sólida para evoluir. Continue praticando interfaces, tipos primitivos, union types e a configuração do ambiente para fortalecer seus conhecimentos.'),

(4, 41, 75, 'Você demonstra uma boa compreensão de tipagem estática e consegue utilizar TypeScript em cenários relevantes do desenvolvimento. Para evoluir, aprofunde generics, utility types, type guards e boas práticas para projetos escaláveis.'),

(4, 76, 100, 'Excelente resultado! Você demonstra segurança na utilização dos recursos avançados de TypeScript e compreende bem os benefícios da tipagem estática. Continue explorando padrões arquiteturais e soluções avançadas para projetos de maior complexidade.'),



(5, 0, 40, 'Você já conhece a sintaxe básica de Python e as principais estruturas de dados da linguagem. Continue praticando listas, dicionários, funções e tratamento de exceções para fortalecer sua base e ganhar mais confiança.'),

(5, 41, 75, 'Você demonstra um bom domínio de Python e consegue trabalhar com estruturas intermediárias da linguagem. Para avançar, aprofunde comprehensions, geradores, decoradores, orientação a objetos e boas práticas de desenvolvimento.'),

(5, 76, 100, 'Excelente resultado! Você demonstra um alto nível de conhecimento em Python e familiaridade com recursos avançados da linguagem. Continue evoluindo em arquitetura de software e construção de soluções escaláveis para potencializar ainda mais suas habilidades.'),



(6, 0, 40, 'Você já conhece os conceitos fundamentais de C# e do ecossistema .NET. Continue evoluindo em orientação a objetos, coleções, tratamento de exceções e ASP.NET Core para fortalecer sua base de desenvolvimento.'),

(6, 41, 75, 'Você demonstra uma boa compreensão do ecossistema .NET e consegue desenvolver aplicações utilizando seus principais recursos. Para evoluir, aprofunde dependency injection, middleware, Entity Framework Core e estratégias de testes.'),

(6, 76, 100, 'Excelente resultado! Você demonstra conhecimento consistente do ecossistema .NET e das práticas modernas de desenvolvimento. Continue explorando arquitetura de aplicações, microsserviços e otimizações de performance para ampliar ainda mais sua experiência.'),


(7, 0, 40, 'Você já compreende os conceitos básicos de consultas em bancos de dados relacionais. Continue praticando filtros, ordenação, junções e manipulação de registros para fortalecer sua capacidade de análise de dados.'),

(7, 41, 75, 'Você demonstra um bom domínio de consultas relacionais e consegue trabalhar com operações intermediárias em bancos de dados. Para evoluir, aprofunde subconsultas, funções de janela e estratégias básicas de otimização.'),

(7, 76, 100, 'Excelente resultado! Você demonstra conhecimento sólido em modelagem, consultas e otimização de bancos de dados relacionais. Continue explorando índices, planos de execução e estratégias avançadas de performance para ampliar ainda mais sua expertise.');

--stacks
INSERT INTO core.stacks (stacks_name, career_paths) VALUES 
('HTML', ARRAY['frontend']), 
('JavaScript', ARRAY['frontend', 'backend', 'fullstack', 'software_engineering']),
('CSS', ARRAY['frontend']), 
('TypeScript', ARRAY['frontend', 'backend', 'fullstack', 'software_engineering']), 
('Python', ARRAY['backend', 'data_engineering', 'data_analysis', 'data_science', 'machine_learning', 'artificial_intelligence']),
('.NET', ARRAY['backend', 'fullstack', 'software_engineering']), 
('SQL', ARRAY['backend', 'data_engineering', 'data_analysis', 'data_science']); 
---perguntas segurança
INSERT INTO core.security_questions (security_question_description) VALUES 
('Qual era o nome do seu primeiro animal de estimação?'), 
('Qual era o nome da sua primeira escola?'), 
('Qual era o nome da sua cidade natal?'); 

--funçoes
INSERT INTO core.roles (user_role) VALUES ('admin'), ('usuário'); 

--níveis
INSERT INTO core.levels (levels_name) VALUES ('Júnior'), ('Pleno'), ('Sênior'); 
--termos
INSERT INTO core.terms_catalog (terms_name, term_description, terms_version, is_active)
VALUES 
('Termos de Uso','<h1 align="center">Termos de Uso da Plataforma</h1>

<p><em>Última atualização: Agosto de 2026</em></p>

<p>Bem-vindo(a)!</p>

<p>Ao acessar e utilizar esta plataforma, você concorda com os presentes Termos de Uso. Caso não concorde com qualquer condição aqui descrita, recomendamos que não utilize a aplicação.</p>

<p><strong>1. Objetivo da Plataforma</strong></p>

<p>A plataforma foi desenvolvida para disponibilizar funcionalidades relacionadas ao projeto apresentado durante o Hackathon, permitindo a interação dos usuários com os recursos disponibilizados.</p>

<p><strong>2. Cadastro e Responsabilidades do Usuário</strong></p>

<p>Ao realizar o cadastro, o usuário declara que:</p>

<ul>
  <li>Forneceu informações verdadeiras e atualizadas;</li>
  <li>É responsável pela confidencialidade de suas credenciais de acesso;</li>
  <li>Não utilizará a plataforma para atividades ilícitas, fraudulentas ou que violem direitos de terceiros.</li>
</ul>

<p><strong>3. Uso Permitido</strong></p>

<p>É proibido:</p>

<ul>
  <li>Tentar acessar áreas restritas sem autorização;</li>
  <li>Comprometer a segurança da plataforma;</li>
  <li>Inserir conteúdo ofensivo, discriminatório ou ilegal;</li>
  <li>Utilizar a plataforma para fins diferentes daqueles previstos pelo projeto.</li>
</ul>

<p><strong>4. Propriedade Intelectual</strong></p>

<p>Todo o conteúdo disponibilizado na plataforma, incluindo identidade visual, textos, funcionalidades e códigos desenvolvidos para o projeto, pertence aos seus respectivos autores e organizadores.</p>

<p><strong>5. Disponibilidade do Serviço</strong></p>

<p>A plataforma poderá ser alterada, suspensa ou descontinuada a qualquer momento, sem aviso prévio, especialmente por se tratar de um projeto desenvolvido em contexto de Hackathon.</p>

<p><strong>6. Limitação de Responsabilidade</strong></p>

<p>Os responsáveis pelo projeto não garantem disponibilidade contínua, ausência de erros ou adequação para finalidades específicas.</p>

<p><strong>7. Alterações dos Termos</strong></p>

<p>Estes Termos poderão ser atualizados periodicamente. A continuidade do uso da plataforma após alterações será considerada como concordância com as novas condições.</p>

<p><strong>8. Contato</strong></p>

<p>Em caso de dúvidas sobre estes Termos, entre em contato pelos canais disponibilizados na plataforma.</p>', '1.0', true);



INSERT INTO core.terms_catalog (terms_name, term_description, terms_version, is_active)
VALUES 
('Política de Privacidade','<h1 align="center">Política de Privacidade</h1>

<p>Sua privacidade é importante para nós. Esta Política de Privacidade explica como coletamos, utilizamos, armazenamos e protegemos seus dados pessoais ao utilizar nossa plataforma.</p>

<p>Ao criar uma conta e utilizar nossos serviços, você concorda com as práticas descritas nesta Política.</p>

<p><strong>1. Dados Coletados</strong></p>

<p>Ao realizar seu cadastro na plataforma, poderemos coletar as seguintes informações fornecidas diretamente por você:</p>

<p><strong>Dados de identificação</strong></p>

<ul>
  <li>Nome completo;</li>
  <li>Endereço de e-mail.</li>
</ul>

<p><strong>Dados de perfil</strong></p>

<ul>
  <li>Data de nascimento;</li>
  <li>Estado (UF);</li>
  <li>Gênero.</li>
</ul>

<p><strong>Dados de autenticação e segurança</strong></p>

<ul>
  <li>Senha de acesso (armazenada de forma protegida e criptografada);</li>
  <li>Pergunta de segurança selecionada;</li>
  <li>Resposta da pergunta de segurança.</li>
</ul>

<p><strong>Dados de uso da plataforma</strong></p>

<p>Também poderemos coletar automaticamente algumas informações técnicas necessárias para o funcionamento da solução, tais como:</p>

<ul>
  <li>Data e horário de acesso;</li>
  <li>Endereço IP;</li>
  <li>Tipo de navegador e dispositivo utilizado;</li>
  <li>Informações de navegação e utilização dos recursos da plataforma.</li>
</ul>

<p><strong>2. Finalidade do Tratamento dos Dados</strong></p>

<p>Os dados coletados são utilizados para:</p>

<ul>
  <li>Criar e gerenciar sua conta de acesso;</li>
  <li>Permitir autenticação segura na plataforma;</li>
  <li>Recuperar ou validar o acesso à conta quando necessário;</li>
  <li>Personalizar sua experiência de uso;</li>
  <li>Disponibilizar conteúdos, recursos e funcionalidades da plataforma;</li>
  <li>Gerar métricas e análises para aprimoramento contínuo da solução;</li>
  <li>Garantir a segurança da plataforma e prevenir fraudes, acessos indevidos ou atividades maliciosas;</li>
  <li>Cumprir obrigações legais e regulatórias, quando aplicável.</li>
</ul>

<p><strong>3. Personalização da Experiência</strong></p>

<p>As informações fornecidas durante o cadastro poderão ser utilizadas para personalizar conteúdos, recomendações, jornadas de aprendizado e experiências disponibilizadas pela plataforma, sempre respeitando as finalidades descritas nesta Política de Privacidade.</p>

<p>Nenhuma decisão automatizada que produza efeitos relevantes ao usuário será realizada sem observância da legislação aplicável.</p>

<p><strong>4. Compartilhamento de Dados</strong></p>

<p>Os dados pessoais coletados não serão vendidos ou comercializados.</p>

<p>Poderão ser compartilhados apenas:</p>

<ul>
  <li>Com membros da equipe responsável pelo desenvolvimento, manutenção e operação da plataforma;</li>
  <li>Com fornecedores de tecnologia necessários para o funcionamento da solução;</li>
  <li>Quando exigido por determinação legal, regulatória ou ordem de autoridade competente;</li>
  <li>Para proteção dos direitos, segurança e integridade da plataforma e de seus usuários.</li>
</ul>

<p><strong>5. Armazenamento e Segurança</strong></p>

<p>Adotamos medidas técnicas e administrativas adequadas para proteger os dados pessoais contra acesso não autorizado, perda, destruição, alteração ou divulgação indevida.</p>

<p>As senhas dos usuários são armazenadas utilizando mecanismos de proteção compatíveis com as boas práticas de mercado.</p>

<p><strong>6. Retenção dos Dados</strong></p>

<p>Os dados pessoais serão mantidos apenas pelo período necessário para cumprir as finalidades descritas nesta Política ou para atender obrigações legais e regulatórias aplicáveis.</p>

<p>Após esse período, os dados poderão ser excluídos ou anonimizados de forma segura.</p>

<p><strong>7. Direitos do Titular dos Dados</strong></p>

<p>Nos termos da Lei Geral de Proteção de Dados (Lei nº 13.709/2018 - LGPD), o usuário poderá solicitar:</p>

<ul>
  <li>Confirmação da existência de tratamento de seus dados;</li> <li>Acesso aos dados pessoais tratados;</li> <li>Correção de informações incompletas, inexatas ou desatualizadas;</li> <li>Anonimização, bloqueio ou eliminação dos dados, quando aplicável;</li> <li>Portabilidade dos dados, observadas as disposições legais;</li> <li>Revogação do consentimento, quando esta for a base legal utilizada para o tratamento.</li> </ul>

<p><strong>8. Cookies e Tecnologias Semelhantes</strong></p>

<p>A plataforma poderá utilizar cookies e tecnologias similares para:</p>

<ul> <li>Garantir o funcionamento adequado da aplicação;</li> <li>Melhorar a experiência de navegação;</li> <li>Coletar métricas de uso;</li> <li>Apoiar a evolução contínua dos serviços oferecidos.</li> </ul>

<p>O usuário poderá gerenciar as preferências de cookies por meio das configurações de seu navegador, quando aplicável.</p>

<p><strong>9. Alterações desta Política</strong></p>

<p>Esta Política de Privacidade poderá ser atualizada periodicamente para refletir melhorias na plataforma, alterações legais ou mudanças operacionais.</p>

<p>A versão mais recente estará sempre disponível para consulta pelos usuários.</p>

<p><strong>10. Contato</strong></p>

<p>Em caso de dúvidas sobre esta Política de Privacidade ou sobre o tratamento de dados pessoais realizado pela plataforma, entre em contato pelos canais oficiais disponibilizados no sistema.</p>', '1.0', true);

INSERT INTO core.questions_option (id_questions, alternative_description, answer_weight) VALUES
-- ==========================================
-- HTML JÚNIOR (Antigo 1 a 10 -> NOVO 261 a 270)
-- ==========================================
(261, 'Utilizado exclusivamente para estruturar seções secundárias e rodapés de navegação.', 1),
(261, 'Destinado a englobar o conteúdo central, dominante e único de todo o documento.', 3),
(261, 'Aplicado unicamente para armazenar metadados e links de folhas de estilo externas.', 1),
(261, 'Empregado estritamente para estruturar formulários de cadastro e envio de dados.', 2),

(262, 'Define a estilização visual avançada e bordas arredondadas do elemento gráfico.', 1),
(262, 'Fornece uma descrição textual alternativa para acessibilidade e leitores de tela.', 3),
(262, 'Determina o endereço de URL de redirecionamento ao clicar na imagem.', 1),
(262, 'Estabelece a prioridade de carregamento assíncrono do arquivo de imagem.', 2),

(263, 'A primeira define itens em formato de tabela e a segunda em blocos flutuantes.', 1),
(263, 'A primeira representa lista não ordenada e a segunda representa lista ordenada.', 3),
(263, 'A primeira executa scripts dinâmicos e a segunda armazena dados estáticos.', 1),
(263, 'A primeira oculta elementos visuais e a segunda exibe dados tabulares.', 2),

(264, 'Através da propriedade rel apontando para o identificador único do campo.', 1),
(264, 'Por meio do atributo for no label apontando para o id correspondente do input.', 3),
(264, 'Utilizando classes CSS compartilhadas para vincular ambos os elementos.', 1),
(264, 'Através de funções JavaScript disparadas no evento de carregamento.', 2),

(265, 'O botão executa ações na interface enquanto o link realiza navegação entre URLs.', 3),
(265, 'O link processa formulários de envio enquanto o botão redireciona páginas.', 1),
(265, 'Ambos possuem exatamente o mesmo comportamento semântico no DOM.', 1),
(265, 'O botão é exclusivo para estilização CSS e o link para eventos lógicos.', 2),

(266, 'Significa estruturar o código utilizando tags que descrevem o significado do conteúdo.', 3),
(266, 'Refere-se à compactação de arquivos para acelerar o tempo de compilação.', 1),
(266, 'Denota a validação automática de erros de sintaxe feita pelo navegador.', 1),
(266, 'Indica a separação rígida entre código backend e scripts client-side.', 2),

(267, 'Oculta o campo de entrada caso o usuário não possua permissão de acesso.', 1),
(267, 'Garante que o campo seja preenchido obrigatoriamente antes do envio do formulário.', 3),
(267, 'Formata automaticamente o texto inserido em letras maiúsculas.', 1),
(267, 'Limpa o conteúdo do input sempre que houver perda de foco.', 2),

(268, 'Utiliza-se a tag de nível h1 para representar o título principal do documento.', 3),
(268, 'Emprega-se a tag header para definir títulos e subtítulos de nível único.', 1),
(268, 'Aplica-se a tag title dentro do corpo da página para estruturação.', 1),
(268, 'Configura-se a tag section para gerenciar o cabeçalho principal.', 2),

(269, 'Agrupam visualmente controles de formulário associados a uma legenda descritiva.', 3),
(269, 'Geram tabelas dinâmicas baseadas em dados JSON recebidos por API.', 1),
(269, 'Criam botões de navegação interativos com suporte a múltiplos estados.', 1),
(269, 'Armazenam variáveis globais de sessão no escopo do navegador.', 2),

(270, 'Adicionando o atributo target com o valor underscore blank na tag âncora.', 3),
(270, 'Configurando a propriedade display como absolute no arquivo de estilo.', 1),
(270, 'Modificando o parâmetro type para o valor external no elemento link.', 1),
(270, 'Inserindo uma função de callback assíncrona no evento onclick.', 2),

-- ==========================================
-- JAVASCRIPT JÚNIOR (Antigo 31 a 33 -> NOVO 291 a 293)
-- ==========================================
(291, 'Utiliza-se a palavra-chave var para escopo global dinâmico e flexível.', 1),
(291, 'Empregam-se as palavras-chave let ou const para definir escopo de bloco seguro.', 3),
(291, 'Declara-se obrigatoriamente utilizando tipos estáticos definidos em tempo de compilação.', 1),
(291, 'Utiliza-se a instrução function para armazenar valores primitivos.', 2),

(292, 'Filtra elementos com base em uma condição booleana retornando um subconjunto.', 1),
(292, 'Transforma cada elemento do array original e retorna uma nova estrutura modificada.', 3),
(292, 'Acumula os valores iterados em um único resultado numérico ou textual.', 1),
(292, 'Ordena os itens sequencialmente alterando o array de forma mutável.', 2),

(293, 'O primeiro compara apenas o valor e o segundo compara valor e tipo estrito.', 3),
(293, 'O primeiro executa operações matemáticas e o segundo valida exceções de escopo.', 1),
(293, 'Ambos realizam checagem estrita de tipo e valor simultaneamente.', 1),
(293, 'O primeiro verifica performance de memória e o segundo o tipo de dado.', 2),

-- ==========================================
-- PYTHON JÚNIOR (Antigo 121 a 125 -> NOVO 321 a 325)
-- ==========================================
(321, 'Listas são mutáveis e delimitadas por colchetes, enquanto tuplas são imutáveis e usam parênteses.', 3),
(321, 'Tuplas aceitam alteração de itens e listas são estáticas em tempo de execução.', 1),
(321, 'Ambas possuem exatamente o mesmo comportamento de mutabilidade na memória.', 1),
(321, 'Listas armazenam apenas números inteiros e tuplas apenas sequências de texto.', 2),

(322, 'Utiliza-se a palavra-chave def seguida do nome da função e parênteses.', 3),
(322, 'Emprega-se a instrução function para criar blocos executáveis.', 1),
(322, 'Declara-se por meio da palavra reservada method no escopo global.', 1),
(322, 'Usa-se o comando lambda para definir funções complexas com múltiplos blocos.', 2),

(323, 'Armazenam pares de chave e valor permitindo buscas rápidas indexadas.', 3),
(323, 'Organizam itens em formato de matriz sequencial ordenada por índices numéricos.', 1),
(323, 'Guardam valores duplicados em estrutura de fila linear estrita.', 1),
(323, 'Executam rotinas assíncronas baseadas em eventos de rede.', 2),

(324, 'Utiliza-se a função open em conjunto com a estrutura with para gerenciar recursos.', 3),
(324, 'Emprega-se o método readfile diretamente no escopo global do módulo.', 1),
(324, 'Aplica-se o comando import para carregar o conteúdo textual na memória.', 1),
(324, 'Configura-se uma conexão socket para ler o arquivo local.', 2),

(325, 'Utiliza-se a palavra in para verificar se um elemento pertence a uma sequência.', 3),
(325, 'Emprega-se o operador contains para checar dados em coleções.', 1),
(325, 'Usa-se a função check para validar a existência de itens.', 1),
(325, 'Aplica-se o operador exists em estruturas de repetição.', 2),

-- ==========================================
-- SQL JÚNIOR (Antigo 181 a 185 -> NOVO 351 a 355)
-- ==========================================
(351, 'Utiliza-se a instrução SELECT para recuperar dados armazenados em tabelas.', 3),
(351, 'Emprega-se o comando UPDATE para extrair registros do banco.', 1),
(351, 'Aplica-se a cláusula INSERT para consultar informações estruturadas.', 1),
(351, 'Usa-se a instrução FETCH para ler dados relacionais brutos.', 2),

(352, 'Filtra linhas retornadas com base em condições específicas informadas.', 3),
(352, 'Agrupa registros duplicados em colunas selecionadas.', 1),
(352, 'Ordena o resultado final em ordem crescente ou decrescente.', 1),
(352, 'Limita o volume máximo de linhas exibidas na consulta.', 2),

(353, 'Utiliza-se a cláusula ORDER BY combinada com a palavra DESC.', 3),
(353, 'Emprega-se o modificador REVERSE na seleção de colunas.', 1),
(353, 'Aplica-se a função SORT em conjunto com o parâmetro backward.', 1),
(353, 'Usa-se o comando GROUP BY invertido para organizar os dados.', 2),

(354, 'Utiliza-se o comando INSERT INTO para adicionar novos dados na tabela.', 3),
(354, 'Emprega-se a instrução ADD RECORD para incluir informações.', 1),
(354, 'Aplica-se o comando UPDATE para criar novos registros.', 1),
(354, 'Usa-se a cláusula CREATE VALUES para popular colunas.', 2),

(355, 'Utiliza-se o comando UPDATE em conjunto com a cláusula SET.', 3),
(355, 'Emprega-se a instrução MODIFY para alterar registros existentes.', 1),
(355, 'Aplica-se o comando ALTER TABLE para modificar valores de linhas.', 1),
(355, 'Usa-se a cláusula REWRITE para atualizar dados relacionais.', 2);