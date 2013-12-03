<?php
$root = $_SERVER['DOCUMENT_ROOT'];


if(!empty($_POST['dir']))
{
    $elements='[';
    if($_POST['action']==-1)
    {
        //по всем папкам
    }
    else
    {
        $dir = $root."/".$_POST['dir']."size1";
        	$array=null;
            if (is_dir($dir)) {
            if ($dh = opendir($dir)) {
                while (($file = readdir($dh)) !== false) {
                   // echo "файл: $file : тип: " . filetype($dir . $file) . "";
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

 
?>