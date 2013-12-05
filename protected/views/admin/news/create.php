<?php
$this->breadcrumbs=array(
	'News'=>array('index'),
	'Create',
);

$this->menu=array(
	array('label'=>'К списку новостей','url'=>array('index')),

);
?>

<h1>Добавление новости</h1>

<?php echo $this->renderPartial('_form', array('model'=>$model)); ?>
