<?

class FilesController extends Controller
{
    private $f;
    private $img;
    private $uniq;
    public function actionUpload(){
        $unused = Files::model()->findAllByAttributes(array('used'=>0));
        foreach($unused as $item){
            if(strtotime($item->create_date)< mktime(0,0,0,date('m'),date('d')-1,date('Y'))){
                @unlink($_SERVER['DOCUMENT_ROOT'].'/files/'.$item->path);
                @unlink($_SERVER['DOCUMENT_ROOT'].'/files/m_'.$item->path);
                @unlink($_SERVER['DOCUMENT_ROOT'].'/files/s_'.$item->path);
                $item->delete();
            }
        }


        if(isset($_POST))
        {
        $keys = array_keys($_FILES);
            $model = $keys[0];
         switch(strtolower($model)){
             case 'manufactures':
                $this->f = CUploadedFile::getInstanceByName($model.'[file]');
                $this->img = new Upload($this->f->tempName);
                 if(!getimagesize($this->f->tempName)){
                     echo json_encode(array('fileName'=>'','id' =>'','err'=>'При загрузке возникли проблемы. Убедитесь что загружается изображение'));
                 }else{
                $res = $this->loadFile(true,37);
                echo json_encode($res);
                 }
                 break;
             case 'stocks':
                 $this->f = CUploadedFile::getInstanceByName($_POST['field_name']);
                 $this->img = new Upload($this->f->tempName);
                 if($_POST['field_name'][strlen($_POST['field_name'])-2] == '1'){
                     if(!getimagesize($this->f->tempName) or $this->img->image_src_x!=981 or $this->img->image_src_y!=360){
                         echo json_encode(array('fileName'=>'','id' =>'','err'=>'При загрузке возникли проблемы.
Убедитесь что загружается изображение размером 981*360рх'));
                     }else{
                     $res = $this->loadFile(981,360);
                         echo json_encode($res);
                     $res = $this->loadFile(462,true,false,'m_',false);
                     $res = $this->loadFile(116,true,false,'s_',false);
                     }
                 }else{
                     if(!getimagesize($this->f->tempName) or $this->img->image_src_x!=1920 or $this->img->image_src_y<100){
                         echo json_encode(array('fileName'=>'','id' =>'','err'=>'При загрузке возникли проблемы.
Убедитесь что загружается изображение размером
1920рх по ширине и не менее 100рх по высоте'));
                     }else{
                     $res = $this->loadFile(1920,true,true,'back_',true);
                         echo json_encode($res);
                     }
                 }
                 break;
             case 'constructioncrew':

                 if($_POST['field_name'] == $model.'[file_main]')
                 {
                     $this->f = CUploadedFile::getInstanceByName($_POST['field_name']);
                     $this->img = new Upload($this->f->tempName);
                     if(!getimagesize($this->f->tempName) /*or $this->img->image_src_x!=171*/ or $this->img->image_src_y<188){
                         echo json_encode(array('fileName'=>'','id' =>'','err'=>'При загрузке возникли проблемы.
Убедитесь что загружается изображение размером 171*188рх'));
                     }else{
                         $res = $this->loadFile(true,188, true, 'main_', true, true, 171);
                         echo json_encode($res);
                     }
                 }
                 if($_POST['field_name'] == $model.'[file_gal][]')
                 {
                     $out = array();
                     foreach($_FILES[$model]['tmp_name']['file_gal'] as $key => $file)
                     {
                         $this->img = new Upload($file);
                         if($this->img->image_src_y < 720)
                         {
                             $res = array('err' => 'Высота картинки не может быть меньше 720px', 'fileName' => $_FILES[$model]['name']['file_gal'][$key]);
                         }
                         else
                         {
                             set_time_limit(0);
                             $res = $this->loadFile(true,true);
                             $r = $this->loadFile(true,720, true, '1280_', false, true, 1280, $res['fileName']);
                             $r = $this->loadFile(true,576, true, '1024_', false, true, 1024, $res['fileName']);
                             $r = $this->loadFile(true,459, true, '816_', false, true, 816, $res['fileName']);
                             $r = $this->loadFile(true,110, true, 'prw_', false, true, 155, $res['fileName']);

                         }
                         array_push($out,$res);
                     }
                     echo json_encode($out);
                 }
                 break;
                 /**/
                 case 'howtouse':
                     $this->f = CUploadedFile::getInstanceByName($model.'[file]');
                     $this->img = new Upload($this->f->tempName);
                     if(!getimagesize($this->f->tempName)){
                         echo json_encode(array('fileName'=>'','id' =>'','err'=>'При загрузке возникли проблемы. Убедитесь что загружается изображение'));
                     }else{
                         $res = $this->loadFile(true,311);
                         echo json_encode($res);
                     }
                     break;
                 /**/

         }
        Yii::app()->end();

    }

    }



    function loadFile($x,$y, $new = true, $pref='', $save = true, $crop = false, $max_width = 0, $file_name = NULL){
        $results = array();
            if($new)

            if(is_null($file_name))
            {
                $this->uniq = uniqid();
            }
            else
            {
                $fn = explode('.', $file_name);
                $this->uniq = $fn[0];
            }
            $this->img->file_new_name_body = $pref.$this->uniq;


            if($crop === true)
            {
                if($y*$this->img->image_src_x/$this->img->image_src_y>$y*$max_width/$y)
                {
                    //сколько нужно обрезать
                    $crop=(-1)*($y*$max_width/$y-$y*$this->img->image_src_x/$this->img->image_src_y);
                    if ($crop%2 == 0){
                        $this->img->image_crop            = '0 '.($crop/2).' 0 '.($crop/2);
                    }
                    else
                    {
                        $this->img->image_crop            = '0 '.(int)($crop/2).' 0 '.((int)($crop/2)+1);
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
            $this->img->process($_SERVER['DOCUMENT_ROOT'].'/files/');

            if($save){
            $files = new Files();
            $files->path = $path;
            $files->type = 1;
            $files->table_name = '~';
            $files->obj_id =0;
            $files->save();
                $err = $files->getErrors();
            }
            $results = array('fileName'=>$path,'id' => $files->id,'err'=>$err);


        return $results;

    }




}