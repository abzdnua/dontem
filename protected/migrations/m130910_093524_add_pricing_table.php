<?php

class m130910_093524_add_pricing_table extends CDbMigration
{
    public function up()
    {
        $this->createTable('pricing',array(
            'id' => 'pk',
            'price_type_id' => 'int NOT NULL',
            'product_id' => 'int NOT NULL',
            'products_characteristics_id' => 'int',
            'price' => 'int NOT NULL',
            'create_user_id' => 'int(2)',
            'create_date' => 'datetime',
            'change_user_id' => 'int(2)',
            'change_date' => 'datetime',
            'delete_denied' => 'tinyint',
            'deleted' => 'tinyint DEFAULT 0',
        ));

        $this->addForeignKey('price_type_id','pricing','price_type_id','price_type','id');
        $this->addForeignKey('products_characteristics_id','pricing','products_characteristics_id','products_characteristics','id');


    }

    public function down()
    {

        $this->dropForeignKey('price_type_id','pricing');
        $this->dropForeignKey('products_characteristics_id','pricing');
        $this->dropTable('pricing');
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