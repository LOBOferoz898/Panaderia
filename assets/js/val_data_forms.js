$(document).ready(function () {
    const RegexLet = /^[A-Z]+$/i; // RegEx para validar solo letras

    const RegexEmail = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i; // RegEx para validar Email

    const RegexCelular = /^(\+?56)?(\s?)(0?9)(\s?)[98765432]\d{7}$/; //RegEx para validar Celular en Chile

    
    $('#nombre').on("focusout",function(){
        var nombre = document.getElementById('nombre').value;
        if (RegexLet.test(nombre.trim()) && nombre.length > 0) {
            $('#error-nombre').addClass("d-none");
        }else if (nombre === ""){
            $('#error-nombre').removeClass("d-none");
            $('#error-nombre').html("Campo obligatorio");
        }else{
            $('#error-nombre').removeClass("d-none");
            $('#error-nombre').html("Ingrese correctamente "); 
        }
    });
    
    
    $('#apellido-m').on("focusout",function(){
        var apmaterno = document.getElementById('apellido-m').value;
        if (RegexLet.test(apmaterno.trim()) && apmaterno.length > 0) {
            $('#error-apmaterno').addClass("d-none");
        }else if(apmaterno ===""){
            $('#error-apmaterno').removeClass("d-none");
            $('#error-apmaterno').html("Campo obligatorio");            
        }else{
            $('#error-apmaterno').removeClass("d-none");
            $('#error-apmaterno').html("Ingrese correctamente "); 
        }
    });
    
    
    $('#apellido-p').on("focusout",function(){
        var appaterno = document.getElementById('apellido-p').value;
        if (RegexLet.test(appaterno.trim()) && appaterno.length > 0) {
            $('#error-appaterno').addClass("d-none");
        }else if(appaterno === ""){
            $('#error-appaterno').removeClass("d-none");
            $('#error-appaterno').html("Campo obligatorio");   
        }else{
            $('#error-appaterno').removeClass("d-none");
            $('#error-appaterno').html("Ingrese correctamente "); 
        }
    });

    $('#email').on("focusout",function () {
        var email = document.getElementById('email').value;

        if (RegexEmail.test(email)) {
            $('#error-email').addClass('d-none');
        }else if(email === ""){
            $('#error-email').removeClass("d-none");
            $('#error-email').html("Campo obligatorio");
        }else{
            $('#error-email').removeClass('d-none');
        }
    });

    $('#telefono').on("focusout", function(){
        var telefono = document.getElementById('telefono').value;

        if(RegexCelular.test(telefono)){
            $('#error-telefono').addClass("d-none");
        }else if(telefono === ""){
            $('#error-telefono').removeClass("d-none");
            $('#error-telefono').html("Campo obligatorio");
        }else{
            $('#error-telefono').removeClass("d-none");
            $('#error-telefono').html("formato celular incorrecto");
        }

    });


    $('#direccion').on('focusout',function(){
        
        var direccion = document.getElementById('direccion').value;

        if (direccion.trim() === "") {
            $('#error-direccion').removeClass('d-none');
        }else{
            $('#error-direccion').addClass('d-none');
        }

    });

    $('#comuna').on('focusout',function(){
        
        var comuna = document.getElementById('comuna').value;

        if (comuna.trim() === "") {
            $('#error-comuna').removeClass('d-none');
        }else{
            $('#error-comuna').addClass('d-none');
        }

    });

    $('#ciudad').on('focusout',function(){
        
        var ciudad = document.getElementById('ciudad').value;

        if (ciudad.trim() === "") {
            $('#error-ciudad').removeClass('d-none');
        }else{
            $('#error-ciudad').addClass('d-none');
        }

    });

});






