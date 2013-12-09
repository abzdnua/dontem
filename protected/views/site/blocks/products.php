<?php 
$block_products = BlockProducts::model()->findAll('block_id = '.$block_id);
if($block_products){?>
<div class="w_960 bottom_all">
    <div>
    <?foreach ($block_products as $key => $block_prod) {
        $prod = Products::model()->findByPk($block_prod->product_id);
        if(count($block_products)==1){
            $align = 'mar_0_auto';
        }else{
            $align = ($key%2==0)?'f_l':'f_r';}?>

        <div class="block_product <?php echo $align?>">
            <a class="img_a" href="<?php echo Yii::app()->urlManager->createUrl('site/preparation_more',array('link'=>DLL::makeLink($prod->short_name).'_'.$prod->id))?>">
            <div class="img">
                <div class="vert_al">
                    <?php 
                        $img = Files::model()->findByPk($prod->image_id);
                        if($img and is_file($_SERVER['DOCUMENT_ROOT'].'/files/r_'.$img->file_path)){?>
                                <img src="/files/r_<?php echo $img->file_path?>"/>
                        <?}
                    ?>
                </div>
            </div>
                </a>
            <div class="text">
                <a class="href" href="<?php echo Yii::app()->urlManager->createUrl('site/preparation_more',array('link'=>DLL::makeLink($prod->full_name).'_'.$prod->id))?>"><?php echo $prod->short_name?></a>
                <div class="haract">
                    <span>Производитель:&nbsp;</span>
                    <?php $is_man_des = Yii::app()->db->createCommand("SELECT COUNT(id) FROM blocks WHERE parent_table = 'manufactures_des' AND parent_id = $prod->id")->queryScalar();
                        if($is_man_des){?>
                        <a class="firm" href="<?=Yii::app()->urlManager->createUrl('site/manufacturer',array('link'=>DLL::makeLink($prod->short_name).'_'.$prod->id))?>">
                            <?php echo Manufactures::model()->findByPk($prod->manufactures_id)->manufactury_name ?> 
                        </a>
                        <?}else{?>
                            <span><?php echo Manufactures::model()->findByPk($prod->manufactures_id)->manufactury_name ?></span>
                        <?}?>
                    <br/>
                    <span>Количество: <?php echo $prod->amount?></span>
                </div>
            <?if(Yii::app()->params['are_we_sold']){?>
                <div class="block_price">
                    <?php if($prod->old_price){?>
                    <div class="old"><?php echo number_format($prod->old_price,0,'',' ') ?> грн.</div>
                    <?}?>
                    <div class="new"><?php echo number_format($prod->new_price,0,'',' ') ?> грн.</div>
                </div>
                <?php 
                        $session = new CHttpSession();
                        $session->open();                        
                        $url = Yii::app()->urlManager->createUrl('cart/add',array('id'=>$prod->id));
                        $label = 'Заказать';
                        if($session->contains('cart')){
                            $cart = $session->get('cart');
                            foreach ($cart as $item) {
                                if($item['id']==$prod->id){
                                    $url = Yii::app()->urlManager->createUrl('site/cart');
                                    $label = 'В корзине';
                                }
                            }
                        }
                         ?>
                        <a class="bt" href="<?php echo $url?>"><?php echo $label ?></a>
                <?}?>
            </div>
        </div>
    <?}
    if($key%2!=0){?>
    <div class="clr"></div>
    <?}
    ?>


    </div>
    <div class="clr"></div>
</div>
<?}
?>


