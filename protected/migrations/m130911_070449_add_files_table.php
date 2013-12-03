<?php

class m130911_070449_add_files_table extends CDbMigration
{
    public function up()
    {
        $this->createTable('files',array(
            'id' => 'pk',
            'path' => 'varchar(50) NOT NULL',
            'obj_id' => 'int NOT NULL',
            'table_name' => 'varchar(50) NOT NULL',
            'type' => 'int NOT NULL COMMENT "1-картинка, 2-видео"',
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
        $this->dropTable('files');
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