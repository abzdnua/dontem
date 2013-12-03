<?php

class m130910_091300_add_composition_characteristics_table extends CDbMigration
{
    public function up()
    {
        $this->createTable('composition_characteristics',array(
            'id' => 'pk',
            'properties_id' => 'int NOT NULL',
            'property_values_id' => 'int NOT NULL',
            'characteristics_id' => 'int NOT NULL',
            'create_user_id' => 'int(2)',
            'create_date' => 'datetime',
            'change_user_id' => 'int(2)',
            'change_date' => 'datetime',
            'delete_denied' => 'tinyint',
            'deleted' => 'tinyint DEFAULT 0',
        ));
        $this->addForeignKey('properties_id','composition_characteristics','properties_id','properties','id');
        $this->addForeignKey('property_values_id','composition_characteristics','property_values_id','property_values','id');


    }

    public function down()
    {
        $this->dropForeignKey('properties_id','composition_characteristics');
        $this->dropForeignKey('property_values_id','composition_characteristics');
        $this->dropTable('composition_characteristics');
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