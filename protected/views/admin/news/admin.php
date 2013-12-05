<?php
$this->breadcrumbs=array(
	'News'=>array('index'),
	'Manage',
);

$this->menu=array(

	array('label'=>'Добавить новость','url'=>array('create')),
);

Yii::app()->clientScript->registerScript('search', "
$('.search-button').click(function(){
	$('.search-form').toggle();
	return false;
});
$('.search-form form').submit(function(){
	$.fn.yiiGridView.update('news-grid', {
		data: $(this).serialize()
	});
	return false;
});
");
?>

<h1>Новости</h1>

<?php $this->widget('bootstrap.widgets.TbGridView',array(
	'id'=>'news-grid',
	'dataProvider'=>$model->search(),
	'filter'=>$model,
    'type'=>'striped',
	'columns'=>array(
		array(
			'header'=>'#',
			'value'=>'$row+1',
			'headerHtmlOptions'=>array('style'=>'width:20px')
		),
		array(
            'name'=>'is_active',
            'header'=> '<i class="icon-eye-open"></i>',
            'headerHtmlOptions'=>array('style'=>'width:60px'),
            'filter'=>array(0 => 'Скрыт', 1 => 'Отображается'),
            'value'=>function($data){
                if($data->is_active == 1)
                {
                    echo '<i class="icon-eye-open"></i>';
                }
                else
                {
                    echo '<i class="icon-eye-close"></i>';
                }
            },
        ),
    array(
			'header'=>'Фото',
			'value'=>function($data){
				$img = Files::model()->findByPk($data->image_id);
				if($img){
					if(is_file($_SERVER['DOCUMENT_ROOT'].'/files/m_'.$img->file_path)){
						echo "<img src=\"/files/m_$img->file_path\" style=\"max-width:50px\">";
					}
				}
			}
		),
		'title',
		array(
			'name'=>'news_date',
			'value'=>function($data){
				return date('d.m.Y',strtotime($data->news_date));
			}
		),
		/*
		'work_type',
		'difficulty',
		'file_id',
		'news_date',
		'image_id',
		'is_active',
		'create_user_id',
		'create_time',
		'change_user_id',
		'change_time',
		'delete_denied',
		'deleted',
		*/
		array(
			'class'=>'bootstrap.widgets.TbButtonColumn',
            'template'=>'{update}{delete}',
		),
	),
)); ?>
