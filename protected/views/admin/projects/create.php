<?php
$this->breadcrumbs=array(
	'Projects'=>array('index'),
	'Create',
);

$this->menu=array(
	array('label'=>'К списку проектов','url'=>array('index')),

);
?>

<h1>Добавление Projects</h1>

<?php echo $this->renderPartial('_form', array('model'=>$model)); ?>
