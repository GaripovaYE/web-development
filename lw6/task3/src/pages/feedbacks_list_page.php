<?php       

    function readProfileFile(string $fileName): ?array
    {
        $fileName = '../data/' . $fileName.'.txt';

    }

    function feedbacksListPages(): void
    {
        $args['profileData'] = [];
        $args['message'] = '';
        if (getRequestMethod() === 'POST')
        {
            $email = getPostParameter('email');            
            $args['email_error_msg'] = (isValidEmail($args['email']) ? null : 'error');
            if ($args['email_error_msg'] == null)
            {
                $fileName = '../data/' . $email . '.txt';
                $fp = fopen($fileName, 'r');
                if ($fp)
                {
                    // 
                    foreach ($profileData as $key => $value)
                    {
                        fread($fp, $key. ': ' . trim($value) . "\r\n");
                    }
                } else {
                    $args['email_error_msg'] = 'empty';
                }
            }
        }
        renderTemplate('feedbacks.tpl.php', $args);
    }