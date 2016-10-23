<?php

header('Content-Type: application/json');

require_once('PHPMailer/PHPMailerAutoload.php');
function sendEmail($msg) {
	$mail             = new PHPMailer();
	$subject = "Formulario de contacto web"; 
	$message = "<h1>Informacion del usuario:</h1>\n\n".$msg;

	$mail->IsSMTP(); // telling the class to use SMTP
	$mail->SMTPDebug  = 0;                     // enables SMTP debug information (for testing)
	                                           // 1 = errors and messages
	                                           // 2 = messages only
	$mail->SMTPAuth   = true;                  // enable SMTP authentication
	$mail->Host       = "ssl://smtp.gmail.com"; // sets the SMTP server
	$mail->Port       = 465;                    // set the SMTP port for the GMAIL server
	$mail->Username   = "direcion email"; // SMTP account username
	$mail->Password   = "contraseña email";        // SMTP account password

	$mail->SetFrom('direcion correo', 'Mailer Web');

	$mail->Subject    = $subject;

	$mail->AltBody    = strip_tags($message);
	$mail->MsgHTML($message);
	$address = "direccion envio";
	$mail->AddAddress($address);
	return $mail->Send();
}


if(isset($_POST["name"]) && isset($_POST["email"]) && isset($_POST["msg"])){
	$name=  $_POST["name"];
	$email=  $_POST["email"];
	$msg=  $_POST["msg"];
	$r=sendEmail("Nombre: ".$name."<br/>Email: ".$email."<br/>Mensaje: ".$msg);
	echo '{"state":"'.$r.'","msg":"success"}';
} else {
	$error="Revise los siguientes campos: ";
	if(!isset($_POST["name"])){
		$error.="Nombre ";
	}
	if(!isset($_POST["email"])){
		$error.="Email ";
	}
	if(!isset($_POST["msg"])){
		$error.="Mensaje.";
	}
	echo '{"state":"-1","msg":"'.$error.'"}';
}


?>
