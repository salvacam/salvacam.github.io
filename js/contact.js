$(function(){ 

    var URL="php/contact.php";
    $("button[type='submit']").on("click",function(e){
    	e.preventDefault();

        var name = $("#nombre").val();
        var email = $("#email").val();
        var msg = $("#mensaje").val();

        var error="";
        if(name==="" || email==="" || msg==="" || !validateEmail(email)){
        //if (false) {
            error="Revise los siguientes campos: ";
            if(name===""){
                error+="Nombre ";
            }
            if(email==="" || !validateEmail(email)){
                error+="Email ";
            }
            if(msg===""){
                error+="Mensaje";
            }
            showError(error);
        } else {
            $(this).html('Enviando <i class="fa fa-spinner rotate"></i>');
            var data =
            {
                name: name,
                email: email,
                msg: msg
            };
            $.post(URL,data,function(response){
                console.log(response);
                if(response.state!=="-1"){
                    $("input[name='nombre']").val("");
                    $("input[name='email']").val("");
                    $("textarea[name='mensaje']").val("");
                    showSuccess("¡Gracias!");
                    $("form").remove();
                }else{
                    showError(response.msg);
                }
                $("button[type='submit']").html('Enviar <i class="fa fa-spinner rotate"></i>');
            },"json");
        }

        function showError(error){
            if($(".error").length<1){
                var msg=$("<span class='label label-danger'>"+error+"</span>");
                $("form").append(msg);
                setTimeout(function(){
                    msg.fadeOut(1000);
                    setTimeout(function(){
                        msg.remove();
                    },1000)
                },5000);
            }
        }

        function showSuccess(success){
            if($(".success").length<1) {
                var msg = $("<span class='label label-success'>" + success + "</span>");
                msg.insertBefore($("form"));
            }
        }

        function validateEmail(email) {
            var emailReg = /^([\da-z_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
            if( !emailReg.test( email ) ) {
                return false;
            } else {
                return true;
            }
        }
    });
	$("#telefono_contacto").on("click",function(e){		
	  	$(this).find('span').text($(this).data('last'));
		$(this).find('.last').css('background', 'transparent');
		$(this).find('.last').css('cursor', 'default');
    });

});