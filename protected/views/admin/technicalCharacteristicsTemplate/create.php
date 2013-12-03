<?php
$this->breadcrumbs=array(
	'Technical Characteristics Templates'=>array('index'),
	'Create',
);

$this->menu=array(
	array('label'=>'К списку шаблона','url'=>array('index')),

);
?>

<h1>Добавление шаблона характеристик</h1>

<?php echo $this->renderPartial('_form', array('model'=>$model)); ?>