<?php

class m131203_154137_add_table_blocks extends CDbMigration
{
	public function up()
	{
		$this->createTable('blocks',array(
			'id'=>'pk',
			
			'block_type'   =>'varchar(50)',
			'title'        =>'varchar(250)',
			'order'        =>'int(11)',
			'parent_table' =>'varchar(50)',
			'parent_id'    =>'int(11)',

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
		$this->dropTable('blocks');
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
