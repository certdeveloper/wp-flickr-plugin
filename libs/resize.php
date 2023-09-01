<?php
function resize_image($url, $width, $height) {
    $image = file_get_contents($url);
    $original = imagecreatefromstring($image);
    $resized = imagecreatetruecolor($width, $height);
    imagecopyresampled($resized, $original, 0, 0, 0, 0, $width, $height, imagesx($original), imagesy($original));
    ob_start();
    imagejpeg($resized, null, 100);
    $resized_data = ob_get_clean();
    return 'data:image/jpeg;base64,' . base64_encode($resized_data);
}
?>