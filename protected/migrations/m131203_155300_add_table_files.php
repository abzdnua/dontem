<?php

class m131203_155300_add_table_files extends CDbMigration
{
	public function up()
	{
		$this->createTable('files',array(
			'id'=>'pk',

			'file_path' =>'varchar(50)',
			'used'      =>'tinyint(1)',

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
		$this->dropTable('files');
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
