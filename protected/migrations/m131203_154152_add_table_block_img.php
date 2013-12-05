<?php

class m131203_154152_add_table_block_img extends CDbMigration
{
	public function up()
	{
		$this->createTable('block_img',array(
			'id'=>'pk',

			'block_id' =>'int(11)',
			'img_type' =>'varchar(20)',
			'file_id'  =>'int(11)',

			'create_user_id' =>'int(11)',
			'create_time'    =>'datetime',
			'change_user_id' =>'int(11)',
			'change_time'    =>'datetime',
			'delete_denied'  =>'tinyint(1) DEFAULT 0',
			'deleted'        =>'tinyint(1) DEFAULT 0'
			));
	}

	public function down()
	{
		$this->dropTable('block_img');
	}

	/*
	// Use safeUp/safeDown to do migration with transaction
	public function safeUp()
	{
	}

	public function safeDown()
	{
	}
	*/
}
