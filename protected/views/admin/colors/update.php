<?php
$this->breadcrumbs=array(
	'Colors'=>array('index'),
	$model->name=>array('view','id'=>$model->id),
	'Update',
);

$this->menu=array(
	array('label'=>'К списку цветов','url'=>array('index')),
	array('label'=>'Добавить цвет','url'=>array('create')),
);
?>

<h1>Редактирование цвета <?php echo $model->name; ?></h1>

<?php echo $this->renderPartial('_form',array('model'=>$model)); ?>