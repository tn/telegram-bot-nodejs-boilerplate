const Telegram = require('telegram-node-bot');
const locales = [ require('../config/locales/en/locale.json') ];
const BaseController = Telegram.TelegramBaseController;
const tg = new Telegram.Telegram(process.env.TELEGRAM_BOT_TOKEN, null, null, locales);

module.exports = { BaseController, tg };
