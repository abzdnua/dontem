<div class="well editor_block">
<button type="button" class="pull-right close" aria-hidden="true">&times;</button>
<h3>Блок: галерея</h3>
<?php
if(isset($id)){
    $block = Blocks::model()->findByPk($id);
    $gals = BlockGallery::model()->findAll("block_id = $id");
}else{
    $block = new Blocks();
$block->order = $pos;

}
$new_gal = new BlockGallery();
$block->block_type = Constants::BLOCK_TYPE_GALLERY;

?>

<?php echo CHtml::activeHiddenField($block, "[$num]block_type"); ?>
<?php echo CHtml::hiddenField('num', $num); ?>

<div class="clearfix"></div>
<?php echo CHtml::activeLabelEx($block, 'title' ); ?>
<?php echo CHtml::activeTextField($block, "[$num]title", array('class'=>'span5')); ?><br>
<?php echo CHtml::fileField('image[]', '',array('class'=>'uploadGallery','multiple'=>'multiple'));?>
    <div class="preloader"></div>
    <small class="help-block">Изображение размером не менее 720рх по высоте</small>

    <?php echo CHtml::hiddenField('img_type', Constants::IMG_TYPE_GALLERY); ?>
    <?php $md5_name = md5(date('Y-m-d H:i:s')); ?>
    <?php echo CHtml::hiddenField('md5_name', $md5_name); ?>

<div class="previewMulti">
<?php
    if(isset($gals)){
        foreach ($gals as $val) {?>
            <div class="miniImg">
                <img src="/files/gallery/<?php echo $val->md5_name.'_'.$val->id?>.jpg" style="max-height:125px"/>
                <input type="hidden" name="gal_id[<?php echo $num?>][]" value="<?php echo $val->id?>"/>
                <br><a class="remove_img">Удалить</a>
            </div>
        <?}
    }



 ?>

</div>

<div class="clearfix"></div>

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
