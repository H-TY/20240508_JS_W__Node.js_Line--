// 以下此行必須放在第一行，才能讀到環境資料 .env
import 'dotenv/config'
import linebot from 'linebot'
import axios from 'axios'

// console.log(process.env)

const bot = linebot({
  channelId: process.env.CHANNEL_ID,
  channelSecret: process.env.CHANNEL_SECRET,
  channelAccessToken: process.env.CHANNEL_ACCESS_TOKEN
})

bot.on('message', async (event) => {
  console.log(event)

  if (event.message.type !== 'text') return

  try {
    // const result = await event.reply(event.message.text)
    // console.log(result)
    const { data } = await axios.get(
      'https://data.moenv.gov.tw/api/v2/gp_p_01?api_key=e8dd42e6-9b8b-43f8-991e-b3dee723a52d&limit=1000&sort=ImportDate%20desc&format=JSON'
    )
    for (const record of data.records) {
      if (record.storeno === event.message.text) {
        const result = await event.reply([record.storeno, record.storeaddr, record.contacttel])
        console.log(result)
      }
    }
  } catch (error) {
    console.log(error)
  }
})

// line只接受 https:// 的網址
bot.listen('/', 3000, () => {
  console.log('機器人啟動')
})
