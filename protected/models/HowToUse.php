<?

Class HowToUse extends BaseHowToUse{

    public $img_name;
    public $file;
    public $video_name;
    public $video;
    public $activephoto;
    public $activevideo;
    function beforeSave(){
        if($this->isNewRecord){
            $this->create_date = date('Y-m-d H:i:s');
            $this->create_user_id = Yii::app()->user->getId();

        }else{
            $this->change_date = date('Y-m-d H:i:s');
            $this->change_user_id = Yii::app()->user->getId();
        }
        return parent::beforeSave();

    }

    public static function model($className=__CLASS__)
    {
        return parent::model($className);
    }


}