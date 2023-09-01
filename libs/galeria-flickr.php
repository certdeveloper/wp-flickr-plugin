<?php

function mostrar_galeria_flickr($atts)
{
    $api_key = '6c8dca0f14327390fb1f141772a476bc';
    $usuario_id = '79290372@N06';
    $salida = '';
    $albumes = obtener_albumes_flickr($usuario_id, $api_key);
    usort($albumes, function($a, $b) {
        return strcmp(trim($a['title']['_content']),trim($b['title']['_content']));
    });

    $salida .= '
            <style>.galeria-flickr {
                flex-wrap: wrap;
                gap: 20px;
              
            }';
    $salida .= '.album { flex-basis: calc(20% - 20px); text-align: center; }';
    $salida .= '.album img { max-width: 100%; height: auto; }';
    $salida .= '.album-portada { flex-basis: 100%; text-align: center; }';
    $salida .= '.album-row { flex-basis: 100%; display: flex; gap: 20px; margin-top: 10px; } @media (max-width: 768px) {
            .galeria-flickr {
                display: block;
                flex-wrap: none;
                justify-content: center;
            }
                .album-row {
                gap: 10px;
                margin-top: 10px;
                }
                .galeria-flickr img {
            width: 120px;
            height: 120px;
            }
            .album {
                width: 100%;
                max-width: 250px;
            }

            .album img {
                max-width: 100%;
                height: auto;
            }
            }</style>';

    $salida .= '<div class="galeria-flickr">';
    $salida .= '<div class="album-container">'; // Agregar un div contenedor
    $origin = $albumes;
    $newAlbums =array_filter($origin, function($value) {
        $titulo_album = $value['title']['_content'];
        if (
            
            strtoupper($titulo_album) == 'NEW PROJECTS' ||
            strtoupper($titulo_album) == 'RENDERINGS' ||
            strtoupper($titulo_album) == 'MODELS' 
            ) {
                return true;
        }
    });
    $filteredAlbums = array_filter($origin, function($value) {
        $titulo_album = $value['title']['_content'];
        
        if (
            $titulo_album !== 'test album' &&
            $titulo_album !== 'Publications-Garza' &&
            $titulo_album !== 'Publications-Meneely' &&
            $titulo_album !== 'Publications-Parsons' &&
            $titulo_album !== 'Publication-Contemporary Texas Architecture Book' &&
            $titulo_album !== 'Publications-Pearrow' &&
            $titulo_album !== 'Publications-Heiberg' &&
            $titulo_album !== 'Publications-Payne' &&
            $titulo_album !== 'Agee Residence' &&
            $titulo_album !== 'New Projects' &&
            $titulo_album !== 'Publications- Price' &&
            strtoupper($titulo_album) != 'RENDERUBGS' &&
            // strtoupper($titulo_album) !== 'MODELS' &&
            $titulo_album != ""

            ) {
                return true;
        } else {
            return false;
        }
    });
    $salida .= '<div class="album-portada"> <div class="album-row">';
    for ($i = 0; $i < sizeof($filteredAlbums); $i ++ ) {
        $album= $filteredAlbums[$i];
        $portada_album = $album['primary'];
        $titulo_album = $album['title']['_content'];
        $url_imagen_portada = "https://farm{$album['farm']}.staticflickr.com/{$album['server']}/{$portada_album}_{$album['secret']}_z.jpg";

            if ($i === 0) {
               
            }
            if ($i > 0 && $i % 5 === 0) {
                $salida .= '</div><div class="album-row">';
            }
            $salida .= '<div class="album">';
            $salida .= '<a href="/design-details/?album_id=' . $album['id'] . '" class="abrir-album">';
            $salida .= '<img src="' . resize_image($url_imagen_portada, 120, 120) . '" alt="Portada del álbum">';
            $salida .= '</a>';
            $salida .= '<p>' . $titulo_album . '</p>';
            $salida .= '</div>';
       
    }
    $salida .= '</div>'; // Cerrar el div contenedor
    $salida .= '</div>'; // Cerrar el div contenedor
    $salida .= '</div>'; // Cerrar el div contenedor
    $salida .= '</div>'; // Cerrar el div contenedor
    
    $salida .= '
		<hr style="margin: 30px; margin-bttom:10px;">
        <div style="display: flex;  justify-content: center;">
    ';

    foreach ($newAlbums as $indice => $album) { 
        $portada_album = $album['primary'];
        $titulo_album = $album['title']['_content'];
        $url_imagen_portada = "https://farm{$album['farm']}.staticflickr.com/{$album['server']}/{$portada_album}_{$album['secret']}_z.jpg";

        $salida .= "
            <div class='album'>
                <p style='color:red; padding-bottom: 10px;'>$titulo_album</p>
                <a href='/design-details/?album_id={$album['id']}' class='abrir-album'>
                <img src='".resize_image($url_imagen_portada, 120, 120)."' alt='Portada del album'>
                </a>
            </div>
        ";
    }

    $salida .= '</div>';
   


    return $salida;
}

add_shortcode('galeria_flickr', 'mostrar_galeria_flickr');

function flickr_title_function($atts)
{
   
    $album_id = isset($_GET['album_id']) ? $_GET['album_id'] : null;
    $api_key = '6c8dca0f14327390fb1f141772a476bc';
    $title = obtener_titulo_album_flickr($album_id, $api_key);
    return $title;
}

add_shortcode('flickr_title', 'flickr_title_function');