<?php

class m130910_092744_add_products_characteristics_table extends CDbMigration
{
    public function up()
    {
        $this->createTable('products_characteristics',array(
            'id' => 'pk',
            'products_id' => 'int NOT NULL',
            'property_values_id' => 'int NOT NULL',
            'color_id' => 'int',
            'article' => 'varchar(30)',
            'create_user_id' => 'int(2)',
            'create_date' => 'datetime',
            'change_user_id' => 'int(2)',
            'change_date' => 'datetime',
            'delete_denied' => 'tinyint',
            'deleted' => 'tinyint DEFAULT 0',
        ));

        $this->addForeignKey('pc_property_values_id','products_characteristics','property_values_id','property_values','id');
        $this->addForeignKey('color_id','products_characteristics','color_id','colors','id');


    }

    public function down()
    {

        $this->dropForeignKey('pc_property_values_id','products_characteristics');
        $this->dropForeignKey('color_id','products_characteristics');
        $this->dropTable('products_characteristics');
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