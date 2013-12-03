<?php
$this->breadcrumbs=array(
	'Products'=>array('index'),
	'Manage',
);

//$this->menu=array(
//
//	array('label'=>'Добавить Products','url'=>array('create')),
//);

Yii::app()->clientScript->registerScript('search', "
$('.search-button').click(function(){
	$('.search-form').toggle();
	return false;
});
$('.search-form form').submit(function(){
	$.fn.yiiGridView.update('products-grid', {
		data: $(this).serialize()
	});
	return false;
});
");

?>
<?php echo CHtml::link('Добавить запись','create',array('class'=>'btn pull-right')); ?>

<h1>Товары</h1>
<div class="clr"></div>

<?php echo CHtml::link('Расширенный поиск','#',array('class'=>'search-button btn')); ?>
<div class="search-form" style="display:none">
    <?php $this->renderPartial('_search',array(
	'model'=>$model,
));  ?>
</div><!-- search-form -->



<?php $this->widget('bootstrap.widgets.TbGridView',array(
	'id'=>'products-grid',
	'dataProvider'=>$model->search(),
	'filter'=>$model,
    'type'=>'striped',
	'columns'=>array(
		'id',
		'name',
		'full_name',
		'parent_id',
        'is_products',
		/*
		'row',
		'col',
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
