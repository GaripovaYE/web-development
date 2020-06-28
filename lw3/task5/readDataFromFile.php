<?php

    function getGETParameter(string $name): ?string
    {
        return isset($_GET[$name]) ? $_GET[$name]: NULL;
    } 

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

    function printSurveyInfo()
    {
        $email = getGETParameter('email');            
        if (filter_var($email, FILTER_VALIDATE_EMAIL))
        {               
            $fileName = '../data/' . $email . '.txt'; 
            if (file_exists($fileName))
            {                           
                $surveyInformation = getProfileData($fileName);    
                foreach($surveyInformation as $key => $value)
                {
                    echo $key . ': ' . $value . '</br>';
                }
            }
            else
            {
                echo 'Анкета отсутствует';
            }
        }
        else
        {
            echo 'Email указан не правильно';
        }
    }
    
    printSurveyInfo();