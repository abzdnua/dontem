<?php


class News extends BaseNews
{
  function beforeSave(){
        if($this->isNewRecord){
            $this->create_time = date('Y-m-d H:i:s');
            $this->create_user_id = Yii::app()->user->getId();

        }else{
            $this->change_time = date('Y-m-d H:i:s');
            $this->change_user_id = Yii::app()->user->getId();
        }
        $this->news_date = date('Y-m-d',strtotime($this->news_date));
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
      'work_type' => 'Тип работ',
      'difficulty' => 'Сложность',
      'short_des' => 'Краткое описание',
      'video_link' => 'Ссылка на видео (YouTube)',
      'file_id' => 'Файл презентации',
      'news_date' => 'Дата новости',
      'image_id' => 'Изображение',
      'is_active' => 'Отображать?',
    );
  }
}
