<?php
$this->breadcrumbs=array(
	'Stocks'=>array('index'),
	$model->name=>array('view','id'=>$model->id),
	'Update',
);

$this->menu=array(
	array('label'=>'К списку акций','url'=>array('index')),
	array('label'=>'Добавить акцию','url'=>array('create')),
	array('label'=>'Удалить акцию','url'=>array('delete','id'=>$model->id)),
);
?>

<h1>Редактирование акции <?php echo $model->id; ?></h1>

<?php echo $this->renderPartial('_form',array('model'=>$model)); ?>