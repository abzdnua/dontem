<?


class Stocks extends BaseStocks{
    public $img_main;
    public $img_back;


    function beforeSave(){
        if($this->isNewRecord){
            $this->create_date = date('Y-m-d H:i:s');
            $this->create_user_id = Yii::app()->user->getId();

        }else{
            $this->change_date = date('Y-m-d H:i:s');
            $this->change_user_id = Yii::app()->user->getId();
        }
        $this->begin_date = date('Y-m-d',strtotime($this->begin_date));
        $this->end_date = ($this->end_date)?date('Y-m-d',strtotime($this->end_date)):'';
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
            array('name, begin_date, img_main', 'required'),
            array('target, priority, active, create_user_id, change_user_id, delete_denied, deleted', 'numerical', 'integerOnly'=>true),
            array('name', 'length', 'max'=>100),
            array('link', 'length', 'max'=>50),
            array('back_color', 'length', 'max'=>10),
            array('end_date, description, create_date, change_date', 'safe'),

            // The following rule is used by search().
            // @todo Please remove those attributes that should not be searched.
            array('id, name, begin_date, end_date, link, target, description, priority, active, back_color, create_user_id, create_date, change_user_id, change_date, delete_denied, deleted', 'safe', 'on'=>'search'),
        );
    }

    public function attributeLabels()
    {
        return array(
            'id' => 'ID',
            'name' => 'Название',
            'begin_date' => 'Дата начала',
            'end_date' => 'Дата окончания',
            'link' => 'Ссылка',
            'target' => 'В новой вкладке? ',
            'description' => 'Текст акции',
            'priority' => 'Приоритет',
            'active' => 'Отображать на сайте?',
            'img_main' => 'Банер',
            'img_back' => 'Фоновое изображение',
            'back_color' => 'Цвет фона',
            'create_user_id' => 'Create User',
            'create_date' => 'Create Date',
            'change_user_id' => 'Change User',
            'change_date' => 'Change Date',
            'delete_denied' => 'Delete Denied',
            'deleted' => 'Deleted',
        );
    }


}