<?php

class m130911_072621_add_related_products_table extends CDbMigration
{
    public function up()
    {
        $this->createTable('related_products',array(
            'id' => 'pk',
            'products_id' => 'int NOT NULL',
            'related_products_id' => 'int NOT NULL',
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
        $this->dropTable('related_products');
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