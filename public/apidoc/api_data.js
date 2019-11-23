define({ "api": [
  {
    "type": "get",
    "url": "/clientes",
    "title": "",
    "group": "Clientes__",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "clientes",
            "description": "<p>Lista de Clientes</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Sucesso",
          "content": " HTTP/1.1 200 OK\n[{\n    \"email\": \"Cindy@gmail.com\",\n    \"nome\": \"Cindy \",\n    \"cpf\": 2234567890,\n    \"dataNascimento\": \"1992-04-03T03:00:00.000Z\",\n    \"estadoCivil\": \"Solteira\",\n    \"telefone\": 444456789,\n    \"comprou\": true\n}]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/clientesRoute.js",
    "groupTitle": "Clientes__",
    "name": "GetClientes"
  }
] });
