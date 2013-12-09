<?php

class m131206_082352_add_column_projects_name extends CDbMigration
{
	public function up()
	{
		$this->addColumn('projects','project_name','varchar(250)');
		$this->addColumn('projects','video_des','varchar(250)');
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
