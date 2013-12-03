<?php
$this->breadcrumbs=array(
	'Delivery Messages'=>array('index'),
	'Create',
);

$this->menu=array(
	array('label'=>'К списку сообщений','url'=>array('index')),

);
?>

<h1>Добавление сообщения</h1>

<?php echo $this->renderPartial('_form', array('model'=>$model)); ?>