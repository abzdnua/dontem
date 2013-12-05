<?php

class m131203_154205_add_table_block_gallery extends CDbMigration
{
	public function up()
	{
		$this->createTable('block_gallery',array(
			'id'=>'pk',

			'block_id' =>'int(11)',
			'md5_name' =>'varchar(250)',

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
		$this->dropTable('block_gallery');
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
