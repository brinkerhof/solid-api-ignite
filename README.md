# App

Gympass style app.

## RFs (Requisitos Funcionais)
// Nao confunda requisitos funcionais com rotas da nossa api

- [ ] Deve ser possivel se cadastrar;
- [ ] Deve ser possivel se autenticar;
- [ ] Deve ser possivel obter o perfil de um usuario logado;
- [ ] Deve ser possivel obter o numero de check-ins realizados pelo usuario logado;
- [ ] Deve ser possivel o usuario obter seu historico de check-ins;
- [ ] Deve ser possivel o usuario buscar academias proximas;
- [ ] Deve ser possivel o usuario buscar academias pelo nome;
- [ ] Deve ser possivel o usuario realizar check-in em uma academia;
- [ ] Deve ser possivel validar o check-in de um usuario

## RNs (Regras de Negocio)

- [ ] O usuario nao deve poder se cadastrar com um e-mail duplicado;
- [ ] O usuario nao pode fazer 2 check-ins no mesmo dia;
- [ ] O usuario nao pode fazer check-in se nao estiver perto (100m) da academia;
- [ ] O check-in so pode ser validado ate 20 minmutos apos ser criado;
- [ ] O check-in so pode ser validado por administradores;
- [ ] A academia so pode ser cadastrada por administradores;

## RNFs (Requisitos Nao-funcionais)

- [ ] A senha do usuario precisa estar criptografada;
- [ ] Os dados da aplicacao percisam estar persistidos em um banco PostgreSQL;
- [ ] Todas as listas de dados precisam estar paginadas com 20 itens por pag;
- [ ] O usuario deve ser identificado por um JWT (JSON Web Token)