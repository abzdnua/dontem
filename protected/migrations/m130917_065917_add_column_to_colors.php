<?php

class m130917_065917_add_column_to_colors extends CDbMigration
{
	public function up()
	{
        $this->addColumn('colors','rgb','varchar(10) NOT NULL');
	}

	public function down()
	{
		$this->dropColumn('colors','rgb');
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