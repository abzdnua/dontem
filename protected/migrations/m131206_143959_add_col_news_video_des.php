<?php

class m131206_143959_add_col_news_video_des extends CDbMigration
{
	public function up()
	{
		$this->addColumn('news','video_des','varchar(250)');
	}

	public function down()
	{
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
