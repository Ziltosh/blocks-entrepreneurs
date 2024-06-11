<?php

add_action('init', function() {
    $build_dir = __DIR__ . "/build";

    foreach (scandir($build_dir) as $result) {
        $block_location = $build_dir . '/' . $result;

        if (!is_dir($block_location) || '.' === $result || '..' === $result) {
            continue;
        }

        wp_register_script(
            'vite-block-' . $result,
            plugins_url(\basename(__DIR__)) . '/build/' . $result . '/front.js',
            ['wp-element', 'wp-block-editor'],
            null,
            true
        );

        wp_enqueue_script('vite-block-' . $result);

        register_block_type($block_location);
    }
});
