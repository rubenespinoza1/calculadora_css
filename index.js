
function type_number_on_result(number) {
    const new_number = document.getElementById('new_number');
    if (number == '.' && new_number.textContent == '') {
        return;
    }
    if (new_number.textContent == '') {
        new_number.textContent = number;
    } else {
        new_number.textContent = new_number.textContent + number;
    }

}

function erase_all() {
    const result = document.getElementById('result');
    const new_number = document.getElementById('new_number')

    result.textContent = '';
    new_number.textContent = '';

}

function erase_last(){
    const new_number = document.getElementById('new_number')
    if (new_number.textContent.length === 1){
        new_number.textContent = '';
    }else if (new_number.textContent.length > 1){
        new_number.textContent = new_number.textContent.substring(0, new_number.textContent.length - 1);
    }
}

function execute_operation(operation) {
    const result = document.getElementById('result');
    const new_number = document.getElementById('new_number')

    if (result.textContent == '') {
        switch (operation) {
            case '+':
                result.textContent = new_number.textContent + ' + '
                new_number.textContent = '';
                break;
            case '-':
                result.textContent = new_number.textContent + ' - '
                new_number.textContent = '';
                break;
            case '*':
                result.textContent = new_number.textContent + ' * '
                new_number.textContent = '';
                break;
            case '/':
                result.textContent = new_number.textContent + ' / '
                new_number.textContent = '';
                break;
        }
    } else {
        switch (operation) {
            case '+':
                result.textContent = result.textContent + ' + '
                new_number.textContent = '';
                break;
            case '-':
                result.textContent = result.textContent + ' - '
                new_number.textContent = '';
                break;
            case '*':
                result.textContent = result.textContent + ' * '
                new_number.textContent = '';
                break;
            case '/':
                result.textContent = result.textContent + ' / '
                new_number.textContent = '';
                break;
        }
    }
}

function equals() {
    const result = document.getElementById('result');
    const new_number = document.getElementById('new_number')

    result.textContent += new_number.textContent

    const operacion_separada = result.textContent.split(' ');
    console.log(operacion_separada)
    if (operacion_separada.length > 3) {
        alert('error de sintaxis')
        result.textContent = '';
        new_number.textContent = '';
        return
    }

    switch (operacion_separada[1]) {
        case '+':
            result.textContent = (+operacion_separada[0] + +operacion_separada[2]);
            break;
        case '-':
            result.textContent = operacion_separada[0] - operacion_separada[2];
            break;
        case '*':
            result.textContent = operacion_separada[0] * operacion_separada[2];
            break;
        case '/':
            if (operacion_separada[2] != '0') {
                result.textContent = operacion_separada[0] / operacion_separada[2];
            } else {
                result.textContent = '';
                new_number.textContent = '';
                alert('No se puede divir por 0')
            }
            break;
    }
    new_number.textContent = '';
}
