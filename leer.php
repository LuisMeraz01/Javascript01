<?php
printf("Abriendo Archivo");
$archivo_url = fopen("quijote.txt","r");

$texto = "";

while ($fragmento = fgets($archivo_url)){

    $texto = $fragmento;
}

printf($texto);
printf("<br>Haciendo otra cosa");
?>