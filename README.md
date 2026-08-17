# 🚀 StackCheck

> **Descubra se você está preparado para a vaga que deseja conquistar.**

O **StackCheck** é uma plataforma de preparação técnica para profissionais de tecnologia que querem entender seu nível de conhecimento antes de uma entrevista.

A proposta é simples: em vez de estudar de forma genérica, o profissional escolhe **área de atuação, nível de senioridade e tecnologias que deseja avaliar**. A plataforma gera uma avaliação personalizada, corrige o desempenho por tecnologia e transforma o resultado em um **feedback acionável**, mostrando nível de domínio e recomendações de estudo.

## 🌐 Acesse a plataforma

**[StackCheck — ambiente de produção](https://stack-check-27s5th5e9-kellycsantos-projects.vercel.app/)**

---

## 🎯 O problema

Processos seletivos de tecnologia costumam gerar uma dúvida recorrente:

> **"Será que eu realmente estou preparado para essa vaga?"**

Muitos profissionais estudam por horas, mas não sabem:

- quais tecnologias precisam priorizar;
- qual é o seu nível real de conhecimento;
- em quais assuntos estão abaixo do esperado;
- se estão evoluindo entre uma tentativa e outra;
- o que estudar depois de descobrir uma lacuna.

O StackCheck transforma essa incerteza em um processo mensurável:

**Escolher → Avaliar → Entender → Evoluir → Reavaliar**

---

## 💡 Nossa solução

O StackCheck funciona como um ciclo de preparação técnica.

1. O profissional informa sua **área de atuação**.
2. Seleciona o **nível de senioridade** que deseja avaliar.
3. Escolhe até **5 tecnologias**.
4. O backend seleciona questões compatíveis com o nível e com as stacks escolhidas.
5. As alternativas são embaralhadas para tornar cada avaliação mais dinâmica.
6. O usuário realiza o teste.
7. O sistema calcula a pontuação **por stack e globalmente**.
8. Cada stack recebe uma classificação de domínio.
9. O sistema busca uma **recomendação de estudo compatível com a faixa de pontuação**.
10. O resultado fica salvo no histórico para acompanhar a evolução.

### O diferencial

Não entregamos apenas uma nota.

Entregamos uma resposta para:

> **"Onde estou agora e o que devo fazer para evoluir?"**

---

## ✨ Principais funcionalidades

### 🧪 Avaliações personalizadas

O usuário pode configurar sua avaliação escolhendo:

- Frente: **Front-end ou Back-end**
- Nível: **Júnior, Pleno ou Sênior**
- Até **5 stacks/tecnologias**

### 🎲 Questões dinâmicas

As questões são selecionadas aleatoriamente de acordo com:

- tecnologia;
- nível de conhecimento;
- questões habilitadas no banco.

As alternativas também são embaralhadas.

Isso evita que o teste seja sempre apresentado exatamente da mesma maneira.

### 📊 Resultado global e por tecnologia

O StackCheck calcula:

- pontuação geral;
- pontuação individual por stack;
- classificação de domínio;
- recomendação de estudo;
- histórico das avaliações.

### 🧠 Classificação de conhecimento

O desempenho é convertido em faixas de domínio:

| Pontuação | Classificação |
|---:|---|
| 0–39% |  Iniciante |
| 40–64% |  Básico |
| 65–84% |  Intermediário |
| 85–100% |  Avançado |

As mensagens de feedback também são contextualizadas de acordo com a classificação.

### 📚 Recomendações personalizadas

A recomendação não é fixa.

O backend relaciona:

**stack + faixa de pontuação → recomendação de estudo**

Assim, dois usuários que realizam testes diferentes podem receber orientações diferentes de acordo com seus resultados.

### 📈 Histórico de evolução

Cada avaliação finalizada é armazenada e pode ser consultada posteriormente.

O profissional consegue comparar seus resultados e acompanhar sua evolução ao longo do tempo.

# 🧮 Como o resultado é calculado

A avaliação não trata todas as tecnologias como uma única pontuação.

O backend primeiro separa as respostas por stack.

Para cada tecnologia:

```text
Pontuação da stack =
peso obtido / peso máximo × 100
```

Depois, a pontuação global é calculada a partir da média das pontuações das stacks avaliadas.

Isso permite que o usuário descubra, por exemplo:

```text
Resultado geral: 72%

JavaScript   → 85% → Avançado
TypeScript   → 76% → Intermediário
React        → 55% → Básico
```

O resultado é muito mais útil do que simplesmente dizer:

> "Você acertou 72%."

---

# 🧠 Banco de questões

A base de questões foi estruturada considerando diferentes níveis de conhecimento.

Atualmente existem questões organizadas para tecnologias como:

- HTML
- CSS
- JavaScript
- TypeScript
- Python
- SQL
- .NET / C#

Cada tecnologia possui questões distribuídas entre níveis de dificuldade.

Isso permite que o teste seja construído de acordo com o nível selecionado pelo usuário.

---

# 🛠️ Stacks do projeto

## Frontend

| Tecnologia | Utilização |
|---|---|
| **Next.js 16** | Framework principal |
| **React 19** | Construção da interface |
| **TypeScript 5** | Tipagem estática |
| **Sass / SCSS** | Estilização |
| **Zustand** | Gerenciamento de estado |
| **Axios** | Comunicação com API |
| **React Hook Form** | Gerenciamento de formulários |
| **Zod** | Validação de dados |
| **Lucide React** | Ícones |
| **Vercel** | Deploy |

### Boas práticas presentes no frontend

- App Router do Next.js;
- componentes reutilizáveis;
- separação entre componentes de UI e componentes de negócio;
- CSS Modules com SCSS;
- validação de formulários;
- estado persistido com Zustand;
- interceptor Axios para autenticação;
- proteção de fluxos autenticados;
- tipagem com TypeScript.

---

## Backend

| Tecnologia | Utilização |
|---|---|
| **Python 3.12+** | Linguagem |
| **FastAPI** | API REST |
| **SQLAlchemy 2** | ORM |
| **PostgreSQL** | Banco de dados |
| **Pydantic** | Validação/modelagem |
| **JWT** | Autenticação |
| **bcrypt / passlib** | Segurança de senhas |
| **Alembic** | Migrações |
| **Uvicorn** | Servidor ASGI |
| **Vercel** | Deploy |

### Arquitetura do backend

O backend segue uma separação em camadas:

```text
routes
   ↓
services
   ↓
repositories
   ↓
entities / database
```

Isso permite separar:

- entrada HTTP;
- regras de negócio;
- acesso a dados;
- entidades;
- modelos de requisição e resposta.

---

# 📁 Estrutura do projeto

```text
code-queens/
│
├── backend/
│   ├── src/
│   │   └── main/
│   │       ├── database/
│   │       ├── entities/
│   │       ├── models/
│   │       ├── repositories/
│   │       ├── routes/
│   │       ├── services/
│   │       └── server/
│   │
│   ├── requirements.txt
│   ├── pyproject.toml
│   └── vercel.json
│
├── frontend/
│   ├── src/
│   │   ├── api/
│   │   ├── app/
│   │   ├── authSettings/
│   │   ├── components/
│   │   ├── constants/
│   │   ├── store/
│   │   ├── styles/
│   │   ├── types/
│   │   └── utils/
│   │
│   ├── public/
│   ├── package.json
│   ├── next.config.ts
│   └── tsconfig.json
│
└── README.md
```

---

# 🔌 Principais endpoints

## Autenticação

```http
POST /auth/login
POST /auth/logout
POST /auth/forgot-password
```

## Usuários

```http
POST   /users
GET    /users/email/{email}
PUT    /users/{user_id}
PATCH  /users/{user_id}/password
PATCH  /users/{user_id}/security_question
DELETE /users/{user_id}
```

## Avaliações

```http
POST  /assessments
POST  /assessments/{assessment_id}/submit
GET   /assessments/{user_id}/history
GET   /assessments/{assessment_id}
PATCH /assessments/{user_id}/history/{assessment_id}/title
```

## Configuração das avaliações

```http
GET /levels
GET /stacks
GET /security-questions
```

## Termos

```http
GET /terms/usage
GET /terms/policy
```

---

# ▶️ Como executar localmente

## Pré-requisitos

- Node.js
- npm
- Python 3.12+
- PostgreSQL

---

## 1. Clone o projeto

```bash
git clone <URL_DO_REPOSITORIO>
cd code-queens
```

---

## 2. Configure o banco

Crie um banco PostgreSQL e configure as variáveis de ambiente do backend.

Exemplo:

```env
DB_USER=seu_usuario
DB_PASSWORD=sua_senha
DB_HOST=localhost
DB_PORT=5432
DB_NAME=stackcheck
```

Os scripts SQL disponíveis em:

```text
backend/src/main/database/sql/
```

devem ser executados na ordem:

```text
001_create_schema.sql
002_create_tables.sql
003_insert_data.sql
```

---

## 3. Execute o backend

```bash
cd backend
python -m venv .venv
```

### Windows

```bash
.venv\Scripts\activate
```

### Linux/macOS

```bash
source .venv/bin/activate
```

Instale as dependências:

```bash
pip install -r requirements.txt
```

Execute:

```bash
uvicorn src.main.server.server:app --reload
```

A API ficará disponível, por padrão, em:

```text
http://localhost:8000
```

A documentação automática do FastAPI pode ser acessada em:

```text
http://localhost:8000/docs
```

---

## 4. Configure o frontend

Crie o arquivo:

```text
frontend/.env.local
```

Com:

```env
NEXT_PUBLIC_BASE_URL=http://localhost:8000
```

Instale as dependências:

```bash
cd frontend
npm install
```

Execute:

```bash
npm run dev
```

A aplicação ficará disponível em:

```text
http://localhost:3000
```

---

# 🚀 Deploy

O frontend foi preparado para deploy na **Vercel** utilizando Next.js.

O backend também possui configuração para execução na Vercel através de:

```text
backend/vercel.json
```

A aplicação em produção pode ser acessada em:

**https://stack-check-chi.vercel.app**

---

# 🔐 Segurança

O projeto possui uma camada de autenticação baseada em **JWT Bearer Token**.

O fluxo é:

```text
Login
  ↓
API valida credenciais
  ↓
JWT é gerado
  ↓
Frontend armazena o token
  ↓
Axios adiciona Bearer Token às requisições
  ↓
Endpoints protegidos validam o usuário
```

Também foram implementados:

- hash de senha;
- validação de dados;
- autenticação por token;
- expiração do JWT;
- proteção de recursos por usuário;
- recuperação de senha;
- pergunta de segurança.

---

# 🎨 Experiência do usuário

A interface foi pensada para reduzir a fricção durante a preparação.

O fluxo principal é:

```text
Landing Page
      ↓
Cadastro / Login
      ↓
Configuração do teste
      ↓
Questionário
      ↓
Resultado
      ↓
Recomendações
      ↓
Histórico
      ↓
Novo teste
```

O objetivo é transformar o processo de avaliação em um **ciclo contínuo de evolução**, e não em um teste isolado.

---

# 🏆 Por que o StackCheck?

Porque conhecimento técnico não deveria ser medido apenas quando a entrevista começa.

O StackCheck permite que o profissional descubra seus pontos fortes e lacunas **antes da entrevista**.

### Para o profissional

- reduz a insegurança;
- mostra onde estudar;
- permite medir evolução;
- transforma estudo em algo mensurável;
- ajuda a direcionar a preparação para tecnologias específicas.

### Para o ecossistema de tecnologia

A solução pode evoluir para conectar:

**vaga → requisitos técnicos → avaliação → lacunas → plano de estudo → nova avaliação**

Ou seja, transformar preparação profissional em um processo baseado em dados.

---

# 🔮 Próximos passos

A evolução do StackCheck pode ampliar a preparação dos profissionais para processos seletivos, tornando a plataforma cada vez mais personalizada e orientada por dados.

Entre as próximas evoluções planejadas estão:

- análise automática da descrição de uma vaga;
- criação de trilhas de estudo personalizadas;
- comparação entre diferentes avaliações;
- gráficos de evolução por stack;
- ampliação contínua do banco de questões;
- questões práticas e desafios de código;
- recomendações de conteúdos de estudo;
- recuperação de senha a partir da pergunta de segurança.

