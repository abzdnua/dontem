<?php
$this->breadcrumbs=array(
	'News'=>array('index'),
	$model->title=>array('view','id'=>$model->id),
	'Update',
);

$this->menu=array(
	array('label'=>'К списку новостей','url'=>array('index')),
	array('label'=>'Добавить новость','url'=>array('create')),
	array('label'=>'Удалить новость','url'=>array('delete','id'=>$model->id)),
);
?>

<h1>Редактирование новости </h1><h3><?php echo $model->title; ?></h3>

<?php echo $this->renderPartial('_form',array('model'=>$model)); ?>
