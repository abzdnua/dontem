<div class="well editor_block">
<button type="button" class="pull-right close" aria-hidden="true">&times;</button>
<h3>Блок: текст + изображение</h3>
<?php 
if(isset($id)){
    $block = Blocks::model()->findByPk($id);
    $text = BlockText::model()->find("block_id = $id");
    $video = BlockVideo::model()->find("block_id = $id");

}else{
    $block = new Blocks();
    $text = new BlockText();
    $video = new BlockVideo();
$block->order = $pos;

    $text->position = Constants::LEFT_TEXT;
}
$block->block_type = Constants::BLOCK_TYPE_TEXT_VIDEO;

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
<?php echo CHtml::textField('video_path', '', array('class'=>'span4','placeholder'=>'http://www.youtube.com/watch?v=********')); ?>
<?php echo CHtml::activeHiddenField($video, "[$num]video_link",array('class'=>'videoLink')); ?>
<div class="preview" >
<?php 
if($video->video_link){?>
    <object  class="f_l" width="350" height="280"><param name="movie" value="<?=$video->video_link?>?version=3&amp;hl=ru_RU"></param><param name="allowFullScreen" value="true"></param><param name="allowscriptaccess" value="always"></param><embed src="<?=$video->video_link?>?version=3&amp;hl=ru_RU" type="application/x-shockwave-flash" width="350" height="280" allowscriptaccess="always" allowfullscreen="true"></embed></object>
<?}
 ?>
</div>
</div>
<div class="pull-right" style="width:49%">
<?php 
echo CHtml::activeTextArea($text, "[$num]content",array('style'=>'width:100%','rows'=>'15')); 
?>
</div>
<div class="clearfix"></div>
<div class="error_hint" style="display:none">Текст редактора не может быть пустым. Видео должно быть загружено</div>

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
