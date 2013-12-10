<?php
/* @var $this SiteController */
$id = Yii::app()->request->getParam('id');
$news = News::model()->findByPk($id);
if(!$news)
    throw new CHttpException(404,'The requested page does not exist.');
$this->pageTitle=Yii::app()->name . ' - '.$news->title ;
$this->breadcrumbs=array(
    'Новости',
);
?>
<script>
    $(document).ready(function(){
/*



        $('#container').children().each(function(){
        $(this).css({width:($(this).width())-10})
            $( ".placeHolder" ).append( $(this) );
        })*/



        var $container = $('#container');
// Инициализация

     /*   $('#container').imagesLoaded(function() {
            this.masonry({
                itemSelector: '.item',
                columnWidth: 20,
                isAnimated: true,
                layoutPriorities: {
                    shelfOrder: 1.21
                }
            });
        });*/
    })
</script>
<div class="w_980 page_news">

            <h1 style="margin-bottom: 20px;">Новости</h1>
    <div class="w_960">
        <?php $ids = Yii::app()->db->createCommand("SELECT id FROM news WHERE deleted = 0 AND is_active = 1 ORDER BY news_date DESC")->queryColumn();
        foreach ($ids as $key => $arNew) {
            if($arNew==$news->id){
                $prev_link =isset($ids[$key-1])?Yii::app()->urlManager->createUrl('site/newsmore',array('id'=>$ids[$key-1])):'';
                $next_link =isset($ids[$key+1])?Yii::app()->urlManager->createUrl('site/newsmore',array('id'=>$ids[$key+1])):'';
            }
        }?>
        <?php if($prev_link){?>
        <a class="bt_simp prev no_mar_left" href="<?php echo $prev_link ?>">Предыдущая <span class="arrow_left_button"></span> </a>
        <?}?>
        <?php if($next_link){?>
        <a class="bt_simp next" href="<?php echo $next_link ?>">Следующая  <span class="arrow_right_button"></span></a>
        <?}?>

        <a class="bt_simp prev no_mar_left" style="float: right;" href="/news">Все новости <span class="arrow_left_button"></span> </a>

    </div>

</div>
<div class="paralax page_about">
    <div>
    <?php $show_img = Files::model()->findByPk($news->image_id);
      if($show_img){
          if(is_file($_SERVER['DOCUMENT_ROOT'].'/files/'.$show_img->file_path)){?>
              <img src="/files/<?php echo $show_img->file_path?>" >
              <!-- <div style="background: url(/files/<?php echo $show_img->file_path?>); "> -->

          <?php }
      }
    ?>
        <!--img src="../images/about.png"/-->
    </div>
    </div>
