var validacao = function() {
	var nome = $("#nome").val();
	var sobrenome = $("#sobrenome").val();
	var cpf = $("#cpf").val();
	var telefone = $("#telefone").val();
	var email = $("#email").val();
	var endereco = $("#endereco").val();

	if (nome == "") {
		alert("Por favor digite seu nome")
		$("nome").focus();
		return false;
	}

	if (sobrenome == "") {
		alert("Por favor digite seu sobrenome")
		$("sobrenome").focus();
		return false;
	}

	if (cpf == "") {
		alert("Por favor digite seu cpf")
		$("cpf").focus();
		return false;
	}

	if (telefone == "") {
		alert("Por favor digite seu telefone")
		$("telefone").focus();
		return false;
	}

	if (email == "") {
		alert("Por favor digite seu email")
		$("email").focus();
		return false;
	}

	if (endereco == "") {
		alert("Por favor digite seu endereço")
		$("endereco").focus();
		return false;
	}

	return true;
}

var excluirDados = function(cpf){
	if(confirm("Deseja Realmente Excluir?")){
		window.location.href = "/excluir?cpf=" + cpf;
	}
}