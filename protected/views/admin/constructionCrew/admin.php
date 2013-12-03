<?php
$this->breadcrumbs=array(
	'Construction Crews'=>array('index'),
	'Manage',
);

$this->menu=array(

	array('label'=>'Добавить строительную бригаду','url'=>array('create')),
);

Yii::app()->clientScript->registerScript('search', "
$('.search-button').click(function(){
	$('.search-form').toggle();
	return false;
});
$('.search-form form').submit(function(){
	$.fn.yiiGridView.update('construction-crew-grid', {
		data: $(this).serialize()
	});
	return false;
});
");
?>

<h1>Строительные бригады</h1>

<?php $this->widget('bootstrap.widgets.TbGridView',array(
	'id'=>'construction-crew-grid',
	'dataProvider'=>$model->search(),
	'filter'=>$model,
    'type'=>'striped',
	'columns'=>array(
        array(
            'name'=>'id',
            'headerHtmlOptions'=>array('style'=>'width:30px'),
        ),
        array(
            'header'=>'Фото',
            'type'=>'image',
            'value'=>'"/files/".Files::model()->findBySql("SELECT path FROM files WHERE table_name=\'".$data->tableName()."\' AND obj_id = \'".$data->id."\' AND used = 1 AND path LIKE \'%main%\'")->path',
            'htmlOptions'=>array('style'=>'width:90px'),
        ),
		'name',
		/*'create_user_id',
		'create_date',
		'change_user_id',*/
		/*
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
