define("converse-dependencies", [
    "jquery",
    "utils",
    "moment",
    "converse-custom",
    "locales",
    "backbone.browserStorage",
    "backbone.overview",
    "jquery.browser",
    "typeahead",
    "strophe",
    "strophe.muc",
    "strophe.roster",
    "strophe.vcard",
    "strophe.disco"
], function($, utils, moment, custom) {
    return {
        'jQuery': $,
        'otr': undefined,
        'moment': moment,
        'utils': utils,
        'converse-custom': custom
    };
});
