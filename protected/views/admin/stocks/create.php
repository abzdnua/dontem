<?php
$this->breadcrumbs=array(
	'Stocks'=>array('index'),
	'Create',
);

$this->menu=array(
	array('label'=>'К списку акций','url'=>array('index')),

);
?>

<h1>Добавление акции</h1>

<?php echo $this->renderPartial('_form', array('model'=>$model)); ?>