$(document).ready(function(){

    $("#tipodoc").change(function(){
        console.log(typeof($("#tipodoc").val()));
       $("#nrodoc").val(""); 
    });

    $("#nrodoc").keyup(function(e){
        if ($("#tipodoc").val() == 1){
            verificarString(e.key);
        }
    });

    function verificarString(car) {

        if (car == '-'){
            if ($("#nrodoc").val().charAt(0) == '-'){
                $("#nrodoc").val("");
            }else{
                if (contarGuiones() > 1){
                    restarChar();
                }
            }
        }else if (car >= 0 && car <= 9){
            if (contarGuiones() == 1 && $("#nrodoc").val().charAt($("#nrodoc").val().length - 3) == '-'){
                restarChar();
            }
        }else if (!(car == 'Backspace' || car == 'Enter')){
            restarChar();
        }
        formatear();
    }

    function contarGuiones(){
        let i = 0;
        for (let k = 0; k < $("#nrodoc").val().length; k++){
            if ($("#nrodoc").val().charAt(k) == '-'){
                i++;
            }
        }
        return i;
    }

    function restarChar() {
        $("#nrodoc").val($("#nrodoc").val().substring(0, $("#nrodoc").val().length - 1));
    }
    
    function formatear(){
        let ind = $("#nrodoc").val().indexOf('-');
        let corte = 0;
        if (ind != -1){
            corte = ind < $("#nrodoc").val().length - 1 ? ind + 2 : ind + 1;
            $("#nrodoc").val($("#nrodoc").val().substring(0, corte)); 
        }
    }

})

