<?php

class m130910_083910_add_colors_table extends CDbMigration
{
    public function up()
    {
        $this->createTable('colors',array(
            'id' => 'pk',
            'name' => 'varchar(50) NOT NULL',
            'manufactures_id' => 'int',
            'create_user_id' => 'int(2)',
            'create_date' => 'datetime',
            'change_user_id' => 'int(2)',
            'change_date' => 'datetime',
            'delete_denied' => 'tinyint',
            'deleted' => 'tinyint DEFAULT 0',
        ));
        $this->addForeignKey('manufacture_id','colors','manufactures_id','manufactures','id');
    }

    public function down()
    {
        $this->dropTable('colors');
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