# 📝 API de Gerenciamento de Tarefas

Esta é uma API REST desenvolvida com Node.js que permite o gerenciamento de tarefas (CRUD), com validações, tratamento de erros e banco de dados simulado em memória.

---

## ⚙️ Como Executar o Sistema

### 1. Clone o repositório:

```bash
git clone https://github.com/seu-usuario/api-tarefas.git
```

### 2. Clone o repositório:

```bash
cd api-tarefas
```

### 3. Clone o repositório:

```bash
cd api-tarefas
```

### 4. Clone o repositório:

```bash
npm install joi express uuid
npm install morgan --save-dev
```

### 5. Iniciar o Server:

```bash
node src/app.js
```

## Endpoints Disponiveis:

### 📄 GET /api/tarefas

Retorna todas as tarefas cadastradas.

### ✅ GET /api/tarefas?concluida=true

Retorna somente as tarefas com o campo concluida igual a true.

### 🔍 GET /api/tarefas/:id

Retorna uma tarefa específica, com base no seu ID.

### 🆕 POST /api/tarefas

Cria uma nova tarefa.

```json
{
  "titulo": "Estudar Node.js",
  "descricao": "Aprofundar em APIs REST",
  "concluida": false
}
```

### ✏️ PUT /api/tarefas/:id

Atualiza todos os campos de uma tarefa existente.

```json
{
  "titulo": "Atualizado",
  "descricao": "Descrição atualizada",
  "concluida": true
}
```

### 🔄PATCH /api/tarefas/:id/concluir

Atualiza apenas o campo concluida de uma tarefa para true.

### ❌ DELETE /api/tarefas/:id

## 📌 Remove uma tarefa com base no seu ID.

✔️ Regras de Validação
titulo: obrigatório e deve ter no mínimo 3 caracteres.

descricao: obrigatório.

concluida: obrigatório e deve ser true ou false.
