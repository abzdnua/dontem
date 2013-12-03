<?php

class m130919_082834_add_column_to_files extends CDbMigration
{
	public function up()
	{
        $this->addColumn('files','used','tinyint DEFAULT 0');
	}

	public function down()
	{
        $this->dropColumn('files','used');
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