<?php

add_action('init', function() {
    $build_dir = __DIR__ . "/build";

    foreach (scandir($build_dir) as $result) {
        $block_location = $build_dir . '/' . $result;

        if (!is_dir($block_location) || '.' === $result || '..' === $result) {
            continue;
        }

        wp_register_script(
            'entrepreneurs-' . $result,
            plugins_url(\basename(__DIR__)) . '/build/' . $result . '/front.js',
            ['wp-element'],
            null,
            true
        );

        wp_enqueue_script('entrepreneurs-' . $result);

        register_block_type($block_location);
    }
});
