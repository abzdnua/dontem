<div class="w940">
<div class="pictures"  style="margin-top: 35px;width: 940px;margin:0 auto;max-height: 370px;overflow: hidden;">

        <?php
            $gallery = BlockGallery::model()->findAll('block_id = '.$block_id);
            // echo count($gallery);
            foreach ($gallery as $key => $img) {
                list($w,$h,$t)=getimagesize($_SERVER['DOCUMENT_ROOT'].'/files/gallery/'.$img->md5_name.'_'.$img->id.'.jpg')?>

                        <img alt="" class='gal' data-db="<?php echo $block_id ?>"  data-ajax="true" data-description="dasfsg" data-current="<?php echo $key ?>" data-folder="/files/gallery/" src="/files/gallery/<?php echo $img->md5_name.'_'.$img->id.'.jpg' ?>" width="<?=$w?>" height="<?=$h?>" style=""/>

            <?}
         ?>

<div class="clr"></div>
</div>
</div>
