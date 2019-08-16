<?php
$return = shell_exec('git add .');
$return = shell_exec('git commit -m "ok automatic"');
$salida = shell_exec('git push https://pasthortown:1509Charles*@github.com/pasthortown/siete --all');
echo $salida;