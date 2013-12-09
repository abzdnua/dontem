    <div class="w_960">

<?php 
    $text = BlockText::model()->find('block_id = '.$block_id);
    $img = Files::model()->findByPk(BlockImg::model()->find('block_id = '.$block_id)->file_id);    
    $t_p = ($text->position == Yii::app()->params['left_text'])?'f_l':'f_r';
    $i_p = ($text->position == Yii::app()->params['left_text'])?'f_r':'f_l';
    echo "<div class='$t_p vert_al text w_460' >".str_replace('-D-', '', $text->content)."</div>
            <div class='$i_p vert_al img' >
                <img src='/files/$img->file_path'/>
            </div>
            <div class='clr'></div>";
?>
</div>

