

<?php
    Yii::app()->clientScript->registerScriptFile('/js/news_editor.js');

$form=$this->beginWidget('bootstrap.widgets.TbActiveForm',array(
	'id'=>'news-form',
	'enableAjaxValidation'=>true,
)); ?>

	<p class="help-block">Поля помеченные <span class="required">*</span> обязательны к заполнению.</p>

	<?php echo $form->errorSummary($model); ?>

	<?php echo $form->checkBoxRow($model,'is_active'); ?>

	<?php echo $form->textFieldRow($model,'title',array('class'=>'span7','maxlength'=>250)); ?>

  <?php
  if($model->isNewRecord)
    $model->news_date = date('d.m.Y');
  else
    $model->news_date = date('d.m.Y',strtotime($model->news_date));
   ?>
<?php echo $form->labelEx($model,'news_date'); ?>

<?php $this->widget('bootstrap.widgets.TbDatePicker', array(
  'model'=>$model,
    'attribute'=>'news_date',
    // additional javascript options for the date picker plugin
    'options'=>array(
        'language'=>'ru',
    'format'=>'dd.mm.yyyy',
    ),
    'htmlOptions'=>array(
      'class'=>'span5',
        'style'=>'height:20px;'
    ),
)); ?>
<?php echo $form->error($model,'news_date') ?>

	<?php
		echo $form->labelEx($model,'image_id');
        echo CHtml::fileField('image[]', '',array('class'=>'upload'));?>
        <div class="preloader"></div><small class="help-block">Изображение размером не менее 1024px по ширине и 500px по высоте</small>

	<?
		echo $form->error($model,'image_id');
		echo $form->hiddenField($model,'image_id',array('class'=>'span5 fileId'));
		echo CHtml::hiddenField('img_type', Constants::NEWS_PHOTO);
?>
<div class="preview">
	<?php
	if($model->image_id);
	$img = Files::model()->findByPk($model->image_id);
	if($img){
		if(is_file($_SERVER['DOCUMENT_ROOT'].'/files/'.$img->file_path)){?>
			<img src="/files/<?php echo $img->file_path?>" style="max-width:600px">
		<?}
	}
	?>
</div>

	<?php //echo $form->textFieldRow($model,'work_type',array('class'=>'span5','maxlength'=>250)); ?>
<?php
$work_types = Yii::app()->db->createCommand("SELECT DISTINCT(work_type) FROM news")->queryColumn();
echo $form->labelEx($model,'work_type');
$this->widget(
    'bootstrap.widgets.TbTypeahead',
    array(
        'model' => $model,
        'attribute'=>'work_type',
        'options' => array(
            'source' => $work_types,
            'items' => 4,
            'matcher' => <<<ENDL
js:function(item) {
    return ~item.toLowerCase().indexOf(this.query.toLowerCase());
}
ENDL
        ),
        'htmlOptions'=>array('class'=>'span5'),
    )
);
echo $form->error($model,'work_type');

 ?>
	<?php echo $form->dropDownListRow($model,'difficulty',Constants::getDifficultiesArray(),array('class'=>'span5')); ?>

	<?php //echo $form->textAreaRow($model,'short_des',array('rows'=>6, 'cols'=>50, 'class'=>'span8')); ?>

	<?php echo $form->ckEditorRow($model, 'short_des', array(
										'options'=>array('fullpage'=>'js:true',
												 'width'=>'750',
												 'toolbar'=>'js:[
														["Bold","Italic"],
													]',
												 'resize_enabled'=>false)));?>

	<?php

	echo $form->labelEx($model,'video_link');
	echo CHtml::textField('video_path','',array('class'=>'span5','maxlength'=>250));
	echo $form->hiddenField($model,'video_link',array('class'=>'span5','maxlength'=>250));

	?>

	<div class="video_preview">
		<?php if(!$model->isNewRecord and $model->video_link){?>
			<object class="f_l" width="350" height="280"><param name="movie" value="<?php echo $model->video_link ?>?version=3&amp;hl=ru_RU"><param name="allowFullScreen" value="true"><param name="allowscriptaccess" value="always"><embed src="<?php echo $model->video_link ?>?version=3&amp;hl=ru_RU" type="application/x-shockwave-flash" width="460" height="280" allowscriptaccess="always" allowfullscreen="true"></object>
		<?}?>
	</div>


  <?php
    echo $form->labelEx($model,'file_id');
        echo CHtml::fileField('file', '',array('class'=>'uploadFile'));?>
        <small class="help-block">Презентация в формате PPT или PPTX </small>

  <?
    echo $form->error($model,'file_id');
    echo $form->hiddenField($model,'file_id',array('class'=>'span5 presFileId'));
?>
  <span class="about_file">
    <?php
        if($model->file_id){
          $file = Files::model()->findByPk($model->file_id);
          if($file and is_file($_SERVER['DOCUMENT_ROOT'].'/files/'.$file->file_path)){
            $size = filesize($_SERVER['DOCUMENT_ROOT'].'/files/'.$file->file_path);
            if($size/1024>1000)
                $size = number_format($size/1024/1000,1,',','').' mb';
            else
                $size =(int)($size/1024).' kb';
            echo $file->file_path.', '.$size;
          }
        }
            ?>
  </span>




