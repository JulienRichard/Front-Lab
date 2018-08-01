<?php
	if( !defined( 'ABSPATH' ) )
		die( 'Cheatin\' uh?' );

    /* ------------------------------------------------------------------------
        Front-end Functions
    ------------------------------------------------------------------------ */
    // CHANGE EXCERPT LENGTH FOR DIFFERENT POST TYPES
    function frontlab_excerpt_length($length) {
      global $post;
      if ($post->post_type == 'post')
        return 8;
      else if ($post->post_type == 'customposttype')
        return 14;
      else
        return 10;
    }
    add_filter('excerpt_length', 'frontlab_excerpt_length');

    // -- Excerpt Limit
    function excerpt($limit) {
      $excerpt = explode(' ', get_the_excerpt(), $limit);
      if (count($excerpt)>=$limit) {
        array_pop($excerpt);
        $excerpt = implode(" ",$excerpt).' [...]';
      } else {
        $excerpt = implode(" ",$excerpt);
      }
      $excerpt = preg_replace('`[[^]]*]`','',$excerpt);
      return $excerpt;
    }
