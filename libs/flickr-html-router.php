<?php
function custom_html_router() {
    add_rewrite_rule('^flickr-html/?$', 'index.php?flickr-html=1', 'top');
}
add_action('init', 'custom_html_router');


function add_custom_query_var($vars) {
    $vars[] = 'flickr-html';
    return $vars;
}
add_filter('query_vars', 'add_custom_query_var');

function flickr_carousel_html_content() {
    if (get_query_var('flickr-html')) {
        $plugin_dir_url = plugin_dir_url(__FILE__);
        $html = '';
    
        $html .= "
            <head>
            <meta http-equiv='Content-Type' content='text/html; charset=UTF-8'>
    
            <title></title>
            <link type='text/css' rel='stylesheet'
                href='{$plugin_dir_url}/assets/theme.css'>
            </head>
    
            <body bgcolor='#bfb2a3' leftmargin='0' marginheight='0' marginwidth='0' topmargin='0'>
    
            <!--START FLICKR EMBED-->
            <script src='{$plugin_dir_url}/assets/juicebox.js'
                type='text/javascript'></script>
            <script type='text/javascript'>
                new juicebox({
                    containerId: 'juicebox-container',
                    galleryWidth: '900',
                    galleryHeight: '620',
                    backgroundColor: '#bfb2a3'
                });
            </script>
            <div id='juicebox-container' style='height: 620px; width: 900px;'>
                
            </div>
            <div id='jb-glry-dlg' style='display:none;position:absolute;width:100%;height:100%;left:0;top:0;'></div>
            </body>
        ";
    
        echo $html;
        exit;
    }
}
add_action('template_redirect', 'flickr_carousel_html_content');