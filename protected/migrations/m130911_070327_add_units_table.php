<?php

class m130911_070327_add_units_table extends CDbMigration
{
    public function up()
    {
        $this->createTable('units',array(
            'id' => 'pk',
            'name' => 'varchar(50) NOT NULL',
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
        $this->dropTable('units');
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