<?php
$this->breadcrumbs=array(
	'Colors'=>array('index'),
	'Create',
);

$this->menu=array(
	array('label'=>'К списку цветов','url'=>array('index')),
);
?>

<h1>Добавление цвета</h1>

<?php echo $this->renderPartial('_form', array('model'=>$model)); ?>