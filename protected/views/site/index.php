<?php
/* @var $this SiteController */

$this->pageTitle=Yii::app()->name;
?>

<script type="text/javascript" src="<?php echo Yii::app()->request->baseUrl; ?>/js/raphael-min.js"></script>
<script type="text/javascript" src="<?php echo Yii::app()->request->baseUrl; ?>/js/jquery.easing.js"></script>
<script type="text/javascript" src="<?php echo Yii::app()->request->baseUrl; ?>/js/iview.js"></script>

<link rel="stylesheet" type="text/css" href="<?php echo Yii::app()->request->baseUrl; ?>/css/styles.css"/>
<link rel="stylesheet" type="text/css" href="<?php echo Yii::app()->request->baseUrl; ?>/css/iview.css"/>
<link rel="stylesheet" type="text/css" href="<?php echo Yii::app()->request->baseUrl; ?>/css/skin 4/style.css"/>
<script>
    $(document).ready(function(){
        $('#iview').iView({
            pauseTime: 11000,
            directionNav: false,
            controlNav: true,
            tooltipY: -15
        });

        $(document).on('click','.change_tag',function(){
            $('input[name=tag]').val($(this).text())
            $('form').submit()
        }).on('click','.iviewSlider',function(){
            console.log($('a:visible',$(this)).attr('href'))
        })

    });
