<?php

class m130911_065241_add_technical_characteristics_names_table extends CDbMigration
{
    public function up()
    {
        $this->createTable('technical_characteristics_names',array(
            'id' => 'pk',
            'name' => 'varchar(50) NOT NULL',
            'technical_characteristics_template_id' => 'int NOT NULL',
            'create_user_id' => 'int(2)',
            'create_date' => 'datetime',
            'change_user_id' => 'int(2)',
            'change_date' => 'datetime',
            'delete_denied' => 'tinyint',
            'deleted' => 'tinyint DEFAULT 0',
        ));
        $this->addForeignKey('technical_characteristics_template_id','technical_characteristics_names','technical_characteristics_template_id','technical_characteristics_template','id');
    }

    public function down()
    {
        $this->dropForeignKey('technical_characteristics_template_id','technical_characteristics_names');
        $this->dropTable('technical_characteristics_names');
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