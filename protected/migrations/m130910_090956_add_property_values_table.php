<?php

class m130910_090956_add_property_values_table extends CDbMigration
{
    public function up()
    {
        $this->createTable('property_values',array(
            'id' => 'pk',
            'property_id' => 'int NOT NULL',
            'values' => 'varchar(100) NOT NULL',
            'create_user_id' => 'int(2)',
            'create_date' => 'datetime',
            'change_user_id' => 'int(2)',
            'change_date' => 'datetime',
            'delete_denied' => 'tinyint',
            'deleted' => 'tinyint DEFAULT 0',
        ));
        $this->addForeignKey('property_id','property_values','property_id','properties','id');
    }

    public function down()
    {
        $this->dropForeignKey('property_id','property_values');
        $this->dropTable('property_values');
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