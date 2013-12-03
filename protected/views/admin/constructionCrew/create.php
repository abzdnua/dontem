<?php
$this->breadcrumbs=array(
	'Construction Crews'=>array('index'),
	'Create',
);

$this->menu=array(
	array('label'=>'К списку строительных бригад','url'=>array('index')),

);
?>

<h1>Добавление строительной бригады</h1>

<?php echo $this->renderPartial('_form', array('model'=>$model)); ?>