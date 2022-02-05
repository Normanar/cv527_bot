const { Telegraf } = require('telegraf')
require('dotenv').config()

const bot = new Telegraf(process.env.BOT_TOKEN)
bot.start((ctx) => ctx.reply(`Привет, ${ctx.message.from.first_name}!`))
bot.help((ctx) => ctx.reply('Send me a sticker'))
bot.hears('t', (ctx) => ctx.reply('I am working'))
bot.launch()

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))