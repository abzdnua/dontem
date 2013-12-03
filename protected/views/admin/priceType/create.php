<?php
$this->breadcrumbs=array(
	'Price Types'=>array('index'),
	'Create',
);

$this->menu=array(
	array('label'=>'К списку видов цен','url'=>array('index')),

);
?>

<h1>Добавление вида цен</h1>

<?php echo $this->renderPartial('_form', array('model'=>$model)); ?>