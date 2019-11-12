var express = require('express');
var router = express.Router();
var Pessoa = require('../modelos/pessoa');

/* GET home page. */
router.get('/', function (request, response, next) {
  Pessoa.todos(function(pessoas){
    response.render('index',  { 
      title: 'Node.js',
      pessoas: pessoas
    });
  });

});

router.get('/alterar', function (request, response, next) {
  Pessoa.buscar(request.query.cpf, function(pessoa){
    if (pessoa == null) {
      console.log("Pessoa não encontrada");
      response.render('alterar', {'pessoa': {}});
    }else{
      response.render('alterar', {'pessoa': pessoa});
    } 
  });
});

router.post('/alterar-pessoa', function (request, response, next) {

  var pessoa = new Pessoa();

  pessoa.cpf =  request.body.cpf;
  pessoa.nome =  request.body.nome;
  pessoa.sobrenome =  request.body.sobrenome;
  pessoa.telefone =  request.body.telefone;
  pessoa.email =  request.body.email;
  pessoa.endereco =  request.body.endereco;

  pessoa.salvar(function(){
    response.redirect("/"); 
  }, request.query.cpfAlterar)
});


router.get('/excluir', function (request, response, next) {
  var pessoa = new Pessoa();
  pessoa.cpf =  request.query.cpf;
  pessoa.excluir(function(){
    response.redirect("/"); 
  })

});

router.get('/pesquisar', function (request, response, next) {
  Pessoa.buscarPorNome(request.query.nome, function(pessoas){
    response.render('index', { 
      title: 'Pesquisando Clientes',
      pessoas: pessoas
    });
  });
});

router.post('/cadastrar-pessoa', function (request, response, next) {
  var pessoa = new Pessoa();

  pessoa.cpf =  request.body.cpf;
  pessoa.nome =  request.body.nome;
  pessoa.sobrenome =  request.body.sobrenome;
  pessoa.telefone =  request.body.telefone;
  pessoa.email =  request.body.email;
  pessoa.endereco =  request.body.endereco;

  pessoa.salvar(function(){
    response.redirect("/"); 
  });
});

module.exports = router;