<?php
Yii::app()->clientScript->registerScriptFile('/js/upload.js');
Yii::app()->clientScript->registerScriptFile('/js/jquery.form.js');
if(!$model->isNewRecord){
    $c = new CDbCriteria();
    $c->addCondition('table_name = :tableName');
    $c->addCondition('obj_id = :id');
    $c->addSearchCondition('path','main');
    $c->addCondition('used = 1');
    $c->params['tableName'] = $model->tableName();
    $c->params['id'] = $model->id;
    $model->img_main = Files::model()->find($c)->id;
    $c = new CDbCriteria();
    $c->select = 'id';
    $c->addCondition('table_name = :tableName');
    $c->addCondition('obj_id = :id');
    $c->addSearchCondition('path','main', true, 'AND', 'NOT LIKE');
    $c->addCondition('used = 1');
    $c->params['tableName'] = $model->tableName();
    $c->params['id'] = $model->id;
    $out = array();
    $arr = Files::model()->findAll($c);
    foreach($arr as $id)
    {
        array_push($out, $id->id);
    }
    $model->file_gal_id = $out;
}


$form=$this->beginWidget('bootstrap.widgets.TbActiveForm',array(
	'id'=>'construction-crew-form',
	'enableAjaxValidation'=>false,
)); ?>

	<p class="help-block">Поля помеченные <span class="required">*</span> обязательны к заполнению.</p>

	<?php echo $form->errorSummary($model); ?>

	<?php echo $form->textFieldRow($model,'name',array('class'=>'span5','maxlength'=>50)); ?>

	<?php echo $form->textAreaRow($model,'content',array('rows'=>6, 'cols'=>50, 'class'=>'span8')); ?>

    <div>
        <?php echo $form->labelEx($model,'img_main')?>
        <?php echo $form->fileField($model,'file_main',array('class'=>'fileUpload','accept'=>'image/jpeg,image/png,image/gif'))?>
        <?php echo $form->hiddenField($model,'img_main',array('class'=>'fileId'))?>
        <div class="clr"></div>
        <div class="preloader pull-left" style="display:none"></div>
        <div class="clr"></div>
        <div class="span8 preview" >
            <?
            if(!$model->img_main)
            {
                if(!$model->isNewRecord){?>
                    <img src="/files/<?=Files::model()->findByPk($model->img_main)->path?>" />
                <?}
            }else{?>
                <img src="/files/<?=Files::model()->findByPk($model->img_main)->path?>" />
            <?}
            ?>
        </div>
        <div class="clr"></div>
    </div>
    <br>
    <div>
        <?php echo $form->labelEx($model,'file_gal_id')?>
        <?php echo $form->fileField($model,'file_gal[]',array('class'=>'fileUploadGal','accept'=>'image/jpeg,image/png,image/gif', 'multiple'=>'true'))?>
        <div class="clr"></div>
        <div class="preloader pull-left" style="display:none"></div>
        <div class="clr"></div>
        <div class="span8 preview" >
            <?
            if(!$model->file_gal_id)
            {
                if(!$model->isNewRecord){
                    //print_r($model->file_gal_id);
                    foreach($model->file_gal_id AS $file)
                    {
                        echo '<div class="f-l img_div">';
                        echo '<img src="/files/prw_'.Files::model()->findByPk($file->id)->path.'" style="max-width:300px"/>';
                        echo '<input type="hidden" name="ConstructionCrew[file_gal_id][]" value="'.$file->id.'">';
                        echo '<i class="icon-remove-circle remove_img"></i><input type="checkbox"></div>';
                    }
                    $dn = count($model->file_gal_id)>0?'':'style="display: none;"';
                    ?>

                <?}
                else
                {
                    $dn = 'style="display: none;"';
                }?>
            <?}else{
                foreach($model->file_gal_id AS $file)
                {
                    echo '<div class="f-l img_div">';
                    echo '<img src="/files/prw_'.Files::model()->findByPk($file)->path.'" style="max-width:300px"/>';
                    echo '<input type="hidden" name="ConstructionCrew[file_gal_id][]" value="'.$file.'">';
                    echo '<i class="icon-remove-circle remove_img"></i><input type="checkbox"></div>';
                }
                $dn = count($model->file_gal_id)>0?'':'style="display: none;"';
            }?>
            <div class="clr"></div>
            <button class="btn btn-xs btn-danger del_checked" <?=$dn?> type="button">Удалить выбранные</button>
        </div>
        <div class="span8 errors" >
        </div>
    </div>
        <div class="clr"></div>

    <input type="hidden" name="field_name"/>

	<div class="form-actions">
		<?php $this->widget('bootstrap.widgets.TbButton', array(
			'buttonType'=>'submit',
			'type'=>'primary',
			'label'=>$model->isNewRecord ? 'Создать' : 'Сохранить',
		)); ?>
	</div>

<?php $this->endWidget(); ?>
