/*
// cargar modal
const url = 'http://localhost:8080/back-crud/api/v1/empleado'
const contenedor = document.querySelector('tbody')
let resultados = ''

const modalEmpleado = new bootstrap.Modal(document.getElementById('modalEmpleado'))
const formEmpleado = document.querySelector('formEmp')
const nombre = document.getElementById('nombre')
const apellido = document.getElementById('apellido')
const numeropuesto = document.getElementById('numeropuesto')
const correo = document.getElementById('correo')
let opcion = ''

btnAltaEmp.addEventListener('click', ()=>{
	nombre.value='';
	apellido.value='';
	numeropuesto.value='';
	correo.value='';
	modalEmpleado.show();
	opcion = 'crear';
})

// mostrar registros
const mostrar = (empleados) => {
	alert('aaa')
	empleados.forEach(empleado => {
		resultados += '<tr> <td>${empleado.id}</td> <td>${empleado.nombre}</td> <td>${empleado.apellido}</td> <td>${empleado.numeropuesto}</td> <td>${empleado.correo}</td> </tr>'
		//resultados +='<tr><th>1</th><th>Fredy Alonso</th><th>Bojorquez Diaz de Leon</th><th>1</th><th>fbojorquez@coppel.com</th><th><a href="#" class="btn btn-warning btn-circle btn-sm"><i class="fas fa-edit"></i></a><a href="#" class="btn btn-danger btn-circle btn-sm"><i class="fas fa-trash"></i></a></th></tr>'
		//let resultados = '<tr> <td>${empleado.id}</td> <td>${empleado.nombre}</td> <td>${empleado.apellido}</td> <td>${empleado.numeropuesto}</td> <td>${empleado.correo}</td> </tr><a href="#" class="btn btn-warning btn-circle btn-sm"><i class="fas fa-edit"></i></a><a href="#" class="btn btn-danger btn-circle btn-sm"><i class="fas fa-trash"></i></a></th></tr>'
		document.querySelector('#empleadosDetalle tbody').outerHTML = resultados//'<tr><th>1</th><th>Fredy Alonso</th><th>Bojorquez Diaz de Leon</th><th>1</th><th>fbojorquez@coppel.com</th><th><a href="#" class="btn btn-warning btn-circle btn-sm"><i class="fas fa-edit"></i></a><a href="#" class="btn btn-danger btn-circle btn-sm"><i class="fas fa-trash"></i></a></th></tr><tr><th>9</th><th>UPDATE</th><th>Prueba</th><th>1</th><th>test@test.com</th><th><a href="#" class="btn btn-warning btn-circle btn-sm"><i class="fas fa-edit"></i></a><a href="#" class="btn btn-danger btn-circle btn-sm"><i class="fas fa-trash"></i></a></th></tr>'

	})
	contenedor.innerHTML = resultados
	//resultados += 
	
	//document.querySelector("#empleadosDetalle tbody").outerHTML = "sadsdasdasd"
}

// Call the dataTables jQuery plugin
var request = {
	method: 'GET',
	headers: new Headers({ 'Content-type': 'application/json'}),
    mode: 'no-cors',
	redirect: 'follow'
  };

fetch(url, request)
.then(response => response.json())
.then(data => mostrar(data))
.then(result => console.log(result))
.catch(error => console.log('error', error));
alert(data);
alert(response);

*/















$(document).ready(function () {

	cargarusuarios();
	$('#empleadosDetalle').DataTable();
	//alert('La siguiente información puede ser sensible, favor de tener cuidado...');
	
	//document.querySelector("#empleadosDetalle tbody").outerHTML ='<tr><th>1</th><th>Fredy Alonso</th><th>Bojorquez Diaz de Leon</th><th>1</th><th>fbojorquez@coppel.com</th><th><a href="#" class="btn btn-warning btn-circle btn-sm"><i class="fas fa-edit"></i></a><a href="#" class="btn btn-danger btn-circle btn-sm"><i class="fas fa-trash"></i></a></th></tr>'

});

async function cargarusuarios() {
	const request = await fetch('http://localhost:8080/back-crud/api/v1/empleado', {
		method: 'GET',
		headers: new Headers({ 
				'Content-type': 'application/json'
			}),
		mode: 'no-cors',
		redirect: 'follow'		
	});
	
	let promise = new Promise(function(resolve, reject) { 
		let empleadosDetalle =''
		//alert(promis);
		//let listadoTotal = '';
		for (let promise of empleadosDetalle){
		//let promise = '<tr><th>1</th><th>Fredy Alonso</th><th>Bojorquez Diaz de Leon</th><th>1</th><th>fbojorquez@coppel.com</th><th><a href="#" class="btn btn-warning btn-circle btn-sm"><i class="fas fa-edit"></i></a><a href="#" class="btn btn-danger btn-circle btn-sm"><i class="fas fa-trash"></i></a></th></tr>'
		
		}
		
		//document.querySelector("#empleadosDetalle tbody").outerHTML = promise;
		document.querySelector('#empleadosDetalle tbody').outerHTML = '<tr><th>1</th><th>Fredy Alonso</th><th>Bojorquez Diaz de Leon</th><th>1</th><th>fbojorquez@coppel.com</th><th><a href="#" class="btn btn-warning btn-circle btn-sm"><i class="fas fa-edit"></i></a><a href="#" class="btn btn-danger btn-circle btn-sm"><i class="fas fa-trash"></i></a></th></tr><tr><th>9</th><th>UPDATE</th><th>Prueba</th><th>1</th><th>test@test.com</th><th><a href="#" class="btn btn-warning btn-circle btn-sm"><i class="fas fa-edit"></i></a><a href="#" class="btn btn-danger btn-circle btn-sm"><i class="fas fa-trash"></i></a></th></tr>'
		
	});

	/*alert(empleados)	
	fetch("http://localhost:8080/back-crud/api/v1/empleado", request)
	.then(response => response.json())
	.then(data => mostrar(data))
	.then(result => console.log(result))
	.catch(error => console.log('error', error));
	console.log(empleados);
	const empleados = await request.json();
	document.querySelector("#empleadosDetalle tbody").outerHTML = empleados;
	$('#empleadosDetalle').DataTable();
	*/





}











