const doc = document.getElementById("nrodoc");
const tipo = document.getElementById("tipodoc");

doc.addEventListener('keyup', (e) =>{
    if (tipo.value == 1){
        verificarString(e.key);
    }
});

tipo.addEventListener('change', () => {
    doc.value = "";
});

function verificarString(car) {
    if (car == '-'){
        if (doc.value.charAt(0) == '-'){
            doc.value = "";
        }else{
            if (contarGuiones() > 1){
                restarChar();
            }
        }
    }else if (car >= 0 && car <= 9){
        if (contarGuiones() == 1 && doc.value.charAt(doc.value.length - 3) == '-'){
            restarChar();
        }
    }else if (!(car == 'Backspace' || car == 'Enter')){
        restarChar();
    }
    formatear();
}

function contarGuiones(){
    let i = 0;
    for (let k = 0; k < doc.value.length; k++){
        if (doc.value.charAt(k) == '-'){
            i++;
        }
    }
    return i;
}

function restarChar() {
    doc.value = doc.value.substring(0, doc.value.length - 1);
}

function formatear(){
    let ind = doc.value.indexOf('-');
    let corte = 0;
    if (ind != -1){
        corte = ind < doc.value.length - 1 ? ind + 2 : ind + 1;
        doc.value = doc.value.substring(0, corte); 
    }
}
