<?php
$this->breadcrumbs=array(
	'How To Uses'=>array('index'),
	$model->id=>array('view','id'=>$model->id),
	'Update',
);

/*$this->menu=array(
	array('label'=>'К списку "Как это работает"','url'=>array('index')),
	array('label'=>'Добавить применение','url'=>array('create')),
	array('label'=>'Удалить данную запись','url'=>array('delete','id'=>$model->id)),
);*/
?>
<?php echo CHtml::link('Назад','/admin/howtouse',array('class'=>'btn pull-right')); ?>
<h1>Редактирование записи "<?php echo $model->content; ?>"</h1>

<?php echo $this->renderPartial('_form',array('model'=>$model)); ?>