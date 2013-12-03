<?php

class m130911_075602_add_construction_crew_table extends CDbMigration
{
    public function up()
    {
        $this->createTable('construction_crew',array(
            'id' => 'pk',
            'name' => 'varchar(50) NOT NULL',
            'content' => 'text NOT NULL',
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
        $this->dropTable('construction_crew');
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