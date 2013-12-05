<?php
$this->breadcrumbs=array(
	'Projects'=>array('index'),
	$model->title=>array('view','id'=>$model->id),
	'Update',
);

$this->menu=array(
	array('label'=>'К списку проектов','url'=>array('index')),
	array('label'=>'Добавить проект','url'=>array('create')),
	array('label'=>'Удалить проект','url'=>array('delete','id'=>$model->id)),
);
?>

<h1>Редактирование проекта</h1><h3><?php echo $model->title; ?></h3>

<?php echo $this->renderPartial('_form',array('model'=>$model)); ?>
