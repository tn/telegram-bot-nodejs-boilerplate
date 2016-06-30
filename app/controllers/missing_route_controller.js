const BaseController = require('../bot').BaseController;

module.exports = class MissingRouteController extends BaseController {
  handle ($) {
    $.sendMessage(this._localization.En.unknownCommandMessage);
  }
};
