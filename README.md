# meli-reprograma_projetopratico1
MercadoLivre | BackEnd | Projeto Prático

## Projeto Prático - API Tarefas

**Objetivo:** Criar uma API utilizando JavaScript com NodeJS, Express e Postman; verbo HTML utilizado: GET.

### Planejamento das atividades

#### Preparação ambiente node (linha de comando)

Na pasta do projeto, iniciar o prompt de comando:

1. Criar arquivo package.json - *npm init*;
      - para completar o package.json tem que inserir (ou não) as infos que aparecer no console pressionando enter.
2. Instalar framework express - *npm install --save express*;
      - vai criar a pasta node_modules
3. Instalar framework nodemon - usado para atualizar a aplicação automaticamente sem precisar iniciar;

#### Estruturar projeto
Fonte: https://github.com/amandabacelli/meli-reprograma_projetopratico1/blob/master/revisao/n1-meli-estrutura-nodejs.png?raw=true

1. Configurar nodemon e .gitignore
    - **Nodemon**: No package.json incluir uma linha dentro do bloco "script"
       > "start": "nodemon ./server.js"
    - **.gitignore** : criar arquivo na raiz do projeto para que quando subir o projeto no git, não suba a pasta *node_modules*. Digitar o nome da pasta dentro do arquivo
    

2. Criar:
    - arquivo server.js - configurações da aplicação, porta, listen, será dado o domínio; - criar na raiz do projeto
    - arquivo app.js  - indicação das rotas e configurações de requisição - criar dentro da pasta que o projeto será desenvolvido (ex: src)
    - pasta routes - comportará os arquivos das rotas e seus respectivos verbos. Precisa importar o const router = express.Router()
       > criar arquivo index.js - será a página inicial da aplicação
       > criar arquivo nomedarotaRoute.js > é um arquivo para cada rota após o domínio ex: localhost:3030/**tarefas**
    - pasta controllers - definição das ações(métodos) que serão realizadas nas rotas; comportará os arquivos controller de cada rota respectivamente. Para o index não é necessário neste projeto
       > criar arquivo rotaController.js - um para cada rota;
    - pasta models - dados armazenados, banco de dados
       > criar arquivo nome.json, txt, etc;
       
3. Escrever código e rotas conforme o verbo
    **endpoints criados:**
    - localhost:3030/tarefas
    - localhost:3030/tarefas/:id
    - localhost:3030/tarefas/colaborador/:nome


4. Verificar a aplicação no **POSTMAN**
    - Criar collection para o projeto
    - para cada verbo e rota utilizada, criar uma nova requisição de modo a ficar salvo os caminhos e resultados
    

    
    


