module.exports = function override(config, env) {
    // Verificar si se está construyendo para producción
    const isProduction = env === 'production';

    // Deshabilitar la generación de source maps en producción
    if (isProduction) {
        config.devtool = false;
        config.plugins = config.plugins.filter(
            (plugin) => plugin.constructor.name !== 'SourceMapDevToolPlugin'
        );
    }
    config.resolve.fallback = {
        url: require.resolve('url'),
        assert: require.resolve('assert'),
        crypto: require.resolve('crypto-browserify'),
        http: require.resolve('stream-http'),
        https: require.resolve('https-browserify'),
        buffer: require.resolve('buffer/'),
        stream: require.resolve('stream-browserify'),
        path: require.resolve("path-browserify"),
        os: require.resolve("os-browserify/browser"),
    };

    return config;
}