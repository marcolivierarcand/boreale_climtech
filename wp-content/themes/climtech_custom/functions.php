<?php
function custom_theme_setup() {

  add_theme_support( 'post-thumbnails' );
  add_theme_support( 'title-tag' );

  // ******** Resize images ********
  add_image_size( '600x600', 600, 600, true );
  add_image_size( '900x900', 900, 900, true );
  add_image_size( '1200x1200', 1200, 1200, false );
  add_image_size( '1400x900', 1400, 900, true );

  add_theme_support( 'html5', array(
   'search-form',
   'gallery',
   'caption',
  ) );
}

// Hide ACF
// add_filter('acf/settings/show_admin', '__return_false');

// add_action( 'after_setup_theme', 'custom_theme_setup' );
//
// $labelsServices = array(
//   'name' => "Services",
//   'singular_name' => "Service",
//   'add_new' => "Ajouter un service",
//   'add_new_item' => "Ajouter un service",
//   'edit_item' => "Modifier un service",
//   'new_item' => "Nouveau service",
//   'all_items' => "Tous les services",
//   'view_item' => "Voir le service",
//   'search_items' => "Chercher un service",
//   'not_found' =>  "Aucun service trouvé",
//   'menu_name' => "Mes services"
// );
//
// $argService = array(
//     'labels' => $labelsServices,
//     'public' => true,
//     'has_archive' => true,
//     'hierarchical' => true,
//     'menu_position' => 20,
//     'menu_icon' => 'dashicons-laptop',
//     'supports' => array('title', 'thumbnail', 'editor', 'revisions', 'page-attributes')
// );
// register_post_type('services', $argService);
