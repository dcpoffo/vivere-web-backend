# vivere-web-backend
(em implementação)

Backend REST desenvolvido para dar suporte ao projeto **Vivere Web**, um sistema de gerenciamento clínico voltado à **fisioterapia, pilates e osteopatia**.

A API é responsável por gerenciar pacientes, atendimentos, avaliações clínicas, mensalidades, fotos e usuários, centralizando as regras de negócio e a persistência de dados.

---

## 🚀 Tecnologias utilizadas

* **Node.js 20**
* **Fastify** – framework web rápido e performático
* **TypeScript**
* **Prisma ORM**
* **PostgreSQL**
* **bcrypt** – hash de senhas

---

## 🧱 Arquitetura

A aplicação segue uma arquitetura baseada em **controllers**, onde cada rota delega sua responsabilidade para uma classe específica. O acesso ao banco de dados é feito exclusivamente através do **Prisma Client**.

O projeto foi estruturado para ser consumido por uma aplicação frontend em **React / Next.js**.

---

## 🔐 CORS e segurança

O CORS está configurado para permitir acesso apenas às origens:

* Produção: `https://vivere-web.vercel.app`
* Desenvolvimento: `http://localhost:3000`

Também são permitidas requisições sem origem (ex.: Postman ou cURL).

---

## 🗄️ Modelagem de dados

### 👤 Usuários

Gerencia os usuários do sistema, com suporte a autenticação:

* Nome
* CPF
* CREFITO
* Email
* Senha (hash)
* Profissão
* Role (padrão: `user`)

---

### 🧑 Pacientes

Entidade central do sistema:

* Dados pessoais e de contato
* Situação do paciente
* Relacionamentos com:

  * Atendimentos
  * Avaliações
  * Mensalidades
  * Fotos
  * Osteopatias

---

### 🗓️ Atendimentos

Controle das sessões realizadas:

* Data do atendimento
* Tipo de atendimento (ex.: Pilates)
* Observações e anotações clínicas
* Vínculo com o paciente

---

### 💰 Mensalidades

Gestão financeira dos pacientes:

* Mês e ano
* Valor
* Status de pagamento
* Controle por usuário logado

---

### 🧠 Avaliações

Avaliação clínica geral do paciente:

* Histórico de saúde
* Queixas e dores
* Hábitos e condições clínicas

---

### 📷 Fotos

Registro visual dos pacientes:

* Data da foto
* Caminho do arquivo

---

### 🦴 Osteopatia

Avaliação osteopática completa e detalhada:

* Queixa principal e histórico
* Sistemas corporais (digestivo, respiratório, cardiovascular, urinário etc.)
* Testes clínicos e funcionais
* Diagnósticos e observações

---

## 🔁 Rotas da API

### Pacientes

* `GET /pacientes` – Lista todos os pacientes
* `GET /paciente` – Busca paciente por ID
* `POST /paciente` – Cadastra paciente
* `PUT /paciente` – Atualiza paciente

---

### Usuários

* `GET /usuarios` – Lista usuários
* `GET /usuario` – Busca usuário por email

---

### Atendimentos

* `GET /atendimento` – Lista atendimentos por paciente
* `GET /atendimento/id` – Busca atendimento por ID
* `POST /atendimento` – Cria atendimento
* `PUT /atendimento` – Atualiza atendimento

---

### Mensalidades

* `GET /mensalidade` – Lista mensalidades por paciente
* `GET /mensalidade/id` – Busca mensalidade por ID
* `POST /mensalidade` – Cria mensalidade
* `PUT /mensalidade` – Atualiza mensalidade

---

### Avaliações

* `GET /avaliacao` – Lista avaliações por paciente
* `GET /avaliacao/id` – Busca avaliação por ID
* `POST /avaliacao` – Cria avaliação
* `PUT /avaliacao` – Atualiza avaliação

---

### Fotos

* `GET /foto` – Lista fotos por paciente
* `GET /foto/id` – Busca foto por ID
* `POST /foto` – Cria foto
* `PUT /foto` – Atualiza foto

---

### Osteopatias

* `GET /osteopatia` – Lista avaliações osteopáticas por paciente
* `GET /osteopatia/id` – Busca avaliação osteopática por ID
* `PUT /osteopatia` – Atualiza avaliação osteopática

---

## ▶️ Como executar o projeto

### Pré-requisitos

* Node.js 20+
* PostgreSQL

### Instalação

```bash
npm install
```

### Configuração do banco

Crie um arquivo `.env` com a variável:

```env
DATABASE_URL=postgresql://usuario:senha@localhost:5432/banco
```

Execute as migrations:

```bash
npx prisma migrate deploy
```

### Executar em desenvolvimento

```bash
npm run dev
```

A API ficará disponível em:

```
http://localhost:3333
```

---

## 🎯 Objetivo do projeto

Fornecer uma **API robusta e organizada** para o gerenciamento completo de informações clínicas e administrativas de pacientes, servindo como base para aplicações web na área da saúde.

---

## 📌 Observações

* O projeto está preparado para integração com autenticação no frontend (ex.: NextAuth)
* Estrutura pensada para fácil expansão e manutenção
