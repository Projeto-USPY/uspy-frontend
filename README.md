# USPY

## Clonando e instalando o projeto

### Instalando dependências

- Instale o [yarn](https://classic.yarnpkg.com/lang/en/docs/install/#windows-stable).
- Instale o [NodeJs LTS](https://nodejs.org/en/) (última versão testada: 16).
- Instale o [Docker](https://docs.docker.com/get-docker/)

### Configurando o backend

Clone o [backend do USPY](https://github.com/Projeto-USPY/uspy-backend/tree/local_development)
e faça o [setup com docker](https://github.com/Projeto-USPY/uspy-backend/tree/local_development#running-locally).

### Baixando e instalando o frontend

```sh
git clone https://github.com/Projeto-USPY/uspy-frontend
cd uspy-frontend
yarn install
```

### Criar um `.env`

```sh
echo 'API_URL=http://127.0.0.1:8080' > .env
```

### Executar em servidor local

Antes de fazer essa etapa, garanta que o seu usuário possui permissões para
abrir a porta `80`. Isso pode ser feito usando um usuário root ou através de
algo como [authbind](https://superuser.com/questions/710253/allow-non-root-process-to-bind-to-port-80-and-443#:~:text=Option%202%3A%20Use%20authbind%20to%20grant%20one%2Dtime%20access%2C%20with%20finer%20user/group/port%20control).

```sh
# Esse comando pode variar um pouco se você estiver usando authbind.
yarn run start --port 80
```

### Acessando o site

Acesse `http://127.0.0.1`. Usar `localhost` resultará num bloqueio do CORS.
