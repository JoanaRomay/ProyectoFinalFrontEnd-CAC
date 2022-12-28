
function totalTicket() {
    //elementos html que voy a necesitar 
    let cantidad = document.getElementById('cantidad').value;
    let categoria = document.getElementById('categoria').value;
    //variables 
    let valorTicket = 200;
    let ticketEstudiante = (valorTicket - (valorTicket * 80) / 100);
    let ticketTrainee = (valorTicket - (valorTicket * 50) / 100);
    let ticketJunior = (valorTicket - (valorTicket * 15) / 100);
       //verifico si la cantidad ingresada es mayor a 0 para ingresar al if, de lo contrario saldrá un alert 
    
    if (cantidad > 0) {
            //segun la categoria que se elija, se aplica el descuento correspondiente
            if (categoria == 'Estudiante') {
                total = ticketEstudiante * cantidad;
            } else if (categoria == 'Trainee') {
                total = ticketTrainee * cantidad;
            } else if (categoria == 'Junior') {
                total = ticketJunior * cantidad;
            } else if (categoria == 'General') {
                total = valorTicket * cantidad;
            }
            document.getElementById('importeTotal').innerHTML = total;
        }else {
            alert('Ingrese una cantidad correcta')
        }
}
//traigo el boton boton resumen del html
let buttonResumen = document.getElementById('btnResumen');
//boton vinculado con la funcion, para que al darle click, muestre el resultado
buttonResumen.addEventListener('click', totalTicket);

//creo una funcion que al darle click, limpie de datos el form
function borrar() {
    formulario.reset();
    importeTotal.innerHTML = ''; 
}
//traigo el boton borrar del html
let buttonBorrar = document.getElementById('btnBorrar');
//boton vinculado con la funcion, para que al darle click, borre los datos del form
buttonBorrar.addEventListener('click', borrar);