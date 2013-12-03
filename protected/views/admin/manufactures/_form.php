<?
    Yii::app()->clientScript->registerScriptFile('/js/upload.js');
    Yii::app()->clientScript->registerScriptFile('/js/jquery.form.js');
    $tmp = Files::model()->findByAttributes(array('table_name'=>$model->tableName(),'obj_id'=>$model->id));
    if($tmp)
$model->img_name = $tmp->id;
 $form=$this->beginWidget('bootstrap.widgets.TbActiveForm',array(
	'id'=>'manufactures-form',
	'enableAjaxValidation'=>true,
    'htmlOptions'=>array('enctype'=>'multipart/form-data')

)); ?>

	<p class="help-block">Поля помеченные <span class="required">*</span> обязательны к заполнению.</p>

	<?php echo $form->errorSummary($model); ?>

	<?php echo $form->textFieldRow($model,'name',array('class'=>'span5','maxlength'=>30)); ?>

    <?php echo $form->labelEx($model,'img_name')?>
    <?php echo $form->fileField($model,'file',array('class'=>'fileUpload','accept'=>'image/jpeg,image/png,image/gif'))?>
    <?if($_POST)$model->img_name = (int)$_POST['Manufactures']['img_name']?>
    <?php echo $form->hiddenField($model,'img_name',array('class'=>'fileId'))?>
    <div class="clr"></div>
    <div class="preloader pull-left" style="display:none"></div>
    <div class="clr"></div>
    <div class="span3 preview" >
        <?if(!$model->img_name){?>
        <?if(!$model->isNewRecord){?>
        <img src="/files/<?=Files::model()->findByAttributes(array('table_name'=>$model->tableName(),'obj_id'=>$model->id, 'used'=>1))->path?>" style="max-width: 300px"/>
        <?}?>
        <?}else{?>
        <img src="/files/<?=Files::model()->findByPk($model->img_name)->path?>" style="max-width: 300px"/>
        <?}?>
    </div>
<div class="clr"></div>
<?php //echo CHtml::fileField('img_name','',array('class'=>'fileUpload','accept'=>'image/jpeg,image/png,image/gif'))?>


	<div class="form-actions">
		<?php $this->widget('bootstrap.widgets.TbButton', array(
			'buttonType'=>'submit',
			'type'=>'primary',
			'label'=>$model->isNewRecord ? 'Создать' : 'Сохранить',
		)); ?>
	</div>

<?php $this->endWidget(); ?>
