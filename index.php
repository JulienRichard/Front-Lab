<!DOCTYPE html>
<html lang="fr">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1">
    <title>Front-Lab</title>
    <!-- Favicons -->
    <link rel="apple-touch-icon" sizes="180x180" href="<?php echo get_template_directory_uri(); ?>/favicons/apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="32x32" href="<?php echo get_template_directory_uri(); ?>/favicons/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="<?php echo get_template_directory_uri(); ?>/favicons/favicon-16x16.png">
    <link rel="manifest" href="<?php echo get_template_directory_uri(); ?>/favicons/site.webmanifest">
    <link rel="mask-icon" href="<?php echo get_template_directory_uri(); ?>/favicons/safari-pinned-tab.svg" color="#5bbad5">
    <link rel="shortcut icon" href="<?php echo get_template_directory_uri(); ?>/favicons/favicon.ico">
    <meta name="msapplication-TileColor" content="#5974b8">
    <meta name="msapplication-config" content="<?php echo get_template_directory_uri(); ?>/favicons/browserconfig.xml">
    <meta name="theme-color" content="#5974b8">
    <!-- OpenGraph (Facebook) -->
    <meta property="og:title" content="Front-Lab">
    <meta property="og:description" content="Wordpress + Vuejs + Ui components">
    <meta property="og:url" content="http://www.julienr.fr/Front-Lab">
    <meta property="og:image" content="<?php echo get_template_directory_uri(); ?>/favicons/og-image.jpg">
    <!-- Twitter -->
    <meta name="twitter:title" content="Front-Lab">
    <meta name="twitter:description" content="Wordpress + Vuejs + Ui components">
    <meta name="twitter:image" content="<?php echo get_template_directory_uri(); ?>/favicons/og-image.jpg">
    <meta name="twitter:card" content="summary_large_image">
    <?php wp_head(); ?>
    <script>
      // window.config = { baseUrl: '<?php bloginfo("wpurl"); ?>' }
      window.config = { baseUrl: 'http://www.julienr.fr/Front-Lab/' }
    </script>
  </head>
	<body>
    <div id="app"></div>
		<?php wp_footer(); ?>
	</body>
</html>
