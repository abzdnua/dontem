<?php

class GalleryController extends Controller
{
    public function actionGetIMGS()
    {
        if(isset($_POST['db']) AND !empty($_POST['db']))
        {
            $sql="SELECT * FROM block_gallery WHERE block_id=".$_POST['db']." ORDER BY id DESC";
            $q = Yii::app()->db->createCommand($sql)->queryAll();
            $elements='[';
            if(count($q)>0)
            {
                $i = 0;
                foreach ($q as $key => $row) {
                     $elements .= '"'.$row['md5_name'].'_'.$row['id'].'.jpg'.'"';
                    if ($i+1!=count($q)) $elements .= ",";
                    $i++;
                }
                // foreach($arr as $i=>$v)
                // {
                //     $elements .= '"'.$v['md5_mictotime'].'_'.$v['id'].'.jpg'.'"';
                //     if ($i+1!=count($arr)) $elements .= ",";
                // }
            }
            $elements.=']';
            echo $elements;
        }
        else
        if(!empty($_POST['dir']))
        {
            $elements='[';
            if($_POST['action']==-1)
            {
                //РїРѕ РІСЃРµРј РїР°РїРєР°Рј
            }
            else
            {
                $dir = $root."/".$_POST['dir']."size1";
                	$array=null;
                    if (is_dir($dir)) {
                    if ($dh = opendir($dir)) {
                        while (($file = readdir($dh)) !== false) {
                           // echo "С„Р°Р№Р»: $file : С‚РёРї: " . filetype($dir . $file) . "";
                            if(substr(strrchr($file, '.'), 1)=='jpg')
                			{
                				 $array[]=$file;
                				 /*$elements .= '"'.$file.'"';
                           		 if ($count!=$number) $elements .= ",";
                				 $number++;*/
                			}
                        }
                    }
                    sort($array);
                    for($i=0;$i<count($array);$i++)
                    {
                    	 $elements .= '"'.$array[$i].'"';
                         if ($i+1!=count($array)) $elements .= ",";
                    }
                    closedir($dh);
                }
                $elements.="]";
                echo $elements;
            }

        }
    }
}
