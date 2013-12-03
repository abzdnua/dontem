<?php

class m130910_045859_create_clients_table extends CDbMigration
{
	public function up()
	{
        $this->createTable('clients',array(
           'id' => 'pk',
           'name' => 'varchar(100) NOT NULL',
           'phone' => 'varchar(15) NOT NULL',
           'email' => 'varchar(100)',
           'address' => 'varchar(200)',
           'create_user_id' => 'int(2)',
           'create_date' => 'datetime',
           'change_user_id' => 'int(2)',
           'change_date' => 'datetime',
           'delete_denied' => 'int(1)',
           'deleted' => 'int(1) DEFAULT 0',
        ));
	}

	public function down()
	{
		$this->dropTable('clients');
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