const axios = require('axios')
const cheerio = require('cheerio')

const run = async () => {
  const response = await axios.get('https://www.betfair.com/sport/horse-racing')
  const $ = cheerio.load(response.data)
  $('.outbound-link').each((i, el) => {
    if (el.attribs.href.includes('horse-racing/meeting?')) {
      console.log(el.attribs['data-galabel']);
    }
  })
}

run()

// yui_3_5_0_1_1542385820730_343789

// yui_3_5_0_1_1542385820730_354015
