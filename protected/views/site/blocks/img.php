<?php
    $block_img = BlockImg::model()->find('block_id = '.$block_id);
    $img = Files::model()->findByPk($block_img->file_id);
    ?>
    <div class="img_all_page_width">
            <img src="/files/<?php echo $img->file_path?>">
    </div>


