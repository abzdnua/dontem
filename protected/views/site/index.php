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
            pauseTime: 7000,
            directionNav: false,
            controlNav: true,
            tooltipY: -15
        });
    });
</script>
<div class="w_980 page_princip" >
<h1 style="margin-bottom: 50px;">ООО «ДОНТЭМ» -Донбасстеплоэлектромонтаж</h1>
    <div class="container">
        <div id="iview">

            <a href="<?=Yii::app()->urlManager->createUrl('site/project_star_tes')?> " style="display: block;cursor: pointer" data-iview:image="images/project/pr1_03.png" >
                <div class="iview-caption " data-x="15" data-y="12" data-transition="wipeUp" data-speed="500"  data-easing="easeOutQuint" ><div class="top_text">Энергоблок №6: Подготовка к реконструкции </div></div>
                  <div class="iview-caption" data-x="435" data-y="218" data-transition="wipeDown" data-speed="1000" data-easing="easeOutQuint" ><div class="bottom_text">
                        Подготовка к масштабному проекту строительства энергоблока №6 Славянской ТЭС с использованием технологии ЦКС (сжигание твердого топлива в циркулирующем кипящем слое) и разделением его на два энергоблока - №6А и №6Б, мощностью по 330 МВт каждый, началась в 2013 году. Длительность реконструкции составит 37 месяцев.
                    </div></div>
            </a>

            <a href="<?=Yii::app()->urlManager->createUrl('site/project_star_tes2')?> " style="display: block;cursor: pointer" data-iview:image="images/project/pr_03.png" >
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

            </a>


        </div>
    </div>
    <a href="<?=Yii::app()->urlManager->createUrl('site/news')?>" class="all_news bt_simp">Все новости</a>
    <div class="clr" style="margin-top: 38px"></div>

    <div class="block_news w_940">
        <ul>
            <li>

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
            </li>
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