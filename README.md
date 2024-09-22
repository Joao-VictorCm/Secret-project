# Secret-project

Criado para treinar as solicitações get e post.

## Índice

- [Descrição](#descrição)
- [Tecnologias](#tecnologias)
- [Middleware](#middleware)
- [Instalação](#instalação)
- [Uso](#uso)


# Descrição

Este código implementa uma aplicação web simples utilizando o framework Express para Node.js. A aplicação permite que os usuários insiram uma senha e, com base na senha fornecida, determina se o acesso é permitido ou negado.

Principais Componentes:
Servidor Express: O código cria um servidor na porta 3001.
Arquivos Estáticos: Utiliza middleware para servir arquivos estáticos da pasta public.
Autenticação: Um middleware verifica se a senha enviada pelo usuário é "teste". Se for, o acesso é concedido; caso contrário, o acesso é negado.
Rotas:
A rota GET / serve a página inicial (page.html), onde o usuário pode inserir a senha.
A rota POST /check verifica a senha e redireciona o usuário para a página de acesso permitido (acesso.html) ou para a página de acesso negado (acessoNegado.html).
Funcionamento
O usuário acessa a aplicação e é apresentado a um formulário para inserir a senha.
Ao submeter o formulário, a senha é verificada.
Dependendo do resultado da verificação, o usuário é redirecionado para a página correspondente.

## Tecnologias

JavaScript, 
Node.js, 
Express,
HTML.

## Middleware

Path,
FileURLToPath,
Body-parser,

## Instalação

1. Clone o repositório:
   git clone git@github.com:Joao-VictorCm/Secret-project.git

# Uso
Para executar o projeto, use o seguinte comando:

node index.js
