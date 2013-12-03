<?php

class m130911_074022_add_products_table extends CDbMigration
{
    public function up()
    {
        $this->createTable('products',array(
            'id' => 'pk',
            'name' => 'varchar(100) NOT NULL',
            'full_name' => 'varchar(200) NOT NULL',
            'parent_id' => 'int NOT NULL',
            'row' => 'int',
            'col' => 'int',
            'is_products' => 'tinyint',
            'stocks_id' => 'int',
            'units_id' => 'int',
            'first_description' => 'text',
            'second_description' => 'text',
            'delivery_msg_id' => 'int NOT NULL',
            'active' => 'tinyint',
            'is_new' => 'tinyint',
            'is_recomended' => 'tinyint',
            'is_show_in_main' => 'tinyint',
            'search_words' => 'varchar(300)',
            'manufactures_id' => 'int',
            'article' => 'varchar(50)',
            'create_user_id' => 'int(2)',
            'create_date' => 'datetime',
            'change_user_id' => 'int(2)',
            'change_date' => 'datetime',
            'delete_denied' => 'tinyint',
            'deleted' => 'tinyint DEFAULT 0',
        ));
        $this->addForeignKey('ch_products_id','products_characteristics','products_id','products','id');
        $this->addForeignKey('pricing_products_id','pricing','product_id','products','id');
        $this->addForeignKey('ptc_products_id','product_technical_characteristics','product_id','products','id');
        $this->addForeignKey('remains_products_id','remains','products_id','products','id');
        $this->addForeignKey('order_products_id','order_products','products_id','products','id');
        $this->addForeignKey('rec_products_id','recomended_products','products_id','products','id');
        $this->addForeignKey('rec_rec_products_id','recomended_products','recomended_products_id','products','id');
        $this->addForeignKey('rel_products_id','related_products','products_id','products','id');
        $this->addForeignKey('rel_rel_products_id','related_products','related_products_id','products','id');


    }

    public function down()
    {
        $this->dropForeignKey('ch_products_id','products_characteristics');
        $this->dropForeignKey('pricing_products_id','pricing');
        $this->dropForeignKey('ptc_products_id','product_technical_characteristics');
        $this->dropForeignKey('remains_products_id','remains');
        $this->dropForeignKey('order_products_id','order_products');
        $this->dropForeignKey('rec_products_id','recomended_products');
        $this->dropForeignKey('rec_rec_products_id','recomended_products');
        $this->dropForeignKey('rel_products_id','related_products');
        $this->dropForeignKey('rel_rel_products_id','related_products');

        $this->dropTable('products');
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