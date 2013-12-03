<?php

class m130910_105540_add_product_tehnical_characteristics_table extends CDbMigration
{
    public function up()
    {
        $this->createTable('product_technical_characteristics',array(
            'id' => 'pk',
            'name' => 'varchar(50) NOT NULL',
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

    }

    public function down()
    {

      $this->dropTable('product_technical_characteristics');
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