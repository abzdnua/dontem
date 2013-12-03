<?php
$this->breadcrumbs=array(
	'Technical Characteristics Templates'=>array('index'),
	$model->name=>array('view','id'=>$model->id),
	'Update',
);

$this->menu=array(
	array('label'=>'К списку шаблонов','url'=>array('index')),
	array('label'=>'Добавить шаблона','url'=>array('create')),
	array('label'=>'Удалить шаблон','url'=>array('delete','id'=>$model->id)),
);
?>

<h1>Редактирование шаблона характеристик <?php echo $model->id; ?></h1>

<?php echo $this->renderPartial('_form',array('model'=>$model)); ?>