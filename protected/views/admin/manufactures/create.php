<?php
$this->breadcrumbs=array(
	'Manufactures'=>array('index'),
	'Create',
);

$this->menu=array(
	array('label'=>'К списку производителей','url'=>array('index')),

);
?>

<h1>Добавление производителя</h1>

<?php echo $this->renderPartial('_form', array('model'=>$model)); ?>