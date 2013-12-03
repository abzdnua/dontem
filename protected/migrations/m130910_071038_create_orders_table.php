<?php

class m130910_071038_create_orders_table extends CDbMigration
{
    public function up()
    {
        $this->createTable('orders',array(
            'id' => 'pk',
            'client_id' => 'int NOT NULL',
            'gen_id' => 'int(15) NOT NULL',
            'pay_type' => 'int',
            'delivery_type' => 'int',
            'create_user_id' => 'int',
            'create_date' => 'datetime',
            'change_user_id' => 'int',
            'change_date' => 'datetime',
            'delete_denied' => 'tinyint(1)',
            'deleted' => 'tinyint(1) DEFAULT 0',
        ));
    }

    public function down()
    {
        $this->dropTable('orders');
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