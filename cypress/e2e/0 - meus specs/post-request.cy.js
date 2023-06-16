let url_login = "https://reqres.in/api/login";
let url_create = "https://reqres.in/api/users";

let user_login = {
  email: "eve.holt@reqres.in",
  password: "cityslicka",
};

let user_create = {
  name: "matheus",
  job: "leader",
};

let token;

describe("Tarefa 1", () => {
  it("Login de usuário para receber o token", () => {
    cy.request({
      method: "POST",
      url: url_login,
      headers: {
        "Content-Type": "application/json",
      },
      body: user_login,
    }).then((resp) => (token = resp.token));
  });
});

describe("Tarefa 2", () => {
  it("Criar usuário após fazer login", () => {
    cy.request({
      method: "POST",
      url: url_create,
      headers: {
        "Content-Type": "application/json",
        Authorization: "token QpwL5tke4Pnpja7X4",
      },
      body: user_create,
    }).then((resp) => {
      expect(resp.status).to.eq(201);
      console.log(resp.body);
    });
  });
});

let usuario_objeto = new Object({
  id: null,
  email: null,
  first_name: null,
  last_name: null,
  avatar: null,
});

describe("Tarefa 3", () => {
  it("Manipulando array de resposta, localmente", () => {
    cy.request({
      method: "GET",
      url: "https://reqres.in/api/users",
      headers: {
        "Content-Type": "application/json",
        Authorization: "token QpwL5tke4Pnpja7X4",
      },
    }).then((resp) => {
      console.log("============Payload original ============");
      console.log(resp.body.data);

      usuario_objeto = {
        avatar: "https://reqres.in/img/faces/1-image.jpg",
        email: "george.bluth@reqres.in",
        first_name: "George",
        id: 1,
        last_name: "Bluth",
      };

      resp.body.data.push(usuario_objeto);

      console.log("============Array de usuários manipulando ============");

      console.log(resp.body.data);
    });
  });
});

//1 - Validar o script de "CREATE" metodo "POST"  cobertura de testes em Rest-Assured da API
//2 - Validar cobertura de Status code, Campos obrigatorios e Contrato
//3 - Desenvolver com POJOs.
