<?php

class m130911_072831_add_stocks_table extends CDbMigration
{
    public function up()
    {
        $this->createTable('stocks',array(
            'id' => 'pk',
            'name' => 'varchar(100) NOT NULL',
            'begin_date' => 'date NOT NULL',
            'end_date' => 'date',
            'link' => 'varchar(50)',
            'target' => 'int COMMENT "1-в новом окне, 2-в этом окне"',
            'description' => 'text',
            'priority' => 'int',
            'active' => 'int',
            'back_color' => 'varchar(6)',
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
        $this->dropTable('stocks');
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