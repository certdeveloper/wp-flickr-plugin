<?php

function config_xml_route()
{
    add_rewrite_rule('^config_xml$', 'index.php?config_xml=1', 'top');
}

add_action('init', 'config_xml_route');

function add_config_query_var($vars)
{
    $vars[] = 'config_xml';
    return $vars;
}

add_filter('query_vars', 'add_config_query_var');

function config_xml_callback()
{
    $album_id = isset($_GET['album_id']) ? $_GET['album_id'] : null;

    if (get_query_var('config_xml')  && $album_id) {
        // Define your XML data here
        $xml_data = "<?xml version='1.0' encoding='UTF-8'?>

        <juiceboxgallery 
        
            useFlickr='true'
            flickrSetId='{$album_id}'
            showOpenButton='false'
            showExpandButton='false'
            showThumbsButton='false'/>
        ";

        // Set the appropriate headers for XML
        header('Content-Type: application/xml; charset=utf-8');

        // Output the XML data
        echo $xml_data;

        // Terminate WordPress to prevent any additional processing
        exit;
    }
}
add_action('template_redirect', 'config_xml_callback');
