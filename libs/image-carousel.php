<?php

function image_carousel_function($atts) {
    $html = '';
    $albumId=$_GET['album_id'];
    $html .= "
      <iframe src='/flickr-html?album_id=$albumId' height='620' width='900' frameborder='0' scrolling='no'>
      </iframe>
    ";

    return $html;
}

add_shortcode('image_carousel', 'image_carousel_function');