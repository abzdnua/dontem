<div class="well editor_block">
<button type="button" class="pull-right close" aria-hidden="true">&times;</button>
<h3>Блок: текст</h3>
<?php 
if(isset($id)){
    $block = Blocks::model()->findByPk($id);
    $text = BlockText::model()->find("block_id = $id");
}else{
    $block = new Blocks();
    $text = new BlockText();
$block->order = $pos;
    
}
$block->block_type = Constants::BLOCK_TYPE_TEXT;

?>

<?php echo CHtml::activeHiddenField($block, "[$num]block_type"); ?>
<?php echo CHtml::activeLabelEx($block, 'title' ); ?>
<?php echo CHtml::activeTextField($block, "[$num]title", array('class'=>'span5')); ?><br>


<div class="clearfix"></div>
<?php 
echo CHtml::activeTextArea($text, "[$num]content",array('style'=>'width:100%','rows'=>'30')); 
?>
<div class="error_hint" style="display:none">Текст редактора не может быть пустым</div>

<div class="pull-right">
<?php echo CHtml::activeLabelEx($block, 'order'); ?>
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
