let nombre = (jordi) => {
    return jordi;
};
function guardarEnBBDD(jordi) {
    console.log(jordi);
}
guardarEnBBDD(nombre('jordi'));

function nombre(valor) {
    console.log(valor);
};
nombre('true');

function ParametrosInfinitos(...params) {
    params.forEach(element => console.log(element));
}
ParametrosInfinitos('1', '2', '3', '200000000000')

