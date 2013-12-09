<?php 
    $parallax = BlockImg::model()->find('block_id = '.$block_id);
    $img = Files::model()->findByPk($parallax->file_id);
    if($img and is_file($_SERVER['DOCUMENT_ROOT'].'/files/'.$img->file_path)){?>
        <div class="block_paralax block_dinamic">
            <img src="/files/<?php echo $img->file_path?>">
        </div>
    <?}?>


