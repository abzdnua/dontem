<?php
$this->breadcrumbs=array(
	'Products'=>array('index'),
	'Create',
);

$this->menu=array(
	array('label'=>'К списку товаров','url'=>array('index')),

);

Yii::app()->clientScript->registerScript('1','
$(document).ready(function(){
    $(".only_for_product").hide()
    $("#Products_is_products").on("change",function(){
        $(".only_for_product").toggle()
        $(".only_for_category").toggle()
    })
})

');

?>

<h1>Добавление товара</h1>

<?php echo $this->renderPartial('_form', array('model'=>$model)); ?>