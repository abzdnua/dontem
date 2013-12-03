<?php
$this->breadcrumbs=array(
	'Colors'=>array('index'),
	'Manage',
);

$this->menu=array(
	array('label'=>'Добавить цвет','url'=>array('create')),
);

Yii::app()->clientScript->registerScript('search', "
$('.search-button').click(function(){
	$('.search-form').toggle();
	return false;
});
$('.search-form form').submit(function(){
	$.fn.yiiGridView.update('colors-grid', {
		data: $(this).serialize()
	});
	return false;
});
");
?>

<h1>Цвета</h1>

<?php //echo CHtml::link('Advanced Search','#',array('class'=>'search-button btn')); ?>
<!--<div class="search-form" style="display:none">-->
<?php //$this->renderPartial('_search',array(
//	'model'=>$model,
//)); ?>
<!--</div><!-- search-form -->

<?php $this->widget('bootstrap.widgets.TbGridView',array(
	'id'=>'colors-grid',
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
            'name'=>'manufactures_id',
            'filter' => CHtml::listData(Manufactures::model()->findAll(), 'id', 'name'),
            'value'=>'$data->manufactures->name'
        ),
//		'manufactures.name',
        array(
            'name'=>'rgb',
            'value'=>function($data){
//                return CHtml::;
            }
        ),
        'rgb',
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
