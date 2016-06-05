<?PHP

if(session_id() != '' && isset($_SESSION)) {    
	session_unset();
	session_destroy();
}

require_once 'vendor/autoload.php';


$loader = new Twig_Loader_Filesystem('template');
$twig = new Twig_Environment($loader, array());

$views = array("porfolio", "contact");
$dir_template="index";

if(isset($_GET['page'])) {
	if (in_array($_GET['page'], $views)) {
		$dir_template=$_GET['page'];
	}
}

include 'data.php';


$text = array(
	'titulo' => 'Inicio',
	'activo' => 'inicio',
	'cursos' => $cursos,
	'trabajos' => $trabajos,
	'formacion' => $formacion
); 

if ($dir_template == "porfolio") {
	$text = array(
		'titulo' => 'Porfolio',
		'activo' => 'porfolio',
		'proyectos' => $proyectos
	); 
} else if ($dir_template == "contact") {
	$text = array(
		'titulo' => 'Contacto',
		'activo' => 'contacto'
	); 
} 

echo $twig->render($dir_template.".html", $text);

?>
