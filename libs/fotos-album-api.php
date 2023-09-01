<?php
function obtener_fotos_album($album_id, $api_key) {
    $url = "https://api.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key={$api_key}&photoset_id={$album_id}&format=json&nojsoncallback=1";

    $respuesta = file_get_contents($url);
    $datos = json_decode($respuesta, true);

    if ($datos && isset($datos['photoset']['photo'])) {
        return $datos['photoset']['photo'];
    } else {
        return array(); 
    }
}
?>