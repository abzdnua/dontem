<?

Class Manufactures extends BaseManufactures{


    public $img_name;
    public $file;

    public function attributeLabels(){
        return array(
            'name' => 'Название',
            'img_name' => 'Логотип',
        );
    }

    public function rules(){
        return array(
            array('img_name,name','required'),
            array('name', 'length', 'max'=>30),
            array('img_name', 'length', 'max'=>30),
            array('file','file','types'=>'png,gif,jpg','allowEmpty' => true),
        );
    }

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