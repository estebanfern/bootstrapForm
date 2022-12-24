const doc = document.getElementById("nrodoc");
const tipo = document.getElementById("tipodoc");

doc.addEventListener('keypress', (e) =>{
    if (tipo.value == 1){
        verificarString(e.key);
    }
});

tipo.addEventListener('change', () => {
    doc.value = "";
});

function verificarString(car) {
    if ((car >=0 || car <= 9) || (car == '-')){
        if (doc.value.indexOf('-') >= 0) {
            if (car == '-'){
                restarChar();
            }else if (doc.value.indexOf('-') == doc.value.length-2) {
                restarChar();
            }
        }
    }
}

function restarChar() {
    doc.value = doc.value.substr(0, doc.value.indexOf('-'))
    console.log("hecho");
}
