<div class="well editor_block">
<button type="button" class="pull-right close" aria-hidden="true">&times;</button>
<h3>Блок: текст + изображение</h3>
<?php 
if(isset($id)){
    $block = Blocks::model()->findByPk($id);
    $text = BlockText::model()->find("block_id = $id");
    $img = BlockImg::model()->find("block_id = $id");

}else{
    $block = new Blocks();
    $text = new BlockText();
    $img = new BlockImg();
$block->order = $pos;

    $text->position = Constants::LEFT_TEXT;
}
$block->block_type = Constants::BLOCK_TYPE_TEXT_IMG;

?>

<?php echo CHtml::activeHiddenField($block, "[$num]block_type"); ?>
<?php echo CHtml::activeLabelEx($block, 'title' ); ?>
<?php echo CHtml::activeTextField($block, "[$num]title", array('class'=>'span5')); ?><br>


<div class="pull-right">

<label class="radio" style="display: inline-block"><input type="radio"  name="BlockText[<?php echo $num?>][position]" value="<?php echo Constants::LEFT_TEXT?>" <?php echo ($text->position == Constants::LEFT_TEXT)?'checked="checked"':'' ?>/>Текст слева</label>
<label class="radio" style="display: inline-block"><input type="radio"  name="BlockText[<?php echo $num?>][position]" value="<?php echo Constants::RIGHT_TEXT?>" <?php echo ($text->position == Constants::RIGHT_TEXT)?'checked="checked"':'' ?>/>Текст справа</label>
</div>
<div class="clearfix"></div>
<div class="pull-left" style="width:49%">
<?php echo CHtml::fileField('image[]', '',array('class'=>'upload')); ?>
<small class="help-block">Изображение размером свыше 500рх по ширине будет уменьшено</small>
<?php echo CHtml::hiddenField('img_type', Constants::IMG_TYPE_HALF_BLOCK); ?>
<?php echo CHtml::activeHiddenField($img, "[$num]file_id",array('class'=>'fileId')); ?>
<div class="preview" >
<?php 
$show_img = Files::model()->findByPk($img->file_id);
if($show_img){
    if(is_file($_SERVER['DOCUMENT_ROOT'].'/files/'.$show_img->file_path)){?>
        <img src="/files/<?php echo $show_img->file_path?>" style="max-width: 100%"/>
    <?php }
}
 ?>
</div>
</div>
<div class="pull-right" style="width:49%">
<?php 
echo CHtml::activeTextArea($text, "[$num]content",array('style'=>'width:100%','rows'=>'15')); 
?>
</div>
<div class="clearfix"></div>
<div class="error_hint" style="display:none">Текст редактора не может быть пустым. Изображение должно быть загружено</div>

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
