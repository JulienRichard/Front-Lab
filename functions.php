<?php
	if( !defined( 'ABSPATH' ) )
		die( 'Cheatin\' uh?' );

$templatepath = get_template_directory();

// ADMIN
// ---------------------------------------------------
if ( is_admin() ) {
	include( $templatepath.'/inc/functs-admin.php' );
}

// FRONTEND
// ---------------------------------------------------
elseif ( !defined( 'XMLRPC_REQUEST' ) && !defined( 'DOING_CRON' ) ) {
	include( $templatepath.'/inc/functs-frontend.php' );
}

// DISABLED ADMIN BAR
// -----------------
add_filter('show_admin_bar', '__return_false');

/* ------------------------------------------------------------------------
    Enqueue Styles & Js
------------------------------------------------------------------------ */
function theme_styles() {
  // wp_enqueue_style( 'vendor_css', get_template_directory_uri() . '/dist/css/vendor.css' );
  // wp_enqueue_style( 'theme_css', get_template_directory_uri() . '/dist/css/app.css' );

  // For development only!
  wp_enqueue_style( 'vendor_css', 'http://localhost:8080/css/vendor.css' );
  wp_enqueue_style( 'theme_css', 'http://localhost:8080/css/app.css' );
}
add_action( 'wp_enqueue_scripts', 'theme_styles' );

function theme_js() {
  // wp_enqueue_script( 'vendor_js', get_template_directory_uri() . '/dist/js/vendor.js', '', '', true );
  // wp_enqueue_script( 'theme_js', get_template_directory_uri() . '/dist/js/app.js', '', '', true );

  // For development only!
  wp_enqueue_script( 'vendor_js', 'http://localhost:8080/js/vendor.js', '', '', true );
  wp_enqueue_script( 'theme_js', 'http://localhost:8080/js/app.js', '', '', true );
}
add_action( 'wp_enqueue_scripts', 'theme_js' );

/* ------------------------------------------------------------------------
    Themes Functions
------------------------------------------------------------------------ */
if ( function_exists( 'add_theme_support' ) ) {
  add_theme_support( 'menus' );
  add_theme_support( 'post-thumbnails' );

  // Supprime les Accens des images Uploadées
  add_filter( 'sanitize_file_name', 'remove_accents' );

  // Thumbnails Size
  // default wordpress = 'thumbnail' = 150x150
  // default wordpress = 'small' = 300x300
  // default wordpress = 'medium' = 640x640

  add_image_size( 'small-thumb', 300, 150, true);
  add_image_size( 'medium-thumb', 600, 300, true);
  add_image_size( 'large-thumb', 1200, 600, true);
  /// ('true' force le recadrage)
}

// -- Permalinks
function reset_permalinks() {
  global $wp_rewrite;
  $wp_rewrite->set_permalink_structure( '/Blog/%postname%/' );
}
add_action( 'init', 'reset_permalinks' );

// -- Menus
function register_my_menu() {
  register_nav_menu('main-menu',__( 'Main Menu' ));
}
add_action( 'init', 'register_my_menu' );

// -- Thumbnails
add_action( 'rest_api_init', 'add_thumbnail_to_JSON' );
function add_thumbnail_to_JSON() {
  //Add featured image
  register_rest_field(
    ['post', 'customposttype'], // Where to add the field (Could be an array)
    'featured_image_src', // Name of new field
    array(
      'get_callback'    => 'get_image_src',
      'update_callback' => null,
      'schema'          => null,
    )
  );
}

function get_image_src( $object, $field_name, $request ) {
  $feat_img_array = wp_get_attachment_image_src(
    $object['featured_media'], // Image attachment ID
    'full',  // Size.  Ex. "thumbnail", "large", "full", etc..
    true // Whether the image should be treated as an icon.
  );
  return $feat_img_array[0];
}

/* ------------------------------------------------------------------------
    Register Custom Post Type
------------------------------------------------------------------------ */
function custom_post_type() {
  $labels = array(
    'name'                => _x( 'CustomPosts', 'Post Type General Name' ),
    'singular_name'       => _x( 'CustomPost', 'Post Type Singular Name' ),
    'menu_name'           => __( 'CustomPosts' ),
    'parent_item_colon'   => __( 'Parent CustomPost' ),
    'all_items'           => __( 'All CustomPosts' ),
    'view_item'           => __( 'View CustomPosts' ),
    'add_new_item'        => __( 'Add New CustomPosts' ),
    'add_new'             => __( 'Add New' ),
    'edit_item'           => __( 'Edit CustomPosts' ),
    'update_item'         => __( 'Update CustomPosts' ),
    'search_items'        => __( 'Search CustomPosts' ),
    'not_found'           => __( 'Not Found' ),
    'not_found_in_trash'  => __( 'Not found in Trash' ),
  );

  $args = array(
    'label'               => __( 'custom_post_type' ),
    'description'         => __( 'Custom Posts' ),
    'labels'              => $labels,
    'supports'            => array( 'title', 'editor', 'excerpt', 'author', 'thumbnail' ),
    'hierarchical'        => false,
    'public'              => true,
    'show_ui'             => true,
    'show_in_menu'        => true,
    'show_in_nav_menus'   => true,
    'show_in_admin_bar'   => true,
    'menu_position'       => 5,
    'can_export'          => true,
    'has_archive'         => true,
    'exclude_from_search' => false,
    'publicly_queryable'  => true,
    'capability_type'     => 'page',
    'show_in_rest'       => true,
    'rest_base'          => 'customposttype'
  );

  register_post_type( 'CustomPostType', $args );
}

add_action( 'init', 'custom_post_type', 0 );

/* ------------------------------------------------------------------------
    Prepare REST
------------------------------------------------------------------------ */
function prepare_rest($data, $post, $request) {
  $_data = $data->data;

  // Thumbnails
  $thumbnail_id = get_post_thumbnail_id( $post->ID );
  $thumbnail_full = wp_get_attachment_image_src( $thumbnail_id, 'full' );
  $thumbnail_medium = wp_get_attachment_image_src( $thumbnail_id, 'medium-thumb' );
  $thumbnail_large = wp_get_attachment_image_src( $thumbnail_id, 'large-thumb' );

  // Categories
  $cats = get_the_category($post->ID);

  // Date
  $dateFormat = get_the_date( 'j F Y', $post->ID );

  // Author
  $author = get_the_author_meta($field = 'display_name');

  // Excerpt
  $excerptFormat = excerpt(20);

  // Next/Prev
  $prevPost = get_adjacent_post(false, '', false);
  $prevPost_thumbnail = get_the_post_thumbnail_url($prevPost->ID, 'thumbnail');
  $nextPost = get_adjacent_post(false, '', true);
  $nextPost_thumbnail = get_the_post_thumbnail_url($nextPost->ID, 'thumbnail');

  // -- Init datas
  $_data['excerptFormat'] = $excerptFormat;
  $_data['dateFormat'] = $dateFormat;
  $_data['thumbnail_full'] = $thumbnail_full[0];
  $_data['thumbnail_medium'] = $thumbnail_medium[0];
  $_data['thumbnail_large'] = $thumbnail_large[0];
  $_data['author'] = $author;
  $_data['cats'] = $cats;

  $_data['prev_post'] = $prevPost;
  $_data['prev_post_thumbnail'] = $prevPost_thumbnail;
  $_data['next_post'] = $nextPost;
  $_data['next_post_thumbnail'] = $nextPost_thumbnail;

  // Export data
  $data->data = $_data;

  return $data;
}
add_filter('rest_prepare_post', 'prepare_rest', 10, 3);
add_action('rest_api_init', 'register_custom_fields', 1, 1);
