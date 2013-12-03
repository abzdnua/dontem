<?php

class m130911_071021_add_remains_table extends CDbMigration
{
    public function up()
    {
        $this->createTable('remains',array(
            'id' => 'pk',
            'title' => 'varchar(50) NOT NULL',
            'products_id' => 'int NOT NULL',
            'products_characteristics_id' => 'int',
            'create_user_id' => 'int(2)',
            'create_date' => 'datetime',
            'change_user_id' => 'int(2)',
            'change_date' => 'datetime',
            'delete_denied' => 'tinyint',
            'deleted' => 'tinyint DEFAULT 0',
        ));

    }

    public function down()
    {
        $this->dropTable('remains');
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