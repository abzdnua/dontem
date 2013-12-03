<?php

/**
 * This is the model class for table "orders".
 *
 * The followings are the available columns in table 'orders':
 * @property integer $id
 * @property integer $client_id
 * @property integer $gen_id
 * @property integer $pay_type
 * @property integer $delivery_type
 * @property integer $create_user_id
 * @property string $create_date
 * @property integer $change_user_id
 * @property string $change_date
 * @property integer $delete_denied
 * @property integer $deleted
 *
 * The followings are the available model relations:
 * @property OrderProducts[] $orderProducts
 * @property Clients $client
 */
class BaseOrders extends CActiveRecord
{
	/**
	 * @return string the associated database table name
	 */
	public function tableName()
	{
		return 'orders';
	}

	/**
	 * @return array validation rules for model attributes.
	 */
	public function rules()
	{
		// NOTE: you should only define rules for those attributes that
		// will receive user inputs.
		return array(
			array('client_id, gen_id', 'required'),
			array('client_id, gen_id, pay_type, delivery_type, create_user_id, change_user_id, delete_denied, deleted', 'numerical', 'integerOnly'=>true),
			array('create_date, change_date', 'safe'),
			// The following rule is used by search().
			// @todo Please remove those attributes that should not be searched.
			array('id, client_id, gen_id, pay_type, delivery_type, create_user_id, create_date, change_user_id, change_date, delete_denied, deleted', 'safe', 'on'=>'search'),
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
			'orderProducts' => array(self::HAS_MANY, 'OrderProducts', 'order_id'),
			'client' => array(self::BELONGS_TO, 'Clients', 'client_id'),
		);
	}

	/**
	 * @return array customized attribute labels (name=>label)
	 */
	public function attributeLabels()
	{
		return array(
			'id' => 'ID',
			'client_id' => 'Client',
			'gen_id' => 'Gen',
			'pay_type' => 'Pay Type',
			'delivery_type' => 'Delivery Type',
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
		$criteria->compare('client_id',$this->client_id);
		$criteria->compare('gen_id',$this->gen_id);
		$criteria->compare('pay_type',$this->pay_type);
		$criteria->compare('delivery_type',$this->delivery_type);
		$criteria->compare('create_user_id',$this->create_user_id);
		$criteria->compare('create_date',$this->create_date,true);
		$criteria->compare('change_user_id',$this->change_user_id);
		$criteria->compare('change_date',$this->change_date,true);
		$criteria->compare('delete_denied',$this->delete_denied);
		$criteria->compare('deleted',$this->deleted);

		return new CActiveDataProvider($this, array(
			'criteria'=>$criteria,
		));
	}

	/**
	 * Returns the static model of the specified AR class.
	 * Please note that you should have this exact method in all your CActiveRecord descendants!
	 * @param string $className active record class name.
	 * @return BaseOrders the static model class
	 */
	public static function model($className=__CLASS__)
	{
		return parent::model($className);
	}
}
