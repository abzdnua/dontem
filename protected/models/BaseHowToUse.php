<?php

/**
 * This is the model class for table "how_to_use".
 *
 * The followings are the available columns in table 'how_to_use':
 * @property integer $id
 * @property integer $products_id
 * @property integer $position
 * @property string $content
 * @property integer $create_user_id
 * @property string $create_date
 * @property integer $change_user_id
 * @property string $change_date
 * @property integer $delete_denied
 * @property integer $deleted
 * @property integer $active_content
 *
 * The followings are the available model relations:
 * @property Products $products
 */
class BaseHowToUse extends CActiveRecord
{
	/**
	 * @return string the associated database table name
	 */
	public function tableName()
	{
		return 'how_to_use';
	}

	/**
	 * @return array validation rules for model attributes.
	 */
	public function rules()
	{
		// NOTE: you should only define rules for those attributes that
		// will receive user inputs.
		return array(
			array('products_id, position, content', 'required'),
			array('products_id, position, create_user_id, change_user_id, delete_denied, deleted, active_content', 'numerical', 'integerOnly'=>true),
			array('create_date, change_date', 'safe'),
            array('img_name', 'length', 'max'=>30),
            array('file','file','types'=>'png,gif,jpg','allowEmpty' => true),
			// The following rule is used by search().
			// @todo Please remove those attributes that should not be searched.
			array('id, products_id, position, content, create_user_id, create_date, change_user_id, change_date, delete_denied, deleted, active_content', 'safe', 'on'=>'search'),
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
			'products' => array(self::BELONGS_TO, 'Products', 'products_id'),
		);
	}

	/**
	 * @return array customized attribute labels (name=>label)
	 */
	public function attributeLabels()
	{
		return array(
			'id' => 'ID',
			'products_id' => 'Для какого товара применимо',
			'position' => 'Позиция по порядку',
			'content' => 'Текст',
            'activephoto' => 'Отображать картинку в этом блоке',
            'activevideo' => 'Отображать видео в этом блоке',
			'create_user_id' => 'Create User',
			'create_date' => 'Create Date',
			'change_user_id' => 'Change User',
			'change_date' => 'Change Date',
			'delete_denied' => 'Delete Denied',
			'deleted' => 'Deleted',
			'active_content' => 'Active Content',
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
		$criteria->compare('position',$this->position);
		$criteria->compare('content',$this->content,true);
		$criteria->compare('create_user_id',$this->create_user_id);
		$criteria->compare('create_date',$this->create_date,true);
		$criteria->compare('change_user_id',$this->change_user_id);
		$criteria->compare('change_date',$this->change_date,true);
		$criteria->compare('delete_denied',$this->delete_denied);
		$criteria->compare('deleted',$this->deleted);
		$criteria->compare('active_content',$this->active_content);

		return new CActiveDataProvider($this, array(
			'criteria'=>$criteria,
		));
	}

	/**
	 * Returns the static model of the specified AR class.
	 * Please note that you should have this exact method in all your CActiveRecord descendants!
	 * @param string $className active record class name.
	 * @return BaseHowToUse the static model class
	 */
	public static function model($className=__CLASS__)
	{
		return parent::model($className);
	}
}
