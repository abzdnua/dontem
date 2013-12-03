<?


class Categories extends BaseProducts{



    function beforeSave(){
        if($this->isNewRecord){
            $this->create_date = date('Y-m-d H:i:s');
            $this->create_user_id = Yii::app()->user->getId();

        }else{
            $this->change_date = date('Y-m-d H:i:s');
            $this->change_user_id = Yii::app()->user->getId();
        }
        $this->is_products = 0;
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
            array('name, parent_id', 'required'),
            array('parent_id, row, col,  create_user_id, change_user_id, delete_denied, deleted', 'numerical', 'integerOnly'=>true),
            array('name', 'length', 'max'=>100),
            array('full_name', 'length', 'max'=>200),
            // The following rule is used by search().

            array('id, name', 'safe', 'on'=>'search'),
        );
    }

    function beforeValidate(){
        $this->parent_id = ($this->parent_id)?$this->parent_id:0;
        return true;
    }

    public function attributeLabels()
    {
        return array(
            'id' => 'ID',
            'name' => 'Название',
            'full_name' => 'Поисковое название',
            'parent_id' => 'Родительская категория',
            'row' => 'Строка',
            'col' => 'Столбец',

        );
    }

    public function search()
    {
        // @todo Please modify the following code to remove attributes that should not be searched.

        $criteria=new CDbCriteria;

        $criteria->compare('id',$this->id);
        $criteria->compare('name',$this->name,true);
        $criteria->compare('parent_id',$this->parent_id);
        $criteria->compare('row',$this->row);
        $criteria->compare('col',$this->col);
        $criteria->compare('is_products',0);
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
            'products' => array(self::HAS_MANY,'Products','parent_id'),            
        );
    }

}