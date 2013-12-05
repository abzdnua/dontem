<?php

class m131203_152224_add_table_news extends CDbMigration
{
	public function up()
	{
		$this->createTable('news', array(
			'id'=>'pk',

			'title'      =>'varchar(250) NOT NULL',
			'work_type'  =>'varchar(250) NOT NULL',
			'difficulty' =>'tinyint(1) NOT NULL',
			'short_des'  =>'text NOT NULL',
			'video_link' =>'varchar(250)',
			'file_id'    =>'int(11)',
			'news_date'  =>'date NOT NULL',
			'image_id'   =>'int(11) NOT NULL',
			'is_active'  =>'tinyint(1) DEFAULT 0',

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
		$this->dropTable('news');
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
