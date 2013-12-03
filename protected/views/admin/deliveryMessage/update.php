<?php
$this->breadcrumbs=array(
	'Delivery Messages'=>array('index'),
	$model->title=>array('view','id'=>$model->id),
	'Update',
);

$this->menu=array(
	array('label'=>'К списку сообщений','url'=>array('index')),
	array('label'=>'Создать сообщение','url'=>array('create')),
	array('label'=>'Удалить сообщение','url'=>array('delete','id'=>$model->id)),
);
?>

<h1>Редактирование сообщения <?php echo $model->id; ?></h1>

<?php echo $this->renderPartial('_form',array('model'=>$model)); ?>