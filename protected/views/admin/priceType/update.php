<?php
$this->breadcrumbs=array(
	'Price Types'=>array('index'),
	$model->name=>array('view','id'=>$model->id),
	'Update',
);

$this->menu=array(
	array('label'=>'К списку видов цен','url'=>array('index')),
	array('label'=>'Добавить вид цен','url'=>array('create')),
	array('label'=>'Удалить вид цен','url'=>array('delete','id'=>$model->id)),
);
?>

<h1>Редактирование записи "<?php echo $model->name; ?>"</h1>

<?php echo $this->renderPartial('_form',array('model'=>$model)); ?>