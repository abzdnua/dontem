<?php
$this->breadcrumbs=array(
	'Manufactures'=>array('index'),
	'Manage',
);

$this->menu=array(

	array('label'=>'Добавить производителя','url'=>array('create')),
);

Yii::app()->clientScript->registerScript('search', "
$('.search-button').click(function(){
	$('.search-form').toggle();
	return false;
});
$('.search-form form').submit(function(){
	$.fn.yiiGridView.update('manufactures-grid', {
		data: $(this).serialize()
	});
	return false;
});
");
?>

<h1>Производители</h1>

<?php $this->widget('bootstrap.widgets.TbGridView',array(
	'id'=>'manufactures-grid',
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
            'header'=>'Логотип',
            'type'=>'image',
            'value'=>'"/files/".Files::model()->findByAttributes(array("table_name"=>$data->tableName(),"obj_id"=>$data->id, "used"=>1))->path',
            'htmlOptions'=>array('style'=>'width:50px'),
        ),
        /*
		'img_id',
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
