<?php $form=$this->beginWidget('bootstrap.widgets.TbActiveForm',array(
	'action'=>Yii::app()->createUrl($this->route),
	'method'=>'get',
)); ?>

	<?php echo $form->textFieldRow($model,'id',array('class'=>'span5')); ?>

	<?php echo $form->textFieldRow($model,'name',array('class'=>'span5','maxlength'=>100)); ?>

	<?php echo $form->textFieldRow($model,'full_name',array('class'=>'span5','maxlength'=>200)); ?>

	<?php echo $form->textFieldRow($model,'parent_id',array('class'=>'span5')); ?>

	<?php echo $form->textFieldRow($model,'row',array('class'=>'span5')); ?>

	<?php echo $form->textFieldRow($model,'col',array('class'=>'span5')); ?>

	<?php echo $form->textFieldRow($model,'is_products',array('class'=>'span5')); ?>

	<?php echo $form->textFieldRow($model,'stocks_id',array('class'=>'span5')); ?>

	<?php echo $form->textFieldRow($model,'units_id',array('class'=>'span5')); ?>

	<?php echo $form->textAreaRow($model,'first_description',array('rows'=>6, 'cols'=>50, 'class'=>'span8')); ?>

	<?php echo $form->textAreaRow($model,'second_description',array('rows'=>6, 'cols'=>50, 'class'=>'span8')); ?>

	<?php echo $form->textFieldRow($model,'delivery_msg_id',array('class'=>'span5')); ?>

	<?php echo $form->textFieldRow($model,'active',array('class'=>'span5')); ?>

	<?php echo $form->textFieldRow($model,'is_new',array('class'=>'span5')); ?>

	<?php echo $form->textFieldRow($model,'is_recomended',array('class'=>'span5')); ?>

	<?php echo $form->textFieldRow($model,'is_show_in_main',array('class'=>'span5')); ?>

	<?php echo $form->textFieldRow($model,'search_words',array('class'=>'span5','maxlength'=>300)); ?>

	<?php echo $form->textFieldRow($model,'manufactures_id',array('class'=>'span5')); ?>

	<?php echo $form->textFieldRow($model,'article',array('class'=>'span5','maxlength'=>50)); ?>

	<?php echo $form->textFieldRow($model,'create_user_id',array('class'=>'span5')); ?>

	<?php echo $form->textFieldRow($model,'create_date',array('class'=>'span5')); ?>

	<?php echo $form->textFieldRow($model,'change_user_id',array('class'=>'span5')); ?>

	<?php echo $form->textFieldRow($model,'change_date',array('class'=>'span5')); ?>

	<?php echo $form->textFieldRow($model,'delete_denied',array('class'=>'span5')); ?>

	<?php echo $form->textFieldRow($model,'deleted',array('class'=>'span5')); ?>

	<div class="form-actions">
		<?php $this->widget('bootstrap.widgets.TbButton', array(
			'buttonType'=>'submit',
			'type'=>'primary',
			'label'=>'Search',
		)); ?>
	</div>

<?php $this->endWidget(); ?>
