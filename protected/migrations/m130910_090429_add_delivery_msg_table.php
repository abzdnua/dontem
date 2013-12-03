<?php

class m130910_090429_add_delivery_msg_table extends CDbMigration
{
    public function up()
    {
        $this->createTable('delivery_msg',array(
            'id' => 'pk',
            'title' => 'varchar(200) NOT NULL',
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
        $this->dropTable('delivery_msg');
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