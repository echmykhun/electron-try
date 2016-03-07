"use strict";
const config = require('config');
const models = require(`${__base}/app/models/`);
const bottle = require('bottlejs').pop('main');

bottle.service('vk', function () {
    const vk = new (require('vk-io'))();
    vk.setting(config.get('vk'));
    return vk;
});

module.exports = bottle;