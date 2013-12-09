<?php /* @var $this Controller */ ?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	<meta name="language" content="en" />
    <link rel='shortcut icon' href='/images/favicon.ico' />
	<!-- blueprint CSS framework -->
	<link rel="stylesheet" type="text/css" href="<?php echo Yii::app()->request->baseUrl; ?>/css/screen.css" media="screen, projection" />
	<link rel="stylesheet" type="text/css" href="<?php echo Yii::app()->request->baseUrl; ?>/css/print.css" media="print" />
<?php Yii::app()->getComponent("bootstrap"); ?>
    <?php Yii::app()->clientScript->registerScriptFile('/js/jquery.form.js');
    Yii::app()->clientScript->registerScriptFile('/js/upload.js');
    Yii::app()->clientScript->registerScriptFile('/js/redactor.js');?>

	<!--[if lt IE 8]>
	<link rel="stylesheet" type="text/css" href="<?php echo Yii::app()->request->baseUrl; ?>/css/ie.css" media="screen, projection" />
	<![endif]-->

<!--	<link rel="stylesheet" type="text/css" href="--><?php //echo Yii::app()->request->baseUrl; ?><!--/css/main.css" />-->
	<link rel="stylesheet" type="text/css" href="<?php echo Yii::app()->request->baseUrl; ?>/css/form.css" />
<style>
#header{height: 50px}
.preloader{
    background: url(/images/preloader.gif) no-repeat;
    width: 30px;
    height: 30px;
    display: none;
}
.clr{clear:both}
.remove_img{
    font: 12px/16px 'trebuchet ms';
    color: #aab2bd;
    display: inline-block;
    cursor: pointer;
}
.remove_img:hover{
            color: #aab2bd;
}
.miniImg{
    display: inline-block;
    margin: 5px;
    padding: 5px;
    border: 1px solid #aaa;
    text-align: center;
}
.error_hint{
    color:#b94a48;
    font: 14px/20px "Helvetica Neue",Helvetica,Arial,sans-serif;
}
.teacher_block {
    width: 460px;
    padding: 5px;
    border: 1px solid #e3e3e3;
    margin-bottom: 7px;
}
.teacher_block img{
    margin-right: 10px;
}
.teacher_name {
    font: 16px/20px Helvetica;
    font-weight: bold;
    display: block;
}
.my_label{
    margin: 3px;
    line-height: 24px !important;
}
</style>
	<title><?php echo CHtml::encode($this->pageTitle); ?></title>
</head>

<body>

<div class="container" id="page">

	<div id="header">
	</div><!-- header -->
    <?php if(!Yii::app()->user->isGuest){?>
        <?php $this->widget('bootstrap.widgets.TbNavbar', array(
            'type'=>'inverse', // null or 'inverse'
            'brand'=>Yii::app()->name,
            'brandUrl'=>'/',
            'collapse'=>false, // requires bootstrap-responsive.css
            'items'=>array(
                array(
                    'class'=>'bootstrap.widgets.TbMenu',
                    'htmlOptions'=>array('style'=>'width:650px'),
                    'items'=>array(
                        // array('label'=>'Номенклатура', 'url'=>'#','items'=>array(
                        //     array('label'=>'Товары','url'=>'/admin/products'),
                        //     array('label'=>'Как это работает','url'=>'/admin/howToUse'),
                        // )),
                        array('label'=>'Проекты', 'url'=>array('/admin/projects'),),
                        array('label'=>'Новости', 'url'=>array('/admin/news'),),
                    ),
                ),
                array(
                    'class'=>'bootstrap.widgets.TbMenu',
                    'htmlOptions'=>array('class'=>'pull-right'),
                    'items'=>array(
                        array('label'=>'? Справка', 'url'=>array('/admin/help'),),
                        array('label'=>Yii::app()->user->name, 'icon'=>'user','url'=>'#', 'items'=>array(
                            array('label'=>'Выйти', 'url'=>'/admin/login/logout'),
                        )),
                    ),
                ),
            ),
        )); ?>
        <?}?>
<!--	--><?php //if(isset($this->breadcrumbs)):?>
<!--        --><?php //$this->widget('bootstrap.widgets.TbBreadcrumbs', array(
//            'links'=>$this->breadcrumbs,
//        )); ?>
<!--	--><?php //endif?>
<div class="well">
	<?php echo $content; ?>
    <div class="clearfix"></div>
</div>
	<div class="clear"></div>

	<div class="well" style="text-align: center">
		<a href="http://abz.dn.ua" target="_blank">abz.dn.ua</a>
	</div><!-- footer -->

</div><!-- page -->

</body>
</html>
