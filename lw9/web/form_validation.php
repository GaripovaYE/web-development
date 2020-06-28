<?php
    function getRequestMethod(): string
    {
        return $_SERVER['REQUEST_METHOD'];
    }
    
    function getPostParameter(string $parameterName): ?string
    {
        return $_POST[$parameterName] ?? NULL;
    }

    function getPostData(): array
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
        # Получить JSON как строку
        $json_str = file_get_contents('php://input');        
        # Получить объект
        $args = json_decode($json_str);
        // $args = getPostData();
        $args['email'] = getPostParameter('email');
        $formData = $args;
        $args['email_error_msg'] = (isValidEmail($args['email']) ? null : 'error');
        $args['name_error_msg'] = (isValidName($args['name']) ? null : 'error');
        if (($args['email_error_msg'] == null) && (($args['name_error_msg']) == null))
        {
            // $formData['email'] = trim($formData['email']);
            // $fileName =  '../data/' . $formData['email'].'.txt';
            // $fp = fopen($fileName, 'w');
            // unset($formData['email']);
            // if ($fp)
            // {
            //     foreach ($formData as $key => $value)
            //     {
            //         fwrite($fp, $key. ': ' . trim($value) . "\r\n");
            //     }
            // }
            // fclose($fp);
            $args['result'] = 'ok';
        } else {
            $args['result'] = 'error';
        }
        
        echo json_encode($args);       
    }   

    saveFeedbackPage();