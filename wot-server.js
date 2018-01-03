var wot = {
    run: function() {

        var httpServer = require('./servers/http'),
            resources = require('./resources/model');

        var //ledsPlugin = require('./plugins/internal/ledsPlugin'),
            pirPlugin = require('./plugins/internal/pirPlugin'),
            dhtPlugin = require('./plugins/internal/DHT22SensorPlugin');

        pirPlugin.start({'sumilate': true, 'frequency': 2000});
        dhtPlugin.start({'sumilate': false, 'frequency': 5000});

        var server = httpServer.listen(resources.pi.port, function(){
            console.info('Your WoT Pi is up and running on port %s',
                resources.pi.port);
        });
    }
};

module.exports = wot;
