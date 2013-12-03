<?php
$this->breadcrumbs=array(
	'Manufactures'=>array('index'),
	$model->name=>array('view','id'=>$model->id),
	'Update',
);

$this->menu=array(
	array('label'=>'К списку производителей','url'=>array('index')),
	array('label'=>'Добавить производителя','url'=>array('create')),
	array('label'=>'Удалить производителя','url'=>array('delete','id'=>$model->id)),
);
?>

<h1>Редактирование производителя <?php echo $model->id; ?></h1>

<?php echo $this->renderPartial('_form',array('model'=>$model)); ?>