<?php

    function getProfileData($fileName): ?array
    {
        $f = fopen($fileName, 'r');
        while (!feof($f)) {
            $buffer = fgets($f, 4096);
            $strElements = preg_split('/:/', $buffer);
            if ($strElements[0] != '')
            {
                $args[$strElements[0]] = $strElements[1];
            }
        }
        return $args;
        fclose($f);
    }

    function translateFieldName($fieldName): ?string
    {
        $newFieldName = 
        [
            "name" => "Имя",
            "country" =>  "Страна",
            "message" =>  "Сообщение",
            "gender" =>  "Пол"
        ];
        return (array_key_exists($fieldName, $newFieldName)) ? $newFieldName[$fieldName] : $fieldName;
    }

    function feedbacksListPages(): void
    {
        $args['email'] = getPostParameter('email');            
        $args['email_error_msg'] = (isValidEmail($args['email']) ? null : 'error');
        if ($args['email_error_msg'] == null)
        {
            $fileName = '../data/' . $args['email'] . '.txt';           
            $args['email_error_msg'] = (file_exists($fileName) ? null : 'empty');
            if ( $args['email_error_msg'] == null)
            {
                $args += getProfileData($fileName);
            }    
        }
        renderTemplate('feedbacks.tpl.php', $args);
    }

    function feedbackPage(): void
    {
        renderTemplate('feedbacks.tpl.php');
    }