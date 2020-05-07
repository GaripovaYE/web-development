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
        $fileName ="data/" . $surveyInformation["email"].".txt";
        $fp = fopen($fileName, "w+");
        unset($surveyInformation["email"]);
        if ($fp)
        {
            foreach ($surveyInformation as $key => $value)
            {
                fwrite($fp, "$key: $value \r\n");
            }
        }
        fclose($fp);
    }
    // else
    // {
    //     echo "File not created";
    // }
    $endParametr = end($surveyInformation);
}

printSurveyToTextFile();