<?

Class Files extends BaseFiles{

//function beforeValidate(){
//    $this->addError('path',CVarDumper::dump($this));
//}

    function beforeSave(){
        if($this->isNewRecord){
            $this->create_time = date('Y-m-d H:i:s');
            $this->create_user_id = Yii::app()->user->getId();

        }else{
            $this->change_time = date('Y-m-d H:i:s');
            $this->change_user_id = Yii::app()->user->getId();
        }
        return parent::beforeSave();

    }

    public static function model($className=__CLASS__)
    {
        return parent::model($className);
    }
}
