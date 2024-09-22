//Para ver como o site final deve funcionar, execute "node solução.js".
//Certifique-se de ter instalado todas as dependências com "npm i".
//A senha é ILoveProgramming

import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";

const app = express();
const port = 3001;

var userIsAuthorised = false;
// Obter o diretório corretamente no ES Modules
const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Middleware para servir arquivos estáticos
app.use(express.static(path.join(__dirname, "public")));

app.use(bodyParser.urlencoded({ extended: true }));

function acesso(req, res, next) {
  const password = req.body["password"];
  if (password === "teste") {
    userIsAuthorised = true;
  }
  next();
}

app.use(acesso);

// Servir o arquivo index.html
app.get("/", (req, res) => {
  res.setHeader("Content-Type", "text/html"); // Força o tipo MIME para HTML
  res.removeHeader("Content-Disposition"); // Remove cabeçalhos que forçam download
  res.sendFile(path.join(__dirname, "public", "page.html"));
});

app.post("/check", (req, res) => {
  if (userIsAuthorised) {
    res.setHeader("Content-Type", "text/html"); 
    res.removeHeader("Content-Disposition");
    res.sendFile(path.join(__dirname, "public", "acesso.html"));
  } else {
    res.setHeader("Content-Type", "text/html"); 
    res.removeHeader("Content-Disposition");
    res.sendFile(path.join(__dirname, "public", "page.html"));
  }
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
