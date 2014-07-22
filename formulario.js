var $form = $("#formulario"),
	$titulo = $("#titulo"),
	$url = $("#url"),
	$button = $("#mostrar-form"),
	$list = $("#contenido"),
	$post = $(".item").first();


function mostrarFormulario(){
	$form.slideToggle()
}

// Eventos 
$button.click( mostrarFormulario ) 
