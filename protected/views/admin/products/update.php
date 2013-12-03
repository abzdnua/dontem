<?php
$this->breadcrumbs=array(
	'Products'=>array('index'),
	$model->name=>array('view','id'=>$model->id),
	'Update',
);

$this->menu=array(
	array('label'=>'К списку товаров','url'=>array('index')),
	array('label'=>'Добавить товар','url'=>array('create')),
	array('label'=>'Удалить товар','url'=>array('delete','id'=>$model->id)),
);


Yii::app()->clientScript->registerScript('1','
$(document).ready(function(){
    if(!$("#Products_is_products").attr("checked"))
    $(".only_for_product").hide()
    $("#Products_is_products").on("change",function(){
        $(".only_for_product").toggle()
        $(".only_for_category").toggle()
    })
})

');
?>

<h1>Редактирование товара <?php echo $model->id; ?></h1>

<?php echo $this->renderPartial('_form',array('model'=>$model)); ?>