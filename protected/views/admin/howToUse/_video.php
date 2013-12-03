<?php
    $checked=($model->active_content==0 OR $model->active_content==1)?false:true;
    $idvideolabel=uniqid();
    echo CHtml::activeCheckBox($model,"activevideo",array("checked"=>$checked,"id"=>$idvideolabel,"style"=>"float:left"));
    echo CHtml::activeLabelEx($model,'activevideo',array("for"=>$idvideolabel,'style'=>"float:left;margin-left:10px;"));
    echo CHtml::error($model,'activevideo');
    echo "<div class='clr'></div>";
    echo CHtml::activeTextField($model,"video",array('class'=>'span4'));
    echo CHtml::error($model,'video');
    $this->widget('bootstrap.widgets.TbButton', array(
        'buttonType'=>'button',
        'label'=>'Загрузить видео',
        'htmlOptions'=>array('class'=>'loadvideo','style'=>'margin:0 0 10px 20px')
    ));
    $model->video_name = $_POST['howtouse']['video_name'];
    echo CHTML::activeHiddenField($model,'video_name');

 ?>
    <div class="clr"></div>
        <div class="span3 videopreview">
        <?if(!$model->video_name){?>
            <?if(!$model->isNewRecord){?>
                <div><object class="object-video"><param name="wmode" /><param name="movie" value="<?=Files::model()->findByAttributes(array('table_name'=>$model->tableName(),'obj_id'=>$model->id, 'used'=>1,'type'=>2))->path?>?version=3&feature=player_detailpage&autoplay=0"><param name="allowFullScreen" value="true"><param name="allowScriptAccess" value="always"><embed src="<?=Files::model()->findByAttributes(array('table_name'=>$model->tableName(),'obj_id'=>$model->id, 'used'=>1,'type'=>2))->path?>?version=3&feature=player_detailpage&autoplay=0" type="application/x-shockwave-flash" allowfullscreen="true" allowScriptAccess="always" class="object-video" ></object></div>

            <?}?>
        <?}else{?>
            <div><object class="object-video"><param name="wmode" /><param name="movie" value="'<?=Files::model()->findByPk($model->video_name)->path?>'?version=3&feature=player_detailpage&autoplay=0"><param name="allowFullScreen" value="true"><param name="allowScriptAccess" value="always"><embed src="'<?=Files::model()->findByPk($model->video_name)->path?>'?version=3&feature=player_detailpage&autoplay=0" type="application/x-shockwave-flash" allowfullscreen="true" allowScriptAccess="always" class="object-video" ></object></div>

        <?}?>
    </div>
