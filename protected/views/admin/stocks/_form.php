
<?php
$model->begin_date = ($model->begin_date)?date('d.m.Y',strtotime($model->begin_date)):'';
$model->end_date = ($model->end_date!='0000-00-00')?date('d.m.Y',strtotime($model->end_date)):'';
Yii::app()->clientScript->registerScriptFile('/js/jquery.form.js');
Yii::app()->clientScript->registerScriptFile('/js/upload.js');
$model->img_main = Files::model()->findByAttributes(array('table_name'=>$model->tableName(),'obj_id'=>$model->id))->id;
$c = new CDbCriteria();
$c->addCondition('table_name = :tableName');
$c->addCondition('obj_id = :id');
$c->addCondition('used = 1');
$c->addSearchCondition('path','back');
$c->params['tableName'] = $model->tableName();
$c->params['id'] = $model->id;
$model->img_back = Files::model()->find($c)->id;
$form=$this->beginWidget('bootstrap.widgets.TbActiveForm',array(
	'id'=>'stocks-form',
	'enableAjaxValidation'=>false,
    'htmlOptions'=>array('enctype'=>'multipart/form-data')
)); ?>

	<p class="help-block">Поля помеченные <span class="required">*</span> обязательны к заполнению.</p>

	<?php echo $form->errorSummary($model); ?>

	<?php echo $form->textFieldRow($model,'name',array('class'=>'span5','maxlength'=>100)); ?>

    <div class="clr"><br></div><?php echo $form->checkBoxRow($model,'active'); ?><br>
<?php echo $form->labelEx($model,'begin_date');?>
    <?php
    $this->widget('zii.widgets.jui.CJuiDatePicker', array(
        'model' => $model,
        'attribute' => 'begin_date',
        'language'=>'ru',

        'htmlOptions' => array(
            'maxlength' => '10',
            'class'=>'span5'
        ),
    ));
    ?>
<?php echo $form->labelEx($model,'end_date');?>
    <?php
    $this->widget('zii.widgets.jui.CJuiDatePicker', array(
        'model' => $model,
        'attribute' => 'end_date',
        'language'=>'ru',
        'htmlOptions' => array(
            'maxlength' => '10',
            'class'=>'span5'
        ),
    ));
    ?>
<input type="hidden" name="field_name"/>
<!--	--><?php //echo $form->textFieldRow($model,'begin_date',array('class'=>'date_inside span5')); ?>
<!---->
<!--	--><?php //echo $form->textFieldRow($model,'end_date',array('class'=>'date_inside span5')); ?>

	<?php echo $form->textFieldRow($model,'link',array('class'=>'span5','maxlength'=>50, 'placeholder'=>'http://' )); ?>

	<?php echo $form->checkBoxRow($model,'target'); ?>
<div>
<?php echo $form->labelEx($model,'img_main')?>
<?php echo $form->fileField($model,'file1',array('class'=>'fileUpload','accept'=>'image/jpeg,image/png,image/gif'))?>
<?php echo $form->hiddenField($model,'img_main',array('class'=>'fileId'))?>
<div class="clr"></div>
<div class="preloader pull-left" style="display:none"></div>
<div class="clr"></div>
<div class="span8 preview" >
    <?if(!$model->isNewRecord){?>
        <img src="/files/<?=Files::model()->findByAttributes(array('table_name'=>$model->tableName(),'obj_id'=>$model->id, 'used'=>1))->path?>" />
        <img src="/files/m_<?=Files::model()->findByAttributes(array('table_name'=>$model->tableName(),'obj_id'=>$model->id, 'used'=>1))->path?>" />
        <img src="/files/s_<?=Files::model()->findByAttributes(array('table_name'=>$model->tableName(),'obj_id'=>$model->id, 'used'=>1))->path?>" />
    <?}?>
</div>
<div class="clr"></div>
</div><div>
<?php echo $form->labelEx($model,'img_back')?>
<?php echo $form->fileField($model,'file2',array('class'=>'fileUpload','accept'=>'image/jpeg,image/png,image/gif'))?>
<?php echo $form->hiddenField($model,'img_back',array('class'=>'fileId'))?>
<div class="clr"></div>
<div class="preloader pull-left" style="display:none"></div>
<div class="clr"></div>
<div class="span8 preview" >
    <?if(!$model->isNewRecord){
        ?>

        <img src="/files/<?=Files::model()->find($c)->path?>"/>
    <?}?>
</div>
<div class="clr"></div>
</div>
	<?php echo $form->textAreaRow($model,'description',array('rows'=>6, 'cols'=>50, 'class'=>'span8')); ?>
    <?for($i=1;$i<=10;$i++){
        $pr[$i] = $i;
    }?>
	<?php echo $form->dropDownListRow($model,'priority',$pr,array('class'=>'span5')); ?>


<!--	--><?php //echo $form->textFieldRow($model,'back_color',array('class'=>'span5','maxlength'=>6)); ?>
    <?php echo $form->labelEx($model,'back_color');?>
    <?
        $this->widget('ext.SMiniColors.SActiveColorPicker', array(
            'model' => $model,
            'attribute' => 'back_color',
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
