// this will sort the recipes by the user selection "checkbox"
// this should also sort the shortest amount of time it takes to cook the meal.


//array sort
//var checkbox = "checkbox"
//<button onclick =""

//cheerio is throwing an error on the page. Sort time is not working here
/*
const request = require('request')
const fs = require('fs')
const async = require('async')
const cheerio = require('cheerio')

const _ = require('lodash')

function sortRecipe(filename, callback) {
  let content = fs.readFileSync(filename)
  let contentJson = JSON.parse(content)
  async.mapLimit(
    contentJson.recipes,
    30,
    function (item, cb) {
      if (item.source_url.indexOf('www.closetcooking.com') == -1 &&
        item.source_url.indexOf('www.cookincanuck.com') == -1 &&
        item.source_url.indexOf('www.healthy-delicious.com') == -1 &&
        item.source_url.indexOf('allrecipes.com') == -1 &&
        item.source_url.indexOf('thepioneerwoman.com') == -1
      ) {
        cb(null, {
          recipe_id: item.recipe_id,
          url: item.source_url,
        })
      } else {
        let url = item.source_url.replace('http:', 'https:');
        request(url, {
          timeout: 20000,
          headers: {
            'User-Agent': `curl/7.54.0`,
          },
          http2: true
        }, function (error, body) {
          let time = null;
          if (body && body.body) {
            // console.log(item.source_url)
            let $ = cheerio.load(body.body)
            if (item.source_url.indexOf('www.closetcooking.com') > -1) {
              time = parseStringToMinutes($('.time').text().split('Total Time:')[1])
            } else if (item.source_url.indexOf('www.cookincanuck.com') > -1) {
              time = parseStringToMinutes($('.wprm-recipe-total-time-container').text().split('Total Time:')[1])
            } else if (item.source_url.indexOf('www.healthy-delicious.com') > -1) {
              time = parseStringToMinutes($('.mv-create-time-total').text().split('Total Time:')[1])
            } else if (item.source_url.indexOf('allrecipes.com') > -1) {
              time = parseStringToMinutes($($('.recipe-meta-item-body')[2]).text())
            } else if (item.source_url.indexOf('thepioneerwoman.com') > -1) {
              time = parseStringToMinutes($($('.recipe-summary-time').find('dd')[0]).text()) + parseStringToMinutes($($('.recipe-summary-time').find('dd')[2]).text())
            }
          }
          cb(null, {
            recipe_id: item.recipe_id,
            url: item.source_url,
            time
          })
        })
      }

    },
    function (error, result) {
      _.remove(result, function (n) {
        return n.time == null
      })
      result.sort((a, b) => {
        return a.time - b.time
      })
      console.log(result)
      callback(result)
    }
  )
}

function parseStringToMinutes(s) {
  // console.log(s)
  if (s) {
    let num = 0;
    s = ('' + s).trim().toLowerCase()
    let regH = new RegExp("hours|hour|hrs|hr", "g");
    if (s.match(regH)) {
      num += parseInt(s.split(regH)[0].trim()) * 60
      s = s.split(regH)[1].trim()
    }
    let regM = new RegExp("minutes|minute|mins|min", "g");
    if (s.match(regM)) {
      num += parseInt(s.split(regM)[0].trim())
    }
    return num
  }
  return null
}

//start
sortRecipe('newjson.json', function (error, result) {
  console.log(result)
})
*/
