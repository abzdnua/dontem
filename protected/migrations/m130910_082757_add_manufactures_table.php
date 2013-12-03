<?php

class m130910_082757_add_manufactures_table extends CDbMigration
{
    public function up()
    {
        $this->createTable('manufactures',array(
            'id' => 'pk',
            'name' => 'varchar(100) NOT NULL',
            'img_id' => 'int',
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
        $this->dropTable('manufactures');
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