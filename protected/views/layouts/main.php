<?php /* @var $this Controller */ ?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <meta name="language" content="en" />
    <link rel='shortcut icon' href='/images/favicon.ico' />


    <link rel="stylesheet" type="text/css" href="<?php echo Yii::app()->request->baseUrl; ?>/css/reset.css" />

    <!-- blueprint CSS framework -->
    <!--link rel="stylesheet" type="text/css" href="<?php echo Yii::app()->request->baseUrl; ?>/css/screen.css" media="screen, projection" />
	<link rel="stylesheet" type="text/css" href="<?php echo Yii::app()->request->baseUrl; ?>/css/print.css" media="print" />
	<!--[if lt IE 8]>
    <link rel="stylesheet" type="text/css" href="<?php echo Yii::app()->request->baseUrl; ?>/css/ie.css" media="screen, projection" />
    <![endif]-->

    <script type="text/javascript" src="<?php echo Yii::app()->request->baseUrl; ?>/js/jquery-1.8.2.js"></script>


    <link rel="stylesheet" type="text/css" href="<?php echo Yii::app()->request->baseUrl; ?>/css/main.css" />


    <title><?php echo CHtml::encode($this->pageTitle); ?></title>
</head>

<body>

<!--div class="container" id="page"-->





<link rel="stylesheet" type="text/css" href="<?php echo Yii::app()->request->baseUrl; ?>/css/carusel.css"/>
<link rel="stylesheet" type="text/css" href="<?php echo Yii::app()->request->baseUrl; ?>/css/jquery.formstyler.css"/>
<link rel="stylesheet" type="text/css" href="<?php echo Yii::app()->request->baseUrl; ?>/css/jquery-ui-1.8.16.custom.css"/>

<link rel="stylesheet" type="text/css" id="galsize" href="<?php echo Yii::app()->request->baseUrl; ?>/css/sgal1.css"/>

<!--link rel="stylesheet" type="text/css" href="<?php echo Yii::app()->request->baseUrl; ?>/css/sgal3.css"/-->

<script type="text/javascript" src="<?php echo Yii::app()->request->baseUrl; ?>/js/jquery.formstyler.js"></script>
<script type="text/javascript" src="<?php echo Yii::app()->request->baseUrl; ?>/js/_gal.js"></script>
<link href='http://fonts.googleapis.com/css?family=Open+Sans:400italic,400,600,700&subset=latin,cyrillic' rel='stylesheet' type='text/css'>

<!--script type="text/javascript" src="<?php echo Yii::app()->request->baseUrl; ?>/js/jquery.imagesloaded.js"></script>
<script type="text/javascript" src="<?php echo Yii::app()->request->baseUrl; ?>/js/masonry.pkgd.js"></script-->
<script src="<?php echo Yii::app()->request->baseUrl; ?>/js/jquery-gp-gallery.js"></script>


<!--a href="<?=Yii::app()->urlManager->createUrl('site/delivery_and_payment')?>">Доставка и оплата</a-->
<script>
    var first_click = 0
    var istouch=(!!('ontouchstart' in window))?'touchstart':'click';
$(document).on('mouseenter touchstart','.menu ul li.sub',function(){
    first_click = first_click + 1
        $(this).children().css({display:'block'})
    $(this).addClass('active')
    }).on('mouseleave ','.menu ul li.sub',function(){

        $(this).children().css({display:'none'})
        $(this).removeClass('active')
    }).on('touchstart','.menu ul li.sub',function(){
        console.log(first_click)
      if ( first_click ==1)
      {
         return
      }
        if ( first_click ==2)
        {
            first_click =0;
            $(this).children().css({display:'none'})
            $(this).removeClass('active')
        }

        $(this).children().css({display:'none'})
        $(this).removeClass('active')
    }).on('mouseenter touchend','.block_news ul li',function(){

    $(this).find('.text_move').stop().animate({top:0},300)
}).on('mouseleave touchend','.block_news ul li',function(){

        $(this).find('.text_move').stop().animate({top:260},300)
    }).on('mouseenter touchend','.page_project .project_block',function(){
        $(this).find('.hover_border').removeClass('display_none')
    }).on('mouseleave touchend','.page_project .project_block',function(){
        $(this).find('.hover_border').addClass('display_none')
    }).on('mouseenter touchstart','.bt_news_page .bt_simp',function(){

  $(this).find('.spisok').css({display:'block'})
}).on('mouseleave ','.bt_news_page .bt_simp',function(){
        $(this).find('.spisok').css({display:'none'})
    })
