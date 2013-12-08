<?php
/* @var $this SiteController */

$this->pageTitle=Yii::app()->name . ' - Новости';
$this->breadcrumbs=array(
    'Новости',
);
$query = 'SELECT * FROM news WHERE deleted = 0 AND is_active = 1 ';

$perPage = 9;
$page = (isset($_GET['page']))?$_GET['page']:1;

$curType = (isset($_GET['type']))?$_GET['type']:'';
$curTag = (isset($_GET['tag']))?$_GET['tag']:'';
$curDifficulty = (isset($_GET['difficulty']))?$_GET['difficulty']:'';
$curYear = (isset($_GET['year']))?$_GET['year']:'';
$curMonth = (isset($_GET['month']))?$_GET['month']:'';
if($curType)
    $query .= " AND work_type LIKE '$curType' ";
if($curDifficulty)
    $query .= " AND difficulty = $curDifficulty ";
if($curYear){
    if($curMonth)
        $query .= " AND DATE_FORMAT(news_date,'%Y-%m') = '$curYear-$curMonth'";
    else
        $query .= " AND DATE_FORMAT(news_date,'%Y') = $curYear";

}
if($curTag){
    $nIdArray = Yii::app()->db->createCommand("SELECT nat.news_id FROM news_and_tags as nat, tags as t WHERE t.tag = '$curTag' AND nat.tag_id = t.id")->queryColumn();
    $query .= " AND id IN (".implode(',',$nIdArray).")";
}
$query .=' ORDER BY news_date DESC';
$query_count = str_replace('*','COUNT(id)',$query);
$count = Yii::app()->db->createCommand($query_count)->queryScalar();
$from = ($page-1)*$perPage;
$query .=" LIMIT $from,$perPage ";
// echo $query;
$news = News::model()->findAllBySql($query);
if(!$news)
   $this->redirect('/news');


?>

<div class="w_980 page_news">

            <h1>Новости</h1>





            <div class="block_news w_940">
            <div class="bt_news_page">

<form method="post" action="/getNews">
    <input type="hidden" name ="page" value="<?php echo $page ?>">
    <input type="hidden" name ="tag" value="<?php echo $curTag ?>">
    <input type="hidden" name ="work_type" value="<?php echo $curType ?>">
    <input type="hidden" name ="difficulty" value="<?php echo $curDifficulty ?>">
    <input type="hidden" name ="news_date" value="<?php echo $curYear; echo($curMonth)?'-'.$curMonth:'' ?>">
            <a class=" bt_simp f" href="/news">Все новости</a>
            <?php $types = Yii::app()->db->createCommand("SELECT DISTINCT(work_type) FROM news WHERE deleted = 0 AND is_active = 1")->queryColumn();?>
            <div class=" bt_simp arrow_bg ">Тип работ
                <?php if($curType){?>
                <span class="select_type"> (<?php echo $curType ?>)</span>
                <?}?>
                <span class="arrow_button"></span>
                <div class="spisok">
                    <?php foreach ($types as $type) {
                        echo "<div class='spisok_elem change_wt'>$type</div>";
                    } ?>

<!--                     <div class="spisok_elem">Реконструкция</div>
                    <div class="spisok_elem">Строительство</div>
 -->
                </div>
            </div>
            <div class=" bt_simp arrow_bg">Сложность
                <?php if($curDifficulty){?>
                <span class="select_type"> (<?php echo Constants::getDifficulty($curDifficulty) ?>)</span>
                <?}?>
                <span class="arrow_button"></span>
                <?php $difficulties = Yii::app()->db->createCommand("SELECT DISTINCT(difficulty) FROM news WHERE deleted = 0 AND is_active = 1")->queryColumn();?>
                <div class="spisok">
                    <?php foreach ($difficulties as $diff) {
                        echo "<div class='spisok_elem change_diff' id='diff_$diff'>".Constants::getDifficulty($diff)."</div>";
                    } ?>
<!--                     <div class="spisok_elem">Плановый</div>
                    <div class="spisok_elem">Высокий</div>
                    <div class="spisok_elem">Очень&nbsp;высокий</div>
                    <div class="spisok_elem">Уникальный</div>
 -->                </div>
            </div>
            <div class=" bt_simp arrow_bg">Дата публикации
                <?php if($curYear){
                    if($curMonth){
                        $curDate =  DLL::getRusMonth($curMonth).' '.$curYear;
                    }else{
                        $curDate =  $curYear;
                    }
                    ?>
                <span class="select_type"> (<?php echo $curDate ?>)</span>
                <?}?>
                <span class="arrow_button"></span>
                <?php $dates = Yii::app()->db->createCommand("SELECT DATE_FORMAT(news_date,'%Y') AS year, DATE_FORMAT(news_date,'%m') AS month  FROM news WHERE deleted = 0 AND is_active = 1 GROUP BY year,month ORDER BY year DESC, month ASC ")->queryAll();?>
                <div class="spisok mounth">
                    <?php
                    $curYear = "0";
                    foreach ($dates as $date) {
                        if($curYear!=$date['year']){
                            echo "<div class='spisok_elem year change_d'>$date[year]</div>";
                            $curYear = $date['year'];
                        }
                        echo "<div class='spisok_elem change_d' id='$date[year]-$date[month]'>".DLL::getRusMonth($date['month']).'</div>';
                    }

                     ?>
                   <!--  <div class="spisok_elem year">2013</div>
                    <div class="spisok_elem">Август</div>
                    <div class="spisok_elem">Сентябрь</div>
                    <div class="spisok_elem">Октябрь</div>
                    <div class="spisok_elem year">2012</div>
                    <div class="spisok_elem">Январь</div>
                    <div class="spisok_elem">Март</div> -->


                </div>
            </div>
        </form>
            </div>
            <div class="clr" style="margin-top: 23px"></div>
            <ul>
            <?php foreach ($news as $key => $oneNews) {
                $nm = ($key+1)%3==0?'class="no_mar_right"':'';
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
            <?} ?>


            <!-- <li>

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

    <?php
    if($count>$perPage){?>
            <div class="navigation" style="margin-top: -10px;margin-bottom: 20px">
                <?php
                for ($i=1; $i <= ceil($count/$perPage); $i++) {
                    if($i == $page){?>
                    <span><?php echo $i ?></span>
                    <?}else{?>
                    <a class="change_page" ><?php echo $i ?></a>
                    <?}?>
                <?} ?>

           </div>
    <?}?>

            </div>
</div>


<script type="text/javascript">
    $(document).ready(function(){
        $(document).on('click','.change_wt',function(){
            console.log(213)
            $('input[name=work_type]').val($(this).text())
            $('form').submit()
        }).on('click','.change_diff',function(){
            $('input[name=difficulty]').val($(this).attr('id').replace('diff_',''))
            $('form').submit()
        }).on('click','.change_d',function(){
            $('input[name=news_date]').val($(this).attr('id'))
            $('form').submit()
        }).on('click','.change_page',function(){
            $('input[name=page]').val($(this).text())
            $('form').submit()
        }).on('click','.change_tag',function(){
            $('input[name=tag]').val($(this).text())
            $('form').submit()
        })
    })
</script>
