<?php
$this->breadcrumbs=array(
	'Units'=>array('index'),
	'Create',
);

$this->menu=array(
	array('label'=>'К списку ед. измерения','url'=>array('index')),

);
?>

<h1>Добавление ед. измерения</h1>

<?php echo $this->renderPartial('_form', array('model'=>$model)); ?>