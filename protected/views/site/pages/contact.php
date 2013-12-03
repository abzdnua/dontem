<?php
/* @var $this SiteController */

$this->pageTitle=Yii::app()->name . ' - Контактная информация';
$this->breadcrumbs=array(
    'Контактная информация',
);
?>
<script type="text/javascript" src="http://maps.google.com/maps/api/js?sensor=false"></script>
<script type="text/javascript" src="<?php echo Yii::app()->request->baseUrl; ?>/js/way.js"></script>
<div class="w_980">

            <h1>Наши контакты</h1>
            <div class="blue_block">
                ООО ”Донбасстеплоэлектромонтаж” - ремонтные и реконструкционные работы любой <br/> категории сложности на тепловых электростанциях
            </div>

    <div class="block_phone">
        <div class="f_l f">83048, Донецк,<br/>пр-т Титова, 8-Б, офис 800</div>
        <div class="f_l s"> (062) 381-31-87</div>
        <div class="f_l t">office@dontem.com.ua</div>
        <div class="f_l fo">Понедельник -
            Пятница<br/>
            с 8:30 до 17:00</div>
    </div>


    <div class=" p_r">




        <div class="clr"></div>


        <div id='main' class='way  p_r'>


            <div class='google-map-route'>
                <div class='element a'>
                    <input type='text' value='Артема 50, Донецк, Украина, 83000'/>
                </div>
                <div class='element b'>
                    <input type='text' readonly='readonly' value='Донецк, пр. Титова 8-б' />
                </div>
                <div class=' travelling-mode walking'></div>
                <div class=' travelling-mode driving selected'></div>


                <div class="bt button">Проложить</div>
            </div>

            <div class='clear'></div>
            <div id='map'></div>
        </div>
    </div>
</div>



<script>
    $(document).ready(function(){



        var map2;

        map_my2()
        map_my()



    })
</script>