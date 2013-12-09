<?

class DLL{

    public static function translit($str, $dir = 0){
       $_ru = array(
            'А', 'Б', 'В', 'Г', 'Д', 'Е', 'Ё', 'Ж', 'З', 'И', 'Й',
            'К', 'Л', 'М', 'Н', 'О', 'П', 'Р', 'С', 'Т', 'У', 'Ф',
            'Х', 'Ц', 'Ч', 'Ш', 'Щ', 'Ъ', 'Ы', 'Ь', 'Э', 'Ю', 'Я',
            'а', 'б', 'в', 'г', 'д', 'е', 'ё', 'ж', 'з', 'и', 'й',
            'к', 'л', 'м', 'н', 'о', 'п', 'р', 'с', 'т', 'у', 'ф',
            'х', 'ц', 'ч', 'ш', 'щ', 'ъ', 'ы', 'ь', 'э', 'ю', 'я'
        );
        $_en = array(
            'A', 'B', 'V', 'G', 'D', 'E', 'YO', 'ZH', 'Z', 'I', 'I',
            'K', 'L', 'M', 'N', 'O', 'P', 'R', 'S', 'T', 'U', 'F',
            'H', 'C', 'CH', 'SH', 'SH', '\'', 'I', '\'', 'E', 'YU', 'YA',
            'a', 'b', 'v', 'g', 'd', 'e', 'yo', 'zh', 'z', 'i', 'i',
            'k', 'l', 'm', 'n', 'o', 'p', 'r', 's', 't', 'u', 'f',
            'h', 'c', 'ch', 'sh', 'sh', '\'', 'i', '\'', 'e', 'yu', 'ya'
        );
        if($dir)
        return str_replace($_en, $_ru, $str);
        else
        return str_replace($_ru, $_en, $str);
    }

    public static function makeLink($str){
        $_ru = array(
            'А', 'Б', 'В', 'Г', 'Д', 'Е', 'Ё', 'Ж', 'З', 'И', 'Й',
            'К', 'Л', 'М', 'Н', 'О', 'П', 'Р', 'С', 'Т', 'У', 'Ф',
            'Х', 'Ц', 'Ч', 'Ш', 'Щ', 'Ъ', 'Ы', 'Ь', 'Э', 'Ю', 'Я',
            'а', 'б', 'в', 'г', 'д', 'е', 'ё', 'ж', 'з', 'и', 'й',
            'к', 'л', 'м', 'н', 'о', 'п', 'р', 'с', 'т', 'у', 'ф',
            'х', 'ц', 'ч', 'ш', 'щ', 'ъ', 'ы', 'ь', 'э', 'ю', 'я'
        );
        $_en = array(
            'A', 'B', 'V', 'G', 'D', 'E', 'YO', 'ZH', 'Z', 'I', 'I',
            'K', 'L', 'M', 'N', 'O', 'P', 'R', 'S', 'T', 'U', 'F',
            'H', 'C', 'CH', 'SH', 'SH', '\'', 'I', '\'', 'E', 'YU', 'YA',
            'a', 'b', 'v', 'g', 'd', 'e', 'yo', 'zh', 'z', 'i', 'i',
            'k', 'l', 'm', 'n', 'o', 'p', 'r', 's', 't', 'u', 'f',
            'h', 'c', 'ch', 'sh', 'sh', '\'', 'i', '\'', 'e', 'yu', 'ya'
        );
        return strtolower(preg_replace('/[^0-9-_\+a-zA-Z]/', '', str_replace($_ru, $_en, preg_replace('/ +/', '_', trim(preg_replace('/\(.+?\)/si', '', $str))))));
    }


    public static function getRusMonth($n)
    {
        switch ($n){
            case 1:return 'Январь';break;
            case 2:return 'Февраль';break;
            case 3:return 'Март';break;
            case 4:return 'Апрель';break;
            case 5:return 'Май';break;
            case 6:return 'Июнь';break;
            case 7:return 'Июль';break;
            case 8:return 'Август';break;
            case 9:return 'Сентябрь';break;
            case 10:return 'Октябрь';break;
            case 11:return 'Ноябрь';break;
            case 12:return 'Декабрь';break;
        }
    }


    public static function substrText($inputStr,$substrLen = 200)
    {
        $substrLen *=2
        $inputStr = strip_tags($inputStr);
        $inputStrLen = mb_strlen($inputStr);
        if ($inputStrLen)
        {
            if ($substrLen < mb_strlen($inputStr))
            {
                $text = mb_substr($inputStr, 0, mb_strrpos(mb_substr($inputStr, 0, $substrLen), " "));
                $result['text'] = $text.'&nbsp;...';
                $result['length'] = mb_strlen($text);
                $result['isFull'] = false;
            }
            else
            {
                $result['text'] = $inputStr;
                $result['length'] = $inputStrLen;
                $result['isFull'] = true;
            }
            return $result['text'];
        }
        else return false;
    }


}
