<?php

class m131203_152308_add_table_news_tags extends CDbMigration
{
	public function up()
	{
		$this->createTable('news_and_tags', array(
			'id'=>'pk',

			'news_id' =>'int(11)',
			'tag_id'  =>'int(11)',
		
		));
	}

	public function down()
	{
		$this->dropTable('news_and_tags');
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
