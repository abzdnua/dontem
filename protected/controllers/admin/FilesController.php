<?

class FilesController extends Controller
{
    private $f;
    private $img;
    private $uniq;
    public function actionUpload(){
        $unused = Files::model()->findAllByAttributes(array('used'=>0));
        foreach($unused as $item){
            if(strtotime($item->create_time)< mktime(0,0,0,date('m'),date('d')-1,date('Y'))){
                @unlink($_SERVER['DOCUMENT_ROOT'].'/files/'.$item->file_path);
                @unlink($_SERVER['DOCUMENT_ROOT'].'/files/m_'.$item->file_path);
                @unlink($_SERVER['DOCUMENT_ROOT'].'/files/s_'.$item->file_path);
                // $item->delete();
            }
        }


        if(isset($_POST))
        {
            set_time_limit(0);
            $type = $_POST['img_type'];
            $imgArray = Constants::getImgArray();
            $err = array();
            $success = array();
            for($i=0;$i<count($_FILES['image']['name']);$i++){
                foreach ($imgArray as $value) {
                    if($type == $value['name']){
                        $t = null;
                        if (filesize($_FILES['image']['tmp_name'][$i]))
                            list($w,$h,$t) = getimagesize($_FILES['image']['tmp_name'][$i]);
                        if($value['any_size']){
                            if($w<$value['width_expect'] or $h<$value['height_expect'] or is_null($t)){
                                $err_message = 'Необходимо загружать изображение';
                                $and = "";
                                if($value['width_expect']!=0){
                                    $err_message .= " не менее $value[width_expect]px по ширине";
                                    $and = " и";
                                }
                                if($value['height_expect']!=0)
                                    $err_message .= "$and не менее $value[height_expect]px по высоте";
                                $err[] = array('fileName'=>$_FILES['image']['name'][$i],'err_msg'=>$err_message);
                                continue;
                                // echo json_encode(array('err'=>$err_message));
                                // Yii::app()->end();
                            }
                        }else{
                            if($w!=$value['width_expect'] or $h!=$value['height_expect'] or is_null($t)){
                                $err_message = 'Необходимо загружать изображение';
                                $and = "";
                                if($value['width_expect']!=0){
                                    $err_message .= " $value[width_expect]px по ширине";
                                    $and = " и";
                                }
                                if($value['height_expect']!=0)
                                    $err_message .= "$and $value[height_expect]px по высоте";
                                $err[] = array('fileName'=>$_FILES['image']['name'][$i],'err_msg'=>$err_message);
                                continue;
                                // echo json_encode(array('err'=>$err_message));
                                // Yii::app()->end();
                            }
                        }

                        $this->img = new Upload($_FILES['image']['tmp_name'][$i]);
                        // $res = $this->loadFile($value[width_to],$value[height_to]);
                        if($type==Constants::IMG_TYPE_GALLERY){
                            if(($value['width_to']==0 and $value['height_to']==0) or ($w<$value['width_to'] or $h<$value['height_to'])){
                                $res = $this->loadGal($w,$h,$_POST['md5_name'],$value['alter_img']);
                            }else{
                                if($value['width_to']/$w < $value['height_to']/$h){
                                    if($value['height_to']==0){
                                        $res = $this->loadGal($value['width_to'],true,$_POST['md5_name'],$value['alter_img']);
                                    }else{
                                        $res = $this->loadGal(true,$value['height_to'],$_POST['md5_name'],$value['alter_img']);
                                    }
                                }
                                else{
                                    if($value['width_to']==0){
                                        $res = $this->loadGal(true,$value['height_to'],$_POST['md5_name'],$value['alter_img']);
                                    }else{
                                        $res = $this->loadGal($value['width_to'],true,$_POST['md5_name'],$value['alter_img']);
                                    }
                                }
                            }
                            $success[] = $res;
                        }else{
                            if(($value['width_to']==0 and $value['height_to']==0) or ($w<$value['width_to'] or $h<$value['height_to'])){
                                $res = $this->loadFile($w,$h);
                            }else{
                                if($value['width_to']/$w < $value['height_to']/$h){
                                    if($value['height_to']==0){
                                        $res = $this->loadFile($value['width_to'],true,true,'',true);
                                    }else{
                                        $res = $this->loadFile(true,$value['height_to'],true,'',true,true,$value['width_to']);
                                    }
                                }
                                else{

                                    if($value['width_to']==0){
                                        $res = $this->loadFile(true,$value['height_to'],true,'',true);
                                    }else{
                                        $res = $this->loadFile($value['width_to'],true,true,'',true,true,0,$value['height_to']);
                                    }
                                }
                            }
                            if(isset($value['alter_img'])){
                                foreach ($value['alter_img'] as $key => $val) {
                                        if($val['width_to']/$w < $val['height_to']/$h)
                                            $alter_res = $this->loadFile(true,$val['height_to'],false,$key,false,true,$val['width_to']);
                                        else
                                            $alter_res = $this->loadFile($val['width_to'],true,false,$key,false,true,0,$val['height_to']);
                                }
                            }
                            $success[] = $res;
                        }
                    }
                }
            }
            echo json_encode(array('err'=>$err,'success'=>$success));
        Yii::app()->end();

    }

    }



