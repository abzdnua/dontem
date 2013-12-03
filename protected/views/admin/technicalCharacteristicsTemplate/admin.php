<?php
$this->breadcrumbs=array(
	'Technical Characteristics Templates'=>array('index'),
	'Manage',
);

$this->menu=array(

	array('label'=>'Добавить шаблон','url'=>array('create')),
);

Yii::app()->clientScript->registerScript('search', "
$('.search-button').click(function(){
	$('.search-form').toggle();
	return false;
});
$('.search-form form').submit(function(){
	$.fn.yiiGridView.update('technical-characteristics-template-grid', {
		data: $(this).serialize()
	});
	return false;
});
");
?>

<h1>Шаблоны характеристик</h1>

<?php $this->widget('bootstrap.widgets.TbGridView',array(
	'id'=>'technical-characteristics-template-grid',
	'dataProvider'=>$model->search(),
	'filter'=>$model,
    'type'=>'striped',
	'columns'=>array(
		'id',
		'name',
		'create_user_id',
		'create_date',
		'change_user_id',
		'change_date',
		/*
		'delete_denied',
		'deleted',
		*/
		array(
			'class'=>'bootstrap.widgets.TbButtonColumn',
            'template'=>'{update}{delete}',
		),
	),
)); ?>
