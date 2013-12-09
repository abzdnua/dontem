<div class="w940">
<div class="b-page-wrap"  style="margin-top: 35px;">
    <div class="b-page-layout b-page-layout_page_index i-clearfix">
        <div class="b-images-head"></div>
        <div class="b-images-list b-images-list_layout_stream b-images-list_dangling_no b-images-list_type_home b-images-list_fluid_yes i-images-lists__list i-clearfix i-bem" onclick="return {&quot;b-images-list&quot;:{}}">

        <?php
            $gallery = BlockGallery::model()->findAll('block_id = '.$block_id);
            // echo count($gallery);
            foreach ($gallery as $key => $img) {?>
              <div class="b-images-item b-images-item_home_yes b-images-item_in_stream b-images-list__unit i-bem" >
                  <div class="b-images-item__wrap">
                      <div class="b-link b-link_counter_blockstat b-link_type_home i-counter i-bem" >
                        <img alt="" class='gal width-h-p b-images-item__preview' data-db="<?php echo $block_id ?>"  data-ajax="true" data-description="dasfsg" data-current="<?php echo $key ?>" data-folder="/files/gallery/" src="/files/gallery/<?php echo $img->md5_name.'_'.$img->id.'.jpg' ?>" style="height:178px"/>
                      </div>
                  </div>

              </div>
            <?}
         ?>


        <div class="i-clearfix"></div>

        </div>
    </div>
</div>
</div>