    function loadFile($x,$y, $new = true, $pref='', $save = true, $crop = false, $max_width = 0,$max_height = 0){
        $results = array();
            if($new){
                $this->uniq = uniqid();
            }

            $this->img->file_new_name_body = $pref.$this->uniq;

            if($crop === true)
            {
                if($max_width!=0){
                    $c_y = (is_numeric($y))?$y:$this->img->image_src_y;
                    if($c_y*$this->img->image_src_x/$this->img->image_src_y>$max_width)
                    {
                        //сколько нужно обрезать
                        $crop=(-1)*($max_width-$c_y*$this->img->image_src_x/$this->img->image_src_y);
                        if ($crop%2 == 0){
                            $this->img->image_crop            = '0 '.($crop/2).' 0 '.($crop/2);
                        }
                        else
                        {
                            $this->img->image_crop            = '0 '.(int)($crop/2).' 0 '.((int)($crop/2)+1);
                        }
                    }
                }
                if($max_height!=0){
                    $c_x = (!is_bool($x))?$x:$this->img->image_src_x;
                   if($c_x*$this->img->image_src_y/$this->img->image_src_x>$max_height)
                    {
                        //сколько нужно обрезать
                        $crop=(-1)*($max_height-$c_x*$this->img->image_src_y/$this->img->image_src_x);
                        if ($crop%2 == 0){
                            $this->img->image_crop            = ($crop/2).' 0 '.($crop/2).' 0';
                        }
                        else
                        {
                            $this->img->image_crop            = (int)($crop/2).' 0 '.((int)($crop/2)+1).' 0';
                        }
                    }
                }
            }

            if(!empty($this->f->extensionName))
            {
                $this->img->file_new_name_ext = $this->f->extensionName;
                $path = $pref.$this->uniq.'.'.$this->f->extensionName;
            }
            else
            {
                $this->img->file_new_name_ext = 'jpg';
                $path = $pref.$this->uniq.'.jpg';
            }

            if(is_numeric($x) ) $this->img->image_x = $x;
            else $this->img->image_ratio_x = $x;
            if(is_numeric($y) ) $this->img->image_y = $y;
            else $this->img->image_ratio_y = $y;
            if($x!=0 or $y!=0) $this->img->image_resize = true;
            $this->img->jpeg_quality = 100;
            $this->img->process($_SERVER['DOCUMENT_ROOT'].'/files/');
            $id = 0;
            $err="";
            if($save){
            $files = new Files();
            $files->file_path = $path;
            $files->save();
            $id = $files->id;
                $err = $files->getErrors();
            }

            $results = array('fileName'=>$path,'id' => $id,'err'=>$err);


        return $results;

    }

    private function loadGal($x,$y,$md5_name,$sizes){
        $blockGal = new BlockGallery;
        $blockGal->md5_name = $md5_name;
        $blockGal->save();
        $this->img->file_new_name_body = $md5_name.'_'.$blockGal->id;
        $this->img->file_new_name_ext = 'jpg';
        if(is_numeric($x) ) $this->img->image_x = $x;
        else $this->img->image_ratio_x = $x;
        if(is_numeric($y) ) $this->img->image_y = $y;
        else $this->img->image_ratio_y = $y;
        if($x!=0 or $y!=0) $this->img->image_resize = true;
        $this->img->jpeg_quality = 100;
        $this->img->process($_SERVER['DOCUMENT_ROOT'].'/files/gallery/size1/');

        $path = $md5_name.'_'.$blockGal->id.'.jpg';

        foreach ($sizes as $key => $size) {
            $this->img->file_new_name_body = $md5_name.'_'.$blockGal->id;
            $this->img->file_new_name_ext = 'jpg';
            $this->img->image_y = $size['height_to'];
            $this->img->image_ratio_x = true;
            $this->img->image_resize = true;
            $this->img->process($_SERVER['DOCUMENT_ROOT'].'/files/gallery'.$key);
        }


        return array('fileName'=>$path,'gal_id'=>$blockGal->id);
    }


}
