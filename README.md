# SecurePage Access 🚪🔒

Este projeto é uma aplicação em **Node.js** com **Express** que implementa um sistema de verificação de senha para acessar diferentes páginas.  

## 🛠️ Tecnologias Utilizadas

- **Node.js**: Ambiente de execução para JavaScript.
- **Express.js**: Framework para criação de servidores web.
- **Body-parser**: Middleware para processar dados de formulários.
- **Path**: Módulo para manipulação de caminhos de arquivos.

---

## 🚀 Como Executar o Projeto

1. **Clone o repositório**:
   ```bash
   git clone git@github.com:Joao-VictorCm/SecurePage-Access.git
   ```
2. **Instale as dependências**: 
```bash
   npm install
```

3. **Execute o servidor**:
```bash
  node index.js
```

4. **Acesse no navegador**:
   
 Abra o navegador e vá para: http://localhost:3001.

 ---

## 🔑 Como Funciona
1. Acesse a página inicial:
    - O servidor serve o arquivo page.html localizado na pasta public.
  
2. Digite a senha:
   - A senha correta é ILoveProgramming.
   - Se a senha estiver correta, você será redirecionado para acesso.html.
   - Caso contrário, será redirecionado para acessoNegado.html.

3. Estrutura de Páginas:
   - page.html: Formulário de entrada para a senha.
   - acesso.html: Página exibida ao digitar a senha correta.
   - acessoNegado.html: Página exibida ao digitar a senha incorreta.

   ---
  
## 📂 Estrutura do Projeto
```plaintext
Copiar código
📁 public
   ├── page.html         # Página inicial (formulário de senha)
   ├── acesso.html       # Página de acesso autorizado
   └── acessoNegado.html # Página de acesso negado
📄 index.js             # Código principal do servidor
📄 package.json           # Dependências e metadados do projeto
