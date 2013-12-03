<?php
$this->breadcrumbs=array(
	'Construction Crews'=>array('index'),
	$model->name=>array('view','id'=>$model->id),
	'Update',
);

$this->menu=array(
	array('label'=>'К списку строительных бригад','url'=>array('index')),
	array('label'=>'Добавить строительную бригаду','url'=>array('create')),
	array('label'=>'Удалить строительную бригаду','url'=>array('delete','id'=>$model->id)),
);
?>

<h1>Редактирование строительной бригады <?php echo '"'.$model->name.'"'; ?></h1>

<?php echo $this->renderPartial('_form',array('model'=>$model)); ?>