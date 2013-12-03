<?php

class m130910_093412_add_price_type_table extends CDbMigration
{
    public function up()
    {
        $this->createTable('price_type',array(
            'id' => 'pk',
            'name' => 'varchar(30) NOT NULL',
            'min_value' => 'int',
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

        $this->dropTable('price_type');
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