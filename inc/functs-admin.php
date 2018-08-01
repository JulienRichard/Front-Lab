<?php
	if( !defined( 'ABSPATH' ) )
		die( 'Cheatin\' uh?' );


/** -------------------------------------- **\
*				BACK OFFICE
* ---------------------------------------- **/
// Remove 'Tags' Column
if( !function_exists('wp_remove_wp_columns') ):
	function wp_remove_wp_columns( $columns ) {
	  	unset($columns['tags']);
	  	return $columns;
	}
	function wp_remove_wp_columns_init() {
		add_filter( 'manage_posts_columns' , 'wp_remove_wp_columns' );
	}
	add_action( 'admin_init' , 'wp_remove_wp_columns_init' );
endif;

/** -------------------------------------- **\
*			THUMBNAIL COLUMNS
* ---------------------------------------- **/
// Create Custom Column
add_filter('manage_posts_columns', 'thumbnail_column');
add_filter('manage_pages_columns', 'thumbnail_column');
function thumbnail_column($columns) {
	$columns['thumbnail'] = 'Image à la une';
	return $columns;
}

// Show Thumbnail Column
add_action('manage_posts_custom_column', 'show_thumbnail_column' , 2, 3);
add_action('manage_pages_custom_column', 'show_thumbnail_column' , 2, 3);
function show_thumbnail_column($name) {
	global $post;
	switch ($name) {
		case 'thumbnail':
			$thumbnail = get_the_post_thumbnail($post->ID, array(80,80));
			if (!empty($thumbnail)) {
				echo $thumbnail;
			} else {
				echo '<img src="'.get_bloginfo('stylesheet_directory').'/assets/img/layout/placeholder-100-100.png" />';
			}
	}
}

// Change Column order
add_filter('manage_posts_columns', 'column_order');
add_filter('manage_pages_columns', 'column_order');
function column_order($columns) {
	$n_columns = array();
	$move = 'thumbnail'; // what to move
	$before = 'title'; // move before this
	foreach($columns as $key => $value) {
		if ($key==$before){
			$n_columns[$move] = $move;
		} $n_columns[$key] = $value;
	} return $n_columns;
}
