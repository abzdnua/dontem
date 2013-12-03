<?php
$this->breadcrumbs=array(
	'Categories'=>array('index'),
	$model->name=>array('view','id'=>$model->id),
	'Update',
);

$this->menu=array(
	array('label'=>'К списку разделов','url'=>array('index')),
	array('label'=>'Добавить раздел','url'=>array('create')),
	array('label'=>'Удалить раздел','url'=>array('delete','id'=>$model->id)),
);
?>

<h1>Редактирование раздела <?php echo $model->id; ?></h1>

<?php echo $this->renderPartial('_form',array('model'=>$model)); ?>