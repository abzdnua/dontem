<?php

    Yii::app()->clientScript->registerScriptFile('/js/jquery.form.js');
    Yii::app()->clientScript->registerScriptFile('/js/upload.js');
    Yii::app()->clientScript->registerScriptFile('/js/howtouse.js');
    Yii::app()->clientScript->registerScript('asasa','
        $(".addnewblock").click(function()
            {
                var th=$(this);
                $.ajax({
                    type: "POST",
                    url: "'.Yii::app()->createUrl("/admin/howtouse/addbutton").'",
                    data: {},
                }).done(function(html) {
                        if(html!="")
                        {
                            $(html).insertAfter($(".howtouseblock",th.parent()).last())
                        }
                    });

            })
        ');

    $model->img_name = Files::model()->findByAttributes(array('table_name'=>$model->tableName(),'obj_id'=>$model->id))->id;
    $form=$this->beginWidget('bootstrap.widgets.TbActiveForm',array(
	'id'=>'how-to-use-form',
	'enableAjaxValidation'=>true,
        'clientOptions' => array(
            'validateOnSubmit' => true,
            'validateOnChange' => true,
        ),
)); ?>

	<p class="help-block">Поля помеченные <span class="required">*</span> обязательны к заполнению.</p>


	<?php

    echo $form->error($model,'products_id');?>
    <?php echo $form->dropDownListRow($model, 'products_id', CHtml::listData(Products::model()->findAll(),'id','name'),array('class'=>'span5')); ?>


    <?php $this->actionAddbutton($model); ?>
    <div class="clr"></div>
    <?php $this->widget('bootstrap.widgets.TbButton', array(
        'buttonType'=>'button',
        'label'=>'добавить блок',
        'htmlOptions'=>array('class'=>'addnewblock',)
    )); ?>
	<div class="form-actions">
		<?php $this->widget('bootstrap.widgets.TbButton', array(
			'buttonType'=>'submit',
			'type'=>'primary',
			'label'=>$model->isNewRecord ? 'Создать' : 'Сохранить',
		)); ?>
	</div>

<?php $this->endWidget(); ?>
