<?php
/* @var $this SiteController */

$this->pageTitle=Yii::app()->name . ' - Перенос барабана котла ТП-100';
$this->breadcrumbs=array(
    'Перенос барабана котла ТП-100',
);
?>
<link href='http://fonts.googleapis.com/css?family=Open+Sans:800&subset=latin,cyrillic' rel='stylesheet' type='text/css'>

<script>




    $(window).bind('scroll',function(e){
        parallaxbaraban();
    });

    function parallaxbaraban(){

        var scrolled = $(window).scrollTop();
        if (( scrolled<450 )  )
        {
            $('.paralax_baraban.f img').css('top',-scrolled+'px');
        }
        else
        {
            $('.paralax_baraban.f img').css('top',-450+'px');
        }
        if (scrolled>800)
        {
            if((scrolled-800)<400 )
                scrolled = scrolled - 800
            {
                $('.paralax_baraban.s img').css('top',-scrolled+'px');
            }
            if((scrolled)>1190 )
            {
                $('.paralax_baraban.s img').css('top',-400+'px');
            }
        }
        else
        {
            $('.paralax_baraban.s img').css('top',0+'px');
        }



    }
</script>
<div class="w_980 page_princip page_baraban">

            <h1>Перенос барабана котла ТП-100</h1>

    <div class="blue_block" style="margin-bottom: 70px;">
        На энергоблоке №5 Старобешевской ТЭС в беспрецедентные сроки была выполнена замена<br/>  барабанакотлоагрегата ТП-100.
    </div>
    <div class="text" style="margin-bottom: 73px;">В январе 2013 года по причине повреждения барабана произошел останов энергоблока №5 Старобешевской ТЭС. Результатом оперативного реагирования на ситуацию стало решение руководства о замене барабана котла блока №5 на барабан котла блока №7, выведенного из эксплуатации более 6 лет назад. </div>

    <div class="block" style="margin-bottom: 70px;">
        <div class="paralax_baraban f">
             <img src="../images/baraban_06.png" />
        </div>
</div >
    <div class="text" style="margin-bottom: 30px;"><i>Подобные работы проводились в Украине только на Луганской ТЭС, но их отличала продолжительность выполнения, поскольку перенос барабана был плановым мероприятием для Луганской ТЭС. </i></div>
<h2 style="margin-bottom: 45px;">А для осуществления аналогичных работ на Старобешевской ТЭС<br/>
    отводилось не более полутора месяцев! </h2>

<h3 style="margin-bottom: 20px;">И за это время требовалось</h3>

<div class="block_gal" style="margin-bottom: 72px;">
    <div><span class="gal_ar"></span><span>разработать проектную документацию</span></div>
    <div><span class="gal_ar"></span><span>изготовить металлоконструкции для переноса</span></div>
    <div><span class="gal_ar"></span><span>подготовить подъемно-транспортное оборудование</span></div>
    <div><span class="gal_ar"></span><span>обследовать строительные конструкции</span></div>
    <div><span class="gal_ar"></span><span>выполнить перенос и контрольные испытания.</span></div>
</div>



        <div class="title"><span></span><p>- ответственность</p></div>
    <div class="text" style="margin-bottom: 60px;"><i>Работы потенциально представляли немалую сложность для персонала ООО «ДОНТЭМ» - в силу уникальности и неординарности ситуации. Однако <span style="color:#004075;text-transform: uppercase">ОТВЕТСТВЕННОСТЬ</span>, с которой подошли к процессу и рабочие, и руководители, а также надежность металлоконструкций (производство – Харьков), позволили выполнить уникальную работу качественно, оперативно и в срок.</i></div>
 <div class="block">
     <div class="paralax_baraban s" style="margin-bottom: 65px;">
                <img src="../images/baraban_03.png" />
     </div>
 </div>

    <h2>Мероприятия по переносу барабана заняли период с 10 по 28 февраля <br/>2013 года.  </h2>
    <div class="text" style="margin-bottom: 73px;">На участке работали 60 специалистов ООО «ДОНТЭМ». В последний день февраля энергоблок был готов к гидравлическим испытаниям, а уже 4 марта блок №5 был включен в сеть.</div>


    <div class="block_img" style="margin-left: 9px;">

        <img alt="" class='gal width-h-p'   data-ajax="true" data-description="dasfsg" data-current="0" data-folder="images/photo/baraban/" src="../images/photo/baraban/prew_01.png"/>
        <img alt="" class='gal width-h-p'   data-ajax="true" data-description="dasfsg" data-current="1" data-folder="images/photo/baraban/" src="../images/photo/baraban/prew_02.png"/>
        <img alt="" class='gal width-h-p'   data-ajax="true" data-description="dasfsg" data-current="2" data-folder="images/photo/baraban/" src="../images/photo/baraban/prew_03.png" style="margin-bottom: 46px;"/>
        <img alt="" class='gal width-h-p'   data-ajax="true" data-description="dasfsg" data-current="3" data-folder="images/photo/baraban/" src="../images/photo/baraban/prew_04.png" style="margin-bottom: 46px;"/>
        <div style="margin-top: -41px;">
        <img alt="" class='gal width-h-p'   data-ajax="true" data-description="dasfsg" data-current="4" data-folder="images/photo/baraban/" src="../images/photo/baraban/prew_05.png"/>
        <img alt="" class='gal width-h-p'   data-ajax="true" data-description="dasfsg" data-current="5" data-folder="images/photo/baraban/" src="../images/photo/baraban/prew_06.png"/>
        <img alt="" class='gal width-h-p'   data-ajax="true" data-description="dasfsg" data-current="7" data-folder="images/photo/baraban/" src="../images/photo/baraban/prew_07.png"/>
        <img alt="" class='gal width-h-p'   data-ajax="true" data-description="dasfsg" data-current="6" data-folder="images/photo/baraban/" src="../images/photo/baraban/prew_08.png"/>
        </div>

        </div>
    </div>
</div>