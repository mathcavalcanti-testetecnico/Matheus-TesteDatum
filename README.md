## 1 Nesse Testcase foi validado o script "CREATE" com o methodo POST cobrindo os Status Code (201), Campos obrigatórios e Contrato.
## 2 Foi necessario passar um login, para que um token fosse gerado e que pudesse ser passado no methodo post create a user, em seguida.
## 3 Foi criado uma estrutura em JS utilizando Cypress e NodeJS para a execução.


   Foi solicitado que priorizasse o uso do array  para demonstrar o entendimento especifico na linguagem de JavaScript.


   Considerações: 


   A API mencionada possui controle limitado, exemplo: não é permitido o registro de um novo usuario.
   Ao realizar uma chamada ao endpoint POST/register eu recebo uma mensagem que apenas usuarios definidos tem sucesso no registro. Mensagem de erro: 
   
   {
   "error": "Note: Only defined users succeed registration"
   }
   
    Não foi encontrado essa lista de usuario pré definidos dentro da api. Entretanto analisando a API foi possivel identificar um desses usuarios acessando o post no    endpoint Register - Successul 
    

    {
    "email": "eve.holt@reqres.in",
    "password": "pistol"
    }