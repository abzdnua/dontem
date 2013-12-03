<?php
$this->breadcrumbs=array(
	'Categories'=>array('index'),
	'Manage',
);

//$this->menu=array(
//
//	array('label'=>'Добавить раздел','url'=>array('create')),
//);

Yii::app()->clientScript->registerScript('search', "
$('.search-button').click(function(){
	$('.search-form').toggle();
	return false;
});
$('.search-form form').submit(function(){
	$.fn.yiiGridView.update('categories-grid', {
		data: $(this).serialize()
	});
	return false;
});
");
?>
<?php echo CHtml::link('Добавить запись','/admin/categories/create',array('class'=>'btn pull-right')); ?>

<h1>Разделы</h1>
<div class="clr"></div>

<?php $this->widget('bootstrap.widgets.TbGridView',array(
	'id'=>'categories-grid',
	'dataProvider'=>$model->search(),
	'filter'=>$model,
    'type'=>'striped',
    'ajaxUpdate'=>true,
	'columns'=>array(
        array(
            'name'=>'id',
            'headerHtmlOptions'=>array('style'=>'width:30px'),
        ),
		'name',
        array(
            'name'=>'parent_id',
            'filter' => CHtml::listData(Categories::model()->findAllByAttributes(array('parent_id'=>0)), 'id', 'name'),
            'value'=>function($data){
                $name = ($data->parent_id!=0)?Categories::model()->findByPk($data->parent_id)->name:'отсутствует';
                return $name;
            }
        ),
        array(
            'name'=>'col',
            'headerHtmlOptions'=>array('style'=>'width:30px'),
            'htmlOptions'=>array('style'=>'text-align:center'),
        ),
        array(
            'name'=>'row',
            'headerHtmlOptions'=>array('style'=>'width:30px'),
            'htmlOptions'=>array('style'=>'text-align:center'),
        ),
		/*
		'parent_id',
  		'full_name',
		'is_products',
		'stocks_id',
		'units_id',
		'first_description',
		'second_description',
		'delivery_msg_id',
		'active',
		'is_new',
		'is_recomended',
		'is_show_in_main',
		'search_words',
		'manufactures_id',
		'article',
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
