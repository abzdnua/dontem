<?php

class m131203_155349_add_table_users extends CDbMigration
{
	public function up()
	{
		$this->createTable('users',array(
			'id'=>'pk',
			'name'=>'varchar(250)',
			'login'=>'varchar(250)',
			'password'=>'varchar(250)'
			));
	}

	public function down()
	{
		$this->dropTable('users');
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
