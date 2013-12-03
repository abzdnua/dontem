<?php
$this->breadcrumbs=array(
	'Stocks'=>array('index'),
	'Manage',
);

$this->menu=array(

	array('label'=>'Добавить акцию','url'=>array('create')),
);

Yii::app()->clientScript->registerScript('search', "
$('.search-button').click(function(){
	$('.search-form').toggle();
	return false;
});
$('.search-form form').submit(function(){
	$.fn.yiiGridView.update('stocks-grid', {
		data: $(this).serialize()
	});
	return false;
});
");
?>

<h1>Акции</h1>

<?php $this->widget('bootstrap.widgets.TbGridView',array(
	'id'=>'stocks-grid',
	'dataProvider'=>$model->search(),
	'filter'=>$model,
    'type'=>'striped',
	'columns'=>array(
        array(
            'name'=>'id',
            'headerHtmlOptions'=>array('style'=>'width:30px'),
        ),
		'name',
        array(
            'name'=>'begin_date',
            'value'=>function($data){
                return Yii::app()->dateFormatter->format('dd.MM.yyyy',$data->begin_date);
            },
        ),
        array(
            'name'=>'end_date',
            'value'=>function($data){
//                return ($data->end_date!='0000-00-00')?date('d.m.Y',strtotime($data->end_date)):'';
                return ($data->end_date!='0000-00-00')?Yii::app()->dateFormatter->format('dd.MM.yyyy',$data->end_date):'';
            },
        ),
        array(
            'name'=>'priority',
            'headerHtmlOptions'=>array('style'=>'width:100px;'),
            'htmlOptions'=>array('style'=>'text-align:center'),
        ),

        /*
        'link',
        'target',

        'description',

        'active',
        'back_color',
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
