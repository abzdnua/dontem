<?php
$this->breadcrumbs=array(
	'Categories'=>array('index'),
	'Create',
);

$this->menu=array(
	array('label'=>'К списку разделов','url'=>array('index')),

);
?>

<h1>Добавление раздела</h1>

<?php echo $this->renderPartial('_form', array('model'=>$model)); ?>