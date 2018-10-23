
   $(function () {

	const lista = $('#lista');
	const nome = $('#nome');
	const btnenviar = $('#enviar');
	const btnexcluir = $('#excluir');


	read();

	//=================btn =================

	btnenviar.on('click', (event) => {
		event.preventDefault();
		create(nome.val());
		nome.val('');
	});

	//================ conteúdo gerado dinamicamente ==================

	$(document).on('click', '.deletar', (event) => {
		event.preventDefault();
		var button = $(event.currentTarget);
		var codigo = button.data('codigo');
		//del(codigo, button);
	});

	var buttonGlobal;

	$(document).on('click', '.editar', (event) => {
		//event.preventDefault();
		buttonGlobal = $(event.currentTarget);	
		var nome = buttonGlobal.data('nome');			
		buttonGlobal.parent().html('<input type="text" name="editNome" id="inputNome" class="form-control col-sm-8">');
		
		$('#inputNome').val(nome);
		$('#inputNome').focus();

	});

	$(document).on('keyup', '#inputNome', (event) => {

		var codigo = buttonGlobal.data('codigo');
		var nome = $('#inputNome').val();


		if (event.which == 13) {
			update(codigo, nome);
																  
		}		
	});

	$('#excluirModal').on('show.bs.modal', function (event) {

		var button = $(event.relatedTarget);
		var codigo = button.data('codigo');
		var nome = button.data('nome');
		var modal = $(this);

		modal.find('.modal-body #nome').text(nome);
		modal.find('.modal-body #codigo').text(codigo);

		// console.log(button);

		btnexcluir.on('click', (event) => {
			event.preventDefault();
			del(codigo, button);
			$('#excluirModal').modal('hide');
		});
	});



	function templateLista(id, c_nome, elemento = true) {
		return (elemento ? '<a href="#" class="list-group-item list-group-item-action">' : '') +
			'<span id="spanNome">' + (c_nome) + '</span>' +
			'<button class="btn btn-edit btn-sm float-right editar" data-codigo="' + id + '" data-nome="' + (c_nome) + '"  title="Editar">' +
			'<i class="fas fa-edit"></i></button>' +
			'<button class="btn btn-danger btn-sm float-right deletar" data-toggle="modal" data-target="#excluirModal"  data-codigo="' + id + '" data-nome="' + (c_nome) + '"  title="Excluir">' +
			'<i class="fas fa-trash"></i></button>' +
			(elemento ? '</a>' : '');
	}

	//================ajax================

	function read() {

		// lista.text('');

		$.ajax({
			method: "get",
			url: "http://localhost:8080/read",
			dataType: "json"

		})
			.done((response) => {

				console.log(response);

				$.each(response, (index, element) => {
					lista.append(templateLista(element.id, element.nome));
				});

			});
	}

	function create(tnome) {
	  

		$.ajax({
			method: "post",
			url: "http://localhost:8080/create",
			// dataType: "json",
			default: 'application/x-www-form-urlencoded; charset=UTF-8',
			// default: 'multipart/form-data',
			data: nome2,
			statusCode: {
				400: () => {
					console.log('Solicitação Ruim');
				},
				500: () => {
					console.log('Erro no servidor');
				}
			}
		})
			.done((response) => {

				console.log(response);

				lista.append(templateLista(response, tnome));
			});
	}

	function update(codigo, tnome) {

		$.ajax({
			method: "put",
			url: "http://localhost:8080/update/"+codigo,
			// dataType: "text/html",
			default: 'application/x-www-form-urlencoded; charset=UTF-8',
			data: 'nome='+tnome,
			statusCode: {
				200: () => {
					console.log('Dados atualizados');
				},
				500: () => {
					console.log('Erro no servidor');
				}
			}
		})
			.done((response) => {
				console.log(response);
				(response.status = 200) ?  $('#inputNome').parent().html(templateLista(codigo, tnome, false)) : console.log('erro');
			});
	}

	function del(codigo, button) {

		$.ajax({
			method: "delete",
			url: "http://localhost:8080/delete/" + codigo,
			statusCode: {
				400: () => {
					console.log('Solicitação Ruim');
				},
				500: () => {
					console.log('Erro no servidor');
				}
			}
		})
			.done((response) => {
				console.log(response);
				(response.status = 200) ? button.parent().remove() : console.log('erro');

			});
	}
});