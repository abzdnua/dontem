<?php
    $checked=($model->active_content==1)?true:false;
    $idphotolabel=uniqid();
    echo CHtml::activeCheckBox($model,"activephoto",array('id'=>$idphotolabel,"style"=>"float:left"));
    echo CHtml::activeLabelEx($model,'activephoto',array("for"=>$idphotolabel,'style'=>"float:left;margin-left:10px;"));
    echo CHtml::error($model,'activephoto');
    echo "<div class='clr'></div>";
    echo CHtml::activeFileField($model,"file",array("class"=>"fileUpload"));
    echo CHtml::error($model,'file');
    $model->img_name = (int)$_POST['howtouse']['img_name'];
    echo CHtml::activeHiddenField($model,'img_name',array('class'=>'fileId'));

?>
    <div class="clr"></div>
    <div class="preloader pull-left" style="display:none"></div>
        <div class="clr"></div>
        <div class="span3 preview">
        <?if(!$model->img_name){?>
            <?if(!$model->isNewRecord){?>
                <img src="/files/<?=Files::model()->findByAttributes(array('table_name'=>$model->tableName(),'obj_id'=>$model->id, 'used'=>1,'type'=>1))->path?>" style="max-width: 300px"/>
            <?}?>
        <?}else{?>
            <img src="/files/<?=Files::model()->findByPk($model->img_name)->path?>" style="max-width: 300px"/>
        <?}?>
    </div>

