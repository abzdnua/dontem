<?php

/**
 * This is the model class for table "products_characteristics".
 *
 * The followings are the available columns in table 'products_characteristics':
 * @property integer $id
 * @property integer $products_id
 * @property integer $property_values_id
 * @property integer $color_id
 * @property string $article
 * @property integer $create_user_id
 * @property string $create_date
 * @property integer $change_user_id
 * @property string $change_date
 * @property integer $delete_denied
 * @property integer $deleted
 *
 * The followings are the available model relations:
 * @property Pricing[] $pricings
 * @property Products $products
 * @property Colors $color
 * @property PropertyValues $propertyValues
 */
class BaseProductsCharacteristics extends CActiveRecord
{
	/**
	 * @return string the associated database table name
	 */
	public function tableName()
	{
		return 'products_characteristics';
	}

	/**
	 * @return array validation rules for model attributes.
	 */
	public function rules()
	{
		// NOTE: you should only define rules for those attributes that
		// will receive user inputs.
		return array(
			array('products_id, property_values_id', 'required'),
			array('products_id, property_values_id, color_id, create_user_id, change_user_id, delete_denied, deleted', 'numerical', 'integerOnly'=>true),
			array('article', 'length', 'max'=>30),
			array('create_date, change_date', 'safe'),
			// The following rule is used by search().
			// @todo Please remove those attributes that should not be searched.
			array('id, products_id, property_values_id, color_id, article, create_user_id, create_date, change_user_id, change_date, delete_denied, deleted', 'safe', 'on'=>'search'),
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
			'pricings' => array(self::HAS_MANY, 'Pricing', 'products_characteristics_id'),
			'products' => array(self::BELONGS_TO, 'Products', 'products_id'),
			'color' => array(self::BELONGS_TO, 'Colors', 'color_id'),
			'propertyValues' => array(self::BELONGS_TO, 'PropertyValues', 'property_values_id'),
		);
	}

	/**
	 * @return array customized attribute labels (name=>label)
	 */
	public function attributeLabels()
	{
		return array(
			'id' => 'ID',
			'products_id' => 'Products',
			'property_values_id' => 'Property Values',
			'color_id' => 'Color',
			'article' => 'Article',
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
		$criteria->compare('products_id',$this->products_id);
		$criteria->compare('property_values_id',$this->property_values_id);
		$criteria->compare('color_id',$this->color_id);
		$criteria->compare('article',$this->article,true);
		$criteria->compare('create_user_id',$this->create_user_id);
		$criteria->compare('create_date',$this->create_date,true);
		$criteria->compare('change_user_id',$this->change_user_id);
		$criteria->compare('change_date',$this->change_date,true);
		$criteria->compare('delete_denied',$this->delete_denied);
		$criteria->compare('deleted',0);

		return new CActiveDataProvider($this, array(
			'criteria'=>$criteria,
		));
	}

	/**
	 * Returns the static model of the specified AR class.
	 * Please note that you should have this exact method in all your CActiveRecord descendants!
	 * @param string $className active record class name.
	 * @return BaseProductsCharacteristics the static model class
	 */
	public static function model($className=__CLASS__)
	{
		return parent::model($className);
	}
}
