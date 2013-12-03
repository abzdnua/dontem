<?php
$this->breadcrumbs=array(
	'Units'=>array('index'),
	'Manage',
);

$this->menu=array(

	array('label'=>'Добавить ед. измерения','url'=>array('create')),
);

Yii::app()->clientScript->registerScript('search', "
$('.search-button').click(function(){
	$('.search-form').toggle();
	return false;
});
$('.search-form form').submit(function(){
	$.fn.yiiGridView.update('units-grid', {
		data: $(this).serialize()
	});
	return false;
});
");
?>

<h1>Ед. измерения</h1>

<?php $this->widget('bootstrap.widgets.TbGridView',array(
	'id'=>'units-grid',
	'dataProvider'=>$model->search(),
	'filter'=>$model,
    'type'=>'striped',
	'columns'=>array(
        array(
            'name'=>'id',
            'headerHtmlOptions'=>array('style'=>'width:30px'),
        ),
		'name',
        /*
		'create_user_id',
		'create_date',
		'change_user_id',
		'change_date',

		'delete_denied',
		'deleted',
		*/
		array(
			'class'=>'bootstrap.widgets.TbButtonColumn',
            'template'=>'{update}{delete}',
		),
	),
)); ?>
