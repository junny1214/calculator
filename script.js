let operacion = ''; 

function agregarNumero(num) {
    operacion += num;
    document.getElementById('pantalla').value = operacion;
}

function agregarOperacion(op) {
    operacion += ` ${op} `;
    document.getElementById('pantalla').value = operacion;
}

function calcular() {
    try {
        operacion = eval(operacion);
        document.getElementById('pantalla').value = operacion;
    } catch (error) {
        document.getElementById('pantalla').value = 'ERROR: EL DATO ES  INDEFINIDO';
    }
}

function limpiar() {
    operacion = '';
    document.getElementById('pantalla').value = '';
}

function borrar() {
    operacion = operacion.slice(0, -1);
    document.getElementById('pantalla').value = operacion;
}
