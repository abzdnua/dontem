<?php

class m131209_065700_add_column_projects_main extends CDbMigration
{
	public function up()
	{
		$this->addColumn('projects','show_on_main','tinyint(1) DEFAULT 0');
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
