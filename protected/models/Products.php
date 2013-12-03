<?

class Products extends BaseProducts{

    public $parent_parent_id;
    public $templates;
    function beforeSave(){
        if($this->isNewRecord){
            $this->create_date = date('Y-m-d H:i:s');
            $this->create_user_id = Yii::app()->user->getId();

        }else{
            $this->change_date = date('Y-m-d H:i:s');
            $this->change_user_id = Yii::app()->user->getId();
        }
        $this->is_products = 1;
        return parent::beforeSave();

    }

    public static function model($className=__CLASS__)
    {
        return parent::model($className);
    }

    public function attributeLabels()
    {
        return array(
            'id' => 'ID',
            'name' => 'Название',
            'full_name' => 'Полное название',
            'parent_parent_id' => 'Родительская категория',
            'parent_id' => 'Родительская подкатегория',
            'row' => 'Строка',
            'col' => 'Столбец',
            'is_products' => 'Продукт?',
            'stocks_id' => 'Акция',
            'units_id' => 'Ед. измерения',
            'first_description' => 'Первое описание',
            'second_description' => 'Второе описание',
            'delivery_msg_id' => 'Сообщение о доставке',
            'active' => 'Отображать на сайте?',
            'is_new' => 'Новинка?',
            'is_recomended' => 'Рекомендованный?',
            'is_show_in_main' => 'Отображать на главной?',
            'search_words' => 'Поисковые слова',
            'manufactures_id' => 'Производитель',
            'article' => 'Артикул',
            'templates' => 'Шаблон характеристик',
            'create_user_id' => 'Create User',
            'create_date' => 'Create Date',
            'change_user_id' => 'Change User',
            'change_date' => 'Change Date',
            'delete_denied' => 'Delete Denied',
            'deleted' => 'Deleted',
        );
    }


    public function search()
    {
        // @todo Please modify the following code to remove attributes that should not be searched.

        $criteria=new CDbCriteria;


        $criteria->compare('id',$this->id);
        $criteria->compare('name',$this->name,true);
        $criteria->compare('full_name',$this->full_name,true);
        $criteria->compare('parent_id',$this->parent_id);
        //$criteria->compare('parent_parent_id',Categories::model()->findByPk($this->parent_id)->parent_id);
        $criteria->compare('is_products',1);
        $criteria->compare('stocks_id',$this->stocks_id);
        $criteria->compare('units_id',$this->units_id);
        $criteria->compare('first_description',$this->first_description,true);
        $criteria->compare('second_description',$this->second_description,true);
        $criteria->compare('delivery_msg_id',$this->delivery_msg_id);
        $criteria->compare('active',$this->active);
        $criteria->compare('is_new',$this->is_new);
        $criteria->compare('is_recomended',$this->is_recomended);
        $criteria->compare('is_show_in_main',$this->is_show_in_main);
        $criteria->compare('search_words',$this->search_words,true);
        $criteria->compare('manufactures_id',$this->manufactures_id);
        $criteria->compare('article',$this->article,true);
        $criteria->compare('deleted',0);

        return new CActiveDataProvider($this, array(
            'criteria'=>$criteria,
            'pagination' => array(
                'pageSize' =>20,
            ),
        ));
    }

    public function relations()
    {
        // NOTE: you may need to adjust the relation name and the related
        // class name for the relations automatically generated below.
        return array(
            'howToUses' => array(self::HAS_MANY, 'HowToUse', 'products_id'),
            'orderProducts' => array(self::HAS_MANY, 'OrderProducts', 'products_id'),
            'pricings' => array(self::HAS_MANY, 'Pricing', 'product_id'),
            'productTechnicalCharacteristics' => array(self::HAS_MANY, 'ProductTechnicalCharacteristics', 'product_id'),
            'productsCharacteristics' => array(self::HAS_MANY, 'ProductsCharacteristics', 'products_id'),
            'recomendedProducts' => array(self::HAS_MANY, 'RecomendedProducts', 'products_id'),
            'recomendedProducts1' => array(self::HAS_MANY, 'RecomendedProducts', 'recomended_products_id'),
            'relatedProducts' => array(self::HAS_MANY, 'RelatedProducts', 'products_id'),
            'relatedProducts1' => array(self::HAS_MANY, 'RelatedProducts', 'related_products_id'),
            'remains' => array(self::HAS_MANY, 'Remains', 'products_id'),
            'categories' => array(self::BELONGS_TO,'Categories','parent_id'),
            'parent_category' => array(self::BELONGS_TO,'Categories','parent_parent_id')
        );
    }

    public function searchForGrid(){
        // @todo Please modify the following code to remove attributes that should not be searched.

        $criteria=new CDbCriteria;


        $criteria->join = ', products as p2';
        $criteria->select = 't.*, p2.parent_id as parent_parent_id';
        $criteria->condition = 'p2.id = t.parent_id';
        //print_r($criteria);
        //return true;

        $criteria->compare('t.id',$this->id);
        $criteria->compare('t.name',$this->name,true);
        $criteria->compare('t.full_name',$this->full_name,true);
        $criteria->compare('t.parent_id',$this->parent_id);
        $criteria->compare('p2.parent_id', $this->parent_parent_id);
        //$criteria->compare('parent_parent_id',Categories::model()->findByPk($this->parent_id)->parent_id);
        $criteria->compare('t.is_products',1);
        $criteria->compare('stocks_id',$this->stocks_id);
        $criteria->compare('units_id',$this->units_id);
        $criteria->compare('first_description',$this->first_description,true);
        $criteria->compare('second_description',$this->second_description,true);
        $criteria->compare('delivery_msg_id',$this->delivery_msg_id);
        $criteria->compare('active',$this->active);
        $criteria->compare('is_new',$this->is_new);
        $criteria->compare('is_recomended',$this->is_recomended);
        $criteria->compare('is_show_in_main',$this->is_show_in_main);
        $criteria->compare('search_words',$this->search_words,true);
        $criteria->compare('manufactures_id',$this->manufactures_id);
        $criteria->compare('article',$this->article,true);
        $criteria->compare('t.deleted',0);


        return new CActiveDataProvider($this, array(
            'criteria'=>$criteria,
            'pagination' => array(
                'pageSize' =>20,
            ),
        ));
    }
}