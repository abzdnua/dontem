<?php

/**
 * This is the model class for table "blocks".
 *
 * The followings are the available columns in table 'blocks':
 * @property integer $id
 * @property string $block_type
 * @property string $title
 * @property integer $order
 * @property string $parent_table
 * @property integer $parent_id
 * @property integer $create_user_id
 * @property string $create_time
 * @property integer $change_user_id
 * @property string $change_time
 * @property integer $delete_denied
 * @property integer $deleted
 */
class Blocks extends CActiveRecord
{
	/**
	 * @return string the associated database table name
	 */
	public function tableName()
	{
		return 'blocks';
	}

	/**
	 * @return array validation rules for model attributes.
	 */
	public function rules()
	{
		// NOTE: you should only define rules for those attributes that
		// will receive user inputs.
		return array(
			array('order, parent_id, create_user_id, change_user_id, delete_denied, deleted', 'numerical', 'integerOnly'=>true),
			array('block_type, parent_table', 'length', 'max'=>50),
			array('title', 'length', 'max'=>250),
			array('create_time, change_time', 'safe'),
			// The following rule is used by search().
			// @todo Please remove those attributes that should not be searched.
			array('id, block_type, title, order, parent_table, parent_id, create_user_id, create_time, change_user_id, change_time, delete_denied, deleted', 'safe', 'on'=>'search'),
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
		);
	}

	/**
	 * @return array customized attribute labels (name=>label)
	 */
	public function attributeLabels()
	{
		return array(
			'id' => 'ID',
			'block_type' => 'Block Type',
			'title' => 'Title',
			'order' => 'Order',
			'parent_table' => 'Parent Table',
			'parent_id' => 'Parent',
			'create_user_id' => 'Create User',
			'create_time' => 'Create Time',
			'change_user_id' => 'Change User',
			'change_time' => 'Change Time',
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
		$criteria->compare('block_type',$this->block_type,true);
		$criteria->compare('title',$this->title,true);
		$criteria->compare('order',$this->order);
		$criteria->compare('parent_table',$this->parent_table,true);
		$criteria->compare('parent_id',$this->parent_id);
		$criteria->compare('create_user_id',$this->create_user_id);
		$criteria->compare('create_time',$this->create_time,true);
		$criteria->compare('change_user_id',$this->change_user_id);
		$criteria->compare('change_time',$this->change_time,true);
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
	 * @return Blocks the static model class
	 */
	public static function model($className=__CLASS__)
	{
		return parent::model($className);
	}
}
