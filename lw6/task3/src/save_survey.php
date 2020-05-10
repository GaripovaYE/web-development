<?php 
    function getFormData(): ?array
    {
        if ($_SERVER['REQUEST_METHOD'] == 'GET') 
        {
            return isset($_GET) ? $_GET: NULL;
        }
        elseif ($_SERVER['REQUEST_METHOD'] == 'POST') 
        {
            return isset($_POST) ? $_POST: NULL;
        }
        return null;
    }

    function saveFormData(): ?string
    {
        $formData = getFormData();
        if ($formData != NULL)
        {
            if ($formData["email"] != NULL)
            {
                $formData["email"] = trim($formData["email"]);
                if (filter_var($formData["email"], FILTER_VALIDATE_EMAIL))
                {
                    $fileName =  "../data/" . $formData["email"].".txt";
                    $fp = fopen($fileName, "w+");
                    unset($formData["email"]);
                    if ($fp)
                    {
                        foreach ($formData as $key => $value)
                        {
                            fwrite($fp, "$key: " . trim($value) . "\r\n");
                        }
                    }
                    fclose($fp);
                    return "form data saved";
                } 
                return "email isn't valid";
            }
        }
        return "form is empty";
    }

    echo saveFormData();