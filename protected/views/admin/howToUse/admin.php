<?php
$this->breadcrumbs=array(
	'How To Uses'=>array('index'),
	'Manage',
);

$this->menu=array(

	array('label'=>'Добавить применение','url'=>array('create')),
);

Yii::app()->clientScript->registerScript('search', "
$('.search-button').click(function(){
	$('.search-form').toggle();
	return false;
});
$('.search-form form').submit(function(){
	$.fn.yiiGridView.update('how-to-use-grid', {
		data: $(this).serialize()
	});
	return false;
});
");
?>

<h1>Как это работает</h1>

<?php $this->widget('bootstrap.widgets.TbGridView',array(
	'id'=>'how-to-use-grid',
	'dataProvider'=>$model->search(),
	'filter'=>$model,
    'type'=>'striped',
	'columns'=>array(
        array(
            'name'=>'id',
            'headerHtmlOptions'=>array('style'=>'width:30px'),
        ),
		'products_id',
		'position',
		'content',
        /*'create_user_id',
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
