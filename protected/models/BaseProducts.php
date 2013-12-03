<?php

/**
 * This is the model class for table "products".
 *
 * The followings are the available columns in table 'products':
 * @property integer $id
 * @property string $name
 * @property string $full_name
 * @property integer $parent_id
 * @property integer $row
 * @property integer $col
 * @property integer $is_products
 * @property integer $stocks_id
 * @property integer $units_id
 * @property string $first_description
 * @property string $second_description
 * @property integer $delivery_msg_id
 * @property integer $active
 * @property integer $is_new
 * @property integer $is_recomended
 * @property integer $is_show_in_main
 * @property string $search_words
 * @property integer $manufactures_id
 * @property string $article
 * @property integer $create_user_id
 * @property string $create_date
 * @property integer $change_user_id
 * @property string $change_date
 * @property integer $delete_denied
 * @property integer $deleted
 *
 * The followings are the available model relations:
 * @property HowToUse[] $howToUses
 * @property OrderProducts[] $orderProducts
 * @property Pricing[] $pricings
 * @property ProductTechnicalCharacteristics[] $productTechnicalCharacteristics
 * @property ProductsCharacteristics[] $productsCharacteristics
 * @property RecomendedProducts[] $recomendedProducts
 * @property RecomendedProducts[] $recomendedProducts1
 * @property RelatedProducts[] $relatedProducts
 * @property RelatedProducts[] $relatedProducts1
 * @property Remains[] $remains
 */
class BaseProducts extends CActiveRecord
{
	/**
	 * @return string the associated database table name
	 */
	public function tableName()
	{
		return 'products';
	}

	/**
	 * @return array validation rules for model attributes.
	 */
	public function rules()
	{
		// NOTE: you should only define rules for those attributes that
		// will receive user inputs.
		return array(
			array('name, full_name, parent_id, delivery_msg_id', 'required'),
			array('parent_id, row, col, is_products, stocks_id, units_id, delivery_msg_id, active, is_new, is_recomended, is_show_in_main, manufactures_id, create_user_id, change_user_id, delete_denied, deleted', 'numerical', 'integerOnly'=>true),
			array('name', 'length', 'max'=>100),
			array('full_name', 'length', 'max'=>200),
			array('search_words', 'length', 'max'=>300),
			array('article', 'length', 'max'=>50),
			array('first_description, second_description, create_date, change_date', 'safe'),
			// The following rule is used by search().
			// @todo Please remove those attributes that should not be searched.
			array('id, name, full_name, parent_id, row, col, is_products, stocks_id, units_id, first_description, second_description, delivery_msg_id, active, is_new, is_recomended, is_show_in_main, search_words, manufactures_id, article, create_user_id, create_date, change_user_id, change_date, delete_denied, deleted', 'safe', 'on'=>'search'),
		);
	}

	/**
	 * @return array relational rules.
	 */
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
		);
	}

	/**
	 * @return array customized attribute labels (name=>label)
	 */
	public function attributeLabels()
	{
		return array(
			'id' => 'ID',
			'name' => 'Название',
			'full_name' => 'Полное название',
			'parent_id' => 'Родительская категория',
			'row' => 'Строка',
			'col' => 'Столбец',
			'is_products' => 'Продукт?',
			'stocks_id' => 'Акция',
			'units_id' => 'Ед. измерения',
			'first_description' => 'Первый блок описания',
			'second_description' => 'Второй блок описания',
			'delivery_msg_id' => 'Сообщение о доставке',
			'active' => 'Отображать на сайте?',
			'is_new' => 'Новинка?',
			'is_recomended' => 'Рекомендованный?',
			'is_show_in_main' => 'Отображать на главной?',
			'search_words' => 'Поисковые слова',
			'manufactures_id' => 'Производитель',
			'article' => 'Артикул',
			'create_user_id' => 'Create User',
			'create_date' => 'Create Date',
			'change_user_id' => 'Change User',
			'change_date' => 'Change Date',
			'delete_denied' => 'Delete Denied',
			'deleted' => 'Deleted',
		);
	}

	/**
	 * Retrieves a list of models based on the current search/filter conditions.
	 *
	 * Typical usecase:
	 * - Initialize the model fields with values from filter form.
	 * - Execute this method to get CActiveDataProvider instance which will filter
	 * models according to data in model fields.
	 * - Pass data provider to CGridView, CListView or any similar widget.
	 *
	 * @return CActiveDataProvider the data provider that can return the models
	 * based on the search/filter conditions.
	 */
	public function search()
	{
		// @todo Please modify the following code to remove attributes that should not be searched.

		$criteria=new CDbCriteria;

		$criteria->compare('id',$this->id);
		$criteria->compare('name',$this->name,true);
		$criteria->compare('full_name',$this->full_name,true);
		$criteria->compare('parent_id',$this->parent_id);
		$criteria->compare('row',$this->row);
		$criteria->compare('col',$this->col);
		$criteria->compare('is_products',$this->is_products);
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
		$criteria->compare('create_user_id',$this->create_user_id);
		$criteria->compare('create_date',$this->create_date,true);
		$criteria->compare('change_user_id',$this->change_user_id);
		$criteria->compare('change_date',$this->change_date,true);
		$criteria->compare('delete_denied',$this->delete_denied);
		$criteria->compare('deleted',0);

		return new CActiveDataProvider($this, array(
			'criteria'=>$criteria,
            'pagination' => array(
                'pageSize' =>20,
            ),
		));
	}

	/**
	 * Returns the static model of the specified AR class.
	 * Please note that you should have this exact method in all your CActiveRecord descendants!
	 * @param string $className active record class name.
	 * @return BaseProducts the static model class
	 */
	public static function model($className=__CLASS__)
	{
		return parent::model($className);
	}
}
