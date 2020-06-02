<?php
   
    function getFormData(): array
    {
        return $args = $_POST;  
    }
    
    function isValidEmail($str): bool
    {
        return preg_match("/.+@.+\..+/i", $str);
    }

    function isValidName($str): bool
    {
        return ((strlen($str) > 0) && (!preg_match('/[:;@*^%№!`~<>?"{}()]|\\^|\\[|\\]|\d/', $str)));
    }

    function saveFeedbackPage()
    {
        $args = getFormData();
        $formData = $args;
        $args['email_error_msg'] = (isValidEmail($args['email']) ? NULL : 'Ошибка ввода email');
        $args['name_error_msg'] = (isValidName($args['name']) ? NULL : 'Ошибка ввода имени');
        if (($args['email_error_msg'] == NULL) && (($args['name_error_msg']) == NULL))
        {
            $formData['email'] = trim($formData['email']);
            $fileName =  '../data/' . $formData['email'].'.txt';
            $fp = fopen($fileName, 'w');
            unset($formData['email']);
            if ($fp)
            {
                foreach ($formData as $key => $value)
                {
                    fwrite($fp, $key. ': ' . trim($value) . "\r\n");
                }
            }
            fclose($fp);
            $args['result'] = 'Данные сохранены';
        } else {
            $args['result'] = 'Данные введены не корректно';
        }
        
        renderTemplate('main.tpl.php', $args);
    }                    
