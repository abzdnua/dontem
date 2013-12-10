<?php
/* @var $this SiteController */

$this->pageTitle=Yii::app()->name . ' - Наше оборудование';
$this->breadcrumbs=array(
    'Наше оборудование',
);
?>
<script>
$(document).ready(function(){
    $('.equipment img').css({display:'none'})
    var img_src = $('.equipment img').attr('src')
    var img = new Image();
    img.src = img_src;
    img.onload =function(){
        $('.equipment img').fadeIn(800)
    }

})

</script>
<div class="w_980 equipment">

            <h1>Наше оборудование</h1>
            <h2>Грузоподъемное оборудование</h2>
                <div class="f_l" >
                    <img src="../images/equipment/equip_03.png"/>
                    <p>Башенные, свободно стоящие краны  - <br/> «Linden Comansa» </p><br/>
                    <span>грузоподъемность 18 т и 48 т</span>
                </div>
                <div class="f_r">
                    <img src="../images/equipment/equip_05.png"/>
                   <p>Краны самоходные на гусеничном ходу -</p> <br/>
                    <p> МКГС-100</p>   <span>- грузоподъемность 100 т </span><br/>
                    <p> МКГ-25БР</p>    <span>- грузоподъемность 25 т </span>
                </div>
    <div class="clr"></div>
                <div class="f_l">
                    <img src="../images/equipment/equipJCB3CХ.png"/>
                    <!--img src="../images/equipment/equip_09.png"/-->

                    <p>Экскаватор-погрузчик JCB 3CX</p><br/>
                    <span>c комплектом навесного оборудования» </span>
                </div>
                <div class="f_r">
                    <img src="../images/equipment/equip_10.png"/>
                    <p>Мини-погрузчик JCB 225</p>

                </div>
    <div class="clr"></div>
                <div class="f_l">
                    <div class="right">
                        <img src="../images/equipment/equip_15.png"/>
                    </div>
                    <div class="left">
                        <img src="../images/equipment/equip_13.png"/>
                    </div>
                    <p>Электрические тельфера «Podemcrane»</p><br/>
                    <span>Болгария, грузоподъемность от 1,5 до 10 т</span>
                </div>
    <div class="clr"></div>
                <div class="f_l" style="height: 420px;">
                    <img src="../images/equipment/equip_19.png"/>
                    <p>Домкраты гидравлические Д100П160 с<br/> насосной станцией НЕП70124</p><br/>
                   <span> грузоподъемность 100 т, производитель – ООО <br/>«ТЕХНОФОРС»</span>

                </div>
                <div class="f_r">
                    <img src="../images/equipment/equip_20.png"/>
                    <p>Экскаваторы гусеничные гидравлические <br/>Caterpillar 336DL и Caterpillar 329DL</p><br/>
                        <span>с комплектом навесного оборудования <br/>(гидроножницы и гидромолот)</span>
                </div>
    <div class="clr"></div>
                <!--div class="f_l">
                    <img src="../images/equipment/equip_24.png"/>
                    <p>Экскаватор гусеничный Caterpillar C3360 </p><br/>
                    <span> с навесными гидромолотом</span>

                </div-->
                <div class="f_l">
                    <img src="../images/equipment/equip_25.png"/>
                    <p>Щековая дробильная установка Powerscreen <br/>Metrotrak HA</p>


                </div>


            <div class="f_r">
                <img src="../images/equipment/equip938H.png"/>
                <p>Фронтальный погрузчик Caterpillar 938H</p>


            </div>
    <div class="clr"></div>
    <h2 style="margin-top: -20px;">Индукционный нагрев</h2>
    <div class="clr"></div>

                <div class="f_l">
                    <img src="../images/equipment/equip_28.png"/>
                    <p>Установка для индукционного нагрева труб </p><br/>
                   <p> «УИНТ-50»  </p>
                    <span>Екатеринбург, Россия</span>
                </div>
                <div class="f_r">
                    <img src="../images/equipment/equip_29.png"/>
                    <p>Установка индукционного нагрева труб<br/> «WELDOTHERM  STANDARD EUROPA 70-6» </p><br/>
                    <span>Германия</span>
                </div>
    <div class="clr"></div>
    <h2 style="margin-top: 30px;">Сварочное оборудование</h2>
    <div class="clr"></div>
                <div class="f_l">
                    <img src="../images/equipment/equip_32.png"/>
                    <p>Сварочные аппараты «Fronius» </p>

                </div>
                <div class="f_r">
                    <img src="../images/equipment/equip_33.png"/>
                    <p>Выпрямители сварочные «ВДМ-1202 С»</p><br/>
                        <span>для многопостовой дуговой электросварки</span>
                </div>
    <div class="clr"></div>
                <div class="f_l">
                    <img src="../images/equipment/equip_36.png"/>
                    <p>Муфельные печи для прокалки электродов <br/>«СНОЛ 75/400»</p>

                </div>
    <div class="clr"></div>
    <h2 style="margin-top: 15px;">Электроинструмент</h2>
    <div class="clr"></div>
                <div class="f_l" >
                    <img src="../images/equipment/equip_38.png"/>
                    <p>Электроинструмент – «Hilti»  </p>

                </div>
                <div class="f_r">
                    <img src="../images/equipment/equip_39.png"/>
                    <p>Промышленный профессиональный</br> перфоратор  «Bosch» – «SDS-Max GBH 8-45»</p>
                </div>
    <div class="clr"></div>
                <div class="f_l" style="height: 460px">
                    <img src="../images/equipment/equip_035.png"/>
                    <p>Отбойные молотки «Bosch» - <br/>
                        «SDS-Max GSH 27 VS Professional»,<br/>
                        Прямые шлифмашинки  – «Bosch»<br/>
                        («GGS 6S» и «GGS 28CE»)<br/>
                        Угловые шлифмашинки - «Bosch»<br/>
                        («GWS 14-125» и «GWS 22-230») </p>

                </div>
                <div class="f_r">
                    <img src="../images/equipment/equip_42.png"/>
                    <p>Плиткорез «Husqvarna» TS 400 А</p>
                </div>
    <div class="clr"></div>
                <div class="f_l" >
                    <img src="../images/equipment/equip_44.png"/>
                    <p> Электрофаскосниматели «Мангуст Миди-МТ»<br/> и «Мангуст 200 Электро»
                        </p><br/>
                    <span>Санкт-Петербург</span>

                </div>

    <div class="clr"></div>
    <h2 style="margin-top: 35px;">Оборудование «Strojstav» </h2>
    <div class="clr"></div>
                <div class="f_l">
                    <img src="../images/equipment/equip_46.png"/>
                    <p>Растворомешалка «Strojstav» MN-151</p><br/>
                        <span>Словакия</span>

                </div>
                <div class="f_r">
                    <img src="../images/equipment/equip_47.png"/>
                    <p>Торкрет-машина «Strojstav» MPCS-4</p><br/>
                    <span>Словакия</span>

                </div>
    <div class="clr"></div>
    <h2 style="margin-top: 34px;">Инструмент по неразрушающему контролю</h2>
    <div class="clr"></div>
                <div class="f_l">
                    <img src="../images/equipment/equip_50.png"/>
                    <p>Ультразвуковой дефектоскоп <br/>«УСД-60», «УД2В-П45» </p><br/>
                    <span>Россия</span>

                </div>
                <div class="f_r">
                    <img src="../images/equipment/equip_51.png"/>
                    <p>Стилоскопы «СЛП-1»</p>
                </div>

    <div class="clr"></div>
                <div class="f_l">
                    <img src="../images/equipment/equip_54.png"/>
                    <p>Твердомер «ТДМ-1»</p>

                </div>
                <div class="f_r">
                    <img src="../images/equipment/equip_55.png"/>
                    <p> Видеоэндоскоп технический цветной – <br/>
                        «ВЕ-9-5000» с полноэкранным видеозондом</p> <br/>
                    <span>«Интрон-CЭТ ЛТД», Донецк</span>
                </div>
    <div class="clr"></div>
                <div class="f_l">
                    <img src="../images/equipment/equip_58.png"/>
                    <p>Портативный рентгенофлуоресцентный <br/>анализатор металлов Х-МЕТ 7500
                        </p><br/>
                    <span>Oxford Instruments, UK</span>

                </div>
    <div class="clr"></div>
    <h2 style="margin-top: 34px;">Прочее</h2>
    <div class="clr"></div>
    <div class="f_l">
        <img src="../images/equipment/equip_60.png"/>
        <p>Нивелир оптический </p>

    </div>
    <div class="f_r">
        <img src="../images/equipment/equip_61.png"/>
        <p>Листогиб,зиговочная машина, гильотина, <br/>
            вальцовочный станок</p><br/>
        <span>Польша</span>

    </div>
    <div class="clr"></div>
    <div class="bot">Также, при проведении высотных работ, мы используем систему горизонтальной страховки на стальном тросе EZ-LINE/18м (производство - Франция)</div>
</div>