</script>
<?php $projects = Projects::model()->findAll("deleted = 0 AND is_active = 1 AND show_on_main = 1 LIMIT 0,9") ?>
<div class="w_980 page_princip" >
<h1 style="margin-bottom: 50px;">ООО «ДОНТЭМ» -Донбасстеплоэлектромонтаж</h1>
<?php if($projects){?>
    <div class="container">
        <div id="iview">
            <?php foreach ($projects as $project) {?>
            <?php $show_img = Files::model()->findByPk($project->image_id);
                          if($show_img){
                              if(is_file($_SERVER['DOCUMENT_ROOT'].'/files/m_'.$show_img->file_path)){
                                  $src = "files/m_$show_img->file_path";
                              }
                          }
                        ?>
            <a href="<?=Yii::app()->urlManager->createUrl('site/projectMore',array('link'=>DLL::makeLink($project->project_name).'_'.$project->id))?>" style="display: block;cursor: pointer" data-iview:image="<?php echo $src ?>" >
                <div class="iview-caption " data-x="15" data-y="12" data-transition="wipeUp" data-speed="500"  data-easing="easeOutQuint" ><div class="top_text"><?php echo $project->project_name ?></div></div>
                  <div class="iview-caption" data-x="435" data-y="218" data-transition="wipeDown" data-speed="1000" data-easing="easeOutQuint" ><div class="bottom_text">
                        <?php echo DLL::substrText($project->short_des,340) ?>
                    </div></div>
            </a>
            <?}?>



            <!-- <a href="<?=Yii::app()->urlManager->createUrl('site/project_star_tes2')?> " style="display: block;cursor: pointer" data-iview:image="images/project/pr_03.png" >
                <div class="iview-caption " data-x="15" data-y="12" data-transition="wipeUp" data-speed="500"  data-easing="easeOutQuint"><div class="top_text">Энергоблок №6: Подготовка к реконструкции </div></div>
                <div class="iview-caption" data-x="435" data-y="276" data-transition="wipeDown" data-speed="1000" data-easing="easeOutQuint"  ><div class="bottom_text">
                        Подготовка к масштабному проекту строительства энергоблока №6 Славянской ТЭС с использованием технологии ЦКС
                    </div></div>
            </a>



            <a href="<?=Yii::app()->urlManager->createUrl('site/project_star_tes')?> " style="display: block;cursor: pointer" data-iview:image="images/project/pr_023.png">
                <div class="iview-caption " data-x="15" data-y="12" data-transition="wipeUp" data-speed="500"  data-easing="easeOutQuint"><div class="top_text">Энергоблок №6: Подготовка к реконструкции </div></div>
                <div class="iview-caption" data-x="435" data-y="218" data-transition="wipeDown" data-speed="1000" data-easing="easeOutQuint" ><div class="bottom_text">
                        Подготовка к масштабному проекту строительства энергоблока №6 Славянской ТЭС с использованием технологии ЦКС (сжигание твердого топлива в циркулирующем кипящем слое) и разделением его на два энергоблока - №6А и №6Б, мощностью по 330 МВт каждый, началась в 2013 году. Длительность реконструкции составит 37 месяцев.
                    </div></div>

            </a> -->


        </div>
    </div>
    <?}?>
    <a href="<?=Yii::app()->urlManager->createUrl('site/news')?>" class="all_news bt_simp">Все новости</a>
    <div class="clr" style="margin-top: 38px"></div>

    <div class="block_news w_940">

    <form method="post" action="/getNews">
        <input type="hidden" name ="page" value="1">
        <input type="hidden" name ="tag" value="">
        <input type="hidden" name ="work_type" value="">
        <input type="hidden" name ="difficulty" value="">
        <input type="hidden" name ="news_date" value="">
    </form>

        <?php $news = News::model()->findAll("deleted = 0 AND is_active = 1  ORDER BY news_date DESC LIMIT 0,6") ?>
        <ul>

            <?php foreach ($news as $key => $oneNews) {$nm = ($key+1)%3==0?'class="no_mar_right"':'';
                ?>
                <li <?php echo $nm ?>>
                    <?php $show_img = Files::model()->findByPk($oneNews->image_id);
                      if($show_img){
                          if(is_file($_SERVER['DOCUMENT_ROOT'].'/files/m_'.$show_img->file_path)){?>
                              <img src="/files/m_<?php echo $show_img->file_path?>" >
                          <?php }
                      }
                    ?>
                    <!-- <img src="../images/news/news_03.png"/> -->


                    <div class="text_move">
                        <span class="arrow"></span>
                        <div class="textblock"><div><?php echo $oneNews->title ?></div></div>
                        <div class="text_hiden">
                            <div class="date_news"><?php echo date('d.m.Y',strtotime($oneNews->news_date)) ?></div>
                            <div class="short_des"><?php echo $oneNews->short_des ?></div>
                            <div class="before_type">
                                <span class="type">Тип работ:</span> <span class="text_n"><?php echo $oneNews->work_type?></span>
                            </div>
                            <span class="type">Сложность: </span>
                            <div class="progress_bar">
                                <span class="blue"><?php echo Constants::getDifficulty($oneNews->difficulty) ?></span>
                                <div class="compl">
                                    <?php switch($oneNews->difficulty){
                                            case 1: $w = 20;break;
                                            case 2: $w = 95;break;
                                            case 3: $w = 175;break;
                                            case 4: $w = 250;break;

                                    } ?>

                                    <div class="progr_bar" style="width: <?php echo $w?>px"></div>

                                </div>
                                <span class="left">Плановая</span><span class="right">Уникальная</span>
                            </div>
                            <div class="clr"></div>
                            <?php $tags = Yii::app()->db->createCommand("SELECT t.tag FROM tags as t, news_and_tags as nat WHERE t.id = nat.tag_id AND nat.news_id = $oneNews->id")->queryColumn() ?>
                            <div class="block_href">
                                <?php foreach ($tags as $tag) {
                                echo "<a class='bt_news change_tag' >$tag</a>";

                                } ?>
<!--                                 <a class="bt_news" href="/">Славянская ТЭС</a>
                                <a class="bt_news" href="/">Реконструкция энергоблока</a>
 -->                                <div class="clr"></div>
                            </div>
                            <div class="clr"></div>
                            <a class="bt" href="<?=Yii::app()->urlManager->createUrl('site/newsmore',array('id'=>$oneNews->id))?>">ПОДРОБНЕЕ</a>

                        </div>
                    </div>
                </li>
                <?}?>
            <!-- <li>

                <img src="../images/news/news_03.png"/>


                <div class="text_move">
                    <span class="arrow"></span>
                        <div class="textblock"><div>На энергоблоке №6 Славянской Тес началась подготовка к маштабной реконструкции На энергоблоке №6 Славянской Тес началась подготовка к маштабной реконструкции</div></div>
                            <div class="text_hiden">
                                <div class="date_news">28.08.2013</div>
                                <div class="short_des">На данный момент </div>
                                <div class="before_type">
                                    <span class="type">Тип работ:</span> <span class="text_n">Реконструкция энергоблока</span>
                                </div>
                                <span class="type">Сложность: </span>
                                <div class="progress_bar">
                                    <span class="blue">Очень высокая</span>
                                    <div class="compl">

                                        <div class="progr_bar" style="width: 120px"></div>

                                    </div>
                                    <span class="left">Плановый</span><span class="right">Уникальный</span>
                                </div>
                                <div class="clr"></div>
                                <div class="block_href">
                                    <a class="bt_news" href="<?=Yii::app()->urlManager->createUrl('site/newsmore')?>">Энергоблок №6</a>
                                    <a class="bt_news" href="<?=Yii::app()->urlManager->createUrl('site/newsmore')?>">Славянская ТЭС</a>
                                    <a class="bt_news" href="<?=Yii::app()->urlManager->createUrl('site/newsmore')?>">Реконструкция энергоблока</a>
                                    <div class="clr"></div>
                                </div>
                                <div class="clr"></div>
                                <a class="bt" href="<?=Yii::app()->urlManager->createUrl('site/newsmore')?>">ПОДРОБНЕЕ</a>

                            </div>
                </div>
            </li>
            <li>

                <img src="../images/news/news_03.png"/>


                <div class="text_move">
                    <span class="arrow"></span>
                    <div class="textblock"><div>На энергоблоке №6 </div></div>
                    <div class="text_hiden">
                        <div class="date_news">28.08.2013</div>
                        <div class="short_des">На данный момент работы по реконструкции корпуса 7А ведутся с опережением графика. На данный момент работы по реконструкции корпуса 7А ведутся с опережением графика.</div>
                        <div class="before_type">
                            <span class="type">Тип работ:</span> <span class="text_n">Реконструкция </span>
                        </div>
                        <span class="type">Сложность: </span>
                        <div class="progress_bar">
                            <span class="blue">Очень высокая</span>
                            <div class="compl">

                                <div class="progr_bar" style="width: 220px"></div>

                            </div>
                            <span class="left">Плановый</span><span class="right">Уникальный</span>
                        </div>
                        <div class="clr"></div>
                        <div class="block_href">
                            <a class="bt_news" href="/">Энергоблок №6</a>
                            <a class="bt_news" href="/">Славянская ТЭС</a>
                            <a class="bt_news" href="/">Энергоблок №7</a>
                            <a class="bt_news" href="/">Слав ТЭС</a>
                            <a class="bt_news" href="/">Реконструкция энергоблока</a>
                            <div class="clr"></div>
                        </div>
                        <div class="clr"></div>
                        <a class="bt" href="/">ПОДРОБНЕЕ</a>

                    </div>
                </div>
            </li>
            <li class="no_mar_right">

                <img src="../images/news/news_03.png"/>


                <div class="text_move">
                    <span class="arrow"></span>
                    <div class="textblock"><div>На данный</div></div>
                    <div class="text_hiden">
                        <div class="date_news">28.08.2013</div>
                        <div class="short_des">На данный момент работы по реконструкции корпуса 7А ведутся с опережением графика.</div>
                        <div class="before_type">
                            <span class="type">Тип работ:</span> <span class="text_n">Реконструкция энергоблока Реконструкция энергоблока</span>
                        </div>
                        <span class="type">Сложность: </span>
                        <div class="progress_bar">
                            <span class="blue">Очень высокая</span>
                            <div class="compl">

                                <div class="progr_bar" style="width: 20px"></div>

                            </div>
                            <span class="left">Плановый</span><span class="right">Уникальный</span>
                        </div>
                        <div class="clr"></div>
                        <div class="block_href">
                            <a class="bt_news" href="/">Энергоблок №6</a>
                            <a class="bt_news" href="/">Славянская ТЭС</a>
                            <a class="bt_news" href="/">Реконструкция энергоблока</a>
                            <div class="clr"></div>
                        </div>
                        <div class="clr"></div>
                        <a class="bt" href="/">ПОДРОБНЕЕ</a>

                    </div>
                </div>
            </li>
            <li>

                <img src="../images/news/news_03.png"/>


                <div class="text_move">
                    <span class="arrow"></span>
                    <div class="textblock"><div>На энергоблоке №6 Славянской Тес началась подготовка к маштабной реконструкции На энергоблоке №6 Славянской Тес началась подготовка к маштабной реконструкции</div></div>
                    <div class="text_hiden">
                        <div class="date_news">28.08.2013</div>
                        <div class="short_des">На данный момент работы по реконструкции корпуса 7А ведутся с опережением графика.</div>
                        <div class="before_type">
                            <span class="type">Тип работ:</span> <span class="text_n">Реконструкция энергоблока</span>
                        </div>
                        <span class="type">Сложность: </span>
                        <div class="progress_bar">
                            <span class="blue">Очень высокая</span>
                            <div class="compl">

                                <div class="progr_bar" style="width: 120px"></div>

                            </div>
                            <span class="left">Плановый</span><span class="right">Уникальный</span>
                        </div>
                        <div class="clr"></div>
                        <div class="block_href">
                            <a class="bt_news" href="/">Энергоблок №6</a>

                            <div class="clr"></div>
                        </div>
                        <div class="clr"></div>
                        <a class="bt" href="/">ПОДРОБНЕЕ</a>

                    </div>
                </div>
            </li>
            <li>

                <img src="../images/news/news_03.png"/>


                <div class="text_move">
                    <span class="arrow"></span>
                    <div class="textblock"><div>На энергоблоке №6 Славянской Тес началась подготовка к маштабной реконструкции На энергоблоке №6 Славянской Тес началась подготовка к маштабной реконструкции</div></div>
                    <div class="text_hiden">
                        <div class="date_news">28.08.2013</div>
                        <div class="short_des">На данный момент работы по реконструкции корпуса 7А ведутся с опережением графика.</div>
                        <div class="before_type">
                            <span class="type">Тип работ:</span> <span class="text_n">Реконструкция энергоблока</span>
                        </div>
                        <span class="type">Сложность: </span>
                        <div class="progress_bar">
                            <span class="blue">Очень высокая</span>
                            <div class="compl">

                                <div class="progr_bar" style="width: 120px"></div>

                            </div>
                            <span class="left">Плановый</span><span class="right">Уникальный</span>
                        </div>
                        <div class="clr"></div>
                        <div class="block_href">

                            <div class="clr"></div>
                        </div>
                        <div class="clr"></div>
                        <a class="bt" href="/">ПОДРОБНЕЕ</a>

                    </div>
                </div>
            </li>
            <li class="no_mar_right">

                <img src="../images/news/news_03.png"/>


                <div class="text_move">
                    <span class="arrow"></span>
                    <div class="textblock"><div>На энергоблоке №6 Славянской Тес началась подготовка к маштабной реконструкции На энергоблоке №6 Славянской Тес началась подготовка к маштабной реконструкции</div></div>
                    <div class="text_hiden">
                        <div class="date_news">28.08.2013</div>
                        <div class="short_des">На данный момент работы по реконструкции корпуса 7А ведутся с опережением графика.</div>
                        <div class="before_type">
                            <span class="type">Тип работ:</span> <span class="text_n">Реконструкция энергоблока</span>
                        </div>
                        <span class="type">Сложность: </span>
                        <div class="progress_bar">
                            <span class="blue">Очень высокая</span>
                            <div class="compl">

                                <div class="progr_bar" style="width: 120px"></div>

                            </div>
                            <span class="left">Плановый</span><span class="right">Уникальный</span>
                        </div>
                        <div class="clr"></div>
                        <div class="block_href">
                            <a class="bt_news" href="/">Энергоблок №6</a>
                            <a class="bt_news" href="/">Славянская ТЭС</a>
                            <a class="bt_news" href="/">Реконструкция энергоблока</a>
                            <div class="clr"></div>
                        </div>
                        <div class="clr"></div>
                        <a class="bt" href="/">ПОДРОБНЕЕ</a>

                    </div>
                </div>
            </li> -->
        </ul>
    <div class="clr"></div>
    </div>
    <div class="clr" style="margin-top: 30px"></div>
    <h2>ООО «ДОНТЭМ» - молодое, динамично развивающееся предприятие, работающее в сфере теплоэнергетики. </h2>
    <div class="blue_block" style="margin-bottom: 20px;">
        Мы – энергоремонтная компания, обладающая при этом еще и лицензией<br/>
        на строительные работы
    </div>
    <h2 style="margin-bottom: 30px;">Основная сфера деятельности ООО «ДОНТЭМ»</h2>
    <div class="text" style="margin-bottom: 32px;" >Мы выполняем ремотные работы любой категории сложности и работы по реконструкции основного и вспомогательного оборудования на тепловых электростанциях. Наши ведущие технические специалисты работают в энергетике уже не один десяток лет.</div>
    <a href="<?=Yii::app()->urlManager->createUrl('site/baraban')?>" class="baraban_block">
        На энергоблоке №5 Старобешевской ТЭС в беспрецедентные сроки была выполнена замена барабана котлоагрегата ТП-100.
    </a>
</div>
