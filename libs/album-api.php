<?php
function obtener_albumes_flickr($usuario_id, $api_key) {
    $url = "https://api.flickr.com/services/rest/?method=flickr.photosets.getList&api_key={$api_key}&user_id={$usuario_id}&format=json&nojsoncallback=1";
    
    $respuesta = file_get_contents($url);
    $datos = json_decode($respuesta, true);

    if ($datos && isset($datos['photosets']['photoset'])) {
        return $datos['photosets']['photoset'];
    } else {
        return array(); 
    }
}
?>