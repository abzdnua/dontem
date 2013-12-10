<?php
/* @var $this SiteController */
$link = Yii::app()->request->getParam('link');
$id = end(explode('_',$link));
$project = Projects::model()->findByPk($id);
if(!$project)
    throw new CHttpException(404,'The requested page does not exist.');
$this->pageTitle=Yii::app()->name . ' - Энергоблок №12';
$this->breadcrumbs=array(
    'Энергоблок №12',
);
?>

<div class="w_980 page_news page_project_more">

            <h1 style="margin-bottom: 20px;"><?php echo $project->project_name ?></h1>
    <div class="w_960">
        <?php $ids = Yii::app()->db->createCommand("SELECT id, project_name as name FROM projects WHERE deleted = 0 AND is_active = 1 AND tes_id = $project->tes_id")->queryAll();
        foreach ($ids as $key => $proj) {
            if($proj['id']==$project->id){
                $prev_link =isset($ids[$key-1])?Yii::app()->urlManager->createUrl('site/projectMore',array('link'=>DLL::makeLink($ids[$key-1]['name']).'_'.$ids[$key-1]['id'])):'';
                $next_link =isset($ids[$key+1])?Yii::app()->urlManager->createUrl('site/projectMore',array('link'=>DLL::makeLink($ids[$key+1]['name']).'_'.$ids[$key+1]['id'])):'';
            }
        }?>
        <?php if($prev_link){?>
        <a class="bt_simp prev no_mar_left" href="<?php echo $prev_link ?>">Предыдущий <span class="arrow_left_button"></span></a>
        <?}?>
        <?php if($next_link){?>
        <a class="bt_simp next" href="<?php echo $next_link ?>">Следующий <span class="arrow_right_button"></span></a>
        <?}?>
        <a class="bt_simp next f_r" href="<?php echo Yii::app()->urlManager->createUrl('site/project',array('tes_id'=>$project->tes_id))?>">Все проекты на <?php echo Constants::getTes($project->tes_id,'ой') ?></a>
    </div>
    <div class="clr"></div>

</div>
<div class="paralax page_about">
    <div >
        <?php $show_img = Files::model()->findByPk($project->image_id);
          if($show_img){
              if(is_file($_SERVER['DOCUMENT_ROOT'].'/files/'.$show_img->file_path)){?>
                  <img src="/files/<?php echo $show_img->file_path?>" >
              <?php }
          }
        ?>
    </div>
