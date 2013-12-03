<?php
$this->breadcrumbs=array(
	'Price Types'=>array('index'),
	'Manage',
);

$this->menu=array(

	array('label'=>'Добавить вид цены','url'=>array('create')),
);

Yii::app()->clientScript->registerScript('search', "
$('.search-button').click(function(){
	$('.search-form').toggle();
	return false;
});
$('.search-form form').submit(function(){
	$.fn.yiiGridView.update('price-type-grid', {
		data: $(this).serialize()
	});
	return false;
});
");
?>

<h1>Виды цен</h1>

<?php $this->widget('bootstrap.widgets.TbGridView',array(
	'id'=>'price-type-grid',
	'dataProvider'=>$model->search(),
	'filter'=>$model,
    'type'=>'striped',
	'columns'=>array(
        array(
            'name'=>'id',
            'headerHtmlOptions'=>array('style'=>'width:30px'),
        ),
		'name',
		'min_value',
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
