<?php

class m130925_053037_add_field_in_how_to_use extends CDbMigration
{
	public function up()
	{
        $this->addColumn('how_to_use','active_content','int DEFAULT 0');

	}

	public function down()
	{
        $this->dropColumn('how_to_use','active_content');
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