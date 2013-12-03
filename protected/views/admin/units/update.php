<?php
$this->breadcrumbs=array(
	'Units'=>array('index'),
	$model->name=>array('view','id'=>$model->id),
	'Update',
);

$this->menu=array(
	array('label'=>'К списку ед. измерения','url'=>array('index')),
	array('label'=>'Добавить ед. измерения','url'=>array('create')),
	array('label'=>'Удалить ед. измерения','url'=>array('delete','id'=>$model->id)),
);
?>

<h1>Редактирование ед. измерения <?php echo $model->id; ?></h1>

<?php echo $this->renderPartial('_form',array('model'=>$model)); ?>