<?php

class m130911_075439_add_how_to_use_table extends CDbMigration
{
    public function up()
    {
        $this->createTable('how_to_use',array(
            'id' => 'pk',
            'products_id' => 'int NOT NULL',
            'position' => 'int NOT NULL',
            'content' => 'text NOT NULL',
            'create_user_id' => 'int(2)',
            'create_date' => 'datetime',
            'change_user_id' => 'int(2)',
            'change_date' => 'datetime',
            'delete_denied' => 'tinyint',
            'deleted' => 'tinyint DEFAULT 0',
        ));
        $this->addForeignKey('use_products_id','how_to_use','products_id','products','id');

    }

    public function down()
    {
        $this->dropForeignKey('use_products_id','how_to_use');
        $this->dropTable('how_to_use');
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