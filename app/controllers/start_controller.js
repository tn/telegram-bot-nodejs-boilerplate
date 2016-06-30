const BaseController = require('../bot').BaseController;

module.exports = class StartController extends BaseController {
  get routes () {
    return {
      '/start': 'introduction'
    };
  }

  introduction ($) {
    $.sendMessage(this._localization.En.startMessage);
  }
};
