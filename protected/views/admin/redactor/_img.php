<div class="well editor_block">
<button type="button" class="pull-right close" aria-hidden="true">&times;</button>
<h3>Блок: изображение</h3>
<?php
if(isset($id)){
    $block = Blocks::model()->findByPk($id);
    $img = BlockImg::model()->find("block_id = $id");
}else{
    $block = new Blocks();
    $img = new BlockImg();
$block->order = $pos;

}
$block->block_type = Constants::BLOCK_TYPE_IMG;
?>

<?php echo CHtml::activeHiddenField($block, "[$num]block_type"); ?>

<div class="clearfix"></div>
<?php echo CHtml::activeLabelEx($block, 'title' ); ?>
<?php echo CHtml::activeTextField($block, "[$num]title", array('class'=>'span5')); ?><br>
<?php echo CHtml::fileField('image[]', '',array('class'=>'upload')); ?>
<small class="help-block">Изображение размером не менее 980рх по ширине и 200рх по высоте</small>
<?php echo CHtml::hiddenField('img_type', Constants::IMG_TYPE_FULL_WIDTH ); ?>
<?php echo CHtml::activeHiddenField($img, "[$num]file_id",array('class'=>'fileId')); ?>
<div class="preview">
<?php
$show_img = Files::model()->findByPk($img->file_id);
if($show_img){
    if(is_file($_SERVER['DOCUMENT_ROOT'].'/files/'.$show_img->file_path)){?>
        <img src="/files/<?php echo $show_img->file_path?>" style="max-width:100%">
    <?php }
}
 ?>
</div>
<div class="pull-right">
<?php echo CHtml::activeLabelEx($block, 'order' ); ?>
<?php
    $positions = array();
    for($i=1;$i<=100;$i++){
        $positions[$i] = $i;
    }
 ?>
<?php echo CHtml::activeDropDownList($block, "[$num]order", $positions, array('class'=>'span1')); ?>
</div>
<div class="clearfix"></div>

</div>
