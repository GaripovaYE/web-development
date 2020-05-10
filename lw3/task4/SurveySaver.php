<?php

function getGETParameter(string $name): ?string
{
    return isset($_GET[$name]) ? $_GET[$name]: NULL;
} 

function getSurvey(array $keys): ?array
{
    foreach ($keys as $key) 
    {
        $getAttributs[$key] = getGETParameter($key);
    }
    return $getAttributs;
}

function printSurveyToTextFile()
{    
    $keys = array("first_name",  "last_name", "email", "age");
    $surveyInformation = getSurvey($keys);
    if ($surveyInformation["email"] !== NULL)
    {
        if (filter_var($surveyInformation["email"], FILTER_VALIDATE_EMAIL))
        {
            $fileName ="data/" . $surveyInformation["email"].".txt";
            $fp = fopen($fileName, "w+");
            unset($surveyInformation["email"]);
            if ($fp)
            {
                foreach ($surveyInformation as $key => $value)
                {
                    fwrite($fp, "$key: $value \r\n");
                }
                echo "file created";
            }
            fclose($fp);
        }
        else
        {
            echo "not valid email";
        }
    }
    else
    {
        echo "email is empty";
    }
    $endParametr = end($surveyInformation);
}

printSurveyToTextFile();