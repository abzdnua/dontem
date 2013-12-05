<?php 

class RedactorController extends Controller
{

    public function filters()
    {
        /*return array(
            'accessControl', // perform access control for CRUD operations
        );*/
        return array(
            'ajaxOnly + getBlock',
        );
    }
    public function actionGetBlock(){
        $type = Yii::app()->request->getParam('type');
        $num = Yii::app()->request->getParam('num');
        $pos = Yii::app()->request->getParam('pos');
        switch($type)
        {
            case Constants::BLOCK_TYPE_TEXT: $this->renderPartial('_text',array('num'=>$num,'pos'=>$pos));break;
            case Constants::BLOCK_TYPE_IMG_PARALLAX: $this->renderPartial('_parallax',array('num'=>$num,'pos'=>$pos));break;
            case Constants::BLOCK_TYPE_TEXT_IMG: $this->renderPartial('_text_img',array('num'=>$num,'pos'=>$pos));break;
            case Constants::BLOCK_TYPE_TEXT_VIDEO: $this->renderPartial('_text_video',array('num'=>$num,'pos'=>$pos));break;
            case Constants::BLOCK_TYPE_GALLERY: $this->renderPartial('_gallery',array('num'=>$num,'pos'=>$pos));break;

        }
    }

    public function actionGetProd()
    {
        if(isset($_POST['id'])){
            $prod = Products::model()->findByPk($_POST['id']);
            if($prod){
                echo '<div class="forProdImg">';
                $prod_img = Files::model()->findByPk($prod->image_id);
                if($prod_img){
                    if(is_file($_SERVER['DOCUMENT_ROOT'].'/files/'.$prod_img->file_path)){
                        echo "<img src=\"/files/$prod_img->file_path\" style=\"max-width:100%\">";
                    }
                }
                echo "</div>
                <div class=\"forProdInfo\">
                    <button type=\"button\" class=\"pull-right close\" aria-hidden=\"true\">&times;</button>
                    <strong>$prod->short_name</strong><br>                    
                </div>";

            }
        }
    }
    

    public static function saveBlocks($post,$item)
    {
        //удаление старых записей
        $blocks = Blocks::model()->findAll("(parent_table = '".$item->tableName()."') AND parent_id = $item->id");
        if($blocks){
            foreach ($blocks as $block) {
                BlockText::model()->deleteAll("block_id = $block->id");
                BlockImg::model()->deleteAll("block_id = $block->id");
                $block->delete();
            }
        }



        //сохранение новых
        if(isset($post['BlockText'])) $texts = $post['BlockText'];  
        if(isset($post['BlockImg'])) $imgs = $post['BlockImg'];
        if(isset($post['BlockVideo'])) $videos = $post['BlockVideo'];
        if(isset($post['gal_id'])) $gals = $post['gal_id'];
        if(isset($post['Blocks']))
        foreach ($post['Blocks'] as $key => $value) {
            $block = new Blocks();
            $block->block_type = $value['block_type'];
            $block->parent_table = $item->tableName();
            $block->parent_id = $item->id;
            $block->order = $value['order']; 
            $block->title = (isset($value['title']))?$value['title']:'';
            $block->save();

            switch ($block->block_type) {
                case Constants::BLOCK_TYPE_TEXT:
                    $block_text = new BlockText();
                    $block_text->block_id = $block->id;
                    $text = $texts[$key];
                    $block_text->content = $text['content'];
                    $block_text->save(); 
                    break;
                
                case Constants::BLOCK_TYPE_IMG_PARALLAX:
                    $block_img = new BlockImg();
                    $block_img->block_id = $block->id;
                    $img = $imgs[$key];
                    $block_img->img_type = Constants::IMG_TYPE_PARALLAX;
                    $block_img->file_id = $img['file_id'];
                    $block_img->save();

                    $img_to_save = Files::model()->findByPk($img['file_id']);
                    $img_to_save->used = 1;
                    $img_to_save->save(false);
                    break;

                case Constants::BLOCK_TYPE_TEXT_IMG:
                    $block_img = new BlockImg();
                    $block_img->block_id = $block->id;
                    $img = $imgs[$key];
                    $block_img->img_type = Constants::IMG_TYPE_HALF_BLOCK;
                    $block_img->file_id = $img['file_id'];
                    $block_img->save(); 
                    
                    $img_to_save = Files::model()->findByPk($img['file_id']);
                    $img_to_save->used = 1;
                    $img_to_save->save(false);

                    $block_text = new BlockText();
                    $block_text->block_id = $block->id;
                    $text = $texts[$key];
                    $block_text->position = $text['position'];
                    $block_text->content = $text['content'];
                    $block_text->save();
                    break;

                case Constants::BLOCK_TYPE_TEXT_VIDEO:
                    $block_video = new BlockVideo;
                    $block_video->block_id = $block->id;
                    $video = $videos[$key];
                    $block_video->video_link = $video['video_link'];
                    $block_video->save();
                    // video here
                    $block_text = new BlockText();
                    $block_text->block_id = $block->id;
                    $text = $texts[$key];
                    // $text = array_pop($texts);
                    $block_text->position = $text['position'];
                    $block_text->content = $text['content'];
                    $block_text->save();
                    break;

                case Constants::BLOCK_TYPE_GALLERY:
                    foreach ($gals[$key] as $gal_ids) {
                        $gal = BlockGallery::model()->findByPk($gal_ids);
                        $gal->block_id = $block->id;
                        $gal->save();
                    }
                    break;

                default:
                    # code...
                    break;
            }
        }
    }

}
