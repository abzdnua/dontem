<?php

class m130911_071732_add_order_products_table extends CDbMigration
{
    public function up()
    {
        $this->createTable('order_products',array(
            'id' => 'pk',
            'products_id' => 'int NOT NULL',
            'products_characteristics_id' => 'int',
            'num' => 'int NOT NULL',
            'price' => 'int NOT NULL',
            'order_id' => 'int NOT NULL',
            'create_user_id' => 'int(2)',
            'create_date' => 'datetime',
            'change_user_id' => 'int(2)',
            'change_date' => 'datetime',
            'delete_denied' => 'tinyint',
            'deleted' => 'tinyint DEFAULT 0',
        ));
        $this->addForeignKey('order_id','order_products','order_id','orders','id');

    }

    public function down()
    {
        $this->dropForeignKey('order_id','order_products');
        $this->dropTable('order_products');
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