<?php

class m130910_081735_add_fk_to_orders extends CDbMigration
{
	public function up()
	{
        $this->addForeignKey('client_id','orders','client_id','clients','id');
	}

	public function down()
	{
        $this->dropForeignKey('client_id','orders');
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