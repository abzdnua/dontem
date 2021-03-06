<?php
/* @var $this SiteController */
$tes_id = Yii::app()->request->getParam('tes_id');
$tes_name = Constants::getTes($tes_id,'ой');
$this->pageTitle=Yii::app()->name . ' - Проекты на '.$tes_name;
$this->breadcrumbs=array(
    'Проекты на Славянской Тэс',
);
?>



<div class="w_980 page_news page_project">

            <h1>Проекты на <?php echo $tes_name ?></h1>
    <div class="w_940">
        <?php $tes = Yii::app()->db->createCommand("SELECT DISTINCT(tes_id) FROM projects WHERE deleted = 0 AND is_active = 1")->queryColumn();
        foreach ($tes as $key => $subtes) {
            if($subtes == $tes_id){
                if(isset($tes[$key-1])){
                    $prev['id'] = $tes[$key-1];
                    $prev['name'] = Constants::getTes($tes[$key-1]);
                }else{
                    $prev['id'] = end($tes);
                    $prev['name'] = Constants::getTes(end($tes));
                }

                if(isset($tes[$key+1])){
                    $next['id'] = $tes[$key+1];
                    $next['name'] = Constants::getTes($tes[$key+1]);
                }else{
                    $next['id'] = $tes[0];
                    $next['name'] = Constants::getTes($tes[0]);
                }
            }
        }
         ?>
        <a class="bt_simp prev no_mar_left" href="<?=Yii::app()->urlManager->createUrl('site/project',array('tes_id'=>$prev['id']))?>"><?php echo $prev['name'] ?> <span class="arrow_left_button"></span></a>
        <a class="bt_simp next" href="<?=Yii::app()->urlManager->createUrl('site/project',array('tes_id'=>$next['id']))?>"><?php echo $next['name'] ?><span class="arrow_right_button"></span></a>
<div class="clear" style="margin-bottom: 15px;"></div>
    <?php $projects = Projects::model()->findAll("tes_id = $tes_id AND deleted = 0 AND is_active = 1");
        if($projects)
            foreach ($projects as $key => $project) {?>
                <a class="block"  href="<?=Yii::app()->urlManager->createUrl('site/projectMore',array('link'=>DLL::makeLink($project->project_name).'_'.$project->id))?>">
                    <div class="project_block">
                        <div class="hover_border display_none"></div>
                        <?php $show_img = Files::model()->findByPk($project->image_id);
                          if($show_img){
                              if(is_file($_SERVER['DOCUMENT_ROOT'].'/files/m_'.$show_img->file_path)){?>
                                  <img src="/files/m_<?php echo $show_img->file_path?>" style="max-width:100%">
                              <?php }
                          }
                        ?>
                        <!-- <img src="../images/project/project_big.png"/> -->
                        <?php
                            $str = $project->project_name;
                            $str2 = "";
                            $str3="";

                            if(strlen($str)>120){
                                $sep = mb_strrpos(mb_substr($str , 0, 120)," ");
                                $str1 = mb_substr($str , 0, $sep);
                                $str = mb_substr($str , $sep+1);

                                if(strlen($str)>120){
                                    $sep = mb_strrpos(mb_substr($str , 0, 120)," ");
                                    $str2 = mb_substr($project->project_name , 0, $sep);
                                    $str3 = mb_substr($str , $sep+1);
                                }else{
                                    $str2 = $str;
                                }
                            }else{
                                $str1 = $str;
                            }



                         ?>
                        <div class="top_text"><?php echo $str1 ?></div>
                        <?php if($str2){?>
                        <div class="top_text"><?php echo $str2 ?></div>
                        <?}?>
                        <?php if($str3){?>
                        <div class="top_text"><?php echo $str3 ?></div>
                        <?}?>

                        <div class="bottom_text">
                            <?php echo DLL::substrText($project->short_des,340) ?>
                        </div>
                    </div>
                    <div class="clr"></div>
                </a>


            <?}
    ?>

       <!--  <a class="block"  href="<?=Yii::app()->urlManager->createUrl('site/project_star_tes')?>">
    <div class="project_block">

                            <div class="hover_border display_none"></div>
                                <img src="../images/project/project_big.png"/>
                                <div class="top_text">Энергоблок №6: Подготовка к реконструкции </div>
                                <div class="bottom_text">
                                    Подготовка к масштабному проекту строительства энергоблока №6 Славянской ТЭС с использованием технологии ЦКС (сжигание твердого топлива в циркулирующем кипящем слое) и разделением его на два энергоблока - №6А и №6Б, мощностью по 330 МВт каждый, началась в 2013 году. Длительность реконструкции составит 37 месяцев.
                                </div>

                </div>
            <div class="clr"></div>
        </a>


        <a class="block" href="<?=Yii::app()->urlManager->createUrl('site/project_star_tes2')?>" >
        <div class="project_block">

                <div class="hover_border display_none"></div>
                <img src="../images/project/project_big.png"/>
                <div class="top_text">Энергоблок №7: Реконструкция котлоагрегата</div>
                <div class="bottom_text">
                    ООО «ДОНТЭМ» - генеральный подрядчик работ по реконструкции основного и вспомогательного оборудования на энергоблоке №7 Славянской ТЭС (корпус 7-А).
                </div>


        </div>
            <div class="clr"></div>
        </a> -->
    <a href="/baraban" class="baraban_block">
        На энергоблоке №5 Старобешевской ТЭС в беспрецедентные сроки была выполнена замена барабана котлоагрегата ТП-100.
    </a>
    </div>
</div>