</div>
<div class="w_980">
   <div class="block_news_more w_980 page_project_more">

           <div class="top_block">

                     <h2><?php echo $project->title ?> </h2>

              </div>
        <div class="white_block">
            <div class="clear" style="padding-top: 15px"></div>
            <div class="blue_block">
                <div>



                <span style="display: inline-block;max-height: 52px;overflow: hidden;">
                <?php echo $project->sub_title ?></span>
                </div>
            </div>
            <div class="top">
                <div class="clr" style="margin-bottom: 25px;"></div>
                <div class="f_l" >
                        <div class="text" <?php echo ($project->video_link)?'':'style="max-width: 100%;"' ?>>
                            <?php echo $project->short_des ?>
                        </div>
                        <div class="clr" ></div>
                        <?php if($project->file_id){
                            $file = Files::model()->findByPk($project->file_id);
                            if($file and is_file($_SERVER['DOCUMENT_ROOT'].'/files/'.$file->file_path)){
                            ?>
                        <a href="/files/<?php echo $file->file_path ?>" class=" href d_present">Скачать презентацию</a>
                        <?}
                    }
                        ?>
                </div>
                <?php if($project->video_link){?>
                <div class="f_r w_280_200" >
                    <object width="280" height="200"><param name="movie" value="<?php echo $project->video_link ?>?hl=ru_RU&amp;version=3"></param><param name="allowFullScreen" value="true"></param><param name="allowscriptaccess" value="always"></param><embed src="<?php echo $project->video_link ?>?hl=ru_RU&amp;version=3" type="application/x-shockwave-flash" width="280" height="200" allowscriptaccess="always" allowfullscreen="true"></embed></object>
                  <p> <?php echo $project->video_des ?></p>
                </div>
                <?}?>
                <div class="clr"></div>
            </div>

            <div class="clr" style="margin-top: 25px;"></div>
            <?php
                $blocks = Blocks::model()->findAll('parent_table = "'.$project->tableName().'" AND parent_id = '.$project->id.' ORDER BY `order` ASC');
                if ($blocks){
                    for ($i=0;$i<count($blocks);$i++) {
                        $block = $blocks[$i];
            ?>
                <?php echo ($block->title)?"<h2>$block->title</h2>":'' ?>
                <?php switch($block->block_type){
                    case Constants::BLOCK_TYPE_TEXT:$this->renderPartial('blocks/text',array('block_id'=>$block->id));break;
                    case Constants::BLOCK_TYPE_TEXT_BG:$this->renderPartial('blocks/text_bg',array('block_id'=>$block->id));break;
                    case Constants::BLOCK_TYPE_GALLERY:$this->renderPartial('blocks/gallery',array('block_id'=>$block->id));break;
                    case Constants::BLOCK_TYPE_IMG:$this->renderPartial('blocks/img',array('block_id'=>$block->id));break;
                }?>
            <?}
        }?>
            <div class="b-page-wrap"  style="margin-top: 35px;">
                <div class="b-page-layout b-page-layout_page_index i-clearfix">

                    <div class="b-images-head"></div>

                    <div class="b-images-list b-images-list_layout_stream b-images-list_dangling_no b-images-list_type_home b-images-list_fluid_yes i-images-lists__list i-clearfix i-bem" onclick="return {&quot;b-images-list&quot;:{}}">
                        <div class="b-images-item b-images-item_home_yes b-images-item_in_stream b-images-list__unit i-bem" >
                            <div class="b-images-item__wrap">
                                <div class="b-link b-link_counter_blockstat b-link_type_home i-counter i-bem" >
                                    <img class="b-images-item__preview" alt="" src="../images/news/photo/trip_tes/news_03.png" width="267" height="177" />
                                </div>
                            </div>

                        </div>
                        <div class="b-images-item b-images-item_home_yes b-images-item_in_stream b-images-list__unit i-bem" >
                            <div class="b-images-item__wrap">
                                <div class="b-link b-link_counter_blockstat b-link_type_home i-counter i-bem" >
                                    <img class="b-images-item__preview" alt="" src="../images/news/photo/trip_tes/news_05.png" width="267" height="177" />
                                </div>
                            </div>

                        </div>
                        <div class="b-images-item b-images-item_home_yes b-images-item_in_stream b-images-list__unit i-bem" >
                            <div class="b-images-item__wrap">
                                <div class="b-link b-link_counter_blockstat b-link_type_home i-counter i-bem" >
                                    <img class="b-images-item__preview" alt="" src="../images/news/photo/trip_tes/news_07.png" width="267" height="177" />
                                </div>
                            </div>

                        </div>
                        <div class="b-images-item b-images-item_home_yes b-images-item_in_stream b-images-list__unit i-bem" >
                            <div class="b-images-item__wrap">
                                <div class="b-link b-link_counter_blockstat b-link_type_home i-counter i-bem" >
                                    <img class="b-images-item__preview" alt="" src="../images/news/photo/trip_tes/news_09.png" width="119" height="177" />
                                </div>
                            </div>

                        </div>
                        <div class="b-images-item b-images-item_home_yes b-images-item_in_stream b-images-list__unit i-bem" >
                            <div class="b-images-item__wrap">
                                <div class="b-link b-link_counter_blockstat b-link_type_home i-counter i-bem" >
                                    <img class="b-images-item__preview" alt="" src="../images/news/photo/trip_tes/news_15.png" width="230" height="177" />
                                </div>
                            </div>

                        </div>  <div class="b-images-item b-images-item_home_yes b-images-item_in_stream b-images-list__unit i-bem" >
                            <div class="b-images-item__wrap">
                                <div class="b-link b-link_counter_blockstat b-link_type_home i-counter i-bem" >
                                    <img class="b-images-item__preview" alt="" src="../images/news/photo/trip_tes/news_17.png" width="230" height="177" />
                                </div>
                            </div>

                        </div>
                        <div class="b-images-item b-images-item_home_yes b-images-item_in_stream b-images-list__unit i-bem" >
                            <div class="b-images-item__wrap">
                                <div class="b-link b-link_counter_blockstat b-link_type_home i-counter i-bem" >
                                    <img class="b-images-item__preview" alt="" src="../images/news/photo/trip_tes/news_19.png" width="231" height="177" />
                                </div>
                            </div>

                        </div>
                        <div class="b-images-item b-images-item_home_yes b-images-item_in_stream b-images-list__unit i-bem" >
                            <div class="b-images-item__wrap">
                                <div class="b-link b-link_counter_blockstat b-link_type_home i-counter i-bem" >
                                    <img class="b-images-item__preview" alt="" src="../images/news/photo/trip_tes/news_21.png" width="231" height="177" />
                                </div>
                            </div>

                        </div>


                        <div class="i-clearfix"></div>
                    </div>
                </div>
            </div>
               <!--   <h2>Персоналом ООО «ДОНТЭМ» производится выполнение работ по реконструкции поверхностей нагрева</h2>
                <div class="arrow_left">Замена экранной системы на газоплотную, металлоемкостью 341 тн; 4376 св. стыков</div>
                <div class="arrow_left">Монтаж настенного радиационного пароперегревателя (НРПП) c восстановлением пароперепускных труб. <br/>Металлоемкость – 26 т.</div>
                <div class="arrow_left">Замена пакетов входной ступени вторичного пароперегревателя с коллекторами. Металлоемкость – 140,5 тн, 2784 св. стыка</div>
                <div class="arrow_left">Замена входных коллекторов выходной ступени вторичного пароперегревателя. Стыковка и сварка змеевиков – 1392 св. стыка</div>
                <div class="arrow_left">Замена ширмового пароперегревателя в сборе. Металлоемкость – 73,3 т</div>
                <div class="arrow_left">Замена труб потолочного пароперегревателя. Металлоемкость 47,2 т, 1864 св. стыка.</div>
                <div class="arrow_left">Замена и ремонт обмуровки и термоизоляции составила 1257,4 м³ и 1380,4 м³ соответственно.</div>
                <div class="arrow_left">Замена торцевых стенок мельниц М-50 – металлоемкость 28 т.</div>
                <div class="clr"></div>
                <div class="b-page-wrap"  style="margin-top: 35px;">
                    <div class="b-page-layout b-page-layout_page_index i-clearfix">

                        <div class="b-images-head"></div>

                        <div class="b-images-list b-images-list_layout_stream b-images-list_dangling_no b-images-list_type_home b-images-list_fluid_yes i-images-lists__list i-clearfix i-bem" onclick="return {&quot;b-images-list&quot;:{}}">


                            <div class="b-images-item b-images-item_home_yes b-images-item_in_stream b-images-list__unit i-bem" >
                                <div class="b-images-item__wrap">
                                    <div class="b-link b-link_counter_blockstat b-link_type_home i-counter i-bem" >
                                        <img class="b-images-item__preview" alt="" src="../images/news/photo/start_tes/news_03.png" width="231" height="177" />
                                    </div>
                                </div>

                            </div>
                            <div class="b-images-item b-images-item_home_yes b-images-item_in_stream b-images-list__unit i-bem" >
                                <div class="b-images-item__wrap">
                                    <div class="b-link b-link_counter_blockstat b-link_type_home i-counter i-bem" >
                                        <img class="b-images-item__preview" alt="" src="../images/news/photo/start_tes/news_05.png" width="231" height="177" />
                                    </div>
                                </div>

                            </div>
                            <div class="b-images-item b-images-item_home_yes b-images-item_in_stream b-images-list__unit i-bem" >
                                <div class="b-images-item__wrap">
                                    <div class="b-link b-link_counter_blockstat b-link_type_home i-counter i-bem" >
                                        <img class="b-images-item__preview" alt="" src="../images/news/photo/start_tes/news_07.png" width="231" height="177" />
                                    </div>
                                </div>

                            </div>
                            <div class="b-images-item b-images-item_home_yes b-images-item_in_stream b-images-list__unit i-bem" >
                                <div class="b-images-item__wrap">
                                    <div class="b-link b-link_counter_blockstat b-link_type_home i-counter i-bem" >
                                        <img class="b-images-item__preview" alt="" src="../images/news/photo/start_tes/news_09.png" width="231" height="177" />
                                    </div>
                                </div>

                            </div>
                            <div class="b-images-item b-images-item_home_yes b-images-item_in_stream b-images-list__unit i-bem" >
                                <div class="b-images-item__wrap">
                                    <div class="b-link b-link_counter_blockstat b-link_type_home i-counter i-bem" >
                                        <img class="b-images-item__preview" alt="" src="../images/news/photo/start_tes/news_15.png" width="231" height="177" />
                                    </div>
                                </div>

                            </div>  <div class="b-images-item b-images-item_home_yes b-images-item_in_stream b-images-list__unit i-bem" >
                                <div class="b-images-item__wrap">
                                    <div class="b-link b-link_counter_blockstat b-link_type_home i-counter i-bem" >
                                        <img class="b-images-item__preview" alt="" src="../images/news/photo/start_tes/news_16.png" width="231" height="177" />
                                    </div>
                                </div>

                            </div>
                            <div class="b-images-item b-images-item_home_yes b-images-item_in_stream b-images-list__unit i-bem" >
                                <div class="b-images-item__wrap">
                                    <div class="b-link b-link_counter_blockstat b-link_type_home i-counter i-bem" >
                                        <img class="b-images-item__preview" alt="" src="../images/news/photo/start_tes/news_17.png" width="231" height="177" />
                                    </div>
                                </div>

                            </div>
                            <div class="b-images-item b-images-item_home_yes b-images-item_in_stream b-images-list__unit i-bem" >
                                <div class="b-images-item__wrap">
                                    <div class="b-link b-link_counter_blockstat b-link_type_home i-counter i-bem" >
                                        <img class="b-images-item__preview" alt="" src="../images/news/photo/start_tes/news_18.png" width="231" height="177" />
                                    </div>
                                </div>

                            </div>


                            <div class="i-clearfix"></div>
                        </div>
                    </div>
                </div> -->
        </div>

   </div>
</div>