</div>
<div class="w_980">
   <div class="block_news_more w_960">

           <div class="top_block">

                     <h2><?php echo $news->title ?></h2>

              </div>
        <div class="white_block">
            <div class="top">
                <div class="f_l">
                     <div class="date_news"><?php echo date('d.m.Y',strtotime($news->news_date)) ?></div>
                        <div class="before_type">
                            <span class="type">Тип работ:</span> <span class="text_n"><?php echo $news->work_type ?></span>
                        </div>
                        <div class="clr"></div>
                        <div class="type" style="float: left">Сложность: </div>
                        <div class="progress_bar">
                            <span class="blue"><?php echo Constants::getDifficulty($news->difficulty) ?></span>
                            <div class="compl">
                            <?php switch($news->difficulty){
                                            case 1: $w = 30;break;
                                            case 2: $w = 150;break;
                                            case 3: $w = 280;break;
                                            case 4: $w = 340;break;

                                    } ?>
                                <div class="progr_bar" style="width: <?php echo $w?>px"></div>

                            </div>
                            <span class="left">Плановая</span><span class="right">Уникальная</span>
                        </div>
                        <div class="clr" ></div>
                        <?php $tags = Yii::app()->db->createCommand("SELECT t.tag FROM tags as t, news_and_tags as nat WHERE t.id = nat.tag_id AND nat.news_id = $news->id")->queryColumn();
                        if($tags){?>
                        <form method="post" action="/site/getNews">
                            <input type="hidden" name="tag"/>
                            <div class="block_href">
                                <?php foreach ($tags as $tag) {
                                echo "<a class='bt_news change_tag' >$tag</a>";

                                } ?>
                              <div class="clr"></div>
                            </div>
                        </form>
                            <?}?>
                        <?php if($news->file_id){
                            $file = Files::model()->findByPk($news->file_id);
                            if($file and is_file($_SERVER['DOCUMENT_ROOT'].'/files/'.$file->file_path)){
                            ?>
                        <a href="/files/<?php echo $file->file_path ?>" class=" href d_present">Скачать презентацию</a>
                        <?}
                    }
                        ?>
                </div>
                <?php if($news->video_link){?>
                <div class="f_r w_280_200">
                    <object width="280" height="200"><param name="movie" value="<?php echo $news->video_link ?>?hl=ru_RU&amp;version=3"></param><param name="allowFullScreen" value="true"></param><param name="allowscriptaccess" value="always"></param><embed src="<?php echo $news->video_link ?>?hl=ru_RU&amp;version=3" type="application/x-shockwave-flash" width="280" height="200" allowscriptaccess="always" allowfullscreen="true"></embed></object>
                    <p> <?php echo $news->video_des ?></p>

                </div>
                <?}?>
                <div class="clr"></div>
            </div>
            <div class="clr"></div>

            <?php
                $blocks = Blocks::model()->findAll('parent_table = "'.$news->tableName().'" AND parent_id = '.$news->id.' ORDER BY `order` ASC');
                if ($blocks){
                    for ($i=0;$i<count($blocks);$i++) {
                        $block = $blocks[$i];
            ?>
                <?php echo ($block->title)?"<h2>$block->title</h2>":'' ?>
                <?php switch($block->block_type){
                    case Constants::BLOCK_TYPE_TEXT:$this->renderPartial('blocks/text',array('block_id'=>$block->id));break;
                    case Constants::BLOCK_TYPE_TEXT_BG:$this->renderPartial('blocks/text_bg',array('block_id'=>$block->id));break;
                    case Constants::BLOCK_TYPE_GALLERY:$this->renderPartial('blocks/gallery',array('block_id'=>$block->id));break;
                    case Constants::BLOCK_TYPE_IMG:$this->renderPartial('blocks/img',array('block_id'=>$block->id));break;
                }?>
            <?}
            Yii::app()->clientScript->registerScriptFile('/js/yand_script.js',CClientScript::POS_END);
        }?>





                  <!--   <div class="b-page-wrap"  style="margin-top: 25px;">
                        <div class="b-page-layout b-page-layout_page_index i-clearfix">

                            <div class="b-images-head"></div>

                            <div class="b-images-list b-images-list_layout_stream b-images-list_dangling_no b-images-list_type_home b-images-list_fluid_yes i-images-lists__list i-clearfix i-bem" onclick="return {&quot;b-images-list&quot;:{}}">
                                <div class="b-images-item b-images-item_home_yes b-images-item_in_stream b-images-list__unit i-bem" >
                                    <div class="b-images-item__wrap">
                                        <div class="b-link b-link_counter_blockstat b-link_type_home i-counter i-bem" >
                                            <img class="b-images-item__preview" alt="" src="../images/news/photo/news_03.png" width="310" height="178" />
                                        </div>
                                    </div>

                                </div>
                                <div class="b-images-item b-images-item_home_yes b-images-item_in_stream b-images-list__unit i-bem" >
                                    <div class="b-images-item__wrap">
                                        <div class="b-link b-link_counter_blockstat b-link_type_home i-counter i-bem" >
                                            <img class="b-images-item__preview" alt="" src="../images/news/photo/news_05.png" width="164" height="178" />
                                        </div>
                                    </div>

                                </div>
                                <div class="b-images-item b-images-item_home_yes b-images-item_in_stream b-images-list__unit i-bem" >
                                    <div class="b-images-item__wrap">
                                        <div class="b-link b-link_counter_blockstat b-link_type_home i-counter i-bem" >
                                            <img class="b-images-item__preview" alt=""  src="../images/news/photo/news_07.png" width="237" height="178" />
                                        </div>
                                    </div>

                                </div>
                                <div class="b-images-item b-images-item_home_yes b-images-item_in_stream b-images-list__unit i-bem" >
                                    <div class="b-images-item__wrap">
                                        <div class="b-link b-link_counter_blockstat b-link_type_home i-counter i-bem" >
                                            <img class="b-images-item__preview" alt="" src="../images/news/photo/news_09.png" width="237" height="178" />
                                        </div>
                                    </div>

                                </div>
                                <div class="b-images-item b-images-item_home_yes b-images-item_in_stream b-images-list__unit i-bem" >
                                    <div class="b-images-item__wrap">
                                        <div class="b-link b-link_counter_blockstat b-link_type_home i-counter i-bem" >
                                            <img class="b-images-item__preview" alt="" src="../images/news/photo/news_15.png" width="280" height="178"/>
                                        </div>
                                    </div>

                                </div>  <div class="b-images-item b-images-item_home_yes b-images-item_in_stream b-images-list__unit i-bem" >
                                    <div class="b-images-item__wrap">
                                        <div class="b-link b-link_counter_blockstat b-link_type_home i-counter i-bem" >
                                            <img class="b-images-item__preview" alt="" src="../images/news/photo/news_17.png" width="280" height="178" />
                                        </div>
                                    </div>

                                </div>
                                <div class="b-images-item b-images-item_home_yes b-images-item_in_stream b-images-list__unit i-bem" >
                                    <div class="b-images-item__wrap">
                                        <div class="b-link b-link_counter_blockstat b-link_type_home i-counter i-bem" >
                                            <img class="b-images-item__preview" alt="" src="../images/news/photo/news_19.png" width="140" height="178"/>
                                        </div>
                                    </div>

                                </div>
                                <div class="b-images-item b-images-item_home_yes b-images-item_in_stream b-images-list__unit i-bem" >
                                    <div class="b-images-item__wrap">
                                        <div class="b-link b-link_counter_blockstat b-link_type_home i-counter i-bem" >
                                            <img class="b-images-item__preview" alt=""  src="../images/news/photo/news_21.png" width="245" height="178" />
                                        </div>
                                    </div>

                                </div>


                                <div class="i-clearfix"></div>
                            </div>
                        </div>
                </div>

            <div class="clr"></div>
            <div class="big_text">
                <p class="italic">На данный момент работы по реконструкции корпуса 7А ведутся с опережением графика.</p>
                За пять месяцев с начала реконструкции генподрядчиком - ООО «Донбасстеплоэлектромонтаж» (ДОНТЭМ) - полностью выполнены работы по демонтажу старого электрофильтра, сборке и монтажу переходной рамы нового электрофильтра и опорного каркаса электрофильтра. На данный момент ведутся работы по монтажу зольных бункеров электрофильтра корпуса 7А. По состоянию на вторую декаду июля, степень выполнения этих работ составила около 50% - на данный момент, персонал ООО «ДОНТЭМ» работает с опережением планового графика реконструкции.
                К монтажу переходной рамы электрофильтра, весом около 300 тонн, сотрудники ООО «ДОНТЭМ» приступили в мае. Эта металлоконструкция является основой для монтажа оборудования электрофильтра. В течение мая-июня переходная рама электрофильтра корпуса 7А была полностью смонтирована, сварные соединения металлоконструкций постамента были выварены и затем обварены. Параллельно с монтажом переходной рамы персонал ООО «ДОНТЭМ» осуществлял укрупненную сборку зольных бункеров электрофильтра.
                Во второй декаде июня специалисты ООО «ДОНТЭМ» приступили к укрупненной сборке и монтажу опорного каркаса электрофильтра. Эти работы были закончены в первой декаде июля. После чего генподрядчик приступил к монтажу зольных бункеров электрофильтра: по состоянию на 15 июля смонтировано 16 зольных бункеров – один «полуфильтр».
                Все работы велись собственным персоналом компании ДОНТЭМ, для реализации этого проекта подрядчик приобрел башенный кран LINDEN COMANSA высотой 65 м, длиной стрелы 70 м и грузоподъемностью 18 тонн (в Украине подобных кранов – всего два).

               Полная замена электрофильтра энергоблока №7 Славянской ТЭС является основным объемом реконструкции корпуса 7А, металлоемкость данного проекта составляет более 1300 тонн.

                Напомним, что модернизация корпуса 7А, дополнительного оборудования и электрофильтров - первая очередь реконструкции <a href="">энергоблока №7 СлавТЭС</a>. Срок реализации всего проекта (4 очереди) - 34 месяца. В результате реконструкции срок эксплуатации основного технического оборудования будет продлен на 15 лет с улучшением основных технико-экономических показателей. В частности, будут увеличены электрическая нагрузка блока (до 800 МВт), его маневренность и диапазон регулирования нагрузки, снижены удельные расходы топлива и доведены до нормативных выбросы пыли, оксидов серы и азота.
            </div> -->
        </div>

   </div>
</div>
<script type="text/javascript">
    $(document).ready(function(){
        $(document).on('click','.change_tag',function(){
            $('input[name=tag]').val($(this).text())
            $('form').submit()
        })
    })
</script>
