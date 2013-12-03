<?php

/**
 * This is the model class for table "manufactures".
 *
 * The followings are the available columns in table 'manufactures':
 * @property integer $id
 * @property string $name
 * @property integer $img_id
 * @property integer $create_user_id
 * @property string $create_date
 * @property integer $change_user_id
 * @property string $change_date
 * @property integer $delete_denied
 * @property integer $deleted
 *
 * The followings are the available model relations:
 * @property Colors[] $colors
 */
class BaseManufactures extends CActiveRecord
{

	/**
	 * @return string the associated database table name
	 */
	public function tableName()
	{
		return 'manufactures';
	}

	/**
	 * @return array validation rules for model attributes.
	 */
	public function rules()
	{
		// NOTE: you should only define rules for those attributes that
		// will receive user inputs.
		return array(
			array('name', 'required'),
			array('img_id, create_user_id, change_user_id, delete_denied, deleted', 'numerical', 'integerOnly'=>true),
			array('name', 'length', 'max'=>100),
            array('img_name','file'),
			array('create_date, change_date', 'safe'),
			// The following rule is used by search().
			// @todo Please remove those attributes that should not be searched.
			array('id, name, img_id, create_user_id, create_date, change_user_id, change_date', 'safe', 'on'=>'search'),
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
			'colors' => array(self::HAS_MANY, 'Colors', 'manufactures_id'),
		);
	}

	/**
	 * @return array customized attribute labels (name=>label)
	 */
	public function attributeLabels()
	{
		return array(
			'id' => 'ID',
			'name' => 'Name',
			'img_id' => 'Img',
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
		$criteria->compare('deleted',0);

		return new CActiveDataProvider($this, array(
			'criteria'=>$criteria,
		));
	}

	/**
	 * Returns the static model of the specified AR class.
	 * Please note that you should have this exact method in all your CActiveRecord descendants!
	 * @param string $className active record class name.
	 * @return BaseManufactures the static model class
	 */
	public static function model($className=__CLASS__)
	{
		return parent::model($className);
	}
}
