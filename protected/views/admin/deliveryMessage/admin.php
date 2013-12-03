<?php
$this->breadcrumbs=array(
	'Delivery Messages'=>array('index'),
	'Manage',
);

$this->menu=array(

	array('label'=>'Создать сообщение','url'=>array('create')),
);

Yii::app()->clientScript->registerScript('search', "
$('.search-button').click(function(){
	$('.search-form').toggle();
	return false;
});
$('.search-form form').submit(function(){
	$.fn.yiiGridView.update('delivery-message-grid', {
		data: $(this).serialize()
	});
	return false;
});
");
?>

<h1>Сообщения о доставке</h1>

<?php $this->widget('bootstrap.widgets.TbGridView',array(
	'id'=>'delivery-message-grid',
	'dataProvider'=>$model->search(),
	'filter'=>$model,
    'type'=>'striped',
	'columns'=>array(
        array(
            'name'=>'id',
            'headerHtmlOptions'=>array('style'=>'width:30px'),
        ),
		'title',
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
