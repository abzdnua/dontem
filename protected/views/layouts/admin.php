<?php /* @var $this Controller */ ?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	<meta name="language" content="en" />

	<!-- blueprint CSS framework -->
	<link rel="stylesheet" type="text/css" href="<?php echo Yii::app()->request->baseUrl; ?>/css/screen.css" media="screen, projection" />
	<link rel="stylesheet" type="text/css" href="<?php echo Yii::app()->request->baseUrl; ?>/css/print.css" media="print" />
    <?php Yii::app()->bootstrap->registerAllCss(); ?>
    <?php Yii::app()->bootstrap->registerCoreScripts(); ?>


	<!--[if lt IE 8]>
	<link rel="stylesheet" type="text/css" href="<?php echo Yii::app()->request->baseUrl; ?>/css/ie.css" media="screen, projection" />
	<![endif]-->

<!--	<link rel="stylesheet" type="text/css" href="--><?php //echo Yii::app()->request->baseUrl; ?><!--/css/main.css" />-->
	<link rel="stylesheet" type="text/css" href="<?php echo Yii::app()->request->baseUrl; ?>/css/form.css" />
<style>
    #header{height: 50px}
    .preloader{
        background: url(/img/l.gif) no-repeat;
        width: 30px;
        height: 30px;
    }
    .clr{clear:both}
</style>
	<title><?php echo CHtml::encode($this->pageTitle); ?></title>
</head>

<body>

<div class="container" id="page">

	<div id="header">
	</div><!-- header -->
        <?php $this->widget('bootstrap.widgets.TbNavbar', array(
            'type'=>'inverse', // null or 'inverse'
            'brand'=>'СтройЭксперт',
            'brandUrl'=>'/',
            'collapse'=>false, // requires bootstrap-responsive.css
            'items'=>array(
                array(
                    'class'=>'bootstrap.widgets.TbMenu',
                    'htmlOptions'=>array('style'=>'width:850px'),
                    'items'=>array(
                        array('label'=>'Номенклатура', 'url'=>'#','items'=>array(
                            array('label'=>'Товары','url'=>'/admin/products'),
                            array('label'=>'Как это работает','url'=>'/admin/howToUse'),
                        )),
                        array('label'=>'Акции', 'url'=>array('/admin/stocks'),),
                        array('label'=>'Строй. бригады', 'url'=>array('/admin/constructionCrew'),),

                        array('label'=>'Доп. справочники', 'url'=>'#','items'=>array(
                            array('label'=>'Разделы','url'=>'/admin/categories'),
                            array('label'=>'Сообщения о доставке', 'url'=>array('/admin/deliveryMessage'),),
                            array('label'=>'Производители', 'url'=>array('/admin/manufactures'),),
                            array('label'=>'Ед.измерений', 'url'=>array('/admin/units'),),
                            array('label'=>'Виды цен', 'url'=>array('/admin/priceType'),),
                            array('label'=>'Цвета', 'url'=>array('/admin/colors'),),
                            array('label'=>'Шаблоны характеристик', 'url'=>array('/admin/technicalCharacteristicsTemplate'),),
                        )),



                    ),
                ),
                array(
                    'class'=>'bootstrap.widgets.TbMenu',
                    'htmlOptions'=>array('class'=>'pull-right'),
                    'items'=>array(
                        array('label'=>Yii::app()->user->name, 'icon'=>'user','url'=>'#', 'items'=>array(
                            array('label'=>'Выйти', 'url'=>'/admin/login/logout'),
                        )),
                    ),
                ),
            ),
        )); ?>
<!--	--><?php //if(isset($this->breadcrumbs)):?>
<!--        --><?php //$this->widget('bootstrap.widgets.TbBreadcrumbs', array(
//            'links'=>$this->breadcrumbs,
//        )); ?>
<!--	--><?php //endif?>
<div class="well">
	<?php echo $content; ?>
    <div class="clear"></div>
</div>
	<div class="clear"></div>

	<div class="well" style="text-align: center">
		<a href="http://abz.dn.ua" target="_blank">abz.dn.ua</a>
	</div><!-- footer -->

</div><!-- page -->

</body>
</html>
