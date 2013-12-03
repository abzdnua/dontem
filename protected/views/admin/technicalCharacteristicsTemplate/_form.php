<?php
Yii::app()->clientScript->registerScript('search', "
$('.add_char').click(function(){
	$(this).after('<div><label for=\"TechnicalCharacteristicsNames_name\" class=\"required\">Название характеристики <span class=\"required\">*</span></label><input class=\"span5\" name=\"TechnicalCharacteristicsNames[][name]\" id=\"TechnicalCharacteristicsNames_name\" type=\"text\" maxlength=\"50\"><button class=\"del_char btn btn-danger\" style=\"margin: 0 0 10px 10px\" name=\"yt1\" type=\"button\">X</button></div>')
});

$('.del_char').click(function(){
    $(this).parent().remove()
})
");

$form=$this->beginWidget('bootstrap.widgets.TbActiveForm',array(
	'id'=>'technical-characteristics-template-form',
	'enableAjaxValidation'=>false,
));
?>

	<p class="help-block">Поля помеченные <span class="required">*</span> обязательны к заполнению.</p>

	<?php echo $form->errorSummary($model); ?>

	<?php echo $form->textFieldRow($model,'name',array('class'=>'span5','maxlength'=>50)); ?>
<div class="clr"></div>
<?php $this->widget('bootstrap.widgets.TbButton', array(
    'buttonType'=>'button',
    'label'=>'добавить характеристику',
    'htmlOptions'=>array('class'=>'add_char',)
)); ?>

    <?foreach($model->technicalCharacteristicsNames as $i=>$item){
        echo '<div>';
        echo $form->textFieldRow($item,'[]name',array('class'=>'span5'));
         $this->widget('bootstrap.widgets.TbButton', array(
        'buttonType'=>'button',
         'type'=>'danger',
        'label'=>'X',
        'htmlOptions'=>array('class'=>'del_char','style'=>'margin: 0 0 10px 10px')
    ));
        echo '</div>';
    }?>




	<div class="form-actions">
		<?php $this->widget('bootstrap.widgets.TbButton', array(
			'buttonType'=>'submit',
			'type'=>'primary',
			'label'=>$model->isNewRecord ? 'Создать' : 'Сохранить',
		)); ?>
	</div>

<?php $this->endWidget(); ?>
