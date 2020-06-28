<?php
    function getRequestMethod(): string
    {
        return $_SERVER['REQUEST_METHOD'];
    }
    
    function getPostParameter(string $parameterName): ?string
    {
        return $_POST[$parameterName] ?? NULL;
    }