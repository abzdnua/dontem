<?php
/* @var $this SiteController */

$this->pageTitle=Yii::app()->name . ' - Принципы компании';
$this->breadcrumbs=array(
    'Принципы компании',
);
?>
<link href='http://fonts.googleapis.com/css?family=Open+Sans:800&subset=latin,cyrillic' rel='stylesheet' type='text/css'>

<script>
    $(document).ready(function(){

        var time = 1000;
       /* $('.princip_text').css({display:'none'})*/
       var img_src = $('.princip_text img').attr('src')
        var img = new Image();
        img.src = img_src;
        img.onload =function(){
          /*  $('.princip_text').fadeIn(800)*/
            setTimeout(function(){
                $('.princip_text span').animate({left:60},300)
            },time-400)

            setTimeout(function(){
                $('.princip_text .p_a.f').animate({right:90},300)
            },time-200)

            setTimeout(function(){
                $('.princip_text .p_a.s').animate({right:90},300)
            },time)
            setTimeout(function(){
                $('.princip_text .p_a.t').animate({right:90},300)
            },time + 300)
            setTimeout(function(){
                $('.princip_text .p_a.fo').animate({right:90},300)
            },time + 600)
            setTimeout(function(){
                $('.princip_text .p_a.fi').animate({right:90},300)
            },time +900)
            setTimeout(function(){
                $('.princip_text .p_a.si').animate({right:90},300)
            },time + 1200)
        }


    })
</script>

<div class="w_980 page_about">

            <h1>Принципы компании</h1>
</div>

    <div class="paralax page_princip">
        <div >
                <img src="../images/princip.png"/>
        </div>
        <span class=" w_980 princip_text">

            <span></span>

            <img class="p_a f" src="../images/princip_text_01.png"/>

            <img class="p_a s" src="../images/princip_text_02.png"/>
            <img class="p_a t" src="../images/princip_text_03.png"/>
            <img class="p_a fo" src="../images/princip_text_04.png"/>
            <img class="p_a fi" src="../images/princip_text_05.png"/>
            <img class="p_a si" src="../images/princip_text_06.png"/>



        </span>
    </div>

<div class="w_980 page_princip p_r" >






    <div class="block">
        <div class="title"><span></span><p>- динамика</p></div>
        <div class="text">ООО «ДОНТЭМ» – молодое, динамично развивающееся предприятие. Но наши ведущие технические специалисты работают в энергетике уже не один десяток лет.</div>
        <img src="../images/princip1.png"/>
    </div>
    <div class="block">
        <div class="title"><span></span><p>- ответственность</p></div>
        <div class="text">Обычно мы стараемся сделать работу раньше срока. И планируем ход работ так, чтобы не зависеть от поставок, выполнять свои объемы и не позволить задерживать энергоблоки ТЭС в ремонте. При этом мы уделяем огромное внимание охране труда и технике безопасности: жизнь и здоровье сотрудников являются приоритетом.</div>
        <img src="../images/princip_03.png"/>
    </div>
    <div class="block">
        <div class="title"><span></span><p>- надежность</p></div>
        <div class="text">У нас никогда не было срыва сроков исполнения контрактов. Финансовые возможности ООО «ДОНТЭМ» позволяют привлекать на работу лучшие кадры! А грамотное планирование стратегических и тактических задач, организация работы персонала – залог успешного выполнения огромных объемов работ на крупных проектах.</div>
        <img src="../images/princip_06.png"/>
    </div>
    <div class="block">
        <div class="title"><span></span><p>- Технологичность</p></div>
        <div class="text">Хорошая технологическая оснащенность – важное конкурентное преимущество ООО «ДОНТЭМ». В своей работе мы используем только высококачественное сертифицированное оборудование: сварочные аппараты «Fronius», cтроительную технику JCB, башенные краны «Linden Comansa», и другое передовое современное оборудование.</div>
        <img src="../images/princip_08.png"/>
    </div>
    <div class="block">
        <div class="title"><span></span><p>- Энергия</p></div>
        <div class="text">У наших сотрудников есть мотивация работать более энергично и эффективно - мы можем предложить работникам большие деньги, чем в среднем по рынку. А также профессиональный драйв: работа на энергоблоке, где идет 100%-ная замена котельного агрегата с высоким качеством и в кратчайшие сроки – вызов для мастера своего дела.</div>
        <img src="../images/princip_10.png"/>
    </div>
    <div class="block">
        <div class="title"><span></span><p>- МАстерство</p></div>
        <div class="text">Персонал ООО «ДОНТЭМ» обучен, имеет соответствующие удостоверения и ежегодно подтверждает свою квалификацию. Сварщики – аттестованные специалисты высокой квалификации, монтажники прошли специальное обучение по стропальным, верхолазным и высотным работам.</div>
        <img src="../images/princip_13.png"/>
    </div>


</div>