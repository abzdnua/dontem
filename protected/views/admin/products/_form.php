<?php
Yii::app()->clientScript->registerScriptFile('/js/upload.js');
Yii::app()->clientScript->registerScriptFile('/js/jquery.form.js');
Yii::app()->clientScript->registerScriptFile('/js/productsEdit.js');
Yii::app()->clientScript->registerCss('','
    #for_tcNames{padding:0 20px; margin-bottom:10px}
');
//CVarDumper::dump($model);
//$model->parent_parent_id = Categories::model()->findByPk($model->parent_id)->parent_id;

$form=$this->beginWidget('bootstrap.widgets.TbActiveForm',array(
	'id'=>'products-form',
	'enableAjaxValidation'=>false,
    'htmlOptions'=>array('onkeydown'=>'if(event.keyCode==13){return false}')
)); ?>

	<p class="help-block">Поля помеченные <span class="required">*</span> обязательны к заполнению.</p>

	<?php echo $form->errorSummary($model); ?>
<?php echo $form->dropDownListRow($model,'parent_parent_id', CHtml::listData(Categories::model()->findAllByAttributes(array('deleted'=>0,'parent_id'=>0)),'id','name'),array(
    'empty'=>'--Выберите категорию--',
    'class'=>'span5',
    'ajax'=>array(
        'type'=>'POST',
        'url'=>'/admin/products/getselect',
//        'success'=>'function(){if($(\'#Products_parent_parent_id\').val())$(\'#Products_parent_id\').removeAttr(\'disabled\')}',
        'update'=>'#Products_parent_id',
        'data'=>array('parent_id'=>'js:this.value'),
    )
)); ?>
<?if($model->parent_id){$subCat = CHtml::listData(Categories::model()->findAllByAttributes(array('deleted'=>0, 'parent_id'=>$model->parent_parent_id)),'id','name');$d = false;} else {$subCat = array();$d=true;}?>
<?php echo $form->dropDownListRow($model,'parent_id',$subCat,array('empty'=>'--Выберите подкатегорию--','class'=>'span5',)); ?>

<?php echo $form->dropDownListRow($model, 'manufactures_id', CHtml::listData(Manufactures::model()->findAllByAttributes(array('deleted'=>0)),'id','name'),array('empty'=>'--Выберите производителя--','class'=>'span5')); ?>
	<?php echo $form->textFieldRow($model,'name',array('class'=>'span5','maxlength'=>100)); ?>

	<?php echo $form->textFieldRow($model,'full_name',array('class'=>'span5','maxlength'=>200)); ?>

<?php echo $form->checkBoxRow($model,'active',array('')); ?>

<?php echo $form->checkBoxRow($model,'is_new'); ?>

<?php echo $form->checkBoxRow($model,'is_recomended'); ?>

<?php echo $form->checkBoxRow($model,'is_show_in_main'); ?>



	<?php echo $form->dropDownListRow($model,'stocks_id',CHtml::listData(Stocks::model()->findAllByAttributes(array('deleted'=>0)),'id','name'), array('empty'=>'--не участвует--','class'=>'span5')); ?>

    <?php echo $form->dropDownListRow($model, 'units_id', CHtml::listData(Units::model()->findAllByAttributes(array('deleted'=>0)),'id','name'),array('empty'=>'--Выберите ед. измерения--','class'=>'span5')); ?>

	<?php echo $form->textAreaRow($model,'first_description',array('rows'=>6, 'cols'=>50, 'class'=>'span8')); ?>

	<?php echo $form->textAreaRow($model,'second_description',array('rows'=>6, 'cols'=>50, 'class'=>'span8')); ?>

    <?php echo $form->dropDownListRow($model,'templates',CHtml::listData(TechnicalCharacteristicsTemplate::model()->findAllByAttributes(array('deleted'=>0)),'id','name'),array(
        'empty'=>'--Выберите шаблон--',
        'class'=>'span5',
        'ajax'=>array(
            'type'=>'POST',
            'url'=>'/admin/products/gettcnames',
            'update'=>'#for_tcNames',
            'data'=>array('template_id'=>'js:this.value'),
        ),
))?>
<?php $this->widget('bootstrap.widgets.TbLabel', array(
    'type'=>'important', // 'success', 'warning', 'important', 'info' or 'inverse'
    'label'=>'Выбор шаблона заменит уже введенные характеристики',

)); ?>



<hr>
<div id="for_tcNames">
 <?
        echo '<div class="template_labels">';
        echo CHtml::label('Название характеристики','',array('class'=>'span3'));
        echo CHtml::label('Значение характеристики','',array('class'=>'span3'));
        echo '</div>';
$ptc = ProductTechnicalCharacteristics::model()->findAllByAttributes(array('product_id'=>$model->id));
if($ptc){
    foreach ($ptc as $item) {
        echo '<div>';
        echo CHtml::activeTextField(ProductTechnicalCharacteristics::model(),'[]name',array('value'=>$item->name,'class'=>'span3'));
        echo CHtml::activeTextField(ProductTechnicalCharacteristics::model(),'[]value',array('value'=>$item->value,'class'=>'span3','style'=>'margin-left:10px'));
        $this->widget('bootstrap.widgets.TbButton', array(
        'buttonType'=>'button',
        'type'=>'danger',
        'label'=>'X',
        'htmlOptions'=>array('class'=>'del_char','style'=>'margin: 0 0 10px 10px')
        ));
        echo '</div>';
    }
}



        echo '<div>';
        echo CHtml::activeTextField(ProductTechnicalCharacteristics::model(),'[]name',array('class'=>'span3'));
        echo CHtml::activeTextField(ProductTechnicalCharacteristics::model(),'[]value',array('class'=>'span3','style'=>'margin-left:10px'));
        $this->widget('bootstrap.widgets.TbButton', array(
        'buttonType'=>'button',
        'type'=>'danger',
        'label'=>'X',
        'htmlOptions'=>array('class'=>'del_char','style'=>'margin: 0 0 10px 10px')
        ));
        echo '</div>';
 ?>
</div>
<hr>
<div class="clr"></div>

<?php $this->widget('bootstrap.widgets.TbButton', array(
    'buttonType'=>'button',
    'label'=>'добавить характеристику',
    'htmlOptions'=>array('class'=>'add_char',)
)); ?>

    <?php echo $form->dropDownListRow($model, 'delivery_msg_id', CHtml::listData(DeliveryMessage::model()->findAllByAttributes(array('deleted'=>0)),'id','title'),array('empty'=>'--Выберите сообщение о доставке--','class'=>'span5')); ?>


	<?php echo $form->textAreaRow($model,'search_words',array('class'=>'span8','maxlength'=>300)); ?>

<?php $this->widget('bootstrap.widgets.TbButton', array(
    'buttonType'=>'button',
    'label'=>'генерировать',
    'htmlOptions'=>array('class'=>'generate','style'=>'margin-right:20px')
)); ?>
<?php $this->widget('bootstrap.widgets.TbLabel', array(
    'type'=>'important', // 'success', 'warning', 'important', 'info' or 'inverse'
    'label'=>'Генерация не освобождает от ручного заполнения этого поля',

)); ?>
<div class="clr"><br></div>
<?php echo CHtml::label('Сопутствующие товары', ''); ?>
<div class="forRelatedProds"></div>
<?php $this->widget('bootstrap.widgets.TbButton', array(
    'buttonType'=>'button',
    'type'=>'primary',
    'label'=>'Поиск по номенклатуре',
    'htmlOptions'=>array('class'=>'getModalSearch related')
)); ?>
<div class="clr"><br></div>
<?php echo CHtml::label('Рекомендуемые товары', ''); ?>
<div class="forRecomendedProds"></div>
<?php $this->widget('bootstrap.widgets.TbButton', array(
    'buttonType'=>'button',
    'type'=>'primary',
    'label'=>'Поиск по номенклатуре',
    'htmlOptions'=>array('class'=>'getModalSearch recomended')
)); ?>
<div class="clr"><br></div>

<!------------------------  ОПЦИИ ---------------------------->
    <?php echo CHtml::label('Опции', ''); ?>
    <div class="prod_options">
        <hr>
        <div class="pull-left" style="margin: 0 40px 0 5px">
            <?php echo CHtml::label('Цвет', '', array('style'=>'margin-bottom:13px;padding:7px 0 0 10px')); ?>
            <?php echo CHtml::dropDownList('color_option', 'select', CHtml::listData(Colors::model()->findAllByAttributes(array('deleted'=>0)),'id','name' )); ?>

            <div class="clr"></div>
            <?php echo CHtml::listBox('color_options_list', 'select', array(),array('size'=>10)); ?>
               <div class="clr"></div>
            <?php $this->widget('bootstrap.widgets.TbButton', array(
            'buttonType'=>'button',
            'type'=>'',
            'label'=>'Удалить выделенное',
            'htmlOptions'=>array('style'=>'width: 220px;', 'class'=>'del_options')
        )); ?>
        </div>
        <div class="pull-left" style="margin-right:40px">
            <?php echo CHtml::textField('first_option_name', ''); ?><br>
            <?php echo CHtml::textField('first_option_value', '',array('size'=>10, 'disabled'=>true)); ?>
            <div class="clr"></div>
            <?php echo CHtml::listBox('first_options_list', 'select', array('11'),array('size'=>10, 'disabled'=>true)); ?>
               <div class="clr"></div>
            <?php $this->widget('bootstrap.widgets.TbButton', array(
            'buttonType'=>'button',
            'type'=>'',
            'label'=>'Удалить выделенное',
            'htmlOptions'=>array('style'=>'width: 220px;', 'class'=>'del_options')
        )); ?>
        </div>
        <div class="pull-left">
            <?php echo CHtml::textField('second_option_name', ''); ?><br>
            <?php echo CHtml::textField('second_option_value', '',array('size'=>10, 'disabled'=>true)); ?>
            <div class="clr"></div>
            <?php echo CHtml::listBox('second_options_list', 'select', array(),array('size'=>10,'disabled'=>true)); ?>
               <div class="clr"></div>
            <?php $this->widget('bootstrap.widgets.TbButton', array(
            'buttonType'=>'button',
            'type'=>'',
            'label'=>'Удалить выделенное',
            'htmlOptions'=>array('style'=>'width: 220px;', 'class'=>'del_options')
        )); ?>
        </div>
        <div class="clr"></div>
        <hr>
        <?php $this->widget('bootstrap.widgets.TbButton', array(
            'buttonType'=>'button',
            'type'=>'primary',
            'label'=>'Сгенерировать таблицу',
            'htmlOptions'=>array('class'=>'pull-right generate_pricing')
        )); ?>

    </div>
    <div class="clr"></div>
<!------------------------  ОПЦИИ (конец) ---------------------------->

	<?php echo $form->textFieldRow($model,'article',array('class'=>'span5','maxlength'=>50)); ?>

	<div class="form-actions">
		<?php $this->widget('bootstrap.widgets.TbButton', array(
			'buttonType'=>'submit',
			'type'=>'primary',
			'label'=>$model->isNewRecord ? 'Создать' : 'Сохранить',
		)); ?>
        <?php $this->widget('bootstrap.widgets.TbButton', array('buttonType'=>'reset', 'label'=>'Очистить')); ?>
	</div>

<?php $this->endWidget(); ?>

<?php $this->beginWidget('bootstrap.widgets.TbModal', array('id'=>'dataModal')); ?>
<div class="modal-header">         
    <a class="close" data-dismiss="modal">×</a>         
    <h4><?=Yii::t("products", "Выберите товар")?></h4>     
</div>     
<div class="modal-body">
    <?
    $prods = new Products();
//CVarDumper::dump($prods);
        $prods->unsetAttributes();  // clear any default values
  //  CVarDumper::dump($prods);
        if(isset($_GET['Products']))
            $prods->attributes=$_GET['Products'];


    $this->widget('bootstrap.widgets.TbGridView',array(
    'id'=>'products-grid',
    'dataProvider'=>$prods->searchForGrid(),
    'filter'=>$prods,
    'type'=>'striped',
    'columns'=>array(
        'id',
        'name',
        'full_name',
        array(
            'name'=>'parent_parent_id',
            /*'filter'=> CHtml::dropDownList($data->parent_category->name,'parent_parent_id' ,array()),*/
            'filter' => CHtml::listData(Categories::model()->findAll('parent_id = 0 AND is_products=0'), 'id', 'name'),
            'value'=>'$data->parent_category->name'
        ),
        array(
            'name'=>'parent_id',
            'filter' => CHtml::listData(Categories::model()->findAll('parent_id!=0 AND is_products=0'),'id','name'),
            'value'=>'$data->categories->name',
        ),
        array(
            'class'=>'bootstrap.widgets.TbButtonColumn',
            'template'=>'{insert}',
            'buttons'=>array(
                'insert'=>array(
                    'label'=>'Выбрать',
                    'options'=>array(
                        'class'=>'btn btn-mini btn-primary',
                        'onclick'=>'getProd($(this).parent().parent().children(":nth-child(1)").text()); return false',
                    )
                )        
            )
        ),
    ),
)); ?>
</div>     
<div class="modal-footer">         
    <?php
    $this->widget('bootstrap.widgets.TbButton',
    array('label'=>Yii::t("products", "Отмена"), 'url'=>'#','htmlOptions'=>array('data-dismiss'=>'modal'),)); ?>     
</div> 
<?php $this->endWidget(); ?>


<?php $this->beginWidget('bootstrap.widgets.TbModal', array('id'=>'pricingModal')); ?>
<div class="modal-header">         
    <a class="close" data-dismiss="modal">×</a>         
    <h4><?=Yii::t("products", "Заполните таблицу")?></h4>     
</div>     
<div class="modal-body">
    
</div>     
<div class="modal-footer">         
    <?php $this->widget('bootstrap.widgets.TbButton', 
    array('label'=>Yii::t("products", "Отмена"), 'url'=>'#','htmlOptions'=>array('data-dismiss'=>'modal'),)); ?>     
</div> 
<?php $this->endWidget(); ?>


