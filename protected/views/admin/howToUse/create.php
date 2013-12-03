<?php
$this->breadcrumbs=array(
	'How To Uses'=>array('index'),
	'Create',
);

/*$this->menu=array(
	array('label'=>'К списку "Как это работает"','url'=>array('index')),

);*/

?>
<?php echo CHtml::link('Назад','/admin/howtouse',array('class'=>'btn pull-right')); ?>
<h1>Добавление применения</h1>

<?php echo $this->renderPartial('_form', array('model'=>$model)); ?>