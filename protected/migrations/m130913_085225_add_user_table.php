<?php

class m130913_085225_add_user_table extends CDbMigration
{
    public function up()
    {
        $this->createTable('users',array(
            'id' => 'pk',
            'name' => 'varchar(50) NOT NULL',
            'login' => 'varchar(50) NOT NULL',
            'pass' => 'varchar(50) NOT NULL',
        ));
    }

    public function down()
    {
        $this->dropTable('users');
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