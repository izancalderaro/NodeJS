$('#excluirModal').on('show.bs.modal', function (event) {

	var button = $(event.relatedTarget);
	var codigo = button.data('codigo');
	var nome = button.data('nome');

	var modal = $(this);
	var form = modal.find('form');
	// var action = form.attr('action');
	var action = form.data('url-base');

	modal.find('.modal-body #nome').text(nome);
	modal.find('.modal-body #codigo').text(codigo);

	if (!action.endsWith('/')) {
		// action ='';
		// action += '/clientes/';
		action += '/';
	}

	form.attr('action', action + codigo);

});



//$(window).on('load', function () {
$(function () {

	const lista = $('#lista');
	const nome = $('#nome');
	const btnenviar = $('#enviar');


	read();


	function templateLista(id, c_nome) {
		return '<li class="list-group-item"><a href="" id="' + id + '">' + (c_nome) + '</a>' +
			'<a class="btn btn-link btn-xs float-right" data-toggle="modal" data-codigo="' + id + '" data-nome="'+(c_nome) +'" data-target="#excluirModal" title="Excluir" rel="tooltip">' +
			'<i class="fas fa-trash"></i></a></li>'
	}

	btnenviar.on('click', () => {
		// event.preventDefault();             
		create();
	});


	lista.on('click', (event) => {
		console.log($(event.currentTarget));
	});


   

	//================ajax================
	function read() {

		lista.text('');

		$.ajax({
			method: "get",
			url: "http://localhost:8080/read",
			dataType: "json"
		})
			.done((response) => {

				console.log(response);

				$.each(response, (index, element) => {
					lista.append(templateLista(element.id, element.nome));
					// lista.append('<li class="list-group-item"><a href="" id="' + element.id + '">' + (element.nome) + '</a>' +
					// 	'<a class="btn btn-link btn-xs float-right" data-toggle="modal" data-codigo="' + element.id + '" data-nome="'+(element.nome) +'" data-target="#excluirModal" title="Excluir" rel="tooltip">' +
					// 	'<i class="fas fa-trash"></i></a></li>');
				});
			});

	}

	function create() {

		var c_nome = $('#nome').val();

		$.ajax({
			method: "post",
			url: "http://localhost:8080/create",
			dataType: "json",
			default: 'application/x-www-form-urlencoded; charset=UTF-8',
			data: nome,
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

				lista.append(templateLista(response, c_nome));
			});



	}

	function edit() {

	}

	function update() {

	}

	function del(element) {

	}

	$('[rel="tooltip"]').tooltip();

});
