<?php 

$array = ["fruta"=>"manzana", "color"=>"rojo", "sabor"=>"a manzana"];
$string ="me comí una fruta fruta fruta fruta que estaba de un color muy hermoso y cuando me pregunté a que sabía descubri que sabía sabor";

foreach ($array as $key => $value) {
    $string = str_ireplace($key, $value, $string);
}

echo $string;


