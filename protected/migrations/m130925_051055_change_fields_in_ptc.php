<?php

class m130925_051055_change_fields_in_ptc extends CDbMigration
{
	public function up()
	{
        $this->dropColumn('product_technical_characteristics','products_characteristics_id');
        $this->dropColumn('product_technical_characteristics','price');
        $this->addColumn('product_technical_characteristics','value','varchar(50)');
        $this->addColumn('product_technical_characteristics','order','int');

	}

	public function down()
	{
        $this->dropColumn('product_technical_characteristics','value');
        $this->dropColumn('product_technical_characteristics','order');
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