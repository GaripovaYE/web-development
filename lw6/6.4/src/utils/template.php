<?php
    function renderTemplate(string $tplName, array $args = []): void
    {
    //    include "/templates/{$tplName}";
       include __DIR__ . "/../templates/{$tplName}";
    }
    