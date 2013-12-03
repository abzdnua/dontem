<?php $form=$this->beginWidget('bootstrap.widgets.TbActiveForm',array(
	'id'=>'colors-form',
	'enableAjaxValidation'=>false,
)); ?>

	<p class="help-block">Поля помеченные <span class="required">*</span> обязательны к заполнению.</p>

	<?php echo $form->errorSummary($model); ?>

	<?php echo $form->textFieldRow($model,'name',array('class'=>'span5','maxlength'=>30)); ?>

<!--	--><?php //echo $form->textFieldRow($model,'',array('class'=>'span5')); ?>
    <?php echo $form->dropDownListRow($model, 'manufactures_id', CHtml::listData(Manufactures::model()->findAll(),'id','name'),array('class'=>'span5')); ?>

<!--	--><?php //echo $form->textFieldRow($model,'rgb',array('class'=>'span5','maxlength'=>10)); ?>


<?php echo $form->labelEx($model,'rgb');?>
<?
$this->widget('ext.SMiniColors.SActiveColorPicker', array(
    'model' => $model,
    'attribute' => 'rgb',
    'hidden'=>false, // defaults to false - can be set to hide the textarea with the hex
    'options' => array(), // jQuery plugin options
    'htmlOptions' => array('readonly'=>true), // html attributes
));
?>

	<div class="form-actions">
		<?php $this->widget('bootstrap.widgets.TbButton', array(
			'buttonType'=>'submit',
			'type'=>'primary',
			'label'=>$model->isNewRecord ? 'Создать' : 'Сохранить',
		)); ?>
	</div>

<?php $this->endWidget(); ?>
