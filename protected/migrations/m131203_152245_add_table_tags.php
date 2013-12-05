<?php

class m131203_152245_add_table_tags extends CDbMigration
{
	public function up()
	{
		$this->createTable('tags', array(
			'id'=>'pk',

			'tag'      =>'varchar(250) NOT NULL',			

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
		$this->dropTable('tags');
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