var with_img,width_x

 $(window).bind('scroll',function(e){
 parallaxScroll();
 });

 function parallaxScroll(){

 var scrolled = $(window).scrollTop();
 var move_top = (0-(scrolled*.30))-100

 if (( scrolled<200 )  )
 {
 $('.paralax div img').css('top',-scrolled+'px');
 }
     else
 {
     $('.paralax div img').css('top',-199+'px');
 }


 }
$(document).ready(function(){

    $('.paralax img').css({display:'none'})
    var img_src = $('.paralax img').attr('src')
    var img = new Image();
    img.src = img_src;
    img.onload =function(){
        $('.paralax img').fadeIn(800)
    }
})
</script>
<div class="all_page">
<div id="header">
    <div class="w_980">
        <a href="/" class="logo f_l"></a>
<div class="ph f_r">(062) 381-31-87</div>
        <div class="menu f_l">
            <ul>
                <li class="sub <? if(strpos(Yii::app()->controller->action->id,'project')!==false){echo 'color_menu';} ?> ">Проекты
                    <div class="submenu">
                        <?php $tes = $tes = Yii::app()->db->createCommand("SELECT DISTINCT(tes_id) FROM projects WHERE deleted = 0 AND is_active = 1")->queryColumn();
                        foreach ($tes as $key => $value) {?>
                           <a href="<?=Yii::app()->urlManager->createUrl('site/project',array('tes_id'=>$value))?>"><?php echo Constants::getTes($value) ?></a>
                         <?} ?>

                    </div>
                </li>


                <li><a class= "<? if(strpos(Yii::app()->controller->action->id,'news')!==false){echo 'color_menu';} ?>" href="<?=Yii::app()->urlManager->createUrl('site/news')?>">Новости</a></li>
                <li><a class= "<? if(strpos(Yii::app()->controller->action->id,'about')!==false){echo 'color_menu';} ?>" href="<?=Yii::app()->urlManager->createUrl('site/about')?>"> О нас </a></li>
                <li><a class= "<? if(strpos(Yii::app()->controller->action->id,'principles')!==false){echo 'color_menu';} ?>" href="<?=Yii::app()->urlManager->createUrl('site/principles')?>">Ценности бренда </a> </li>
                <li><a class= "<? if(strpos(Yii::app()->controller->action->id,'equipment')!==false){echo 'color_menu';} ?>" href="<?=Yii::app()->urlManager->createUrl('site/equipment')?>">Оборудование  </a> </li>
                <li><a class= "<? if(strpos(Yii::app()->controller->action->id,'contact')!==false){echo 'color_menu';} ?>" href="<?=Yii::app()->urlManager->createUrl('site/contact')?>">Наши контакты</a> </li>
            </ul>
        </div>
        <div class="clr"></div>


    </div>


</div><!-- header -->



<?php echo $content; ?>
<div class="clr"></div>
<div class="substrate-footer"></div>

</div>
<div class="clr"></div>
<div id="footer">
<div class="w_980">
    <div class="f_l">
    ©2013 ООО «Донбасстеплоэлектромонтаж»<br/>
    83048, Донецк, пр-т Титова, 8-Б, оф.800<br/>
    <a class="href" href="<?=Yii::app()->urlManager->createUrl('site/contact')?>">Наши контакты</a>
    </div>
    <div class="f_r">
    <p>(062) 381-31-87</p>
                office@dontem.com.ua
              <br/>  Время работы: Пн-Пт с 8:30 до 17:00
    </div>
    <div class="clr"></div>
</div>

</div><!-- footer -->

<!--/div><!-- page -->


<div class="gallery display-none" >
    <div class="p-f galery_back z_index_10000">
    </div>
    <div class="p-f z_index_10001 gall_position photo_gallery">
        <div class="top_left_arrow gal_arrow_left p-a">
            <div class="gal_arrow "></div>
        </div>
        <div class="top_right_arrow gal_arrow_right p-a gal_arrow_height_">
            <div class="gal_arrow gal_arrow_right_pos"></div>
        </div>
        <div class="p-a count-style-center">
            <div class="p-r">
                <div class="count_center"id="count" ></div>
            </div>
        </div>
        <div class="f-r">
            <div class="close_photos_gal p-a " title="Закрыть (Esc)"></div>
        </div>
        <div class="p-r overflow-hidden photo_gallery">
            <div class="p-a preloader" id="preloader_gif"></div>
            <div id="for-map" class="text-align-c overflow-hidden"></div>
        </div>
        <div class="p-r">
            <div class="text-align-c">
                <div class="esc_gal" >Навигация: стрелка влево, стрелка вправо, Esc</div>
                <div class="i4s" title="«4size» технология (от англ. size – размер; в переводе - «четыре размера») позволяет создавать веб-сайт, которые качественно отображаются и удобно читаются на всех популярных разрешениях экранов монитора.">
                </div>
            </div>
        </div>
    </div>
</div>

</body>
</html>
