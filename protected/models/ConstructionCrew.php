<?


Class ConstructionCrew extends BaseConstructionCrew{

    public $img_main;
    public $file_gal_id = array();

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

    public function rules()
    {
        // NOTE: you should only define rules for those attributes that
        // will receive user inputs.
        return array(
            array('name, img_main, content, file_gal_id', 'required'),
            array('create_user_id, change_user_id, delete_denied, deleted', 'numerical', 'integerOnly'=>true),
            array('create_date, change_date', 'safe'),

            // The following rule is used by search().
            // @todo Please remove those attributes that should not be searched.
            //array('id, name, begin_date, end_date, link, target, description, priority, active, back_color, create_user_id, create_date, change_user_id, change_date, delete_denied, deleted', 'safe', 'on'=>'search'),
        );
    }

    public function attributeLabels()
    {
        return array(
            'id' => 'ID',
            'name' => 'Наименование',
            'content' => 'Описание',
            'img_main' => 'Фотография',
            'file_gal_id'  => 'Фото: "Наши работы"',
            /*'create_user_id' => 'Create User',
            'create_date' => 'Create Date',
            'change_user_id' => 'Change User',
            'change_date' => 'Change Date',
            'delete_denied' => 'Delete Denied',
            'deleted' => 'Deleted',*/
        );
    }


}