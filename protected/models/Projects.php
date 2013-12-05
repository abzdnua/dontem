<?php


class Projects extends BaseProjects
{
  function beforeSave(){
        if($this->isNewRecord){
            $this->create_time = date('Y-m-d H:i:s');
            $this->create_user_id = Yii::app()->user->getId();

        }else{
            $this->change_time = date('Y-m-d H:i:s');
            $this->change_user_id = Yii::app()->user->getId();
        }
        return parent::beforeSave();

    }

  public static function model($className=__CLASS__)
  {
    return parent::model($className);
  }

  public function attributeLabels()
  {
    return array(
      'title' => 'Название',
      'sub_title' => 'Подзаголовок',
      'tes_id' => 'ТЭС',
      'short_des' => 'Краткое описание',
      'video_link' => 'Ссылка на видео (YouTube)',
      'file_id' => 'Файл презентации',
      'image_id' => 'Изображение',
      'is_active' => 'Отображать?',
    );
  }
}
