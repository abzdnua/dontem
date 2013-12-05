<?php

class m131203_152233_add_table_projects extends CDbMigration
{
	public function up()
	{
		$this->createTable('projects', array(
			'id'=>'pk',

			'title'      =>'varchar(250) NOT NULL',
			'sub_title'  =>'varchar(250) NOT NULL',
			'tes_id'     =>'tinyint(1) NOT NULL COMMENT "1 - Славянская,2 - Старобешевская,3 - Трипольская"',
			'short_des'  =>'text NOT NULL',
			'video_link' =>'varchar(250)',
			'file_id'    =>'int(11)',
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
		$this->dropTable('projects');
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