<?php
echo CHtml::label('Теги','');
$tags = Yii::app()->db->createCommand("SELECT tag FROM tags")->queryColumn();

$this->widget(
    'bootstrap.widgets.TbTypeahead',
    array(
        'name'=>'news_tag',
        'options' => array(
            'source' => $tags,
            'items' => 4,
            'matcher' => <<<ENDL
js:function(item) {
    return ~item.toLowerCase().indexOf(this.query.toLowerCase());
}
ENDL
        ),
        'htmlOptions'=>array('class'=>'span3','style'=>'margin-bottom:0'),
    )
);
$this->widget(
    'bootstrap.widgets.TbButton',
    array(
        'label' => 'Добавить',
        'htmlOptions'=>array('class'=>'add_tag_btn')
    )
);
 ?>

 <div class="forTags">
    <?php
    if(!$model->isNewRecord){
    $newsTags = Tags::model()->findAll("id IN (SELECT tag_id FROM news_and_tags WHERE news_id = $model->id)");
      if($newsTags)
        foreach ($newsTags as $key => $newsTag) {?>
            <div class="label my_label label-info"><?php echo trim($newsTag->tag) ?><button type="button" class="pull-right close" aria-hidden="true">&times;</button>
              <input type="hidden" name="tag[]" value="<?php echo trim($newsTag->tag) ?>" />
              </div>
        <?}
      }
    ?>
 </div>
 <div class="clearfix"></div>
<div class="EDITOR">

<div class="forBlocks" style="margin-top: 20px;">
    <?php $this->widget('bootstrap.widgets.TbButtonGroup', array(
        'type'=>'primary', // '', 'primary', 'info', 'success', 'warning', 'danger' or 'inverse'
        'buttons'=>array(
            array('label'=>'Добавить блок', 'items'=>array(
                array('label'=>'Блок: текст', 'url'=>'javascript:void(0)','linkOptions'=>array('onclick'=>'getBlock("'.Constants::BLOCK_TYPE_TEXT.'",$(this));return false')

              ),
                array('label'=>'Блок: текст (c фоном)', 'url'=>'javascript:void(0)','linkOptions'=>array('onclick'=>'getBlock("'.Constants::BLOCK_TYPE_TEXT_BG.'",$(this));return false')

              ),
                 array('label'=>'Блок: изображение', 'url'=>'javascript:void(0)','linkOptions'=>array('onclick'=>'getBlock("'.Constants::BLOCK_TYPE_IMG.'",$(this));return false')

              ),
                // array('label'=>'Блок: текст+изображение', 'url'=>'javascript:void(0)','linkOptions'=>array('onclick'=>'getBlock("'.Constants::BLOCK_TYPE_TEXT_IMG.'",$(this));return false')

                // ),
                // array('label'=>'Блок: текст+видео', 'url'=>'javascript:void(0)','linkOptions'=>array('onclick'=>'getBlock("'.Constants::BLOCK_TYPE_TEXT_VIDEO.'",$(this));return false')

                // ),
                // array('label'=>'Блок: изображение-параллакс (не больше 2)', 'url'=>'javascript:void(0)','linkOptions'=>array('onclick'=>'if($(\'[value="'.Constants::BLOCK_TYPE_IMG_PARALLAX.'"]\',$(this).parents(".EDITOR")).length<2){getBlock("'.Constants::BLOCK_TYPE_IMG_PARALLAX.'",$(this))}else{$.notify("Только 2 паралакс-изображения на странице", "info")};return false')

                // ),
                array('label'=>'Блок: галерея', 'url'=>'javascript:void(0)','linkOptions'=>array('onclick'=>'getBlock("'.Constants::BLOCK_TYPE_GALLERY.'",$(this));return false')

                ),
            )),
        ),
    )); ?>
<?php
if(!$model->isNewRecord){
  $blocks = Blocks::model()->findAll("parent_table ='".$model->tableName()."' AND parent_id =".$model->id." ORDER BY `order` ASC");
  if($blocks){
    foreach ($blocks as $key => $value) {
      switch ($value->block_type) {
        case Constants::BLOCK_TYPE_TEXT:
          $this->renderPartial('/admin/redactor/_text',array('id'=>$value->id,'num'=>$key+1));
          break;

        case Constants::BLOCK_TYPE_TEXT_BG:
          $this->renderPartial('/admin/redactor/_text',array('id'=>$value->id,'num'=>$key+1,'background'=>true));
          break;

        case Constants::BLOCK_TYPE_IMG:
          $this->renderPartial('/admin/redactor/_img',array('id'=>$value->id,'num'=>$key+1));
          break;

        case Constants::BLOCK_TYPE_IMG_PARALLAX:
          $this->renderPartial('/admin/redactor/_parallax',array('id'=>$value->id,'num'=>$key+1));
          break;

        case Constants::BLOCK_TYPE_GALLERY:
          $this->renderPartial('/admin/redactor/_gallery',array('id'=>$value->id,'num'=>$key+1));
          break;
        default:
          # code...
          break;
      }
    }
  }
}
 ?>

</div>

</div>



	<div class="form-actions">
		<?php $this->widget('bootstrap.widgets.TbButton', array(
			'buttonType'=>'submit',
			'type'=>'primary',
			'label'=>$model->isNewRecord ? 'Создать' : 'Сохранить',
		)); ?>
	</div>

<?php $this->endWidget(); ?>
