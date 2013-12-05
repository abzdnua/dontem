<?php


class Constants
{
    const NEWS_PHOTO = 'news';
    const PROJECT_PHOTO = 'project';


    const BLOCK_TYPE_TEXT = 'text';
    const BLOCK_TYPE_TEXT_IMG = 'text_img';
    const BLOCK_TYPE_TEXT_VIDEO = 'text_video';
    const BLOCK_TYPE_IMG_PARALLAX = 'img_parallax';
    const BLOCK_TYPE_GALLERY = 'gallery';
    const LEFT_TEXT = 'left';
    const RIGHT_TEXT = 'right';
    const IMG_TYPE_PARALLAX = 'parallax';
    const IMG_TYPE_HALF_BLOCK = 'half_block';
    const IMG_TYPE_GALLERY = 'gallery_img';



    public static function getTesArray()
    {
      return array(1=>'Славянская ТЕС',
                   2=>'Старобешевская ТЕС',
                   3=>'Трипольская ТЕС'
                   );
    }

    public static function getTes($n)
    {
      $tes = self::getTesArray();
      return $tes[$n];
    }

    public static function getDifficultiesArray()
    {
      return array(1=>'Плановая',
                   2=>'Высокая',
                   3=>'Очень высокая',
                   4=>'Уникальная'
                   );
    }

    public static function getDifficulty($n)
    {
      $tes = self::getDifficultiesArray();
      return $tes[$n];
    }


    public static function getImgArray()
    {
        $array = array();

// Изображение новости
        $type = array();
        $type['name'] = self::NEWS_PHOTO;
        $type['width_to'] = 1024;
        $type['height_to'] = 500;
        $type['any_size'] = true;
        $type['width_expect'] = 1024;
        $type['height_expect'] = 500;
        $type['alter_img'] = array(
                        'm_'=>array('width_to'=>300,'height_to'=>373),
                    );

        array_push($array,$type);

// Изображение проекта
        $type = array();
        $type['name'] = self::PROJECT_PHOTO;
        $type['width_to'] = 1024;
        $type['height_to'] = 500;
        $type['any_size'] = true;
        $type['width_expect'] = 1024;
        $type['height_expect'] = 500;
        $type['alter_img'] = array(
                        'm_'=>array('width_to'=>940,'height_to'=>373),
                    );

        array_push($array,$type);


// параллакс
        $type = array();
        $type['name'] = self::IMG_TYPE_PARALLAX;
        $type['width_to'] = 1920;
        $type['height_to'] = 500;
        $type['any_size'] = false;
        $type['width_expect'] = 1920;
        $type['height_expect'] = 500;


        array_push($array,$type);


//в пол блока
        $type = array();
        $type['name'] = self::IMG_TYPE_HALF_BLOCK;
        $type['width_to'] = 500;
        $type['height_to'] = 0;
        $type['any_size'] = true;
        $type['width_expect'] = 0;
        $type['height_expect'] = 0;


        array_push($array,$type);

//в галерею
        $type = array();
        $type['name'] = self::IMG_TYPE_GALLERY;
        $type['width_to'] = 0;
        $type['height_to'] = 720;
        $type['any_size'] = true;
        $type['width_expect'] = 0;
        $type['height_expect'] = 720;
        $type['alter_img'] = array(
                        '/size2'=>array('height_to'=>578),
                        '/size3'=>array('height_to'=>460),
                        '/'=>array('height_to'=>270),
                    );


        array_push($array,$type);

        return $array;
    }
}
