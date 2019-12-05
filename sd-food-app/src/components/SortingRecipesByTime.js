

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




function sortByRecipe(data){
  let result = data
  if(result && result.hits && Array.isArray(result.hits)){
    result.hits.sort((a, b) => {
      return a.recipe.totalTime - b.recipe.totalTime
    })
  }
  return result
}

//test start， it just a test code if result is good I will keep working
let test = {
  "q": "chicken,milk",
  "from": 0,
  "to": 10,
  "more": true,
  "count": 21165,
  "hits": [
    {
      "recipe": {
        "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_cce8a18973ac0aeb13ee35695d50972f",
        "label": "Chicken braised in milk",
        "image": "https://www.edamam.com/web-img/6c9/6c9e5b9e9acf40757c6b1469a933f03c.jpg",
        "source": "Sassy Radish",
        "url": "http://www.sassyradish.com/2010/10/chicken-braised-in-milk/",
        "shareAs": "http://www.edamam.com/recipe/chicken-braised-in-milk-cce8a18973ac0aeb13ee35695d50972f/chicken%2Cmilk",
        "yield": 14.0,
        "dietLabels": [
          "Low-Carb"
        ],
        "healthLabels": [
          "Sugar-Conscious",
          "Peanut-Free",
          "Tree-Nut-Free",
          "Alcohol-Free"
        ],
        "cautions": [
          "Sulfites"
        ],
        "ingredientLines": [
          "1 3½ lb chicken, preferably organic and pasture-raised",
          "Sea salt and freshly ground black pepper",
          "4oz or ½ a pack of butter",
          "Olive oil",
          "1/2 cinnamon stick",
          "1 good handful of fresh thyme",
          "Zest of 2 lemons",
          "10 cloves of garlic, skin left on",
          "1 1/2 pints milk",
          "1/2 cup half-and-half"
        ],
        "ingredients": [
          {
            "text": "1 3½ lb chicken, preferably organic and pasture-raised",
            "weight": 1587.5732950000001
          },
          {
            "text": "Sea salt and freshly ground black pepper",
            "weight": 0.0
          },
          {
            "text": "Sea salt and freshly ground black pepper",
            "weight": 8.1488141625
          },
          {
            "text": "4oz or ½ a pack of butter",
            "weight": 113.3980925
          },
          {
            "text": "Olive oil",
            "weight": 36.941290869999996
          },
          {
            "text": "1/2 cinnamon stick",
            "weight": 1.3
          },
          {
            "text": "1 good handful of fresh thyme",
            "weight": 15.0
          },
          {
            "text": "Zest of 2 lemons",
            "weight": 116.0
          },
          {
            "text": "10 cloves of garlic, skin left on",
            "weight": 30.0
          },
          {
            "text": "1 1/2 pints milk",
            "weight": 732.0
          },
          {
            "text": "1/2 cup half-and-half",
            "weight": 121.0
          }
        ],
        "calories": 4181.632015353674,
        "totalWeight": 2761.3614925325,
        "totalTime": 161.0,
        "totalNutrients": {
          "ENERC_KCAL": {
            "label": "Energy",
            "quantity": 4181.632015353674,
            "unit": "kcal"
          },
          "FAT": {
            "label": "Fat",
            "quantity": 330.23546103280756,
            "unit": "g"
          },
          "FASAT": {
            "label": "Saturated",
            "quantity": 132.4526702217316,
            "unit": "g"
          },
          "FATRN": {
            "label": "Trans",
            "quantity": 4.764352817532,
            "unit": "g"
          },
          "FAMS": {
            "label": "Monounsaturated",
            "quantity": 128.20793604618657,
            "unit": "g"
          },
          "FAPU": {
            "label": "Polyunsaturated",
            "quantity": 44.49151500974685,
            "unit": "g"
          },
          "CHOCDF": {
            "label": "Carbs",
            "quantity": 71.06257551241876,
            "unit": "g"
          },
          "FIBTG": {
            "label": "Fiber",
            "quantity": 8.729949983112501,
            "unit": "g"
          },
          "SUGAR": {
            "label": "Sugars",
            "quantity": 45.51740126614,
            "unit": "g"
          },
          "PROCNT": {
            "label": "Protein",
            "quantity": 233.31628592933376,
            "unit": "g"
          },
          "CHOLE": {
            "label": "Cholesterol",
            "quantity": 1171.438279325,
            "unit": "mg"
          },
          "NA": {
            "label": "Sodium",
            "quantity": 1143.7972672448998,
            "unit": "mg"
          },
          "CA": {
            "label": "Calcium",
            "quantity": 1294.880684314575,
            "unit": "mg"
          },
          "MG": {
            "label": "Magnesium",
            "quantity": 358.972402187875,
            "unit": "mg"
          },
          "K": {
            "label": "Potassium",
            "quantity": 3677.104894062325,
            "unit": "mg"
          },
          "FE": {
            "label": "Iron",
            "quantity": 14.972709267950748,
            "unit": "mg"
          },
          "ZN": {
            "label": "Zinc",
            "quantity": 18.379522083643753,
            "unit": "mg"
          },
          "P": {
            "label": "Phosphorus",
            "quantity": 2438.05093425875,
            "unit": "mg"
          },
          "VITA_RAE": {
            "label": "Vitamin A",
            "quantity": 1711.603567169875,
            "unit": "µg"
          },
          "VITC": {
            "label": "Vitamin C",
            "quantity": 113.2661974496,
            "unit": "mg"
          },
          "THIA": {
            "label": "Thiamin (B1)",
            "quantity": 1.1551565282805003,
            "unit": "mg"
          },
          "RIBF": {
            "label": "Riboflavin (B2)",
            "quantity": 2.8934360256625,
            "unit": "mg"
          },
          "NIA": {
            "label": "Niacin (B3)",
            "quantity": 74.92372880393337,
            "unit": "mg"
          },
          "VITB6A": {
            "label": "Vitamin B6",
            "quantity": 4.633803434087874,
            "unit": "mg"
          },
          "FOLDFE": {
            "label": "Folate equivalent (total)",
            "quantity": 130.278231618625,
            "unit": "µg"
          },
          "FOLFD": {
            "label": "Folate (food)",
            "quantity": 130.278231618625,
            "unit": "µg"
          },
          "VITB12": {
            "label": "Vitamin B12",
            "quantity": 7.23268126311,
            "unit": "µg"
          },
          "VITD": {
            "label": "Vitamin D",
            "quantity": 558.99383956,
            "unit": "IU"
          },
          "TOCPHA": {
            "label": "Vitamin E",
            "quantity": 12.395168174934998,
            "unit": "mg"
          },
          "VITK1": {
            "label": "Vitamin K",
            "quantity": 64.39397997175249,
            "unit": "µg"
          },
          "WATER": {
            "label": "Water",
            "quantity": 1607.0500398510874,
            "unit": "g"
          }
        },
        "totalDaily": {
          "ENERC_KCAL": {
            "label": "Energy",
            "quantity": 209.08160076768374,
            "unit": "%"
          },
          "FAT": {
            "label": "Fat",
            "quantity": 508.05455543508856,
            "unit": "%"
          },
          "FASAT": {
            "label": "Saturated",
            "quantity": 662.2633511086581,
            "unit": "%"
          },
          "CHOCDF": {
            "label": "Carbs",
            "quantity": 23.687525170806254,
            "unit": "%"
          },
          "FIBTG": {
            "label": "Fiber",
            "quantity": 34.919799932450005,
            "unit": "%"
          },
          "PROCNT": {
            "label": "Protein",
            "quantity": 466.6325718586675,
            "unit": "%"
          },
          "CHOLE": {
            "label": "Cholesterol",
            "quantity": 390.47942644166665,
            "unit": "%"
          },
          "NA": {
            "label": "Sodium",
            "quantity": 47.658219468537496,
            "unit": "%"
          },
          "CA": {
            "label": "Calcium",
            "quantity": 129.4880684314575,
            "unit": "%"
          },
          "MG": {
            "label": "Magnesium",
            "quantity": 85.46961956854166,
            "unit": "%"
          },
          "K": {
            "label": "Potassium",
            "quantity": 78.2362743417516,
            "unit": "%"
          },
          "FE": {
            "label": "Iron",
            "quantity": 83.18171815528193,
            "unit": "%"
          },
          "ZN": {
            "label": "Zinc",
            "quantity": 167.0865643967614,
            "unit": "%"
          },
          "P": {
            "label": "Phosphorus",
            "quantity": 348.29299060839287,
            "unit": "%"
          },
          "VITA_RAE": {
            "label": "Vitamin A",
            "quantity": 190.1781741299861,
            "unit": "%"
          },
          "VITC": {
            "label": "Vitamin C",
            "quantity": 125.85133049955556,
            "unit": "%"
          },
          "THIA": {
            "label": "Thiamin (B1)",
            "quantity": 96.26304402337503,
            "unit": "%"
          },
          "RIBF": {
            "label": "Riboflavin (B2)",
            "quantity": 222.57200197403847,
            "unit": "%"
          },
          "NIA": {
            "label": "Niacin (B3)",
            "quantity": 468.2733050245836,
            "unit": "%"
          },
          "VITB6A": {
            "label": "Vitamin B6",
            "quantity": 356.44641800675953,
            "unit": "%"
          },
          "FOLDFE": {
            "label": "Folate equivalent (total)",
            "quantity": 32.56955790465625,
            "unit": "%"
          },
          "VITB12": {
            "label": "Vitamin B12",
            "quantity": 301.36171929625,
            "unit": "%"
          },
          "VITD": {
            "label": "Vitamin D",
            "quantity": 3726.6255970666666,
            "unit": "%"
          },
          "TOCPHA": {
            "label": "Vitamin E",
            "quantity": 82.63445449956664,
            "unit": "%"
          },
          "VITK1": {
            "label": "Vitamin K",
            "quantity": 53.6616499764604,
            "unit": "%"
          }
        },
        "digest": [
          {
            "label": "Fat",
            "tag": "FAT",
            "schemaOrgTag": "fatContent",
            "total": 330.23546103280756,
            "hasRDI": true,
            "daily": 508.05455543508856,
            "unit": "g",
            "sub": [
              {
                "label": "Saturated",
                "tag": "FASAT",
                "schemaOrgTag": "saturatedFatContent",
                "total": 132.4526702217316,
                "hasRDI": true,
                "daily": 662.2633511086581,
                "unit": "g"
              },
              {
                "label": "Trans",
                "tag": "FATRN",
                "schemaOrgTag": "transFatContent",
                "total": 4.764352817532,
                "hasRDI": false,
                "daily": 0.0,
                "unit": "g"
              },
              {
                "label": "Monounsaturated",
                "tag": "FAMS",
                "schemaOrgTag": null,
                "total": 128.20793604618657,
                "hasRDI": false,
                "daily": 0.0,
                "unit": "g"
              },
              {
                "label": "Polyunsaturated",
                "tag": "FAPU",
                "schemaOrgTag": null,
                "total": 44.49151500974685,
                "hasRDI": false,
                "daily": 0.0,
                "unit": "g"
              }
            ]
          },
          {
            "label": "Carbs",
            "tag": "CHOCDF",
            "schemaOrgTag": "carbohydrateContent",
            "total": 71.06257551241876,
            "hasRDI": true,
            "daily": 23.687525170806254,
            "unit": "g",
            "sub": [
              {
                "label": "Carbs (net)",
                "tag": "CHOCDF.net",
                "schemaOrgTag": null,
                "total": 62.332625529306256,
                "hasRDI": false,
                "daily": 0.0,
                "unit": "g"
              },
              {
                "label": "Fiber",
                "tag": "FIBTG",
                "schemaOrgTag": "fiberContent",
                "total": 8.729949983112501,
                "hasRDI": true,
                "daily": 34.919799932450005,
                "unit": "g"
              },
              {
                "label": "Sugars",
                "tag": "SUGAR",
                "schemaOrgTag": "sugarContent",
                "total": 45.51740126614,
                "hasRDI": false,
                "daily": 0.0,
                "unit": "g"
              },
              {
                "label": "Sugars, added",
                "tag": "SUGAR.added",
                "schemaOrgTag": null,
                "total": 0.0,
                "hasRDI": false,
                "daily": 0.0,
                "unit": "g"
              }
            ]
          },
          {
            "label": "Protein",
            "tag": "PROCNT",
            "schemaOrgTag": "proteinContent",
            "total": 233.31628592933376,
            "hasRDI": true,
            "daily": 466.6325718586675,
            "unit": "g"
          },
          {
            "label": "Cholesterol",
            "tag": "CHOLE",
            "schemaOrgTag": "cholesterolContent",
            "total": 1171.438279325,
            "hasRDI": true,
            "daily": 390.47942644166665,
            "unit": "mg"
          },
          {
            "label": "Sodium",
            "tag": "NA",
            "schemaOrgTag": "sodiumContent",
            "total": 1143.7972672448998,
            "hasRDI": true,
            "daily": 47.658219468537496,
            "unit": "mg"
          },
          {
            "label": "Calcium",
            "tag": "CA",
            "schemaOrgTag": null,
            "total": 1294.880684314575,
            "hasRDI": true,
            "daily": 129.4880684314575,
            "unit": "mg"
          },
          {
            "label": "Magnesium",
            "tag": "MG",
            "schemaOrgTag": null,
            "total": 358.972402187875,
            "hasRDI": true,
            "daily": 85.46961956854166,
            "unit": "mg"
          },
          {
            "label": "Potassium",
            "tag": "K",
            "schemaOrgTag": null,
            "total": 3677.104894062325,
            "hasRDI": true,
            "daily": 78.2362743417516,
            "unit": "mg"
          },
          {
            "label": "Iron",
            "tag": "FE",
            "schemaOrgTag": null,
            "total": 14.972709267950748,
            "hasRDI": true,
            "daily": 83.18171815528193,
            "unit": "mg"
          },
          {
            "label": "Zinc",
            "tag": "ZN",
            "schemaOrgTag": null,
            "total": 18.379522083643753,
            "hasRDI": true,
            "daily": 167.0865643967614,
            "unit": "mg"
          },
          {
            "label": "Phosphorus",
            "tag": "P",
            "schemaOrgTag": null,
            "total": 2438.05093425875,
            "hasRDI": true,
            "daily": 348.29299060839287,
            "unit": "mg"
          },
          {
            "label": "Vitamin A",
            "tag": "VITA_RAE",
            "schemaOrgTag": null,
            "total": 1711.603567169875,
            "hasRDI": true,
            "daily": 190.1781741299861,
            "unit": "µg"
          },
          {
            "label": "Vitamin C",
            "tag": "VITC",
            "schemaOrgTag": null,
            "total": 113.2661974496,
            "hasRDI": true,
            "daily": 125.85133049955556,
            "unit": "mg"
          },
          {
            "label": "Thiamin (B1)",
            "tag": "THIA",
            "schemaOrgTag": null,
            "total": 1.1551565282805003,
            "hasRDI": true,
            "daily": 96.26304402337503,
            "unit": "mg"
          },
          {
            "label": "Riboflavin (B2)",
            "tag": "RIBF",
            "schemaOrgTag": null,
            "total": 2.8934360256625,
            "hasRDI": true,
            "daily": 222.57200197403847,
            "unit": "mg"
          },
          {
            "label": "Niacin (B3)",
            "tag": "NIA",
            "schemaOrgTag": null,
            "total": 74.92372880393337,
            "hasRDI": true,
            "daily": 468.2733050245836,
            "unit": "mg"
          },
          {
            "label": "Vitamin B6",
            "tag": "VITB6A",
            "schemaOrgTag": null,
            "total": 4.633803434087874,
            "hasRDI": true,
            "daily": 356.44641800675953,
            "unit": "mg"
          },
          {
            "label": "Folate equivalent (total)",
            "tag": "FOLDFE",
            "schemaOrgTag": null,
            "total": 130.278231618625,
            "hasRDI": true,
            "daily": 32.56955790465625,
            "unit": "µg"
          },
          {
            "label": "Folate (food)",
            "tag": "FOLFD",
            "schemaOrgTag": null,
            "total": 130.278231618625,
            "hasRDI": false,
            "daily": 0.0,
            "unit": "µg"
          },
          {
            "label": "Folic acid",
            "tag": "FOLAC",
            "schemaOrgTag": null,
            "total": 0.0,
            "hasRDI": false,
            "daily": 0.0,
            "unit": "µg"
          },
          {
            "label": "Vitamin B12",
            "tag": "VITB12",
            "schemaOrgTag": null,
            "total": 7.23268126311,
            "hasRDI": true,
            "daily": 301.36171929625,
            "unit": "µg"
          },
          {
            "label": "Vitamin D",
            "tag": "VITD",
            "schemaOrgTag": null,
            "total": 558.99383956,
            "hasRDI": true,
            "daily": 3726.6255970666666,
            "unit": "µg"
          },
          {
            "label": "Vitamin E",
            "tag": "TOCPHA",
            "schemaOrgTag": null,
            "total": 12.395168174934998,
            "hasRDI": true,
            "daily": 82.63445449956664,
            "unit": "mg"
          },
          {
            "label": "Vitamin K",
            "tag": "VITK1",
            "schemaOrgTag": null,
            "total": 64.39397997175249,
            "hasRDI": true,
            "daily": 53.6616499764604,
            "unit": "µg"
          },
          {
            "label": "Sugar alcohols",
            "tag": "Sugar.alcohol",
            "schemaOrgTag": null,
            "total": 0.0,
            "hasRDI": false,
            "daily": 0.0,
            "unit": "g"
          },
          {
            "label": "Water",
            "tag": "WATER",
            "schemaOrgTag": null,
            "total": 1607.0500398510874,
            "hasRDI": false,
            "daily": 0.0,
            "unit": "g"
          }
        ]
      },
      "bookmarked": false,
      "bought": false
    },
    {
      "recipe": {
        "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_acb0e141640efd53aafcabe074ad2f45",
        "label": "Coconut Milk Chicken",
        "image": "https://www.edamam.com/web-img/4dc/4dc09a0b074e628818c53eabc30feb8f.jpg",
        "source": "The Kitchn",
        "url": "http://www.thekitchn.com/recipe-coconut-milk-chicken-98547",
        "shareAs": "http://www.edamam.com/recipe/coconut-milk-chicken-acb0e141640efd53aafcabe074ad2f45/chicken%2Cmilk",
        "yield": 14.0,
        "dietLabels": [
          "Low-Carb"
        ],
        "healthLabels": [
          "Sugar-Conscious",
          "Peanut-Free",
          "Alcohol-Free"
        ],
        "cautions": [
          "Sulfites"
        ],
        "ingredientLines": [
          "One 3-3.5 pound whole chicken",
          "sea salt and freshly ground black pepper",
          "4 ounces (1/2 stick) unsalted butter",
          "2 tablespoons sesame oil",
          "1 pound fingerling potatoes",
          "2 cans (13 - 15oz) regular or light coconut milk",
          "1 cup fresh cilantro leaves",
          "10 whole garlic cloves, peeled and smashed",
          "Zest of 2 lemons",
          "2 tablespoons chopped lemon grass stems",
          "1 tablespoon grated fresh ginger",
          "1 cinnamon stick"
        ],
        "ingredients": [
          {
            "text": "One 3-3.5 pound whole chicken",
            "weight": 1474.1752025
          },
          {
            "text": "sea salt and freshly ground black pepper",
            "weight": 0.0
          },
          {
            "text": "sea salt and freshly ground black pepper",
            "weight": 7.93637696625
          },
          {
            "text": "4 ounces (1/2 stick) unsalted butter",
            "weight": 113.3980925
          },
          {
            "text": "2 tablespoons sesame oil",
            "weight": 27.2
          },
          {
            "text": "1 pound fingerling potatoes",
            "weight": 453.59237
          },
          {
            "text": "2 cans (13 - 15oz) regular or light coconut milk",
            "weight": 396.89332375000004
          },
          {
            "text": "1 cup fresh cilantro leaves",
            "weight": 16.0
          },
          {
            "text": "10 whole garlic cloves, peeled and smashed",
            "weight": 30.0
          },
          {
            "text": "Zest of 2 lemons",
            "weight": 116.0
          },
          {
            "text": "2 tablespoons chopped lemon grass stems",
            "weight": 9.6
          },
          {
            "text": "1 tablespoon grated fresh ginger",
            "weight": 6.0
          },
          {
            "text": "1 cinnamon stick",
            "weight": 2.6
          }
        ],
        "calories": 3994.234626127787,
        "totalWeight": 2653.39536571625,
        "totalTime": 0.0,
        "totalNutrients": {
          "ENERC_KCAL": {
            "label": "Energy",
            "quantity": 3994.234626127787,
            "unit": "kcal"
          },
          "FAT": {
            "label": "Fat",
            "quantity": 299.2994986489697,
            "unit": "g"
          },
          "FASAT": {
            "label": "Saturated",
            "quantity": 126.68836753259022,
            "unit": "g"
          },
          "FATRN": {
            "label": "Trans",
            "quantity": 4.689555435719,
            "unit": "g"
          },
          "FAMS": {
            "label": "Monounsaturated",
            "quantity": 97.33661689008558,
            "unit": "g"
          },
          "FAPU": {
            "label": "Polyunsaturated",
            "quantity": 47.65780586370817,
            "unit": "g"
          },
          "CHOCDF": {
            "label": "Carbs",
            "quantity": 118.4377187919169,
            "unit": "g"
          },
          "FIBTG": {
            "label": "Fiber",
            "quantity": 17.813535512461257,
            "unit": "g"
          },
          "SUGAR": {
            "label": "Sugars",
            "quantity": 14.298551981584001,
            "unit": "g"
          },
          "PROCNT": {
            "label": "Protein",
            "quantity": 201.31717883924335,
            "unit": "g"
          },
          "CHOLE": {
            "label": "Cholesterol",
            "quantity": 995.6352521499999,
            "unit": "mg"
          },
          "NA": {
            "label": "Sodium",
            "quantity": 842.7276021457499,
            "unit": "mg"
          },
          "CA": {
            "label": "Calcium",
            "quantity": 355.5050817074875,
            "unit": "mg"
          },
          "MG": {
            "label": "Magnesium",
            "quantity": 351.4932391022875,
            "unit": "mg"
          },
          "K": {
            "label": "Potassium",
            "quantity": 4406.177840034463,
            "unit": "mg"
          },
          "FE": {
            "label": "Iron",
            "quantity": 15.879114547222873,
            "unit": "mg"
          },
          "ZN": {
            "label": "Zinc",
            "quantity": 15.423531746018373,
            "unit": "mg"
          },
          "P": {
            "label": "Phosphorus",
            "quantity": 1857.4282011256748,
            "unit": "mg"
          },
          "VITA_RAE": {
            "label": "Vitamin A",
            "quantity": 1244.2558209378878,
            "unit": "µg"
          },
          "VITC": {
            "label": "Vitamin C",
            "quantity": 181.20512309320003,
            "unit": "mg"
          },
          "THIA": {
            "label": "Thiamin (B1)",
            "quantity": 1.10401057036855,
            "unit": "mg"
          },
          "RIBF": {
            "label": "Riboflavin (B2)",
            "quantity": 1.49910335362925,
            "unit": "mg"
          },
          "NIA": {
            "label": "Niacin (B3)",
            "quantity": 73.78465732235121,
            "unit": "mg"
          },
          "VITB6A": {
            "label": "Vitamin B6",
            "quantity": 5.381659273196787,
            "unit": "mg"
          },
          "FOLDFE": {
            "label": "Folate equivalent (total)",
            "quantity": 169.06825432126246,
            "unit": "µg"
          },
          "FOLFD": {
            "label": "Folate (food)",
            "quantity": 169.06825432126246,
            "unit": "µg"
          },
          "VITB12": {
            "label": "Vitamin B12",
            "quantity": 3.3003380841199994,
            "unit": "µg"
          },
          "VITD": {
            "label": "Vitamin D",
            "quantity": 168.28276927000002,
            "unit": "IU"
          },
          "TOCPHA": {
            "label": "Vitamin E",
            "quantity": 6.820770716549001,
            "unit": "mg"
          },
          "VITK1": {
            "label": "Vitamin K",
            "quantity": 99.21095766425125,
            "unit": "µg"
          },
          "WATER": {
            "label": "Water",
            "quantity": 1190.0508236907247,
            "unit": "g"
          }
        },
        "totalDaily": {
          "ENERC_KCAL": {
            "label": "Energy",
            "quantity": 199.71173130638934,
            "unit": "%"
          },
          "FAT": {
            "label": "Fat",
            "quantity": 460.46076715226104,
            "unit": "%"
          },
          "FASAT": {
            "label": "Saturated",
            "quantity": 633.4418376629511,
            "unit": "%"
          },
          "CHOCDF": {
            "label": "Carbs",
            "quantity": 39.47923959730563,
            "unit": "%"
          },
          "FIBTG": {
            "label": "Fiber",
            "quantity": 71.25414204984503,
            "unit": "%"
          },
          "PROCNT": {
            "label": "Protein",
            "quantity": 402.6343576784867,
            "unit": "%"
          },
          "CHOLE": {
            "label": "Cholesterol",
            "quantity": 331.87841738333327,
            "unit": "%"
          },
          "NA": {
            "label": "Sodium",
            "quantity": 35.11365008940624,
            "unit": "%"
          },
          "CA": {
            "label": "Calcium",
            "quantity": 35.55050817074875,
            "unit": "%"
          },
          "MG": {
            "label": "Magnesium",
            "quantity": 83.6888664529256,
            "unit": "%"
          },
          "K": {
            "label": "Potassium",
            "quantity": 93.74846468158431,
            "unit": "%"
          },
          "FE": {
            "label": "Iron",
            "quantity": 88.21730304012708,
            "unit": "%"
          },
          "ZN": {
            "label": "Zinc",
            "quantity": 140.21392496380338,
            "unit": "%"
          },
          "P": {
            "label": "Phosphorus",
            "quantity": 265.3468858750964,
            "unit": "%"
          },
          "VITA_RAE": {
            "label": "Vitamin A",
            "quantity": 138.25064677087644,
            "unit": "%"
          },
          "VITC": {
            "label": "Vitamin C",
            "quantity": 201.33902565911114,
            "unit": "%"
          },
          "THIA": {
            "label": "Thiamin (B1)",
            "quantity": 92.00088086404584,
            "unit": "%"
          },
          "RIBF": {
            "label": "Riboflavin (B2)",
            "quantity": 115.31564258686538,
            "unit": "%"
          },
          "NIA": {
            "label": "Niacin (B3)",
            "quantity": 461.154108264695,
            "unit": "%"
          },
          "VITB6A": {
            "label": "Vitamin B6",
            "quantity": 413.9737902459066,
            "unit": "%"
          },
          "FOLDFE": {
            "label": "Folate equivalent (total)",
            "quantity": 42.267063580315615,
            "unit": "%"
          },
          "VITB12": {
            "label": "Vitamin B12",
            "quantity": 137.5140868383333,
            "unit": "%"
          },
          "VITD": {
            "label": "Vitamin D",
            "quantity": 1121.8851284666669,
            "unit": "%"
          },
          "TOCPHA": {
            "label": "Vitamin E",
            "quantity": 45.471804776993345,
            "unit": "%"
          },
          "VITK1": {
            "label": "Vitamin K",
            "quantity": 82.6757980535427,
            "unit": "%"
          }
        },
        "digest": [
          {
            "label": "Fat",
            "tag": "FAT",
            "schemaOrgTag": "fatContent",
            "total": 299.2994986489697,
            "hasRDI": true,
            "daily": 460.46076715226104,
            "unit": "g",
            "sub": [
              {
                "label": "Saturated",
                "tag": "FASAT",
                "schemaOrgTag": "saturatedFatContent",
                "total": 126.68836753259022,
                "hasRDI": true,
                "daily": 633.4418376629511,
                "unit": "g"
              },
              {
                "label": "Trans",
                "tag": "FATRN",
                "schemaOrgTag": "transFatContent",
                "total": 4.689555435719,
                "hasRDI": false,
                "daily": 0.0,
                "unit": "g"
              },
              {
                "label": "Monounsaturated",
                "tag": "FAMS",
                "schemaOrgTag": null,
                "total": 97.33661689008558,
                "hasRDI": false,
                "daily": 0.0,
                "unit": "g"
              },
              {
                "label": "Polyunsaturated",
                "tag": "FAPU",
                "schemaOrgTag": null,
                "total": 47.65780586370817,
                "hasRDI": false,
                "daily": 0.0,
                "unit": "g"
              }
            ]
          },
          {
            "label": "Carbs",
            "tag": "CHOCDF",
            "schemaOrgTag": "carbohydrateContent",
            "total": 118.4377187919169,
            "hasRDI": true,
            "daily": 39.47923959730563,
            "unit": "g",
            "sub": [
              {
                "label": "Carbs (net)",
                "tag": "CHOCDF.net",
                "schemaOrgTag": null,
                "total": 100.62418327945564,
                "hasRDI": false,
                "daily": 0.0,
                "unit": "g"
              },
              {
                "label": "Fiber",
                "tag": "FIBTG",
                "schemaOrgTag": "fiberContent",
                "total": 17.813535512461257,
                "hasRDI": true,
                "daily": 71.25414204984503,
                "unit": "g"
              },
              {
                "label": "Sugars",
                "tag": "SUGAR",
                "schemaOrgTag": "sugarContent",
                "total": 14.298551981584001,
                "hasRDI": false,
                "daily": 0.0,
                "unit": "g"
              },
              {
                "label": "Sugars, added",
                "tag": "SUGAR.added",
                "schemaOrgTag": null,
                "total": 0.0,
                "hasRDI": false,
                "daily": 0.0,
                "unit": "g"
              }
            ]
          },
          {
            "label": "Protein",
            "tag": "PROCNT",
            "schemaOrgTag": "proteinContent",
            "total": 201.31717883924335,
            "hasRDI": true,
            "daily": 402.6343576784867,
            "unit": "g"
          },
          {
            "label": "Cholesterol",
            "tag": "CHOLE",
            "schemaOrgTag": "cholesterolContent",
            "total": 995.6352521499999,
            "hasRDI": true,
            "daily": 331.87841738333327,
            "unit": "mg"
          },
          {
            "label": "Sodium",
            "tag": "NA",
            "schemaOrgTag": "sodiumContent",
            "total": 842.7276021457499,
            "hasRDI": true,
            "daily": 35.11365008940624,
            "unit": "mg"
          },
          {
            "label": "Calcium",
            "tag": "CA",
            "schemaOrgTag": null,
            "total": 355.5050817074875,
            "hasRDI": true,
            "daily": 35.55050817074875,
            "unit": "mg"
          },
          {
            "label": "Magnesium",
            "tag": "MG",
            "schemaOrgTag": null,
            "total": 351.4932391022875,
            "hasRDI": true,
            "daily": 83.6888664529256,
            "unit": "mg"
          },
          {
            "label": "Potassium",
            "tag": "K",
            "schemaOrgTag": null,
            "total": 4406.177840034463,
            "hasRDI": true,
            "daily": 93.74846468158431,
            "unit": "mg"
          },
          {
            "label": "Iron",
            "tag": "FE",
            "schemaOrgTag": null,
            "total": 15.879114547222873,
            "hasRDI": true,
            "daily": 88.21730304012708,
            "unit": "mg"
          },
          {
            "label": "Zinc",
            "tag": "ZN",
            "schemaOrgTag": null,
            "total": 15.423531746018373,
            "hasRDI": true,
            "daily": 140.21392496380338,
            "unit": "mg"
          },
          {
            "label": "Phosphorus",
            "tag": "P",
            "schemaOrgTag": null,
            "total": 1857.4282011256748,
            "hasRDI": true,
            "daily": 265.3468858750964,
            "unit": "mg"
          },
          {
            "label": "Vitamin A",
            "tag": "VITA_RAE",
            "schemaOrgTag": null,
            "total": 1244.2558209378878,
            "hasRDI": true,
            "daily": 138.25064677087644,
            "unit": "µg"
          },
          {
            "label": "Vitamin C",
            "tag": "VITC",
            "schemaOrgTag": null,
            "total": 181.20512309320003,
            "hasRDI": true,
            "daily": 201.33902565911114,
            "unit": "mg"
          },
          {
            "label": "Thiamin (B1)",
            "tag": "THIA",
            "schemaOrgTag": null,
            "total": 1.10401057036855,
            "hasRDI": true,
            "daily": 92.00088086404584,
            "unit": "mg"
          },
          {
            "label": "Riboflavin (B2)",
            "tag": "RIBF",
            "schemaOrgTag": null,
            "total": 1.49910335362925,
            "hasRDI": true,
            "daily": 115.31564258686538,
            "unit": "mg"
          },
          {
            "label": "Niacin (B3)",
            "tag": "NIA",
            "schemaOrgTag": null,
            "total": 73.78465732235121,
            "hasRDI": true,
            "daily": 461.154108264695,
            "unit": "mg"
          },
          {
            "label": "Vitamin B6",
            "tag": "VITB6A",
            "schemaOrgTag": null,
            "total": 5.381659273196787,
            "hasRDI": true,
            "daily": 413.9737902459066,
            "unit": "mg"
          },
          {
            "label": "Folate equivalent (total)",
            "tag": "FOLDFE",
            "schemaOrgTag": null,
            "total": 169.06825432126246,
            "hasRDI": true,
            "daily": 42.267063580315615,
            "unit": "µg"
          },
          {
            "label": "Folate (food)",
            "tag": "FOLFD",
            "schemaOrgTag": null,
            "total": 169.06825432126246,
            "hasRDI": false,
            "daily": 0.0,
            "unit": "µg"
          },
          {
            "label": "Folic acid",
            "tag": "FOLAC",
            "schemaOrgTag": null,
            "total": 0.0,
            "hasRDI": false,
            "daily": 0.0,
            "unit": "µg"
          },
          {
            "label": "Vitamin B12",
            "tag": "VITB12",
            "schemaOrgTag": null,
            "total": 3.3003380841199994,
            "hasRDI": true,
            "daily": 137.5140868383333,
            "unit": "µg"
          },
          {
            "label": "Vitamin D",
            "tag": "VITD",
            "schemaOrgTag": null,
            "total": 168.28276927000002,
            "hasRDI": true,
            "daily": 1121.8851284666669,
            "unit": "µg"
          },
          {
            "label": "Vitamin E",
            "tag": "TOCPHA",
            "schemaOrgTag": null,
            "total": 6.820770716549001,
            "hasRDI": true,
            "daily": 45.471804776993345,
            "unit": "mg"
          },
          {
            "label": "Vitamin K",
            "tag": "VITK1",
            "schemaOrgTag": null,
            "total": 99.21095766425125,
            "hasRDI": true,
            "daily": 82.6757980535427,
            "unit": "µg"
          },
          {
            "label": "Sugar alcohols",
            "tag": "Sugar.alcohol",
            "schemaOrgTag": null,
            "total": 0.0,
            "hasRDI": false,
            "daily": 0.0,
            "unit": "g"
          },
          {
            "label": "Water",
            "tag": "WATER",
            "schemaOrgTag": null,
            "total": 1190.0508236907247,
            "hasRDI": false,
            "daily": 0.0,
            "unit": "g"
          }
        ]
      },
      "bookmarked": false,
      "bought": false
    },
    {
      "recipe": {
        "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_7b35d1f154977914f6f5a9fedc52f8b2",
        "label": "Chicken Braised in Milk recipes",
        "image": "https://www.edamam.com/web-img/034/034738ccc6cb79b43373fd8ca705c68e",
        "source": "Not Without Salt",
        "url": "http://notwithoutsalt.com/chicken-braised-in-milk/",
        "shareAs": "http://www.edamam.com/recipe/chicken-braised-in-milk-recipes-7b35d1f154977914f6f5a9fedc52f8b2/chicken%2Cmilk",
        "yield": 4.0,
        "dietLabels": [

        ],
        "healthLabels": [
          "Peanut-Free",
          "Tree-Nut-Free",
          "Alcohol-Free"
        ],
        "cautions": [
          "Sulfites"
        ],
        "ingredientLines": [
          "One 3-pound (1 1/2-kilogram) chicken",
          "ground black pepper",
          "salt",
          "3 tablespoons butter or olive oil",
          "5 pieces of bacon, thinly sliced",
          "1 large shallot, roughly chopped",
          "1/4 cup fresh rosemary leaves",
          "Zest of 2 lemons, peeled in thick strips with a vegetable peeler",
          "10 garlic cloves, skins left on",
          "grated nutmeg",
          "2 cups whole milk",
          "1 – 2 pounds baby new potatoes"
        ],
        "ingredients": [
          {
            "text": "One 3-pound (1 1/2-kilogram) chicken",
            "weight": 1360.77711
          },
          {
            "text": "ground black pepper",
            "weight": 8.842396995000344
          },
          {
            "text": "salt",
            "weight": 17.68479399000069
          },
          {
            "text": "3 tablespoons butter or olive oil",
            "weight": 40.5
          },
          {
            "text": "5 pieces of bacon, thinly sliced",
            "weight": 145.0
          },
          {
            "text": "1 large shallot, roughly chopped",
            "weight": 80.0
          },
          {
            "text": "1/4 cup fresh rosemary leaves",
            "weight": 6.8000000001149665
          },
          {
            "text": "Zest of 2 lemons, peeled in thick strips with a vegetable peeler",
            "weight": 116.0
          },
          {
            "text": "10 garlic cloves, skins left on",
            "weight": 30.0
          },
          {
            "text": "grated nutmeg",
            "weight": 0.0
          },
          {
            "text": "2 cups whole milk",
            "weight": 488.0
          },
          {
            "text": "1 – 2 pounds baby new potatoes",
            "weight": 680.388555
          }
        ],
        "calories": 3940.7477386276005,
        "totalWeight": 2969.1961769002946,
        "totalTime": 75.0,
        "totalNutrients": {
          "ENERC_KCAL": {
            "label": "Energy",
            "quantity": 3940.7477386276005,
            "unit": "kcal"
          },
          "FAT": {
            "label": "Fat",
            "quantity": 255.14205412242376,
            "unit": "g"
          },
          "FASAT": {
            "label": "Saturated",
            "quantity": 74.43280673035368,
            "unit": "g"
          },
          "FATRN": {
            "label": "Trans",
            "quantity": 1.090418581756,
            "unit": "g"
          },
          "FAMS": {
            "label": "Monounsaturated",
            "quantity": 116.72390241641439,
            "unit": "g"
          },
          "FAPU": {
            "label": "Polyunsaturated",
            "quantity": 45.111045644701136,
            "unit": "g"
          },
          "CHOCDF": {
            "label": "Carbs",
            "quantity": 185.37539343682653,
            "unit": "g"
          },
          "FIBTG": {
            "label": "Fiber",
            "quantity": 24.6024746497513,
            "unit": "g"
          },
          "SUGAR": {
            "label": "Sugars",
            "quantity": 40.953622069767995,
            "unit": "g"
          },
          "PROCNT": {
            "label": "Protein",
            "quantity": 225.85374273158433,
            "unit": "g"
          },
          "CHOLE": {
            "label": "Cholesterol",
            "quantity": 838.4963260999999,
            "unit": "mg"
          },
          "NA": {
            "label": "Sodium",
            "quantity": 6874.835272008404,
            "unit": "mg"
          },
          "CA": {
            "label": "Calcium",
            "quantity": 920.4087206934589,
            "unit": "mg"
          },
          "MG": {
            "label": "Magnesium",
            "quantity": 462.772434620607,
            "unit": "mg"
          },
          "K": {
            "label": "Potassium",
            "quantity": 6256.522063578737,
            "unit": "mg"
          },
          "FE": {
            "label": "Iron",
            "quantity": 18.12201416960927,
            "unit": "mg"
          },
          "ZN": {
            "label": "Zinc",
            "quantity": 18.53048194452675,
            "unit": "mg"
          },
          "P": {
            "label": "Phosphorus",
            "quantity": 2497.693262758176,
            "unit": "mg"
          },
          "VITA_RAE": {
            "label": "Vitamin A",
            "quantity": 633.2901054568179,
            "unit": "µg"
          },
          "VITC": {
            "label": "Vitamin C",
            "quantity": 227.56420029182505,
            "unit": "mg"
          },
          "THIA": {
            "label": "Thiamin (B1)",
            "quantity": 1.890585693634642,
            "unit": "mg"
          },
          "RIBF": {
            "label": "Riboflavin (B2)",
            "quantity": 2.3687407739511754,
            "unit": "mg"
          },
          "NIA": {
            "label": "Niacin (B3)",
            "quantity": 77.0181868181019,
            "unit": "mg"
          },
          "VITB6A": {
            "label": "Vitamin B6",
            "quantity": 6.595055134305836,
            "unit": "mg"
          },
          "FOLDFE": {
            "label": "Folate equivalent (total)",
            "quantity": 238.55708237727538,
            "unit": "µg"
          },
          "FOLFD": {
            "label": "Folate (food)",
            "quantity": 238.55708237727538,
            "unit": "µg"
          },
          "VITB12": {
            "label": "Vitamin B12",
            "quantity": 5.78951814788,
            "unit": "µg"
          },
          "VITD": {
            "label": "Vitamin D",
            "quantity": 364.61284348,
            "unit": "IU"
          },
          "TOCPHA": {
            "label": "Vitamin E",
            "quantity": 9.942835088648001,
            "unit": "mg"
          },
          "VITK1": {
            "label": "Vitamin K",
            "quantity": 68.27731294781557,
            "unit": "µg"
          },
          "WATER": {
            "label": "Water",
            "quantity": 1835.0336125569854,
            "unit": "g"
          }
        },
        "totalDaily": {
          "ENERC_KCAL": {
            "label": "Energy",
            "quantity": 197.03738693138,
            "unit": "%"
          },
          "FAT": {
            "label": "Fat",
            "quantity": 392.52623711142115,
            "unit": "%"
          },
          "FASAT": {
            "label": "Saturated",
            "quantity": 372.16403365176836,
            "unit": "%"
          },
          "CHOCDF": {
            "label": "Carbs",
            "quantity": 61.79179781227551,
            "unit": "%"
          },
          "FIBTG": {
            "label": "Fiber",
            "quantity": 98.4098985990052,
            "unit": "%"
          },
          "PROCNT": {
            "label": "Protein",
            "quantity": 451.7074854631686,
            "unit": "%"
          },
          "CHOLE": {
            "label": "Cholesterol",
            "quantity": 279.4987753666666,
            "unit": "%"
          },
          "NA": {
            "label": "Sodium",
            "quantity": 286.45146966701685,
            "unit": "%"
          },
          "CA": {
            "label": "Calcium",
            "quantity": 92.0408720693459,
            "unit": "%"
          },
          "MG": {
            "label": "Magnesium",
            "quantity": 110.18391300490643,
            "unit": "%"
          },
          "K": {
            "label": "Potassium",
            "quantity": 133.11749071444123,
            "unit": "%"
          },
          "FE": {
            "label": "Iron",
            "quantity": 100.67785649782928,
            "unit": "%"
          },
          "ZN": {
            "label": "Zinc",
            "quantity": 168.458926768425,
            "unit": "%"
          },
          "P": {
            "label": "Phosphorus",
            "quantity": 356.81332325116796,
            "unit": "%"
          },
          "VITA_RAE": {
            "label": "Vitamin A",
            "quantity": 70.36556727297976,
            "unit": "%"
          },
          "VITC": {
            "label": "Vitamin C",
            "quantity": 252.84911143536115,
            "unit": "%"
          },
          "THIA": {
            "label": "Thiamin (B1)",
            "quantity": 157.54880780288684,
            "unit": "%"
          },
          "RIBF": {
            "label": "Riboflavin (B2)",
            "quantity": 182.21082876547504,
            "unit": "%"
          },
          "NIA": {
            "label": "Niacin (B3)",
            "quantity": 481.36366761313684,
            "unit": "%"
          },
          "VITB6A": {
            "label": "Vitamin B6",
            "quantity": 507.3119334081412,
            "unit": "%"
          },
          "FOLDFE": {
            "label": "Folate equivalent (total)",
            "quantity": 59.639270594318845,
            "unit": "%"
          },
          "VITB12": {
            "label": "Vitamin B12",
            "quantity": 241.22992282833334,
            "unit": "%"
          },
          "VITD": {
            "label": "Vitamin D",
            "quantity": 2430.7522898666666,
            "unit": "%"
          },
          "TOCPHA": {
            "label": "Vitamin E",
            "quantity": 66.28556725765334,
            "unit": "%"
          },
          "VITK1": {
            "label": "Vitamin K",
            "quantity": 56.89776078984631,
            "unit": "%"
          }
        },
        "digest": [
          {
            "label": "Fat",
            "tag": "FAT",
            "schemaOrgTag": "fatContent",
            "total": 255.14205412242376,
            "hasRDI": true,
            "daily": 392.52623711142115,
            "unit": "g",
            "sub": [
              {
                "label": "Saturated",
                "tag": "FASAT",
                "schemaOrgTag": "saturatedFatContent",
                "total": 74.43280673035368,
                "hasRDI": true,
                "daily": 372.16403365176836,
                "unit": "g"
              },
              {
                "label": "Trans",
                "tag": "FATRN",
                "schemaOrgTag": "transFatContent",
                "total": 1.090418581756,
                "hasRDI": false,
                "daily": 0.0,
                "unit": "g"
              },
              {
                "label": "Monounsaturated",
                "tag": "FAMS",
                "schemaOrgTag": null,
                "total": 116.72390241641439,
                "hasRDI": false,
                "daily": 0.0,
                "unit": "g"
              },
              {
                "label": "Polyunsaturated",
                "tag": "FAPU",
                "schemaOrgTag": null,
                "total": 45.111045644701136,
                "hasRDI": false,
                "daily": 0.0,
                "unit": "g"
              }
            ]
          },
          {
            "label": "Carbs",
            "tag": "CHOCDF",
            "schemaOrgTag": "carbohydrateContent",
            "total": 185.37539343682653,
            "hasRDI": true,
            "daily": 61.79179781227551,
            "unit": "g",
            "sub": [
              {
                "label": "Carbs (net)",
                "tag": "CHOCDF.net",
                "schemaOrgTag": null,
                "total": 160.77291878707524,
                "hasRDI": false,
                "daily": 0.0,
                "unit": "g"
              },
              {
                "label": "Fiber",
                "tag": "FIBTG",
                "schemaOrgTag": "fiberContent",
                "total": 24.6024746497513,
                "hasRDI": true,
                "daily": 98.4098985990052,
                "unit": "g"
              },
              {
                "label": "Sugars",
                "tag": "SUGAR",
                "schemaOrgTag": "sugarContent",
                "total": 40.953622069767995,
                "hasRDI": false,
                "daily": 0.0,
                "unit": "g"
              },
              {
                "label": "Sugars, added",
                "tag": "SUGAR.added",
                "schemaOrgTag": null,
                "total": 0.0,
                "hasRDI": false,
                "daily": 0.0,
                "unit": "g"
              }
            ]
          },
          {
            "label": "Protein",
            "tag": "PROCNT",
            "schemaOrgTag": "proteinContent",
            "total": 225.85374273158433,
            "hasRDI": true,
            "daily": 451.7074854631686,
            "unit": "g"
          },
          {
            "label": "Cholesterol",
            "tag": "CHOLE",
            "schemaOrgTag": "cholesterolContent",
            "total": 838.4963260999999,
            "hasRDI": true,
            "daily": 279.4987753666666,
            "unit": "mg"
          },
          {
            "label": "Sodium",
            "tag": "NA",
            "schemaOrgTag": "sodiumContent",
            "total": 6874.835272008404,
            "hasRDI": true,
            "daily": 286.45146966701685,
            "unit": "mg"
          },
          {
            "label": "Calcium",
            "tag": "CA",
            "schemaOrgTag": null,
            "total": 920.4087206934589,
            "hasRDI": true,
            "daily": 92.0408720693459,
            "unit": "mg"
          },
          {
            "label": "Magnesium",
            "tag": "MG",
            "schemaOrgTag": null,
            "total": 462.772434620607,
            "hasRDI": true,
            "daily": 110.18391300490643,
            "unit": "mg"
          },
          {
            "label": "Potassium",
            "tag": "K",
            "schemaOrgTag": null,
            "total": 6256.522063578737,
            "hasRDI": true,
            "daily": 133.11749071444123,
            "unit": "mg"
          },
          {
            "label": "Iron",
            "tag": "FE",
            "schemaOrgTag": null,
            "total": 18.12201416960927,
            "hasRDI": true,
            "daily": 100.67785649782928,
            "unit": "mg"
          },
          {
            "label": "Zinc",
            "tag": "ZN",
            "schemaOrgTag": null,
            "total": 18.53048194452675,
            "hasRDI": true,
            "daily": 168.458926768425,
            "unit": "mg"
          },
          {
            "label": "Phosphorus",
            "tag": "P",
            "schemaOrgTag": null,
            "total": 2497.693262758176,
            "hasRDI": true,
            "daily": 356.81332325116796,
            "unit": "mg"
          },
          {
            "label": "Vitamin A",
            "tag": "VITA_RAE",
            "schemaOrgTag": null,
            "total": 633.2901054568179,
            "hasRDI": true,
            "daily": 70.36556727297976,
            "unit": "µg"
          },
          {
            "label": "Vitamin C",
            "tag": "VITC",
            "schemaOrgTag": null,
            "total": 227.56420029182505,
            "hasRDI": true,
            "daily": 252.84911143536115,
            "unit": "mg"
          },
          {
            "label": "Thiamin (B1)",
            "tag": "THIA",
            "schemaOrgTag": null,
            "total": 1.890585693634642,
            "hasRDI": true,
            "daily": 157.54880780288684,
            "unit": "mg"
          },
          {
            "label": "Riboflavin (B2)",
            "tag": "RIBF",
            "schemaOrgTag": null,
            "total": 2.3687407739511754,
            "hasRDI": true,
            "daily": 182.21082876547504,
            "unit": "mg"
          },
          {
            "label": "Niacin (B3)",
            "tag": "NIA",
            "schemaOrgTag": null,
            "total": 77.0181868181019,
            "hasRDI": true,
            "daily": 481.36366761313684,
            "unit": "mg"
          },
          {
            "label": "Vitamin B6",
            "tag": "VITB6A",
            "schemaOrgTag": null,
            "total": 6.595055134305836,
            "hasRDI": true,
            "daily": 507.3119334081412,
            "unit": "mg"
          },
          {
            "label": "Folate equivalent (total)",
            "tag": "FOLDFE",
            "schemaOrgTag": null,
            "total": 238.55708237727538,
            "hasRDI": true,
            "daily": 59.639270594318845,
            "unit": "µg"
          },
          {
            "label": "Folate (food)",
            "tag": "FOLFD",
            "schemaOrgTag": null,
            "total": 238.55708237727538,
            "hasRDI": false,
            "daily": 0.0,
            "unit": "µg"
          },
          {
            "label": "Folic acid",
            "tag": "FOLAC",
            "schemaOrgTag": null,
            "total": 0.0,
            "hasRDI": false,
            "daily": 0.0,
            "unit": "µg"
          },
          {
            "label": "Vitamin B12",
            "tag": "VITB12",
            "schemaOrgTag": null,
            "total": 5.78951814788,
            "hasRDI": true,
            "daily": 241.22992282833334,
            "unit": "µg"
          },
          {
            "label": "Vitamin D",
            "tag": "VITD",
            "schemaOrgTag": null,
            "total": 364.61284348,
            "hasRDI": true,
            "daily": 2430.7522898666666,
            "unit": "µg"
          },
          {
            "label": "Vitamin E",
            "tag": "TOCPHA",
            "schemaOrgTag": null,
            "total": 9.942835088648001,
            "hasRDI": true,
            "daily": 66.28556725765334,
            "unit": "mg"
          },
          {
            "label": "Vitamin K",
            "tag": "VITK1",
            "schemaOrgTag": null,
            "total": 68.27731294781557,
            "hasRDI": true,
            "daily": 56.89776078984631,
            "unit": "µg"
          },
          {
            "label": "Sugar alcohols",
            "tag": "Sugar.alcohol",
            "schemaOrgTag": null,
            "total": 0.0,
            "hasRDI": false,
            "daily": 0.0,
            "unit": "g"
          },
          {
            "label": "Water",
            "tag": "WATER",
            "schemaOrgTag": null,
            "total": 1835.0336125569854,
            "hasRDI": false,
            "daily": 0.0,
            "unit": "g"
          }
        ]
      },
      "bookmarked": false,
      "bought": false
    },
    {
      "recipe": {
        "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_1a6f30e3250d96b8f401dabb79537a49",
        "label": "Chicken In Milk Recipe",
        "image": "https://www.edamam.com/web-img/c01/c0146d062d29d3082a0b7408c99c3d69.jpg",
        "source": "Jamie Oliver",
        "url": "http://www.jamieoliver.com/recipes/chicken-recipes/chicken-in-milk-2",
        "shareAs": "http://www.edamam.com/recipe/chicken-in-milk-recipe-1a6f30e3250d96b8f401dabb79537a49/chicken%2Cmilk",
        "yield": 288.0,
        "dietLabels": [

        ],
        "healthLabels": [
          "Peanut-Free",
          "Tree-Nut-Free",
          "Alcohol-Free"
        ],
        "cautions": [
          "Sulfites"
        ],
        "ingredientLines": [
          "olive oil",
          "1 good handful of fresh sage leaves picked",
          "sea salt and freshly ground black pepper",
          "1/2 cinnamon stick",
          "10 cloves of garlic skin left on",
          "565 ml 1 pint milk",
          "115 g 4oz or a pack of butter",
          "zest of 2 lemons",
          "1 x 1 5k 3 lb organic chicken"
        ],
        "ingredients": [
          {
            "text": "olive oil",
            "weight": 3759.7457362320038
          },
          {
            "text": "1 good handful of fresh sage leaves picked",
            "weight": 16.00000000027051
          },
          {
            "text": "sea salt and freshly ground black pepper",
            "weight": 0.0
          },
          {
            "text": "sea salt and freshly ground black pepper",
            "weight": 829.3556771100009
          },
          {
            "text": "1/2 cinnamon stick",
            "weight": 1.3
          },
          {
            "text": "10 cloves of garlic skin left on",
            "weight": 30.0
          },
          {
            "text": "565 ml 1 pint milk",
            "weight": 275720.0
          },
          {
            "text": "115 g 4oz or a pack of butter",
            "weight": 115.0
          },
          {
            "text": "zest of 2 lemons",
            "weight": 116.0
          },
          {
            "text": "1 x 1 5k 3 lb organic chicken",
            "weight": 453.59237
          }
        ],
        "calories": 205126.6881027779,
        "totalWeight": 281040.9937833423,
        "totalTime": 0.0,
        "totalNutrients": {
          "ENERC_KCAL": {
            "label": "Energy",
            "quantity": 205126.6881027779,
            "unit": "kcal"
          },
          "FAT": {
            "label": "Fat",
            "quantity": 12889.964838732787,
            "unit": "g"
          },
          "FASAT": {
            "label": "Saturated",
            "quantity": 5746.436632464266,
            "unit": "g"
          },
          "FATRN": {
            "label": "Trans",
            "quantity": 4.068889527252001,
            "unit": "g"
          },
          "FAMS": {
            "label": "Monounsaturated",
            "quantity": 5031.86286450992,
            "unit": "g"
          },
          "FAPU": {
            "label": "Polyunsaturated",
            "quantity": 955.4915902959365,
            "unit": "g"
          },
          "CHOCDF": {
            "label": "Carbs",
            "quantity": 13796.49562551201,
            "unit": "g"
          },
          "FIBTG": {
            "label": "Fiber",
            "quantity": 220.84328630893924,
            "unit": "g"
          },
          "SUGAR": {
            "label": "Sugars",
            "quantity": 13932.738686333509,
            "unit": "g"
          },
          "PROCNT": {
            "label": "Protein",
            "quantity": 8834.634587809358,
            "unit": "g"
          },
          "CHOLE": {
            "label": "Cholesterol",
            "quantity": 28050.582108700004,
            "unit": "mg"
          },
          "NA": {
            "label": "Sodium",
            "quantity": 119038.53601826668,
            "unit": "mg"
          },
          "CA": {
            "label": "Calcium",
            "quantity": 315698.5778162401,
            "unit": "mg"
          },
          "MG": {
            "label": "Magnesium",
            "quantity": 29140.226770179263,
            "unit": "mg"
          },
          "K": {
            "label": "Potassium",
            "quantity": 376077.87432008114,
            "unit": "mg"
          },
          "FE": {
            "label": "Iron",
            "quantity": 192.91335767475638,
            "unit": "mg"
          },
          "ZN": {
            "label": "Zinc",
            "quantity": 1035.3708233895818,
            "unit": "mg"
          },
          "P": {
            "label": "Phosphorus",
            "quantity": 233476.04490288606,
            "unit": "mg"
          },
          "VITA_RAE": {
            "label": "Vitamin A",
            "quantity": 128016.74258557652,
            "unit": "µg"
          },
          "VITC": {
            "label": "Vitamin C",
            "quantity": 81.00848498568764,
            "unit": "mg"
          },
          "THIA": {
            "label": "Thiamin (B1)",
            "quantity": 128.14504581824085,
            "unit": "mg"
          },
          "RIBF": {
            "label": "Riboflavin (B2)",
            "quantity": 467.979364592719,
            "unit": "mg"
          },
          "NIA": {
            "label": "Niacin (B3)",
            "quantity": 277.15434700629874,
            "unit": "mg"
          },
          "VITB6A": {
            "label": "Vitamin B6",
            "quantity": 103.65137886099738,
            "unit": "mg"
          },
          "FOLDFE": {
            "label": "Folate equivalent (total)",
            "quantity": 14006.525033805445,
            "unit": "µg"
          },
          "FOLFD": {
            "label": "Folate (food)",
            "quantity": 14006.525033805445,
            "unit": "µg"
          },
          "VITB12": {
            "label": "Vitamin B12",
            "quantity": 1241.8916727159603,
            "unit": "µg"
          },
          "VITD": {
            "label": "Vitamin D",
            "quantity": 140717.04428116002,
            "unit": "IU"
          },
          "TOCPHA": {
            "label": "Vitamin E",
            "quantity": 746.1711006260568,
            "unit": "mg"
          },
          "VITK1": {
            "label": "Vitamin K",
            "quantity": 4736.094418819376,
            "unit": "µg"
          },
          "WATER": {
            "label": "Water",
            "quantity": 243441.74806874277,
            "unit": "g"
          }
        },
        "totalDaily": {
          "ENERC_KCAL": {
            "label": "Energy",
            "quantity": 10256.334405138896,
            "unit": "%"
          },
          "FAT": {
            "label": "Fat",
            "quantity": 19830.71513651198,
            "unit": "%"
          },
          "FASAT": {
            "label": "Saturated",
            "quantity": 28732.18316232133,
            "unit": "%"
          },
          "CHOCDF": {
            "label": "Carbs",
            "quantity": 4598.83187517067,
            "unit": "%"
          },
          "FIBTG": {
            "label": "Fiber",
            "quantity": 883.373145235757,
            "unit": "%"
          },
          "PROCNT": {
            "label": "Protein",
            "quantity": 17669.269175618716,
            "unit": "%"
          },
          "CHOLE": {
            "label": "Cholesterol",
            "quantity": 9350.194036233335,
            "unit": "%"
          },
          "NA": {
            "label": "Sodium",
            "quantity": 4959.939000761112,
            "unit": "%"
          },
          "CA": {
            "label": "Calcium",
            "quantity": 31569.857781624007,
            "unit": "%"
          },
          "MG": {
            "label": "Magnesium",
            "quantity": 6938.149230995063,
            "unit": "%"
          },
          "K": {
            "label": "Potassium",
            "quantity": 8001.656900427259,
            "unit": "%"
          },
          "FE": {
            "label": "Iron",
            "quantity": 1071.7408759708687,
            "unit": "%"
          },
          "ZN": {
            "label": "Zinc",
            "quantity": 9412.46203081438,
            "unit": "%"
          },
          "P": {
            "label": "Phosphorus",
            "quantity": 33353.7207004123,
            "unit": "%"
          },
          "VITA_RAE": {
            "label": "Vitamin A",
            "quantity": 14224.082509508502,
            "unit": "%"
          },
          "VITC": {
            "label": "Vitamin C",
            "quantity": 90.00942776187516,
            "unit": "%"
          },
          "THIA": {
            "label": "Thiamin (B1)",
            "quantity": 10678.753818186738,
            "unit": "%"
          },
          "RIBF": {
            "label": "Riboflavin (B2)",
            "quantity": 35998.412660978385,
            "unit": "%"
          },
          "NIA": {
            "label": "Niacin (B3)",
            "quantity": 1732.2146687893671,
            "unit": "%"
          },
          "VITB6A": {
            "label": "Vitamin B6",
            "quantity": 7973.18298930749,
            "unit": "%"
          },
          "FOLDFE": {
            "label": "Folate equivalent (total)",
            "quantity": 3501.631258451361,
            "unit": "%"
          },
          "VITB12": {
            "label": "Vitamin B12",
            "quantity": 51745.486363165015,
            "unit": "%"
          },
          "VITD": {
            "label": "Vitamin D",
            "quantity": 938113.6285410669,
            "unit": "%"
          },
          "TOCPHA": {
            "label": "Vitamin E",
            "quantity": 4974.474004173712,
            "unit": "%"
          },
          "VITK1": {
            "label": "Vitamin K",
            "quantity": 3946.745349016147,
            "unit": "%"
          }
        },
        "digest": [
          {
            "label": "Fat",
            "tag": "FAT",
            "schemaOrgTag": "fatContent",
            "total": 12889.964838732787,
            "hasRDI": true,
            "daily": 19830.71513651198,
            "unit": "g",
            "sub": [
              {
                "label": "Saturated",
                "tag": "FASAT",
                "schemaOrgTag": "saturatedFatContent",
                "total": 5746.436632464266,
                "hasRDI": true,
                "daily": 28732.18316232133,
                "unit": "g"
              },
              {
                "label": "Trans",
                "tag": "FATRN",
                "schemaOrgTag": "transFatContent",
                "total": 4.068889527252001,
                "hasRDI": false,
                "daily": 0.0,
                "unit": "g"
              },
              {
                "label": "Monounsaturated",
                "tag": "FAMS",
                "schemaOrgTag": null,
                "total": 5031.86286450992,
                "hasRDI": false,
                "daily": 0.0,
                "unit": "g"
              },
              {
                "label": "Polyunsaturated",
                "tag": "FAPU",
                "schemaOrgTag": null,
                "total": 955.4915902959365,
                "hasRDI": false,
                "daily": 0.0,
                "unit": "g"
              }
            ]
          },
          {
            "label": "Carbs",
            "tag": "CHOCDF",
            "schemaOrgTag": "carbohydrateContent",
            "total": 13796.49562551201,
            "hasRDI": true,
            "daily": 4598.83187517067,
            "unit": "g",
            "sub": [
              {
                "label": "Carbs (net)",
                "tag": "CHOCDF.net",
                "schemaOrgTag": null,
                "total": 13575.652339203072,
                "hasRDI": false,
                "daily": 0.0,
                "unit": "g"
              },
              {
                "label": "Fiber",
                "tag": "FIBTG",
                "schemaOrgTag": "fiberContent",
                "total": 220.84328630893924,
                "hasRDI": true,
                "daily": 883.373145235757,
                "unit": "g"
              },
              {
                "label": "Sugars",
                "tag": "SUGAR",
                "schemaOrgTag": "sugarContent",
                "total": 13932.738686333509,
                "hasRDI": false,
                "daily": 0.0,
                "unit": "g"
              },
              {
                "label": "Sugars, added",
                "tag": "SUGAR.added",
                "schemaOrgTag": null,
                "total": 0.0,
                "hasRDI": false,
                "daily": 0.0,
                "unit": "g"
              }
            ]
          },
          {
            "label": "Protein",
            "tag": "PROCNT",
            "schemaOrgTag": "proteinContent",
            "total": 8834.634587809358,
            "hasRDI": true,
            "daily": 17669.269175618716,
            "unit": "g"
          },
          {
            "label": "Cholesterol",
            "tag": "CHOLE",
            "schemaOrgTag": "cholesterolContent",
            "total": 28050.582108700004,
            "hasRDI": true,
            "daily": 9350.194036233335,
            "unit": "mg"
          },
          {
            "label": "Sodium",
            "tag": "NA",
            "schemaOrgTag": "sodiumContent",
            "total": 119038.53601826668,
            "hasRDI": true,
            "daily": 4959.939000761112,
            "unit": "mg"
          },
          {
            "label": "Calcium",
            "tag": "CA",
            "schemaOrgTag": null,
            "total": 315698.5778162401,
            "hasRDI": true,
            "daily": 31569.857781624007,
            "unit": "mg"
          },
          {
            "label": "Magnesium",
            "tag": "MG",
            "schemaOrgTag": null,
            "total": 29140.226770179263,
            "hasRDI": true,
            "daily": 6938.149230995063,
            "unit": "mg"
          },
          {
            "label": "Potassium",
            "tag": "K",
            "schemaOrgTag": null,
            "total": 376077.87432008114,
            "hasRDI": true,
            "daily": 8001.656900427259,
            "unit": "mg"
          },
          {
            "label": "Iron",
            "tag": "FE",
            "schemaOrgTag": null,
            "total": 192.91335767475638,
            "hasRDI": true,
            "daily": 1071.7408759708687,
            "unit": "mg"
          },
          {
            "label": "Zinc",
            "tag": "ZN",
            "schemaOrgTag": null,
            "total": 1035.3708233895818,
            "hasRDI": true,
            "daily": 9412.46203081438,
            "unit": "mg"
          },
          {
            "label": "Phosphorus",
            "tag": "P",
            "schemaOrgTag": null,
            "total": 233476.04490288606,
            "hasRDI": true,
            "daily": 33353.7207004123,
            "unit": "mg"
          },
          {
            "label": "Vitamin A",
            "tag": "VITA_RAE",
            "schemaOrgTag": null,
            "total": 128016.74258557652,
            "hasRDI": true,
            "daily": 14224.082509508502,
            "unit": "µg"
          },
          {
            "label": "Vitamin C",
            "tag": "VITC",
            "schemaOrgTag": null,
            "total": 81.00848498568764,
            "hasRDI": true,
            "daily": 90.00942776187516,
            "unit": "mg"
          },
          {
            "label": "Thiamin (B1)",
            "tag": "THIA",
            "schemaOrgTag": null,
            "total": 128.14504581824085,
            "hasRDI": true,
            "daily": 10678.753818186738,
            "unit": "mg"
          },
          {
            "label": "Riboflavin (B2)",
            "tag": "RIBF",
            "schemaOrgTag": null,
            "total": 467.979364592719,
            "hasRDI": true,
            "daily": 35998.412660978385,
            "unit": "mg"
          },
          {
            "label": "Niacin (B3)",
            "tag": "NIA",
            "schemaOrgTag": null,
            "total": 277.15434700629874,
            "hasRDI": true,
            "daily": 1732.2146687893671,
            "unit": "mg"
          },
          {
            "label": "Vitamin B6",
            "tag": "VITB6A",
            "schemaOrgTag": null,
            "total": 103.65137886099738,
            "hasRDI": true,
            "daily": 7973.18298930749,
            "unit": "mg"
          },
          {
            "label": "Folate equivalent (total)",
            "tag": "FOLDFE",
            "schemaOrgTag": null,
            "total": 14006.525033805445,
            "hasRDI": true,
            "daily": 3501.631258451361,
            "unit": "µg"
          },
          {
            "label": "Folate (food)",
            "tag": "FOLFD",
            "schemaOrgTag": null,
            "total": 14006.525033805445,
            "hasRDI": false,
            "daily": 0.0,
            "unit": "µg"
          },
          {
            "label": "Folic acid",
            "tag": "FOLAC",
            "schemaOrgTag": null,
            "total": 0.0,
            "hasRDI": false,
            "daily": 0.0,
            "unit": "µg"
          },
          {
            "label": "Vitamin B12",
            "tag": "VITB12",
            "schemaOrgTag": null,
            "total": 1241.8916727159603,
            "hasRDI": true,
            "daily": 51745.486363165015,
            "unit": "µg"
          },
          {
            "label": "Vitamin D",
            "tag": "VITD",
            "schemaOrgTag": null,
            "total": 140717.04428116002,
            "hasRDI": true,
            "daily": 938113.6285410669,
            "unit": "µg"
          },
          {
            "label": "Vitamin E",
            "tag": "TOCPHA",
            "schemaOrgTag": null,
            "total": 746.1711006260568,
            "hasRDI": true,
            "daily": 4974.474004173712,
            "unit": "mg"
          },
          {
            "label": "Vitamin K",
            "tag": "VITK1",
            "schemaOrgTag": null,
            "total": 4736.094418819376,
            "hasRDI": true,
            "daily": 3946.745349016147,
            "unit": "µg"
          },
          {
            "label": "Sugar alcohols",
            "tag": "Sugar.alcohol",
            "schemaOrgTag": null,
            "total": 0.0,
            "hasRDI": false,
            "daily": 0.0,
            "unit": "g"
          },
          {
            "label": "Water",
            "tag": "WATER",
            "schemaOrgTag": null,
            "total": 243441.74806874277,
            "hasRDI": false,
            "daily": 0.0,
            "unit": "g"
          }
        ]
      },
      "bookmarked": false,
      "bought": false
    },
    {
      "recipe": {
        "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_64a0b530db9f277bc081eef86fda306e",
        "label": "Indian Chicken With Coconut Milk",
        "image": "https://www.edamam.com/web-img/873/873d09161f6847aadd22f8c17f3b9e01.jpg",
        "source": "Fine Cooking",
        "url": "http://www.finecooking.com/recipes/Indian_chicken_coconut_milk.aspx",
        "shareAs": "http://www.edamam.com/recipe/indian-chicken-with-coconut-milk-64a0b530db9f277bc081eef86fda306e/chicken%2Cmilk",
        "yield": 4.0,
        "dietLabels": [
          "Low-Carb"
        ],
        "healthLabels": [
          "Sugar-Conscious",
          "Peanut-Free",
          "Alcohol-Free"
        ],
        "cautions": [
          "Tree-Nuts",
          "Sulfites",
          "FODMAP"
        ],
        "ingredientLines": [
          "1 medium onion, thinly sliced",
          "1-1/2 Tbs. curry powder",
          "1/3 cup roasted cashew halves",
          "1 or 2 serrano chiles or 3 small jalapeños, cored, seeded, and finely chopped",
          "3/4 cup homemade or low-salt canned chicken stock",
          "3 Tbs. coarsely chopped cilantro leaves",
          "1 Tbs. finely chopped fresh ginger",
          "Salt and freshly ground black pepper",
          "2 Tbs. ghee, clarified butter, or butter and oil",
          "4-lb. chicken, cut into 6 pieces (or 3-1/2 to 4 lb. chicken pieces)",
          "1 cup coconut milk (canned is fine)",
          "2 cloves garlic, chopped"
        ],
        "ingredients": [
          {
            "text": "1 medium onion, thinly sliced",
            "weight": 110.0
          },
          {
            "text": "1-1/2 Tbs. curry powder",
            "weight": 9.45
          },
          {
            "text": "1/3 cup roasted cashew halves",
            "weight": 46.666666666666664
          },
          {
            "text": "1 or 2 serrano chiles or 3 small jalapeños, cored, seeded, and finely chopped",
            "weight": 9.149999999999999
          },
          {
            "text": "3/4 cup homemade or low-salt canned chicken stock",
            "weight": 186.75
          },
          {
            "text": "3 Tbs. coarsely chopped cilantro leaves",
            "weight": 9.0
          },
          {
            "text": "1 Tbs. finely chopped fresh ginger",
            "weight": 6.0
          },
          {
            "text": "Salt and freshly ground black pepper",
            "weight": 15.18591688
          },
          {
            "text": "Salt and freshly ground black pepper",
            "weight": 7.59295844
          },
          {
            "text": "2 Tbs. ghee, clarified butter, or butter and oil",
            "weight": 25.6
          },
          {
            "text": "2 Tbs. ghee, clarified butter, or butter and oil",
            "weight": 25.6
          },
          {
            "text": "2 Tbs. ghee, clarified butter, or butter and oil",
            "weight": 28.4
          },
          {
            "text": "2 Tbs. ghee, clarified butter, or butter and oil",
            "weight": 28.0
          },
          {
            "text": "4-lb. chicken, cut into 6 pieces (or 3-1/2 to 4 lb. chicken pieces)",
            "weight": 1814.36948
          },
          {
            "text": "1 cup coconut milk (canned is fine)",
            "weight": 226.0
          },
          {
            "text": "2 cloves garlic, chopped",
            "weight": 6.0
          }
        ],
        "calories": 5627.554874351067,
        "totalWeight": 2548.5994833760706,
        "totalTime": 0.0,
        "totalNutrients": {
          "ENERC_KCAL": {
            "label": "Energy",
            "quantity": 5627.554874351067,
            "unit": "kcal"
          },
          "FAT": {
            "label": "Fat",
            "quantity": 446.1178874664774,
            "unit": "g"
          },
          "FASAT": {
            "label": "Saturated",
            "quantity": 173.29117723615144,
            "unit": "g"
          },
          "FATRN": {
            "label": "Trans",
            "quantity": 2.8014903956,
            "unit": "g"
          },
          "FAMS": {
            "label": "Monounsaturated",
            "quantity": 165.7423181815383,
            "unit": "g"
          },
          "FAPU": {
            "label": "Polyunsaturated",
            "quantity": 73.8751844292312,
            "unit": "g"
          },
          "CHOCDF": {
            "label": "Carbs",
            "quantity": 45.67678858904667,
            "unit": "g"
          },
          "FIBTG": {
            "label": "Fiber",
            "quantity": 11.194968485319999,
            "unit": "g"
          },
          "SUGAR": {
            "label": "Sugars",
            "quantity": 9.142224934016001,
            "unit": "g"
          },
          "PROCNT": {
            "label": "Protein",
            "quantity": 356.31157332858277,
            "unit": "g"
          },
          "CHOLE": {
            "label": "Cholesterol",
            "quantity": 1556.6441100000002,
            "unit": "mg"
          },
          "NA": {
            "label": "Sodium",
            "quantity": 5903.414937343453,
            "unit": "mg"
          },
          "CA": {
            "label": "Calcium",
            "quantity": 403.6720061405236,
            "unit": "mg"
          },
          "MG": {
            "label": "Magnesium",
            "quantity": 662.1507253817608,
            "unit": "mg"
          },
          "K": {
            "label": "Potassium",
            "quantity": 4773.983865129153,
            "unit": "mg"
          },
          "FE": {
            "label": "Iron",
            "quantity": 30.223347166146365,
            "unit": "mg"
          },
          "ZN": {
            "label": "Zinc",
            "quantity": 28.78289510503874,
            "unit": "mg"
          },
          "P": {
            "label": "Phosphorus",
            "quantity": 3274.4168432685333,
            "unit": "mg"
          },
          "VITA_RAE": {
            "label": "Vitamin A",
            "quantity": 1405.0025855787999,
            "unit": "µg"
          },
          "VITC": {
            "label": "Vitamin C",
            "quantity": 48.43974501333334,
            "unit": "mg"
          },
          "THIA": {
            "label": "Thiamin (B1)",
            "quantity": 1.4767945831152,
            "unit": "mg"
          },
          "RIBF": {
            "label": "Riboflavin (B2)",
            "quantity": 2.419607367858667,
            "unit": "mg"
          },
          "NIA": {
            "label": "Niacin (B3)",
            "quantity": 126.60328784976923,
            "unit": "mg"
          },
          "VITB6A": {
            "label": "Vitamin B6",
            "quantity": 6.9168726890603995,
            "unit": "mg"
          },
          "FOLDFE": {
            "label": "Folate equivalent (total)",
            "quantity": 189.0281384014667,
            "unit": "µg"
          },
          "FOLFD": {
            "label": "Folate (food)",
            "quantity": 189.0281384014667,
            "unit": "µg"
          },
          "VITB12": {
            "label": "Vitamin B12",
            "quantity": 5.715295388,
            "unit": "µg"
          },
          "VITD": {
            "label": "Vitamin D",
            "quantity": 235.85294800000003,
            "unit": "IU"
          },
          "TOCPHA": {
            "label": "Vitamin E",
            "quantity": 15.713770207776001,
            "unit": "mg"
          },
          "VITK1": {
            "label": "Vitamin K",
            "quantity": 120.87254849961333,
            "unit": "µg"
          },
          "WATER": {
            "label": "Water",
            "quantity": 1676.9395998968293,
            "unit": "g"
          }
        },
        "totalDaily": {
          "ENERC_KCAL": {
            "label": "Energy",
            "quantity": 281.37774371755336,
            "unit": "%"
          },
          "FAT": {
            "label": "Fat",
            "quantity": 686.3352114868883,
            "unit": "%"
          },
          "FASAT": {
            "label": "Saturated",
            "quantity": 866.4558861807573,
            "unit": "%"
          },
          "CHOCDF": {
            "label": "Carbs",
            "quantity": 15.22559619634889,
            "unit": "%"
          },
          "FIBTG": {
            "label": "Fiber",
            "quantity": 44.779873941279995,
            "unit": "%"
          },
          "PROCNT": {
            "label": "Protein",
            "quantity": 712.6231466571655,
            "unit": "%"
          },
          "CHOLE": {
            "label": "Cholesterol",
            "quantity": 518.8813700000001,
            "unit": "%"
          },
          "NA": {
            "label": "Sodium",
            "quantity": 245.97562238931053,
            "unit": "%"
          },
          "CA": {
            "label": "Calcium",
            "quantity": 40.36720061405236,
            "unit": "%"
          },
          "MG": {
            "label": "Magnesium",
            "quantity": 157.65493461470496,
            "unit": "%"
          },
          "K": {
            "label": "Potassium",
            "quantity": 101.57412478998198,
            "unit": "%"
          },
          "FE": {
            "label": "Iron",
            "quantity": 167.9074842563687,
            "unit": "%"
          },
          "ZN": {
            "label": "Zinc",
            "quantity": 261.6626827730795,
            "unit": "%"
          },
          "P": {
            "label": "Phosphorus",
            "quantity": 467.7738347526476,
            "unit": "%"
          },
          "VITA_RAE": {
            "label": "Vitamin A",
            "quantity": 156.11139839764442,
            "unit": "%"
          },
          "VITC": {
            "label": "Vitamin C",
            "quantity": 53.82193890370371,
            "unit": "%"
          },
          "THIA": {
            "label": "Thiamin (B1)",
            "quantity": 123.0662152596,
            "unit": "%"
          },
          "RIBF": {
            "label": "Riboflavin (B2)",
            "quantity": 186.12364368143594,
            "unit": "%"
          },
          "NIA": {
            "label": "Niacin (B3)",
            "quantity": 791.2705490610576,
            "unit": "%"
          },
          "VITB6A": {
            "label": "Vitamin B6",
            "quantity": 532.067129927723,
            "unit": "%"
          },
          "FOLDFE": {
            "label": "Folate equivalent (total)",
            "quantity": 47.257034600366666,
            "unit": "%"
          },
          "VITB12": {
            "label": "Vitamin B12",
            "quantity": 238.13730783333338,
            "unit": "%"
          },
          "VITD": {
            "label": "Vitamin D",
            "quantity": 1572.352986666667,
            "unit": "%"
          },
          "TOCPHA": {
            "label": "Vitamin E",
            "quantity": 104.75846805184001,
            "unit": "%"
          },
          "VITK1": {
            "label": "Vitamin K",
            "quantity": 100.72712374967777,
            "unit": "%"
          }
        },
        "digest": [
          {
            "label": "Fat",
            "tag": "FAT",
            "schemaOrgTag": "fatContent",
            "total": 446.1178874664774,
            "hasRDI": true,
            "daily": 686.3352114868883,
            "unit": "g",
            "sub": [
              {
                "label": "Saturated",
                "tag": "FASAT",
                "schemaOrgTag": "saturatedFatContent",
                "total": 173.29117723615144,
                "hasRDI": true,
                "daily": 866.4558861807573,
                "unit": "g"
              },
              {
                "label": "Trans",
                "tag": "FATRN",
                "schemaOrgTag": "transFatContent",
                "total": 2.8014903956,
                "hasRDI": false,
                "daily": 0.0,
                "unit": "g"
              },
              {
                "label": "Monounsaturated",
                "tag": "FAMS",
                "schemaOrgTag": null,
                "total": 165.7423181815383,
                "hasRDI": false,
                "daily": 0.0,
                "unit": "g"
              },
              {
                "label": "Polyunsaturated",
                "tag": "FAPU",
                "schemaOrgTag": null,
                "total": 73.8751844292312,
                "hasRDI": false,
                "daily": 0.0,
                "unit": "g"
              }
            ]
          },
          {
            "label": "Carbs",
            "tag": "CHOCDF",
            "schemaOrgTag": "carbohydrateContent",
            "total": 45.67678858904667,
            "hasRDI": true,
            "daily": 15.22559619634889,
            "unit": "g",
            "sub": [
              {
                "label": "Carbs (net)",
                "tag": "CHOCDF.net",
                "schemaOrgTag": null,
                "total": 34.481820103726676,
                "hasRDI": false,
                "daily": 0.0,
                "unit": "g"
              },
              {
                "label": "Fiber",
                "tag": "FIBTG",
                "schemaOrgTag": "fiberContent",
                "total": 11.194968485319999,
                "hasRDI": true,
                "daily": 44.779873941279995,
                "unit": "g"
              },
              {
                "label": "Sugars",
                "tag": "SUGAR",
                "schemaOrgTag": "sugarContent",
                "total": 9.142224934016001,
                "hasRDI": false,
                "daily": 0.0,
                "unit": "g"
              },
              {
                "label": "Sugars, added",
                "tag": "SUGAR.added",
                "schemaOrgTag": null,
                "total": 0.0,
                "hasRDI": false,
                "daily": 0.0,
                "unit": "g"
              }
            ]
          },
          {
            "label": "Protein",
            "tag": "PROCNT",
            "schemaOrgTag": "proteinContent",
            "total": 356.31157332858277,
            "hasRDI": true,
            "daily": 712.6231466571655,
            "unit": "g"
          },
          {
            "label": "Cholesterol",
            "tag": "CHOLE",
            "schemaOrgTag": "cholesterolContent",
            "total": 1556.6441100000002,
            "hasRDI": true,
            "daily": 518.8813700000001,
            "unit": "mg"
          },
          {
            "label": "Sodium",
            "tag": "NA",
            "schemaOrgTag": "sodiumContent",
            "total": 5903.414937343453,
            "hasRDI": true,
            "daily": 245.97562238931053,
            "unit": "mg"
          },
          {
            "label": "Calcium",
            "tag": "CA",
            "schemaOrgTag": null,
            "total": 403.6720061405236,
            "hasRDI": true,
            "daily": 40.36720061405236,
            "unit": "mg"
          },
          {
            "label": "Magnesium",
            "tag": "MG",
            "schemaOrgTag": null,
            "total": 662.1507253817608,
            "hasRDI": true,
            "daily": 157.65493461470496,
            "unit": "mg"
          },
          {
            "label": "Potassium",
            "tag": "K",
            "schemaOrgTag": null,
            "total": 4773.983865129153,
            "hasRDI": true,
            "daily": 101.57412478998198,
            "unit": "mg"
          },
          {
            "label": "Iron",
            "tag": "FE",
            "schemaOrgTag": null,
            "total": 30.223347166146365,
            "hasRDI": true,
            "daily": 167.9074842563687,
            "unit": "mg"
          },
          {
            "label": "Zinc",
            "tag": "ZN",
            "schemaOrgTag": null,
            "total": 28.78289510503874,
            "hasRDI": true,
            "daily": 261.6626827730795,
            "unit": "mg"
          },
          {
            "label": "Phosphorus",
            "tag": "P",
            "schemaOrgTag": null,
            "total": 3274.4168432685333,
            "hasRDI": true,
            "daily": 467.7738347526476,
            "unit": "mg"
          },
          {
            "label": "Vitamin A",
            "tag": "VITA_RAE",
            "schemaOrgTag": null,
            "total": 1405.0025855787999,
            "hasRDI": true,
            "daily": 156.11139839764442,
            "unit": "µg"
          },
          {
            "label": "Vitamin C",
            "tag": "VITC",
            "schemaOrgTag": null,
            "total": 48.43974501333334,
            "hasRDI": true,
            "daily": 53.82193890370371,
            "unit": "mg"
          },
          {
            "label": "Thiamin (B1)",
            "tag": "THIA",
            "schemaOrgTag": null,
            "total": 1.4767945831152,
            "hasRDI": true,
            "daily": 123.0662152596,
            "unit": "mg"
          },
          {
            "label": "Riboflavin (B2)",
            "tag": "RIBF",
            "schemaOrgTag": null,
            "total": 2.419607367858667,
            "hasRDI": true,
            "daily": 186.12364368143594,
            "unit": "mg"
          },
          {
            "label": "Niacin (B3)",
            "tag": "NIA",
            "schemaOrgTag": null,
            "total": 126.60328784976923,
            "hasRDI": true,
            "daily": 791.2705490610576,
            "unit": "mg"
          },
          {
            "label": "Vitamin B6",
            "tag": "VITB6A",
            "schemaOrgTag": null,
            "total": 6.9168726890603995,
            "hasRDI": true,
            "daily": 532.067129927723,
            "unit": "mg"
          },
          {
            "label": "Folate equivalent (total)",
            "tag": "FOLDFE",
            "schemaOrgTag": null,
            "total": 189.0281384014667,
            "hasRDI": true,
            "daily": 47.257034600366666,
            "unit": "µg"
          },
          {
            "label": "Folate (food)",
            "tag": "FOLFD",
            "schemaOrgTag": null,
            "total": 189.0281384014667,
            "hasRDI": false,
            "daily": 0.0,
            "unit": "µg"
          },
          {
            "label": "Folic acid",
            "tag": "FOLAC",
            "schemaOrgTag": null,
            "total": 0.0,
            "hasRDI": false,
            "daily": 0.0,
            "unit": "µg"
          },
          {
            "label": "Vitamin B12",
            "tag": "VITB12",
            "schemaOrgTag": null,
            "total": 5.715295388,
            "hasRDI": true,
            "daily": 238.13730783333338,
            "unit": "µg"
          },
          {
            "label": "Vitamin D",
            "tag": "VITD",
            "schemaOrgTag": null,
            "total": 235.85294800000003,
            "hasRDI": true,
            "daily": 1572.352986666667,
            "unit": "µg"
          },
          {
            "label": "Vitamin E",
            "tag": "TOCPHA",
            "schemaOrgTag": null,
            "total": 15.713770207776001,
            "hasRDI": true,
            "daily": 104.75846805184001,
            "unit": "mg"
          },
          {
            "label": "Vitamin K",
            "tag": "VITK1",
            "schemaOrgTag": null,
            "total": 120.87254849961333,
            "hasRDI": true,
            "daily": 100.72712374967777,
            "unit": "µg"
          },
          {
            "label": "Sugar alcohols",
            "tag": "Sugar.alcohol",
            "schemaOrgTag": null,
            "total": 0.0,
            "hasRDI": false,
            "daily": 0.0,
            "unit": "g"
          },
          {
            "label": "Water",
            "tag": "WATER",
            "schemaOrgTag": null,
            "total": 1676.9395998968293,
            "hasRDI": false,
            "daily": 0.0,
            "unit": "g"
          }
        ]
      },
      "bookmarked": false,
      "bought": false
    },
    {
      "recipe": {
        "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_2556bf0e01309222100d73d9b8cbba69",
        "label": "Jamie Oliver's Chicken In Milk",
        "image": "https://www.edamam.com/web-img/11c/11c88407c007928f561be844f0e612b1.jpg",
        "source": "Food52",
        "url": "http://food52.com/recipes/32983-jamie-oliver-s-chicken-in-milk",
        "shareAs": "http://www.edamam.com/recipe/jamie-oliver-s-chicken-in-milk-2556bf0e01309222100d73d9b8cbba69/chicken%2Cmilk",
        "yield": 4.0,
        "dietLabels": [
          "Low-Carb"
        ],
        "healthLabels": [
          "Peanut-Free",
          "Tree-Nut-Free",
          "Alcohol-Free"
        ],
        "cautions": [
          "Sulfites"
        ],
        "ingredientLines": [
          "One 3-pound (1 1/2-kilogram) organic chicken",
          "Salt and freshly ground black pepper",
          "4 ounces (1 stick or 115 grams) butter or olive oil",
          "1/2 cinnamon stick",
          "1 good handful fresh sage, leaves picked",
          "Zest of 2 lemons, peeled in thick strips with a peeler",
          "10 garlic cloves, skins left on",
          "1 pint (565 milliliters) whole milk"
        ],
        "ingredients": [
          {
            "text": "One 3-pound (1 1/2-kilogram) organic chicken",
            "weight": 1360.77711
          },
          {
            "text": "Salt and freshly ground black pepper",
            "weight": 12.752851215001625
          },
          {
            "text": "Salt and freshly ground black pepper",
            "weight": 6.3764256075008126
          },
          {
            "text": "4 ounces (1 stick or 115 grams) butter or olive oil",
            "weight": 113.3980925
          },
          {
            "text": "1/2 cinnamon stick",
            "weight": 1.3
          },
          {
            "text": "1 good handful fresh sage, leaves picked",
            "weight": 16.00000000027051
          },
          {
            "text": "Zest of 2 lemons, peeled in thick strips with a peeler",
            "weight": 116.0
          },
          {
            "text": "10 garlic cloves, skins left on",
            "weight": 30.0
          },
          {
            "text": "1 pint (565 milliliters) whole milk",
            "weight": 488.0
          }
        ],
        "calories": 3437.531100795679,
        "totalWeight": 2142.3969482295543,
        "totalTime": 0.0,
        "totalNutrients": {
          "ENERC_KCAL": {
            "label": "Energy",
            "quantity": 3437.531100795679,
            "unit": "kcal"
          },
          "FAT": {
            "label": "Fat",
            "quantity": 271.37454625571905,
            "unit": "g"
          },
          "FASAT": {
            "label": "Saturated",
            "quantity": 65.93084899675543,
            "unit": "g"
          },
          "FATRN": {
            "label": "Trans",
            "quantity": 0.897568581756,
            "unit": "g"
          },
          "FAMS": {
            "label": "Monounsaturated",
            "quantity": 144.8050163856895,
            "unit": "g"
          },
          "FAPU": {
            "label": "Polyunsaturated",
            "quantity": 43.29665044538261,
            "unit": "g"
          },
          "CHOCDF": {
            "label": "Carbs",
            "quantity": 58.99539417616105,
            "unit": "g"
          },
          "FIBTG": {
            "label": "Fiber",
            "quantity": 12.629535678806722,
            "unit": "g"
          },
          "SUGAR": {
            "label": "Sugars",
            "quantity": 28.18661912389263,
            "unit": "g"
          },
          "PROCNT": {
            "label": "Protein",
            "quantity": 193.0822694934481,
            "unit": "g"
          },
          "CHOLE": {
            "label": "Cholesterol",
            "quantity": 742.7963260999999,
            "unit": "mg"
          },
          "NA": {
            "label": "Sodium",
            "quantity": 4957.578324132059,
            "unit": "mg"
          },
          "CA": {
            "label": "Calcium",
            "quantity": 1046.9445510279252,
            "unit": "mg"
          },
          "MG": {
            "label": "Magnesium",
            "quantity": 330.91482795120197,
            "unit": "mg"
          },
          "K": {
            "label": "Potassium",
            "quantity": 2936.934044633323,
            "unit": "mg"
          },
          "FE": {
            "label": "Iron",
            "quantity": 15.57669571416628,
            "unit": "mg"
          },
          "ZN": {
            "label": "Zinc",
            "quantity": 15.207217280743755,
            "unit": "mg"
          },
          "P": {
            "label": "Phosphorus",
            "quantity": 1860.0795516160974,
            "unit": "mg"
          },
          "VITA_RAE": {
            "label": "Vitamin A",
            "quantity": 654.1412931828232,
            "unit": "µg"
          },
          "VITC": {
            "label": "Vitamin C",
            "quantity": 90.87865495688764,
            "unit": "mg"
          },
          "THIA": {
            "label": "Thiamin (B1)",
            "quantity": 1.0138896005381406,
            "unit": "mg"
          },
          "RIBF": {
            "label": "Riboflavin (B2)",
            "quantity": 2.05708468785441,
            "unit": "mg"
          },
          "NIA": {
            "label": "Niacin (B3)",
            "quantity": 64.6973053954572,
            "unit": "mg"
          },
          "VITB6A": {
            "label": "Vitamin B6",
            "quantity": 4.328638920325104,
            "unit": "mg"
          },
          "FOLDFE": {
            "label": "Folate equivalent (total)",
            "quantity": 138.58169844201635,
            "unit": "µg"
          },
          "FOLFD": {
            "label": "Folate (food)",
            "quantity": 138.58169844201635,
            "unit": "µg"
          },
          "VITB12": {
            "label": "Vitamin B12",
            "quantity": 5.064518147879999,
            "unit": "µg"
          },
          "VITD": {
            "label": "Vitamin D",
            "quantity": 341.41284348,
            "unit": "IU"
          },
          "TOCPHA": {
            "label": "Vitamin E",
            "quantity": 20.881486404488246,
            "unit": "mg"
          },
          "VITK1": {
            "label": "Vitamin K",
            "quantity": 369.28338693111675,
            "unit": "µg"
          },
          "WATER": {
            "label": "Water",
            "quantity": 1163.7161673954797,
            "unit": "g"
          }
        },
        "totalDaily": {
          "ENERC_KCAL": {
            "label": "Energy",
            "quantity": 171.87655503978394,
            "unit": "%"
          },
          "FAT": {
            "label": "Fat",
            "quantity": 417.4993019318755,
            "unit": "%"
          },
          "FASAT": {
            "label": "Saturated",
            "quantity": 329.6542449837772,
            "unit": "%"
          },
          "CHOCDF": {
            "label": "Carbs",
            "quantity": 19.665131392053684,
            "unit": "%"
          },
          "FIBTG": {
            "label": "Fiber",
            "quantity": 50.51814271522689,
            "unit": "%"
          },
          "PROCNT": {
            "label": "Protein",
            "quantity": 386.1645389868962,
            "unit": "%"
          },
          "CHOLE": {
            "label": "Cholesterol",
            "quantity": 247.59877536666662,
            "unit": "%"
          },
          "NA": {
            "label": "Sodium",
            "quantity": 206.56576350550245,
            "unit": "%"
          },
          "CA": {
            "label": "Calcium",
            "quantity": 104.69445510279252,
            "unit": "%"
          },
          "MG": {
            "label": "Magnesium",
            "quantity": 78.78924475028617,
            "unit": "%"
          },
          "K": {
            "label": "Potassium",
            "quantity": 62.487958396453685,
            "unit": "%"
          },
          "FE": {
            "label": "Iron",
            "quantity": 86.5371984120349,
            "unit": "%"
          },
          "ZN": {
            "label": "Zinc",
            "quantity": 138.24742982494323,
            "unit": "%"
          },
          "P": {
            "label": "Phosphorus",
            "quantity": 265.72565023087105,
            "unit": "%"
          },
          "VITA_RAE": {
            "label": "Vitamin A",
            "quantity": 72.68236590920257,
            "unit": "%"
          },
          "VITC": {
            "label": "Vitamin C",
            "quantity": 100.97628328543071,
            "unit": "%"
          },
          "THIA": {
            "label": "Thiamin (B1)",
            "quantity": 84.49080004484506,
            "unit": "%"
          },
          "RIBF": {
            "label": "Riboflavin (B2)",
            "quantity": 158.23728368110847,
            "unit": "%"
          },
          "NIA": {
            "label": "Niacin (B3)",
            "quantity": 404.35815872160754,
            "unit": "%"
          },
          "VITB6A": {
            "label": "Vitamin B6",
            "quantity": 332.9722246403926,
            "unit": "%"
          },
          "FOLDFE": {
            "label": "Folate equivalent (total)",
            "quantity": 34.64542461050409,
            "unit": "%"
          },
          "VITB12": {
            "label": "Vitamin B12",
            "quantity": 211.02158949499997,
            "unit": "%"
          },
          "VITD": {
            "label": "Vitamin D",
            "quantity": 2276.0856232,
            "unit": "%"
          },
          "TOCPHA": {
            "label": "Vitamin E",
            "quantity": 139.20990936325498,
            "unit": "%"
          },
          "VITK1": {
            "label": "Vitamin K",
            "quantity": 307.7361557759306,
            "unit": "%"
          }
        },
        "digest": [
          {
            "label": "Fat",
            "tag": "FAT",
            "schemaOrgTag": "fatContent",
            "total": 271.37454625571905,
            "hasRDI": true,
            "daily": 417.4993019318755,
            "unit": "g",
            "sub": [
              {
                "label": "Saturated",
                "tag": "FASAT",
                "schemaOrgTag": "saturatedFatContent",
                "total": 65.93084899675543,
                "hasRDI": true,
                "daily": 329.6542449837772,
                "unit": "g"
              },
              {
                "label": "Trans",
                "tag": "FATRN",
                "schemaOrgTag": "transFatContent",
                "total": 0.897568581756,
                "hasRDI": false,
                "daily": 0.0,
                "unit": "g"
              },
              {
                "label": "Monounsaturated",
                "tag": "FAMS",
                "schemaOrgTag": null,
                "total": 144.8050163856895,
                "hasRDI": false,
                "daily": 0.0,
                "unit": "g"
              },
              {
                "label": "Polyunsaturated",
                "tag": "FAPU",
                "schemaOrgTag": null,
                "total": 43.29665044538261,
                "hasRDI": false,
                "daily": 0.0,
                "unit": "g"
              }
            ]
          },
          {
            "label": "Carbs",
            "tag": "CHOCDF",
            "schemaOrgTag": "carbohydrateContent",
            "total": 58.99539417616105,
            "hasRDI": true,
            "daily": 19.665131392053684,
            "unit": "g",
            "sub": [
              {
                "label": "Carbs (net)",
                "tag": "CHOCDF.net",
                "schemaOrgTag": null,
                "total": 46.365858497354324,
                "hasRDI": false,
                "daily": 0.0,
                "unit": "g"
              },
              {
                "label": "Fiber",
                "tag": "FIBTG",
                "schemaOrgTag": "fiberContent",
                "total": 12.629535678806722,
                "hasRDI": true,
                "daily": 50.51814271522689,
                "unit": "g"
              },
              {
                "label": "Sugars",
                "tag": "SUGAR",
                "schemaOrgTag": "sugarContent",
                "total": 28.18661912389263,
                "hasRDI": false,
                "daily": 0.0,
                "unit": "g"
              },
              {
                "label": "Sugars, added",
                "tag": "SUGAR.added",
                "schemaOrgTag": null,
                "total": 0.0,
                "hasRDI": false,
                "daily": 0.0,
                "unit": "g"
              }
            ]
          },
          {
            "label": "Protein",
            "tag": "PROCNT",
            "schemaOrgTag": "proteinContent",
            "total": 193.0822694934481,
            "hasRDI": true,
            "daily": 386.1645389868962,
            "unit": "g"
          },
          {
            "label": "Cholesterol",
            "tag": "CHOLE",
            "schemaOrgTag": "cholesterolContent",
            "total": 742.7963260999999,
            "hasRDI": true,
            "daily": 247.59877536666662,
            "unit": "mg"
          },
          {
            "label": "Sodium",
            "tag": "NA",
            "schemaOrgTag": "sodiumContent",
            "total": 4957.578324132059,
            "hasRDI": true,
            "daily": 206.56576350550245,
            "unit": "mg"
          },
          {
            "label": "Calcium",
            "tag": "CA",
            "schemaOrgTag": null,
            "total": 1046.9445510279252,
            "hasRDI": true,
            "daily": 104.69445510279252,
            "unit": "mg"
          },
          {
            "label": "Magnesium",
            "tag": "MG",
            "schemaOrgTag": null,
            "total": 330.91482795120197,
            "hasRDI": true,
            "daily": 78.78924475028617,
            "unit": "mg"
          },
          {
            "label": "Potassium",
            "tag": "K",
            "schemaOrgTag": null,
            "total": 2936.934044633323,
            "hasRDI": true,
            "daily": 62.487958396453685,
            "unit": "mg"
          },
          {
            "label": "Iron",
            "tag": "FE",
            "schemaOrgTag": null,
            "total": 15.57669571416628,
            "hasRDI": true,
            "daily": 86.5371984120349,
            "unit": "mg"
          },
          {
            "label": "Zinc",
            "tag": "ZN",
            "schemaOrgTag": null,
            "total": 15.207217280743755,
            "hasRDI": true,
            "daily": 138.24742982494323,
            "unit": "mg"
          },
          {
            "label": "Phosphorus",
            "tag": "P",
            "schemaOrgTag": null,
            "total": 1860.0795516160974,
            "hasRDI": true,
            "daily": 265.72565023087105,
            "unit": "mg"
          },
          {
            "label": "Vitamin A",
            "tag": "VITA_RAE",
            "schemaOrgTag": null,
            "total": 654.1412931828232,
            "hasRDI": true,
            "daily": 72.68236590920257,
            "unit": "µg"
          },
          {
            "label": "Vitamin C",
            "tag": "VITC",
            "schemaOrgTag": null,
            "total": 90.87865495688764,
            "hasRDI": true,
            "daily": 100.97628328543071,
            "unit": "mg"
          },
          {
            "label": "Thiamin (B1)",
            "tag": "THIA",
            "schemaOrgTag": null,
            "total": 1.0138896005381406,
            "hasRDI": true,
            "daily": 84.49080004484506,
            "unit": "mg"
          },
          {
            "label": "Riboflavin (B2)",
            "tag": "RIBF",
            "schemaOrgTag": null,
            "total": 2.05708468785441,
            "hasRDI": true,
            "daily": 158.23728368110847,
            "unit": "mg"
          },
          {
            "label": "Niacin (B3)",
            "tag": "NIA",
            "schemaOrgTag": null,
            "total": 64.6973053954572,
            "hasRDI": true,
            "daily": 404.35815872160754,
            "unit": "mg"
          },
          {
            "label": "Vitamin B6",
            "tag": "VITB6A",
            "schemaOrgTag": null,
            "total": 4.328638920325104,
            "hasRDI": true,
            "daily": 332.9722246403926,
            "unit": "mg"
          },
          {
            "label": "Folate equivalent (total)",
            "tag": "FOLDFE",
            "schemaOrgTag": null,
            "total": 138.58169844201635,
            "hasRDI": true,
            "daily": 34.64542461050409,
            "unit": "µg"
          },
          {
            "label": "Folate (food)",
            "tag": "FOLFD",
            "schemaOrgTag": null,
            "total": 138.58169844201635,
            "hasRDI": false,
            "daily": 0.0,
            "unit": "µg"
          },
          {
            "label": "Folic acid",
            "tag": "FOLAC",
            "schemaOrgTag": null,
            "total": 0.0,
            "hasRDI": false,
            "daily": 0.0,
            "unit": "µg"
          },
          {
            "label": "Vitamin B12",
            "tag": "VITB12",
            "schemaOrgTag": null,
            "total": 5.064518147879999,
            "hasRDI": true,
            "daily": 211.02158949499997,
            "unit": "µg"
          },
          {
            "label": "Vitamin D",
            "tag": "VITD",
            "schemaOrgTag": null,
            "total": 341.41284348,
            "hasRDI": true,
            "daily": 2276.0856232,
            "unit": "µg"
          },
          {
            "label": "Vitamin E",
            "tag": "TOCPHA",
            "schemaOrgTag": null,
            "total": 20.881486404488246,
            "hasRDI": true,
            "daily": 139.20990936325498,
            "unit": "mg"
          },
          {
            "label": "Vitamin K",
            "tag": "VITK1",
            "schemaOrgTag": null,
            "total": 369.28338693111675,
            "hasRDI": true,
            "daily": 307.7361557759306,
            "unit": "µg"
          },
          {
            "label": "Sugar alcohols",
            "tag": "Sugar.alcohol",
            "schemaOrgTag": null,
            "total": 0.0,
            "hasRDI": false,
            "daily": 0.0,
            "unit": "g"
          },
          {
            "label": "Water",
            "tag": "WATER",
            "schemaOrgTag": null,
            "total": 1163.7161673954797,
            "hasRDI": false,
            "daily": 0.0,
            "unit": "g"
          }
        ]
      },
      "bookmarked": false,
      "bought": false
    },
    {
      "recipe": {
        "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_65028f8bad765e8a99641e01def3bbf7",
        "label": "Chicken and Coconut Milk Soup",
        "image": "https://www.edamam.com/web-img/792/792f08d63f487b66f5010004928fd200.jpg",
        "source": "Martha Stewart",
        "url": "http://www.marthastewart.com/343751/chicken-and-coconut-milk-soup",
        "shareAs": "http://www.edamam.com/recipe/chicken-and-coconut-milk-soup-65028f8bad765e8a99641e01def3bbf7/chicken%2Cmilk",
        "yield": 4.0,
        "dietLabels": [

        ],
        "healthLabels": [
          "Peanut-Free",
          "Alcohol-Free"
        ],
        "cautions": [
          "Shellfish",
          "Sulfites",
          "FODMAP"
        ],
        "ingredientLines": [
          "3 3/4 cup light coconut milk (30 ounces)",
          "6 ounces boneless, skinless chicken breasts, cut into thin strips",
          "2 fresh lemongrass stalks, trimmed and thinly sliced",
          "2 scallions, thinly sliced (about 3 tablespoons)",
          "3 to 4 thai dragon chiles (red, green, or a combination), thinly sliced into rings, plus a sprig for garnish",
          "5 tablespoons fresh lime juice",
          "3 tablespoons thai fish sauce",
          "3 sprigs fresh cilantro, shredded, plus more leaves for garnish",
          "Bird chiles, for garnish"
        ],
        "ingredients": [
          {
            "text": "3 3/4 cup light coconut milk (30 ounces)",
            "weight": 850.48569375
          },
          {
            "text": "6 ounces boneless, skinless chicken breasts, cut into thin strips",
            "weight": 170.09713875
          },
          {
            "text": "2 fresh lemongrass stalks, trimmed and thinly sliced",
            "weight": 40.0
          },
          {
            "text": "2 scallions, thinly sliced (about 3 tablespoons)",
            "weight": 18.0
          },
          {
            "text": "5 tablespoons fresh lime juice",
            "weight": 76.99999999869816
          },
          {
            "text": "3 tablespoons thai fish sauce",
            "weight": 54.0
          }
        ],
        "calories": 959.2798645621745,
        "totalWeight": 1209.582832498698,
        "totalTime": 130.0,
        "totalNutrients": {
          "ENERC_KCAL": {
            "label": "Energy",
            "quantity": 959.2798645621745,
            "unit": "kcal"
          },
          "FAT": {
            "label": "Fat",
            "quantity": 64.27867559774909,
            "unit": "g"
          },
          "FASAT": {
            "label": "Saturated",
            "quantity": 46.0942982599124,
            "unit": "g"
          },
          "FATRN": {
            "label": "Trans",
            "quantity": 0.011906799712500001,
            "unit": "g"
          },
          "FAMS": {
            "label": "Monounsaturated",
            "quantity": 1.2054748859873958,
            "unit": "g"
          },
          "FAPU": {
            "label": "Polyunsaturated",
            "quantity": 0.8213290682997005,
            "unit": "g"
          },
          "CHOCDF": {
            "label": "Carbs",
            "quantity": 35.15009448739038,
            "unit": "g"
          },
          "FIBTG": {
            "label": "Fiber",
            "quantity": 0.7572799999947927,
            "unit": "g"
          },
          "SUGAR": {
            "label": "Sugars",
            "quantity": 18.978266487477995,
            "unit": "g"
          },
          "PROCNT": {
            "label": "Protein",
            "quantity": 42.371880218744536,
            "unit": "g"
          },
          "CHOLE": {
            "label": "Cholesterol",
            "quantity": 124.1709112875,
            "unit": "mg"
          },
          "NA": {
            "label": "Sodium",
            "quantity": 4501.390508124974,
            "unit": "mg"
          },
          "CA": {
            "label": "Calcium",
            "quantity": 80.94645693731775,
            "unit": "mg"
          },
          "MG": {
            "label": "Magnesium",
            "quantity": 175.74319884989586,
            "unit": "mg"
          },
          "K": {
            "label": "Potassium",
            "quantity": 1150.627243423477,
            "unit": "mg"
          },
          "FE": {
            "label": "Iron",
            "quantity": 4.643603413373829,
            "unit": "mg"
          },
          "ZN": {
            "label": "Zinc",
            "quantity": 2.2856525434989585,
            "unit": "mg"
          },
          "P": {
            "label": "Phosphorus",
            "quantity": 423.6605055373177,
            "unit": "mg"
          },
          "VITA_RAE": {
            "label": "Vitamin A",
            "quantity": 24.246799712473962,
            "unit": "µg"
          },
          "VITC": {
            "label": "Vitamin C",
            "quantity": 27.658639999609445,
            "unit": "mg"
          },
          "THIA": {
            "label": "Thiamin (B1)",
            "quantity": 0.22112531042467456,
            "unit": "mg"
          },
          "RIBF": {
            "label": "Riboflavin (B2)",
            "quantity": 0.4112259355873047,
            "unit": "mg"
          },
          "NIA": {
            "label": "Niacin (B3)",
            "quantity": 18.218805319998154,
            "unit": "mg"
          },
          "VITB6A": {
            "label": "Vitamin B6",
            "quantity": 1.6651285952620056,
            "unit": "mg"
          },
          "FOLDFE": {
            "label": "Folate equivalent (total)",
            "quantity": 91.60794248736983,
            "unit": "µg"
          },
          "FOLFD": {
            "label": "Folate (food)",
            "quantity": 91.60794248736983,
            "unit": "µg"
          },
          "VITB12": {
            "label": "Vitamin B12",
            "quantity": 0.616403991375,
            "unit": "µg"
          },
          "VITD": {
            "label": "Vitamin D",
            "quantity": 1.7009713875,
            "unit": "IU"
          },
          "TOCPHA": {
            "label": "Vitamin E",
            "quantity": 1.216983976997136,
            "unit": "mg"
          },
          "VITK1": {
            "label": "Vitamin K",
            "quantity": 36.57179427749219,
            "unit": "µg"
          },
          "WATER": {
            "label": "Water",
            "quantity": 277.74250953506805,
            "unit": "g"
          }
        },
        "totalDaily": {
          "ENERC_KCAL": {
            "label": "Energy",
            "quantity": 47.96399322810873,
            "unit": "%"
          },
          "FAT": {
            "label": "Fat",
            "quantity": 98.89027015038322,
            "unit": "%"
          },
          "FASAT": {
            "label": "Saturated",
            "quantity": 230.47149129956202,
            "unit": "%"
          },
          "CHOCDF": {
            "label": "Carbs",
            "quantity": 11.71669816246346,
            "unit": "%"
          },
          "FIBTG": {
            "label": "Fiber",
            "quantity": 3.0291199999791707,
            "unit": "%"
          },
          "PROCNT": {
            "label": "Protein",
            "quantity": 84.74376043748907,
            "unit": "%"
          },
          "CHOLE": {
            "label": "Cholesterol",
            "quantity": 41.390303762500004,
            "unit": "%"
          },
          "NA": {
            "label": "Sodium",
            "quantity": 187.55793783854057,
            "unit": "%"
          },
          "CA": {
            "label": "Calcium",
            "quantity": 8.094645693731774,
            "unit": "%"
          },
          "MG": {
            "label": "Magnesium",
            "quantity": 41.843618773784726,
            "unit": "%"
          },
          "K": {
            "label": "Potassium",
            "quantity": 24.481430711137808,
            "unit": "%"
          },
          "FE": {
            "label": "Iron",
            "quantity": 25.79779674096572,
            "unit": "%"
          },
          "ZN": {
            "label": "Zinc",
            "quantity": 20.77865948635417,
            "unit": "%"
          },
          "P": {
            "label": "Phosphorus",
            "quantity": 60.52292936247396,
            "unit": "%"
          },
          "VITA_RAE": {
            "label": "Vitamin A",
            "quantity": 2.6940888569415513,
            "unit": "%"
          },
          "VITC": {
            "label": "Vitamin C",
            "quantity": 30.73182222178827,
            "unit": "%"
          },
          "THIA": {
            "label": "Thiamin (B1)",
            "quantity": 18.427109202056215,
            "unit": "%"
          },
          "RIBF": {
            "label": "Riboflavin (B2)",
            "quantity": 31.632764275946517,
            "unit": "%"
          },
          "NIA": {
            "label": "Niacin (B3)",
            "quantity": 113.86753324998847,
            "unit": "%"
          },
          "VITB6A": {
            "label": "Vitamin B6",
            "quantity": 128.0868150201543,
            "unit": "%"
          },
          "FOLDFE": {
            "label": "Folate equivalent (total)",
            "quantity": 22.901985621842456,
            "unit": "%"
          },
          "VITB12": {
            "label": "Vitamin B12",
            "quantity": 25.683499640625,
            "unit": "%"
          },
          "VITD": {
            "label": "Vitamin D",
            "quantity": 11.33980925,
            "unit": "%"
          },
          "TOCPHA": {
            "label": "Vitamin E",
            "quantity": 8.11322651331424,
            "unit": "%"
          },
          "VITK1": {
            "label": "Vitamin K",
            "quantity": 30.476495231243494,
            "unit": "%"
          }
        },
        "digest": [
          {
            "label": "Fat",
            "tag": "FAT",
            "schemaOrgTag": "fatContent",
            "total": 64.27867559774909,
            "hasRDI": true,
            "daily": 98.89027015038322,
            "unit": "g",
            "sub": [
              {
                "label": "Saturated",
                "tag": "FASAT",
                "schemaOrgTag": "saturatedFatContent",
                "total": 46.0942982599124,
                "hasRDI": true,
                "daily": 230.47149129956202,
                "unit": "g"
              },
              {
                "label": "Trans",
                "tag": "FATRN",
                "schemaOrgTag": "transFatContent",
                "total": 0.011906799712500001,
                "hasRDI": false,
                "daily": 0.0,
                "unit": "g"
              },
              {
                "label": "Monounsaturated",
                "tag": "FAMS",
                "schemaOrgTag": null,
                "total": 1.2054748859873958,
                "hasRDI": false,
                "daily": 0.0,
                "unit": "g"
              },
              {
                "label": "Polyunsaturated",
                "tag": "FAPU",
                "schemaOrgTag": null,
                "total": 0.8213290682997005,
                "hasRDI": false,
                "daily": 0.0,
                "unit": "g"
              }
            ]
          },
          {
            "label": "Carbs",
            "tag": "CHOCDF",
            "schemaOrgTag": "carbohydrateContent",
            "total": 35.15009448739038,
            "hasRDI": true,
            "daily": 11.71669816246346,
            "unit": "g",
            "sub": [
              {
                "label": "Carbs (net)",
                "tag": "CHOCDF.net",
                "schemaOrgTag": null,
                "total": 34.39281448739559,
                "hasRDI": false,
                "daily": 0.0,
                "unit": "g"
              },
              {
                "label": "Fiber",
                "tag": "FIBTG",
                "schemaOrgTag": "fiberContent",
                "total": 0.7572799999947927,
                "hasRDI": true,
                "daily": 3.0291199999791707,
                "unit": "g"
              },
              {
                "label": "Sugars",
                "tag": "SUGAR",
                "schemaOrgTag": "sugarContent",
                "total": 18.978266487477995,
                "hasRDI": false,
                "daily": 0.0,
                "unit": "g"
              },
              {
                "label": "Sugars, added",
                "tag": "SUGAR.added",
                "schemaOrgTag": null,
                "total": 0.0,
                "hasRDI": false,
                "daily": 0.0,
                "unit": "g"
              }
            ]
          },
          {
            "label": "Protein",
            "tag": "PROCNT",
            "schemaOrgTag": "proteinContent",
            "total": 42.371880218744536,
            "hasRDI": true,
            "daily": 84.74376043748907,
            "unit": "g"
          },
          {
            "label": "Cholesterol",
            "tag": "CHOLE",
            "schemaOrgTag": "cholesterolContent",
            "total": 124.1709112875,
            "hasRDI": true,
            "daily": 41.390303762500004,
            "unit": "mg"
          },
          {
            "label": "Sodium",
            "tag": "NA",
            "schemaOrgTag": "sodiumContent",
            "total": 4501.390508124974,
            "hasRDI": true,
            "daily": 187.55793783854057,
            "unit": "mg"
          },
          {
            "label": "Calcium",
            "tag": "CA",
            "schemaOrgTag": null,
            "total": 80.94645693731775,
            "hasRDI": true,
            "daily": 8.094645693731774,
            "unit": "mg"
          },
          {
            "label": "Magnesium",
            "tag": "MG",
            "schemaOrgTag": null,
            "total": 175.74319884989586,
            "hasRDI": true,
            "daily": 41.843618773784726,
            "unit": "mg"
          },
          {
            "label": "Potassium",
            "tag": "K",
            "schemaOrgTag": null,
            "total": 1150.627243423477,
            "hasRDI": true,
            "daily": 24.481430711137808,
            "unit": "mg"
          },
          {
            "label": "Iron",
            "tag": "FE",
            "schemaOrgTag": null,
            "total": 4.643603413373829,
            "hasRDI": true,
            "daily": 25.79779674096572,
            "unit": "mg"
          },
          {
            "label": "Zinc",
            "tag": "ZN",
            "schemaOrgTag": null,
            "total": 2.2856525434989585,
            "hasRDI": true,
            "daily": 20.77865948635417,
            "unit": "mg"
          },
          {
            "label": "Phosphorus",
            "tag": "P",
            "schemaOrgTag": null,
            "total": 423.6605055373177,
            "hasRDI": true,
            "daily": 60.52292936247396,
            "unit": "mg"
          },
          {
            "label": "Vitamin A",
            "tag": "VITA_RAE",
            "schemaOrgTag": null,
            "total": 24.246799712473962,
            "hasRDI": true,
            "daily": 2.6940888569415513,
            "unit": "µg"
          },
          {
            "label": "Vitamin C",
            "tag": "VITC",
            "schemaOrgTag": null,
            "total": 27.658639999609445,
            "hasRDI": true,
            "daily": 30.73182222178827,
            "unit": "mg"
          },
          {
            "label": "Thiamin (B1)",
            "tag": "THIA",
            "schemaOrgTag": null,
            "total": 0.22112531042467456,
            "hasRDI": true,
            "daily": 18.427109202056215,
            "unit": "mg"
          },
          {
            "label": "Riboflavin (B2)",
            "tag": "RIBF",
            "schemaOrgTag": null,
            "total": 0.4112259355873047,
            "hasRDI": true,
            "daily": 31.632764275946517,
            "unit": "mg"
          },
          {
            "label": "Niacin (B3)",
            "tag": "NIA",
            "schemaOrgTag": null,
            "total": 18.218805319998154,
            "hasRDI": true,
            "daily": 113.86753324998847,
            "unit": "mg"
          },
          {
            "label": "Vitamin B6",
            "tag": "VITB6A",
            "schemaOrgTag": null,
            "total": 1.6651285952620056,
            "hasRDI": true,
            "daily": 128.0868150201543,
            "unit": "mg"
          },
          {
            "label": "Folate equivalent (total)",
            "tag": "FOLDFE",
            "schemaOrgTag": null,
            "total": 91.60794248736983,
            "hasRDI": true,
            "daily": 22.901985621842456,
            "unit": "µg"
          },
          {
            "label": "Folate (food)",
            "tag": "FOLFD",
            "schemaOrgTag": null,
            "total": 91.60794248736983,
            "hasRDI": false,
            "daily": 0.0,
            "unit": "µg"
          },
          {
            "label": "Folic acid",
            "tag": "FOLAC",
            "schemaOrgTag": null,
            "total": 0.0,
            "hasRDI": false,
            "daily": 0.0,
            "unit": "µg"
          },
          {
            "label": "Vitamin B12",
            "tag": "VITB12",
            "schemaOrgTag": null,
            "total": 0.616403991375,
            "hasRDI": true,
            "daily": 25.683499640625,
            "unit": "µg"
          },
          {
            "label": "Vitamin D",
            "tag": "VITD",
            "schemaOrgTag": null,
            "total": 1.7009713875,
            "hasRDI": true,
            "daily": 11.33980925,
            "unit": "µg"
          },
          {
            "label": "Vitamin E",
            "tag": "TOCPHA",
            "schemaOrgTag": null,
            "total": 1.216983976997136,
            "hasRDI": true,
            "daily": 8.11322651331424,
            "unit": "mg"
          },
          {
            "label": "Vitamin K",
            "tag": "VITK1",
            "schemaOrgTag": null,
            "total": 36.57179427749219,
            "hasRDI": true,
            "daily": 30.476495231243494,
            "unit": "µg"
          },
          {
            "label": "Sugar alcohols",
            "tag": "Sugar.alcohol",
            "schemaOrgTag": null,
            "total": 0.0,
            "hasRDI": false,
            "daily": 0.0,
            "unit": "g"
          },
          {
            "label": "Water",
            "tag": "WATER",
            "schemaOrgTag": null,
            "total": 277.74250953506805,
            "hasRDI": false,
            "daily": 0.0,
            "unit": "g"
          }
        ]
      },
      "bookmarked": false,
      "bought": false
    },
    {
      "recipe": {
        "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_59f97a54a9ca1a378d9a9d180d2cb7f6",
        "label": "Chicken and Coconut Milk Soup",
        "image": "https://www.edamam.com/web-img/deb/debd3dfc304e40bde3cd65b2ea100c1c.jpg",
        "source": "Cookstr",
        "url": "http://www.cookstr.com/recipes/chicken-and-coconut-milk-soup",
        "shareAs": "http://www.edamam.com/recipe/chicken-and-coconut-milk-soup-59f97a54a9ca1a378d9a9d180d2cb7f6/chicken%2Cmilk",
        "yield": 4.0,
        "dietLabels": [
          "Low-Carb"
        ],
        "healthLabels": [
          "Sugar-Conscious",
          "Peanut-Free",
          "Tree-Nut-Free",
          "Alcohol-Free"
        ],
        "cautions": [
          "Tree-Nuts",
          "Shellfish",
          "Sulfites",
          "FODMAP"
        ],
        "ingredientLines": [
          "2 1/3 cups canned coconut milk (19-ounce can)",
          "1 cup Basic Chicken Broth",
          "2 large chicken breasts, or ¼ chicken, boned, skinned, and cut into bite-size pieces",
          "2 stalks lemon grass, cut into 1-inch pieces",
          "2 kaffir lime leaves, or 2 strips lime peel",
          "1 3-inch piece galangal, or fresh gingerroot",
          "3 serrano or Thai chiles, seeded and minced",
          "1½ tablespoons nam pla (Thai fish sauce)",
          "Juice of 1 lime",
          "2 scallions, green and white parts, finely sliced",
          "4 fresh cilantro sprigs, leaves only"
        ],
        "ingredients": [
          {
            "text": "2 1/3 cups canned coconut milk (19-ounce can)",
            "weight": 538.640939375
          },
          {
            "text": "1 cup Basic Chicken Broth",
            "weight": 240.0
          },
          {
            "text": "2 large chicken breasts, or ¼ chicken, boned, skinned, and cut into bite-size pieces",
            "weight": 435.0
          },
          {
            "text": "2 stalks lemon grass, cut into 1-inch pieces",
            "weight": 40.0
          },
          {
            "text": "2 kaffir lime leaves, or 2 strips lime peel",
            "weight": 1.2
          },
          {
            "text": "1 3-inch piece galangal, or fresh gingerroot",
            "weight": 15.0
          },
          {
            "text": "3 serrano or Thai chiles, seeded and minced",
            "weight": 135.0
          },
          {
            "text": "1½ tablespoons nam pla (Thai fish sauce)",
            "weight": 27.0
          },
          {
            "text": "Juice of 1 lime",
            "weight": 67.0
          },
          {
            "text": "2 scallions, green and white parts, finely sliced",
            "weight": 30.0
          },
          {
            "text": "4 fresh cilantro sprigs, leaves only",
            "weight": 8.88888888888889
          }
        ],
        "calories": 2046.2730950131945,
        "totalWeight": 1537.729828263889,
        "totalTime": 30.0,
        "totalNutrients": {
          "ENERC_KCAL": {
            "label": "Energy",
            "quantity": 2046.2730950131945,
            "unit": "kcal"
          },
          "FAT": {
            "label": "Fat",
            "quantity": 159.2523545909097,
            "unit": "g"
          },
          "FASAT": {
            "label": "Saturated",
            "quantity": 114.4138381272257,
            "unit": "g"
          },
          "FATRN": {
            "label": "Trans",
            "quantity": 0.45675000000000004,
            "unit": "g"
          },
          "FAMS": {
            "label": "Monounsaturated",
            "quantity": 23.041867764575695,
            "unit": "g"
          },
          "FAPU": {
            "label": "Polyunsaturated",
            "quantity": 10.796878944299305,
            "unit": "g"
          },
          "CHOCDF": {
            "label": "Carbs",
            "quantity": 59.76327261865972,
            "unit": "g"
          },
          "FIBTG": {
            "label": "Fiber",
            "quantity": 5.545488888888889,
            "unit": "g"
          },
          "SUGAR": {
            "label": "Sugars",
            "quantity": 14.093433333333333,
            "unit": "g"
          },
          "PROCNT": {
            "label": "Protein",
            "quantity": 113.81640030870835,
            "unit": "g"
          },
          "CHOLE": {
            "label": "Cholesterol",
            "quantity": 285.6,
            "unit": "mg"
          },
          "NA": {
            "label": "Sodium",
            "quantity": 2834.048211007639,
            "unit": "mg"
          },
          "CA": {
            "label": "Calcium",
            "quantity": 270.58892464305563,
            "unit": "mg"
          },
          "MG": {
            "label": "Magnesium",
            "quantity": 488.64594322361114,
            "unit": "mg"
          },
          "K": {
            "label": "Potassium",
            "quantity": 3461.7191777361113,
            "unit": "mg"
          },
          "FE": {
            "label": "Iron",
            "quantity": 27.976584332708338,
            "unit": "mg"
          },
          "ZN": {
            "label": "Zinc",
            "quantity": 8.459933704944447,
            "unit": "mg"
          },
          "P": {
            "label": "Phosphorus",
            "quantity": 1473.0179684666666,
            "unit": "mg"
          },
          "VITA_RAE": {
            "label": "Vitamin A",
            "quantity": 222.68355555555559,
            "unit": "µg"
          },
          "VITC": {
            "label": "Vitamin C",
            "quantity": 229.88140939375,
            "unit": "mg"
          },
          "THIA": {
            "label": "Thiamin (B1)",
            "quantity": 0.6494045622180555,
            "unit": "mg"
          },
          "RIBF": {
            "label": "Riboflavin (B2)",
            "quantity": 0.821192,
            "unit": "mg"
          },
          "NIA": {
            "label": "Niacin (B3)",
            "quantity": 53.60393500604097,
            "unit": "mg"
          },
          "VITB6A": {
            "label": "Vitamin B6",
            "quantity": 3.529973907469445,
            "unit": "mg"
          },
          "FOLDFE": {
            "label": "Folate equivalent (total)",
            "quantity": 213.51084262361115,
            "unit": "µg"
          },
          "FOLFD": {
            "label": "Folate (food)",
            "quantity": 213.51084262361115,
            "unit": "µg"
          },
          "VITB12": {
            "label": "Vitamin B12",
            "quantity": 1.6086000000000003,
            "unit": "µg"
          },
          "VITD": {
            "label": "Vitamin D",
            "quantity": 69.60000000000001,
            "unit": "IU"
          },
          "TOCPHA": {
            "label": "Vitamin E",
            "quantity": 2.751622222222223,
            "unit": "mg"
          },
          "VITK1": {
            "label": "Vitamin K",
            "quantity": 109.45255555555555,
            "unit": "µg"
          },
          "WATER": {
            "label": "Water",
            "quantity": 1188.2988410609446,
            "unit": "g"
          }
        },
        "totalDaily": {
          "ENERC_KCAL": {
            "label": "Energy",
            "quantity": 102.31365475065972,
            "unit": "%"
          },
          "FAT": {
            "label": "Fat",
            "quantity": 245.0036224475534,
            "unit": "%"
          },
          "FASAT": {
            "label": "Saturated",
            "quantity": 572.0691906361285,
            "unit": "%"
          },
          "CHOCDF": {
            "label": "Carbs",
            "quantity": 19.921090872886573,
            "unit": "%"
          },
          "FIBTG": {
            "label": "Fiber",
            "quantity": 22.181955555555554,
            "unit": "%"
          },
          "PROCNT": {
            "label": "Protein",
            "quantity": 227.63280061741673,
            "unit": "%"
          },
          "CHOLE": {
            "label": "Cholesterol",
            "quantity": 95.20000000000002,
            "unit": "%"
          },
          "NA": {
            "label": "Sodium",
            "quantity": 118.0853421253183,
            "unit": "%"
          },
          "CA": {
            "label": "Calcium",
            "quantity": 27.058892464305565,
            "unit": "%"
          },
          "MG": {
            "label": "Magnesium",
            "quantity": 116.3442721960979,
            "unit": "%"
          },
          "K": {
            "label": "Potassium",
            "quantity": 73.65359952630024,
            "unit": "%"
          },
          "FE": {
            "label": "Iron",
            "quantity": 155.42546851504633,
            "unit": "%"
          },
          "ZN": {
            "label": "Zinc",
            "quantity": 76.9084882267677,
            "unit": "%"
          },
          "P": {
            "label": "Phosphorus",
            "quantity": 210.43113835238094,
            "unit": "%"
          },
          "VITA_RAE": {
            "label": "Vitamin A",
            "quantity": 24.74261728395062,
            "unit": "%"
          },
          "VITC": {
            "label": "Vitamin C",
            "quantity": 255.42378821527777,
            "unit": "%"
          },
          "THIA": {
            "label": "Thiamin (B1)",
            "quantity": 54.117046851504625,
            "unit": "%"
          },
          "RIBF": {
            "label": "Riboflavin (B2)",
            "quantity": 63.168615384615386,
            "unit": "%"
          },
          "NIA": {
            "label": "Niacin (B3)",
            "quantity": 335.0245937877561,
            "unit": "%"
          },
          "VITB6A": {
            "label": "Vitamin B6",
            "quantity": 271.53645442072656,
            "unit": "%"
          },
          "FOLDFE": {
            "label": "Folate equivalent (total)",
            "quantity": 53.377710655902796,
            "unit": "%"
          },
          "VITB12": {
            "label": "Vitamin B12",
            "quantity": 67.025,
            "unit": "%"
          },
          "VITD": {
            "label": "Vitamin D",
            "quantity": 464.00000000000006,
            "unit": "%"
          },
          "TOCPHA": {
            "label": "Vitamin E",
            "quantity": 18.344148148148154,
            "unit": "%"
          },
          "VITK1": {
            "label": "Vitamin K",
            "quantity": 91.21046296296296,
            "unit": "%"
          }
        },
        "digest": [
          {
            "label": "Fat",
            "tag": "FAT",
            "schemaOrgTag": "fatContent",
            "total": 159.2523545909097,
            "hasRDI": true,
            "daily": 245.0036224475534,
            "unit": "g",
            "sub": [
              {
                "label": "Saturated",
                "tag": "FASAT",
                "schemaOrgTag": "saturatedFatContent",
                "total": 114.4138381272257,
                "hasRDI": true,
                "daily": 572.0691906361285,
                "unit": "g"
              },
              {
                "label": "Trans",
                "tag": "FATRN",
                "schemaOrgTag": "transFatContent",
                "total": 0.45675000000000004,
                "hasRDI": false,
                "daily": 0.0,
                "unit": "g"
              },
              {
                "label": "Monounsaturated",
                "tag": "FAMS",
                "schemaOrgTag": null,
                "total": 23.041867764575695,
                "hasRDI": false,
                "daily": 0.0,
                "unit": "g"
              },
              {
                "label": "Polyunsaturated",
                "tag": "FAPU",
                "schemaOrgTag": null,
                "total": 10.796878944299305,
                "hasRDI": false,
                "daily": 0.0,
                "unit": "g"
              }
            ]
          },
          {
            "label": "Carbs",
            "tag": "CHOCDF",
            "schemaOrgTag": "carbohydrateContent",
            "total": 59.76327261865972,
            "hasRDI": true,
            "daily": 19.921090872886573,
            "unit": "g",
            "sub": [
              {
                "label": "Carbs (net)",
                "tag": "CHOCDF.net",
                "schemaOrgTag": null,
                "total": 54.21778372977083,
                "hasRDI": false,
                "daily": 0.0,
                "unit": "g"
              },
              {
                "label": "Fiber",
                "tag": "FIBTG",
                "schemaOrgTag": "fiberContent",
                "total": 5.545488888888889,
                "hasRDI": true,
                "daily": 22.181955555555554,
                "unit": "g"
              },
              {
                "label": "Sugars",
                "tag": "SUGAR",
                "schemaOrgTag": "sugarContent",
                "total": 14.093433333333333,
                "hasRDI": false,
                "daily": 0.0,
                "unit": "g"
              },
              {
                "label": "Sugars, added",
                "tag": "SUGAR.added",
                "schemaOrgTag": null,
                "total": 0.0,
                "hasRDI": false,
                "daily": 0.0,
                "unit": "g"
              }
            ]
          },
          {
            "label": "Protein",
            "tag": "PROCNT",
            "schemaOrgTag": "proteinContent",
            "total": 113.81640030870835,
            "hasRDI": true,
            "daily": 227.63280061741673,
            "unit": "g"
          },
          {
            "label": "Cholesterol",
            "tag": "CHOLE",
            "schemaOrgTag": "cholesterolContent",
            "total": 285.6,
            "hasRDI": true,
            "daily": 95.20000000000002,
            "unit": "mg"
          },
          {
            "label": "Sodium",
            "tag": "NA",
            "schemaOrgTag": "sodiumContent",
            "total": 2834.048211007639,
            "hasRDI": true,
            "daily": 118.0853421253183,
            "unit": "mg"
          },
          {
            "label": "Calcium",
            "tag": "CA",
            "schemaOrgTag": null,
            "total": 270.58892464305563,
            "hasRDI": true,
            "daily": 27.058892464305565,
            "unit": "mg"
          },
          {
            "label": "Magnesium",
            "tag": "MG",
            "schemaOrgTag": null,
            "total": 488.64594322361114,
            "hasRDI": true,
            "daily": 116.3442721960979,
            "unit": "mg"
          },
          {
            "label": "Potassium",
            "tag": "K",
            "schemaOrgTag": null,
            "total": 3461.7191777361113,
            "hasRDI": true,
            "daily": 73.65359952630024,
            "unit": "mg"
          },
          {
            "label": "Iron",
            "tag": "FE",
            "schemaOrgTag": null,
            "total": 27.976584332708338,
            "hasRDI": true,
            "daily": 155.42546851504633,
            "unit": "mg"
          },
          {
            "label": "Zinc",
            "tag": "ZN",
            "schemaOrgTag": null,
            "total": 8.459933704944447,
            "hasRDI": true,
            "daily": 76.9084882267677,
            "unit": "mg"
          },
          {
            "label": "Phosphorus",
            "tag": "P",
            "schemaOrgTag": null,
            "total": 1473.0179684666666,
            "hasRDI": true,
            "daily": 210.43113835238094,
            "unit": "mg"
          },
          {
            "label": "Vitamin A",
            "tag": "VITA_RAE",
            "schemaOrgTag": null,
            "total": 222.68355555555559,
            "hasRDI": true,
            "daily": 24.74261728395062,
            "unit": "µg"
          },
          {
            "label": "Vitamin C",
            "tag": "VITC",
            "schemaOrgTag": null,
            "total": 229.88140939375,
            "hasRDI": true,
            "daily": 255.42378821527777,
            "unit": "mg"
          },
          {
            "label": "Thiamin (B1)",
            "tag": "THIA",
            "schemaOrgTag": null,
            "total": 0.6494045622180555,
            "hasRDI": true,
            "daily": 54.117046851504625,
            "unit": "mg"
          },
          {
            "label": "Riboflavin (B2)",
            "tag": "RIBF",
            "schemaOrgTag": null,
            "total": 0.821192,
            "hasRDI": true,
            "daily": 63.168615384615386,
            "unit": "mg"
          },
          {
            "label": "Niacin (B3)",
            "tag": "NIA",
            "schemaOrgTag": null,
            "total": 53.60393500604097,
            "hasRDI": true,
            "daily": 335.0245937877561,
            "unit": "mg"
          },
          {
            "label": "Vitamin B6",
            "tag": "VITB6A",
            "schemaOrgTag": null,
            "total": 3.529973907469445,
            "hasRDI": true,
            "daily": 271.53645442072656,
            "unit": "mg"
          },
          {
            "label": "Folate equivalent (total)",
            "tag": "FOLDFE",
            "schemaOrgTag": null,
            "total": 213.51084262361115,
            "hasRDI": true,
            "daily": 53.377710655902796,
            "unit": "µg"
          },
          {
            "label": "Folate (food)",
            "tag": "FOLFD",
            "schemaOrgTag": null,
            "total": 213.51084262361115,
            "hasRDI": false,
            "daily": 0.0,
            "unit": "µg"
          },
          {
            "label": "Folic acid",
            "tag": "FOLAC",
            "schemaOrgTag": null,
            "total": 0.0,
            "hasRDI": false,
            "daily": 0.0,
            "unit": "µg"
          },
          {
            "label": "Vitamin B12",
            "tag": "VITB12",
            "schemaOrgTag": null,
            "total": 1.6086000000000003,
            "hasRDI": true,
            "daily": 67.025,
            "unit": "µg"
          },
          {
            "label": "Vitamin D",
            "tag": "VITD",
            "schemaOrgTag": null,
            "total": 69.60000000000001,
            "hasRDI": true,
            "daily": 464.00000000000006,
            "unit": "µg"
          },
          {
            "label": "Vitamin E",
            "tag": "TOCPHA",
            "schemaOrgTag": null,
            "total": 2.751622222222223,
            "hasRDI": true,
            "daily": 18.344148148148154,
            "unit": "mg"
          },
          {
            "label": "Vitamin K",
            "tag": "VITK1",
            "schemaOrgTag": null,
            "total": 109.45255555555555,
            "hasRDI": true,
            "daily": 91.21046296296296,
            "unit": "µg"
          },
          {
            "label": "Sugar alcohols",
            "tag": "Sugar.alcohol",
            "schemaOrgTag": null,
            "total": 0.0,
            "hasRDI": false,
            "daily": 0.0,
            "unit": "g"
          },
          {
            "label": "Water",
            "tag": "WATER",
            "schemaOrgTag": null,
            "total": 1188.2988410609446,
            "hasRDI": false,
            "daily": 0.0,
            "unit": "g"
          }
        ]
      },
      "bookmarked": false,
      "bought": false
    },
    {
      "recipe": {
        "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_e8cdf9c4bea6665dda6fd31eb83b6967",
        "label": "Dinner Tonight: Meatballs with Ricotta in Milk Recipe",
        "image": "https://www.edamam.com/web-img/6a4/6a42889306f76c31e8f88693dffa2ba7.jpg",
        "source": "Serious Eats",
        "url": "http://www.seriouseats.com/recipes/2010/07/dinner-tonight-meatballs-with-ricotta-in-milk-recipe.html",
        "shareAs": "http://www.edamam.com/recipe/dinner-tonight-meatballs-with-ricotta-in-milk-recipe-e8cdf9c4bea6665dda6fd31eb83b6967/chicken%2Cmilk",
        "yield": 4.0,
        "dietLabels": [
          "Low-Carb"
        ],
        "healthLabels": [
          "Sugar-Conscious",
          "Peanut-Free",
          "Alcohol-Free"
        ],
        "cautions": [
          "Sulfites"
        ],
        "ingredientLines": [
          "1/2 pound ground pork",
          "1/2 pound ground veal (or substitute beef)",
          "8 ounces fresh ricotta",
          "2 large eggs, lightly beaten",
          "1/4 cup freshly grated Parmesan",
          "1/4 cup fresh bread crumbs",
          "6 cornichon pickles, chopped",
          "3 pistachios, chopped",
          "3 tablespoons butter",
          "1 cup chicken stock",
          "1/2 cup whole milk",
          "salt and pepper to taste"
        ],
        "ingredients": [
          {
            "text": "1/2 pound ground pork",
            "weight": 226.796185
          },
          {
            "text": "1/2 pound ground veal (or substitute beef)",
            "weight": 226.796185
          },
          {
            "text": "8 ounces fresh ricotta",
            "weight": 226.796185
          },
          {
            "text": "2 large eggs, lightly beaten",
            "weight": 100.0
          },
          {
            "text": "1/4 cup freshly grated Parmesan",
            "weight": 28.25
          },
          {
            "text": "1/4 cup fresh bread crumbs",
            "weight": 27.0
          },
          {
            "text": "6 cornichon pickles, chopped",
            "weight": 90.0
          },
          {
            "text": "3 pistachios, chopped",
            "weight": 9.0
          },
          {
            "text": "3 tablespoons butter",
            "weight": 42.599999999999994
          },
          {
            "text": "1 cup chicken stock",
            "weight": 240.0
          },
          {
            "text": "1/2 cup whole milk",
            "weight": 122.0
          },
          {
            "text": "salt and pepper to taste",
            "weight": 8.03543133
          },
          {
            "text": "salt and pepper to taste",
            "weight": 4.017715665
          }
        ],
        "calories": 2335.10427921915,
        "totalWeight": 1346.9375785746522,
        "totalTime": 0.0,
        "totalNutrients": {
          "ENERC_KCAL": {
            "label": "Energy",
            "quantity": 2335.10427921915,
            "unit": "kcal"
          },
          "FAT": {
            "label": "Fat",
            "quantity": 171.14775070617904,
            "unit": "g"
          },
          "FASAT": {
            "label": "Saturated",
            "quantity": 81.8642220371068,
            "unit": "g"
          },
          "FATRN": {
            "label": "Trans",
            "quantity": 3.0129294476,
            "unit": "g"
          },
          "FAMS": {
            "label": "Monounsaturated",
            "quantity": 63.179608946864356,
            "unit": "g"
          },
          "FAPU": {
            "label": "Polyunsaturated",
            "quantity": 12.888437822286702,
            "unit": "g"
          },
          "CHOCDF": {
            "label": "Carbs",
            "quantity": 49.39164319176751,
            "unit": "g"
          },
          "FIBTG": {
            "label": "Fiber",
            "quantity": 4.238482063245,
            "unit": "g"
          },
          "SUGAR": {
            "label": "Sugars",
            "quantity": 14.530023079756,
            "unit": "g"
          },
          "PROCNT": {
            "label": "Protein",
            "quantity": 145.0148932895935,
            "unit": "g"
          },
          "CHOLE": {
            "label": "Cholesterol",
            "quantity": 892.2894382000003,
            "unit": "mg"
          },
          "NA": {
            "label": "Sodium",
            "quantity": 3123.7155923060445,
            "unit": "mg"
          },
          "CA": {
            "label": "Calcium",
            "quantity": 1151.7411053442668,
            "unit": "mg"
          },
          "MG": {
            "label": "Magnesium",
            "quantity": 218.43477971624654,
            "unit": "mg"
          },
          "K": {
            "label": "Potassium",
            "quantity": 2144.9114373206226,
            "unit": "mg"
          },
          "FE": {
            "label": "Iron",
            "quantity": 10.914678172673353,
            "unit": "mg"
          },
          "ZN": {
            "label": "Zinc",
            "quantity": 16.864543183823155,
            "unit": "mg"
          },
          "P": {
            "label": "Phosphorus",
            "quantity": 1881.1767712507,
            "unit": "mg"
          },
          "VITA_RAE": {
            "label": "Vitamin A",
            "quantity": 857.04762892955,
            "unit": "µg"
          },
          "VITC": {
            "label": "Vitamin C",
            "quantity": 3.4715732950000002,
            "unit": "mg"
          },
          "THIA": {
            "label": "Thiamin (B1)",
            "quantity": 2.4829079002182004,
            "unit": "mg"
          },
          "RIBF": {
            "label": "Riboflavin (B2)",
            "quantity": 2.7251488016970002,
            "unit": "mg"
          },
          "NIA": {
            "label": "Niacin (B3)",
            "quantity": 28.62716793975095,
            "unit": "mg"
          },
          "VITB6A": {
            "label": "Vitamin B6",
            "quantity": 2.5704297857851506,
            "unit": "mg"
          },
          "FOLDFE": {
            "label": "Folate equivalent (total)",
            "quantity": 164.16774866305,
            "unit": "µg"
          },
          "FOLFD": {
            "label": "Folate (food)",
            "quantity": 126.63774866305002,
            "unit": "µg"
          },
          "FOLAC": {
            "label": "Folic acid",
            "quantity": 22.14,
            "unit": "µg"
          },
          "VITB12": {
            "label": "Vitamin B12",
            "quantity": 9.474553342,
            "unit": "µg"
          },
          "VITD": {
            "label": "Vitamin D",
            "quantity": 313.49317285000006,
            "unit": "IU"
          },
          "TOCPHA": {
            "label": "Vitamin E",
            "quantity": 3.9700313529159996,
            "unit": "mg"
          },
          "VITK1": {
            "label": "Vitamin K",
            "quantity": 60.937155168605,
            "unit": "µg"
          },
          "WATER": {
            "label": "Water",
            "quantity": 959.1412811896782,
            "unit": "g"
          }
        },
        "totalDaily": {
          "ENERC_KCAL": {
            "label": "Energy",
            "quantity": 116.7552139609575,
            "unit": "%"
          },
          "FAT": {
            "label": "Fat",
            "quantity": 263.30423185566,
            "unit": "%"
          },
          "FASAT": {
            "label": "Saturated",
            "quantity": 409.321110185534,
            "unit": "%"
          },
          "CHOCDF": {
            "label": "Carbs",
            "quantity": 16.463881063922504,
            "unit": "%"
          },
          "FIBTG": {
            "label": "Fiber",
            "quantity": 16.95392825298,
            "unit": "%"
          },
          "PROCNT": {
            "label": "Protein",
            "quantity": 290.029786579187,
            "unit": "%"
          },
          "CHOLE": {
            "label": "Cholesterol",
            "quantity": 297.42981273333345,
            "unit": "%"
          },
          "NA": {
            "label": "Sodium",
            "quantity": 130.1548163460852,
            "unit": "%"
          },
          "CA": {
            "label": "Calcium",
            "quantity": 115.17411053442669,
            "unit": "%"
          },
          "MG": {
            "label": "Magnesium",
            "quantity": 52.0082808848206,
            "unit": "%"
          },
          "K": {
            "label": "Potassium",
            "quantity": 45.636413560013246,
            "unit": "%"
          },
          "FE": {
            "label": "Iron",
            "quantity": 60.637100959296404,
            "unit": "%"
          },
          "ZN": {
            "label": "Zinc",
            "quantity": 153.31402894384686,
            "unit": "%"
          },
          "P": {
            "label": "Phosphorus",
            "quantity": 268.7395387501,
            "unit": "%"
          },
          "VITA_RAE": {
            "label": "Vitamin A",
            "quantity": 95.22751432550555,
            "unit": "%"
          },
          "VITC": {
            "label": "Vitamin C",
            "quantity": 3.857303661111111,
            "unit": "%"
          },
          "THIA": {
            "label": "Thiamin (B1)",
            "quantity": 206.90899168485004,
            "unit": "%"
          },
          "RIBF": {
            "label": "Riboflavin (B2)",
            "quantity": 209.62683089976923,
            "unit": "%"
          },
          "NIA": {
            "label": "Niacin (B3)",
            "quantity": 178.91979962344345,
            "unit": "%"
          },
          "VITB6A": {
            "label": "Vitamin B6",
            "quantity": 197.72536813731924,
            "unit": "%"
          },
          "FOLDFE": {
            "label": "Folate equivalent (total)",
            "quantity": 41.041937165762505,
            "unit": "%"
          },
          "VITB12": {
            "label": "Vitamin B12",
            "quantity": 394.7730559166667,
            "unit": "%"
          },
          "VITD": {
            "label": "Vitamin D",
            "quantity": 2089.954485666667,
            "unit": "%"
          },
          "TOCPHA": {
            "label": "Vitamin E",
            "quantity": 26.466875686106665,
            "unit": "%"
          },
          "VITK1": {
            "label": "Vitamin K",
            "quantity": 50.78096264050417,
            "unit": "%"
          }
        },
        "digest": [
          {
            "label": "Fat",
            "tag": "FAT",
            "schemaOrgTag": "fatContent",
            "total": 171.14775070617904,
            "hasRDI": true,
            "daily": 263.30423185566,
            "unit": "g",
            "sub": [
              {
                "label": "Saturated",
                "tag": "FASAT",
                "schemaOrgTag": "saturatedFatContent",
                "total": 81.8642220371068,
                "hasRDI": true,
                "daily": 409.321110185534,
                "unit": "g"
              },
              {
                "label": "Trans",
                "tag": "FATRN",
                "schemaOrgTag": "transFatContent",
                "total": 3.0129294476,
                "hasRDI": false,
                "daily": 0.0,
                "unit": "g"
              },
              {
                "label": "Monounsaturated",
                "tag": "FAMS",
                "schemaOrgTag": null,
                "total": 63.179608946864356,
                "hasRDI": false,
                "daily": 0.0,
                "unit": "g"
              },
              {
                "label": "Polyunsaturated",
                "tag": "FAPU",
                "schemaOrgTag": null,
                "total": 12.888437822286702,
                "hasRDI": false,
                "daily": 0.0,
                "unit": "g"
              }
            ]
          },
          {
            "label": "Carbs",
            "tag": "CHOCDF",
            "schemaOrgTag": "carbohydrateContent",
            "total": 49.39164319176751,
            "hasRDI": true,
            "daily": 16.463881063922504,
            "unit": "g",
            "sub": [
              {
                "label": "Carbs (net)",
                "tag": "CHOCDF.net",
                "schemaOrgTag": null,
                "total": 45.153161128522505,
                "hasRDI": false,
                "daily": 0.0,
                "unit": "g"
              },
              {
                "label": "Fiber",
                "tag": "FIBTG",
                "schemaOrgTag": "fiberContent",
                "total": 4.238482063245,
                "hasRDI": true,
                "daily": 16.95392825298,
                "unit": "g"
              },
              {
                "label": "Sugars",
                "tag": "SUGAR",
                "schemaOrgTag": "sugarContent",
                "total": 14.530023079756,
                "hasRDI": false,
                "daily": 0.0,
                "unit": "g"
              },
              {
                "label": "Sugars, added",
                "tag": "SUGAR.added",
                "schemaOrgTag": null,
                "total": 0.0,
                "hasRDI": false,
                "daily": 0.0,
                "unit": "g"
              }
            ]
          },
          {
            "label": "Protein",
            "tag": "PROCNT",
            "schemaOrgTag": "proteinContent",
            "total": 145.0148932895935,
            "hasRDI": true,
            "daily": 290.029786579187,
            "unit": "g"
          },
          {
            "label": "Cholesterol",
            "tag": "CHOLE",
            "schemaOrgTag": "cholesterolContent",
            "total": 892.2894382000003,
            "hasRDI": true,
            "daily": 297.42981273333345,
            "unit": "mg"
          },
          {
            "label": "Sodium",
            "tag": "NA",
            "schemaOrgTag": "sodiumContent",
            "total": 3123.7155923060445,
            "hasRDI": true,
            "daily": 130.1548163460852,
            "unit": "mg"
          },
          {
            "label": "Calcium",
            "tag": "CA",
            "schemaOrgTag": null,
            "total": 1151.7411053442668,
            "hasRDI": true,
            "daily": 115.17411053442669,
            "unit": "mg"
          },
          {
            "label": "Magnesium",
            "tag": "MG",
            "schemaOrgTag": null,
            "total": 218.43477971624654,
            "hasRDI": true,
            "daily": 52.0082808848206,
            "unit": "mg"
          },
          {
            "label": "Potassium",
            "tag": "K",
            "schemaOrgTag": null,
            "total": 2144.9114373206226,
            "hasRDI": true,
            "daily": 45.636413560013246,
            "unit": "mg"
          },
          {
            "label": "Iron",
            "tag": "FE",
            "schemaOrgTag": null,
            "total": 10.914678172673353,
            "hasRDI": true,
            "daily": 60.637100959296404,
            "unit": "mg"
          },
          {
            "label": "Zinc",
            "tag": "ZN",
            "schemaOrgTag": null,
            "total": 16.864543183823155,
            "hasRDI": true,
            "daily": 153.31402894384686,
            "unit": "mg"
          },
          {
            "label": "Phosphorus",
            "tag": "P",
            "schemaOrgTag": null,
            "total": 1881.1767712507,
            "hasRDI": true,
            "daily": 268.7395387501,
            "unit": "mg"
          },
          {
            "label": "Vitamin A",
            "tag": "VITA_RAE",
            "schemaOrgTag": null,
            "total": 857.04762892955,
            "hasRDI": true,
            "daily": 95.22751432550555,
            "unit": "µg"
          },
          {
            "label": "Vitamin C",
            "tag": "VITC",
            "schemaOrgTag": null,
            "total": 3.4715732950000002,
            "hasRDI": true,
            "daily": 3.857303661111111,
            "unit": "mg"
          },
          {
            "label": "Thiamin (B1)",
            "tag": "THIA",
            "schemaOrgTag": null,
            "total": 2.4829079002182004,
            "hasRDI": true,
            "daily": 206.90899168485004,
            "unit": "mg"
          },
          {
            "label": "Riboflavin (B2)",
            "tag": "RIBF",
            "schemaOrgTag": null,
            "total": 2.7251488016970002,
            "hasRDI": true,
            "daily": 209.62683089976923,
            "unit": "mg"
          },
          {
            "label": "Niacin (B3)",
            "tag": "NIA",
            "schemaOrgTag": null,
            "total": 28.62716793975095,
            "hasRDI": true,
            "daily": 178.91979962344345,
            "unit": "mg"
          },
          {
            "label": "Vitamin B6",
            "tag": "VITB6A",
            "schemaOrgTag": null,
            "total": 2.5704297857851506,
            "hasRDI": true,
            "daily": 197.72536813731924,
            "unit": "mg"
          },
          {
            "label": "Folate equivalent (total)",
            "tag": "FOLDFE",
            "schemaOrgTag": null,
            "total": 164.16774866305,
            "hasRDI": true,
            "daily": 41.041937165762505,
            "unit": "µg"
          },
          {
            "label": "Folate (food)",
            "tag": "FOLFD",
            "schemaOrgTag": null,
            "total": 126.63774866305002,
            "hasRDI": false,
            "daily": 0.0,
            "unit": "µg"
          },
          {
            "label": "Folic acid",
            "tag": "FOLAC",
            "schemaOrgTag": null,
            "total": 22.14,
            "hasRDI": false,
            "daily": 0.0,
            "unit": "µg"
          },
          {
            "label": "Vitamin B12",
            "tag": "VITB12",
            "schemaOrgTag": null,
            "total": 9.474553342,
            "hasRDI": true,
            "daily": 394.7730559166667,
            "unit": "µg"
          },
          {
            "label": "Vitamin D",
            "tag": "VITD",
            "schemaOrgTag": null,
            "total": 313.49317285000006,
            "hasRDI": true,
            "daily": 2089.954485666667,
            "unit": "µg"
          },
          {
            "label": "Vitamin E",
            "tag": "TOCPHA",
            "schemaOrgTag": null,
            "total": 3.9700313529159996,
            "hasRDI": true,
            "daily": 26.466875686106665,
            "unit": "mg"
          },
          {
            "label": "Vitamin K",
            "tag": "VITK1",
            "schemaOrgTag": null,
            "total": 60.937155168605,
            "hasRDI": true,
            "daily": 50.78096264050417,
            "unit": "µg"
          },
          {
            "label": "Sugar alcohols",
            "tag": "Sugar.alcohol",
            "schemaOrgTag": null,
            "total": 0.0,
            "hasRDI": false,
            "daily": 0.0,
            "unit": "g"
          },
          {
            "label": "Water",
            "tag": "WATER",
            "schemaOrgTag": null,
            "total": 959.1412811896782,
            "hasRDI": false,
            "daily": 0.0,
            "unit": "g"
          }
        ]
      },
      "bookmarked": false,
      "bought": false
    },
    {
      "recipe": {
        "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_753957dc1f9ea067114eca0835dbb613",
        "label": "Milk-Braised Chicken With Escarole Salad",
        "image": "https://www.edamam.com/web-img/64a/64a33d47edf92f58cc765b880adabee5.jpg",
        "source": "Real Simple",
        "url": "https://www.realsimple.com/food-recipes/browse-all-recipes/milk-braised-chicken-with-escarole-salad",
        "shareAs": "http://www.edamam.com/recipe/milk-braised-chicken-with-escarole-salad-753957dc1f9ea067114eca0835dbb613/chicken%2Cmilk",
        "yield": 8.0,
        "dietLabels": [
          "Low-Carb"
        ],
        "healthLabels": [
          "Sugar-Conscious",
          "Peanut-Free",
          "Tree-Nut-Free",
          "Alcohol-Free"
        ],
        "cautions": [
          "Sulfites"
        ],
        "ingredientLines": [
          "2 cups whole milk",
          "1  head garlic, halved crosswise",
          "2  sprigs rosemary",
          "8  whole chicken legs",
          "Kosher salt and black pepper",
          "1 head escarole, leaves torn",
          "1 tablespoon olive oil",
          "1 tablespoon fresh lemon juice",
          "¼ cup shaved Parmesan",
          "Toasted country bread and parsley, for serving"
        ],
        "ingredients": [
          {
            "text": "2 cups whole milk",
            "weight": 488.0
          },
          {
            "text": "1  head garlic, halved crosswise",
            "weight": 50.0
          },
          {
            "text": "2  sprigs rosemary",
            "weight": 10.0
          },
          {
            "text": "8  whole chicken legs",
            "weight": 2752.0
          },
          {
            "text": "Kosher salt and black pepper",
            "weight": 0.0
          },
          {
            "text": "Kosher salt and black pepper",
            "weight": 10.22625
          },
          {
            "text": "1 head escarole, leaves torn",
            "weight": 53.0
          },
          {
            "text": "1 tablespoon olive oil",
            "weight": 13.5
          },
          {
            "text": "1 tablespoon fresh lemon juice",
            "weight": 14.0
          },
          {
            "text": "¼ cup shaved Parmesan",
            "weight": 28.25
          }
        ],
        "calories": 6542.397887499999,
        "totalWeight": 3418.97625,
        "totalTime": 195.0,
        "totalNutrients": {
          "ENERC_KCAL": {
            "label": "Energy",
            "quantity": 6542.397887499999,
            "unit": "kcal"
          },
          "FAT": {
            "label": "Fat",
            "quantity": 476.85695074999995,
            "unit": "g"
          },
          "FASAT": {
            "label": "Saturated",
            "quantity": 136.2423944,
            "unit": "g"
          },
          "FATRN": {
            "label": "Trans",
            "quantity": 1.6512,
            "unit": "g"
          },
          "FAMS": {
            "label": "Monounsaturated",
            "quantity": 198.2891344875,
            "unit": "g"
          },
          "FAPU": {
            "label": "Polyunsaturated",
            "quantity": 95.12290547499998,
            "unit": "g"
          },
          "CHOCDF": {
            "label": "Carbs",
            "quantity": 57.237736874999996,
            "unit": "g"
          },
          "FIBTG": {
            "label": "Fiber",
            "quantity": 6.732241250000001,
            "unit": "g"
          },
          "SUGAR": {
            "label": "Sugars",
            "quantity": 25.788247999999996,
            "unit": "g"
          },
          "PROCNT": {
            "label": "Protein",
            "quantity": 481.07328237499996,
            "unit": "g"
          },
          "CHOLE": {
            "label": "Cholesterol",
            "quantity": 2627.3700000000003,
            "unit": "mg"
          },
          "NA": {
            "label": "Sodium",
            "quantity": 2924.8552499999996,
            "unit": "mg"
          },
          "CA": {
            "label": "Calcium",
            "quantity": 1312.1472875,
            "unit": "mg"
          },
          "MG": {
            "label": "Magnesium",
            "quantity": 629.3368874999999,
            "unit": "mg"
          },
          "K": {
            "label": "Potassium",
            "quantity": 6786.3018624999995,
            "unit": "mg"
          },
          "FE": {
            "label": "Iron",
            "quantity": 22.088818874999994,
            "unit": "mg"
          },
          "ZN": {
            "label": "Zinc",
            "quantity": 43.923367375,
            "unit": "mg"
          },
          "P": {
            "label": "Phosphorus",
            "quantity": 4985.732475000001,
            "unit": "mg"
          },
          "VITA_RAE": {
            "label": "Vitamin A",
            "quantity": 1071.4085874999998,
            "unit": "µg"
          },
          "VITC": {
            "label": "Vitamin C",
            "quantity": 30.186,
            "unit": "mg"
          },
          "THIA": {
            "label": "Thiamin (B1)",
            "quantity": 2.3953218499999993,
            "unit": "mg"
          },
          "RIBF": {
            "label": "Riboflavin (B2)",
            "quantity": 4.903847250000001,
            "unit": "mg"
          },
          "NIA": {
            "label": "Niacin (B3)",
            "quantity": 131.41866353749998,
            "unit": "mg"
          },
          "VITB6A": {
            "label": "Vitamin B6",
            "quantity": 9.662305887499997,
            "unit": "mg"
          },
          "FOLDFE": {
            "label": "Folate equivalent (total)",
            "quantity": 173.00596249999998,
            "unit": "µg"
          },
          "FOLFD": {
            "label": "Folate (food)",
            "quantity": 173.00596249999998,
            "unit": "µg"
          },
          "VITB12": {
            "label": "Vitamin B12",
            "quantity": 17.9462,
            "unit": "µg"
          },
          "VITD": {
            "label": "Vitamin D",
            "quantity": 309.2875,
            "unit": "IU"
          },
          "TOCPHA": {
            "label": "Vitamin E",
            "quantity": 8.562753000000003,
            "unit": "mg"
          },
          "VITK1": {
            "label": "Vitamin K",
            "quantity": 90.95762124999997,
            "unit": "µg"
          },
          "WATER": {
            "label": "Water",
            "quantity": 2390.7682907500002,
            "unit": "g"
          }
        },
        "totalDaily": {
          "ENERC_KCAL": {
            "label": "Energy",
            "quantity": 327.119894375,
            "unit": "%"
          },
          "FAT": {
            "label": "Fat",
            "quantity": 733.626078076923,
            "unit": "%"
          },
          "FASAT": {
            "label": "Saturated",
            "quantity": 681.211972,
            "unit": "%"
          },
          "CHOCDF": {
            "label": "Carbs",
            "quantity": 19.079245625,
            "unit": "%"
          },
          "FIBTG": {
            "label": "Fiber",
            "quantity": 26.92896500000001,
            "unit": "%"
          },
          "PROCNT": {
            "label": "Protein",
            "quantity": 962.1465647499999,
            "unit": "%"
          },
          "CHOLE": {
            "label": "Cholesterol",
            "quantity": 875.7900000000002,
            "unit": "%"
          },
          "NA": {
            "label": "Sodium",
            "quantity": 121.86896874999998,
            "unit": "%"
          },
          "CA": {
            "label": "Calcium",
            "quantity": 131.21472875,
            "unit": "%"
          },
          "MG": {
            "label": "Magnesium",
            "quantity": 149.84211607142853,
            "unit": "%"
          },
          "K": {
            "label": "Potassium",
            "quantity": 144.3894013297872,
            "unit": "%"
          },
          "FE": {
            "label": "Iron",
            "quantity": 122.71566041666662,
            "unit": "%"
          },
          "ZN": {
            "label": "Zinc",
            "quantity": 399.30333977272727,
            "unit": "%"
          },
          "P": {
            "label": "Phosphorus",
            "quantity": 712.2474964285715,
            "unit": "%"
          },
          "VITA_RAE": {
            "label": "Vitamin A",
            "quantity": 119.0453986111111,
            "unit": "%"
          },
          "VITC": {
            "label": "Vitamin C",
            "quantity": 33.54,
            "unit": "%"
          },
          "THIA": {
            "label": "Thiamin (B1)",
            "quantity": 199.61015416666663,
            "unit": "%"
          },
          "RIBF": {
            "label": "Riboflavin (B2)",
            "quantity": 377.21901923076933,
            "unit": "%"
          },
          "NIA": {
            "label": "Niacin (B3)",
            "quantity": 821.3666471093749,
            "unit": "%"
          },
          "VITB6A": {
            "label": "Vitamin B6",
            "quantity": 743.2542990384612,
            "unit": "%"
          },
          "FOLDFE": {
            "label": "Folate equivalent (total)",
            "quantity": 43.251490624999995,
            "unit": "%"
          },
          "VITB12": {
            "label": "Vitamin B12",
            "quantity": 747.7583333333334,
            "unit": "%"
          },
          "VITD": {
            "label": "Vitamin D",
            "quantity": 2061.916666666667,
            "unit": "%"
          },
          "TOCPHA": {
            "label": "Vitamin E",
            "quantity": 57.085020000000014,
            "unit": "%"
          },
          "VITK1": {
            "label": "Vitamin K",
            "quantity": 75.79801770833332,
            "unit": "%"
          }
        },
        "digest": [
          {
            "label": "Fat",
            "tag": "FAT",
            "schemaOrgTag": "fatContent",
            "total": 476.85695074999995,
            "hasRDI": true,
            "daily": 733.626078076923,
            "unit": "g",
            "sub": [
              {
                "label": "Saturated",
                "tag": "FASAT",
                "schemaOrgTag": "saturatedFatContent",
                "total": 136.2423944,
                "hasRDI": true,
                "daily": 681.211972,
                "unit": "g"
              },
              {
                "label": "Trans",
                "tag": "FATRN",
                "schemaOrgTag": "transFatContent",
                "total": 1.6512,
                "hasRDI": false,
                "daily": 0.0,
                "unit": "g"
              },
              {
                "label": "Monounsaturated",
                "tag": "FAMS",
                "schemaOrgTag": null,
                "total": 198.2891344875,
                "hasRDI": false,
                "daily": 0.0,
                "unit": "g"
              },
              {
                "label": "Polyunsaturated",
                "tag": "FAPU",
                "schemaOrgTag": null,
                "total": 95.12290547499998,
                "hasRDI": false,
                "daily": 0.0,
                "unit": "g"
              }
            ]
          },
          {
            "label": "Carbs",
            "tag": "CHOCDF",
            "schemaOrgTag": "carbohydrateContent",
            "total": 57.237736874999996,
            "hasRDI": true,
            "daily": 19.079245625,
            "unit": "g",
            "sub": [
              {
                "label": "Carbs (net)",
                "tag": "CHOCDF.net",
                "schemaOrgTag": null,
                "total": 50.505495624999995,
                "hasRDI": false,
                "daily": 0.0,
                "unit": "g"
              },
              {
                "label": "Fiber",
                "tag": "FIBTG",
                "schemaOrgTag": "fiberContent",
                "total": 6.732241250000001,
                "hasRDI": true,
                "daily": 26.92896500000001,
                "unit": "g"
              },
              {
                "label": "Sugars",
                "tag": "SUGAR",
                "schemaOrgTag": "sugarContent",
                "total": 25.788247999999996,
                "hasRDI": false,
                "daily": 0.0,
                "unit": "g"
              },
              {
                "label": "Sugars, added",
                "tag": "SUGAR.added",
                "schemaOrgTag": null,
                "total": 0.0,
                "hasRDI": false,
                "daily": 0.0,
                "unit": "g"
              }
            ]
          },
          {
            "label": "Protein",
            "tag": "PROCNT",
            "schemaOrgTag": "proteinContent",
            "total": 481.07328237499996,
            "hasRDI": true,
            "daily": 962.1465647499999,
            "unit": "g"
          },
          {
            "label": "Cholesterol",
            "tag": "CHOLE",
            "schemaOrgTag": "cholesterolContent",
            "total": 2627.3700000000003,
            "hasRDI": true,
            "daily": 875.7900000000002,
            "unit": "mg"
          },
          {
            "label": "Sodium",
            "tag": "NA",
            "schemaOrgTag": "sodiumContent",
            "total": 2924.8552499999996,
            "hasRDI": true,
            "daily": 121.86896874999998,
            "unit": "mg"
          },
          {
            "label": "Calcium",
            "tag": "CA",
            "schemaOrgTag": null,
            "total": 1312.1472875,
            "hasRDI": true,
            "daily": 131.21472875,
            "unit": "mg"
          },
          {
            "label": "Magnesium",
            "tag": "MG",
            "schemaOrgTag": null,
            "total": 629.3368874999999,
            "hasRDI": true,
            "daily": 149.84211607142853,
            "unit": "mg"
          },
          {
            "label": "Potassium",
            "tag": "K",
            "schemaOrgTag": null,
            "total": 6786.3018624999995,
            "hasRDI": true,
            "daily": 144.3894013297872,
            "unit": "mg"
          },
          {
            "label": "Iron",
            "tag": "FE",
            "schemaOrgTag": null,
            "total": 22.088818874999994,
            "hasRDI": true,
            "daily": 122.71566041666662,
            "unit": "mg"
          },
          {
            "label": "Zinc",
            "tag": "ZN",
            "schemaOrgTag": null,
            "total": 43.923367375,
            "hasRDI": true,
            "daily": 399.30333977272727,
            "unit": "mg"
          },
          {
            "label": "Phosphorus",
            "tag": "P",
            "schemaOrgTag": null,
            "total": 4985.732475000001,
            "hasRDI": true,
            "daily": 712.2474964285715,
            "unit": "mg"
          },
          {
            "label": "Vitamin A",
            "tag": "VITA_RAE",
            "schemaOrgTag": null,
            "total": 1071.4085874999998,
            "hasRDI": true,
            "daily": 119.0453986111111,
            "unit": "µg"
          },
          {
            "label": "Vitamin C",
            "tag": "VITC",
            "schemaOrgTag": null,
            "total": 30.186,
            "hasRDI": true,
            "daily": 33.54,
            "unit": "mg"
          },
          {
            "label": "Thiamin (B1)",
            "tag": "THIA",
            "schemaOrgTag": null,
            "total": 2.3953218499999993,
            "hasRDI": true,
            "daily": 199.61015416666663,
            "unit": "mg"
          },
          {
            "label": "Riboflavin (B2)",
            "tag": "RIBF",
            "schemaOrgTag": null,
            "total": 4.903847250000001,
            "hasRDI": true,
            "daily": 377.21901923076933,
            "unit": "mg"
          },
          {
            "label": "Niacin (B3)",
            "tag": "NIA",
            "schemaOrgTag": null,
            "total": 131.41866353749998,
            "hasRDI": true,
            "daily": 821.3666471093749,
            "unit": "mg"
          },
          {
            "label": "Vitamin B6",
            "tag": "VITB6A",
            "schemaOrgTag": null,
            "total": 9.662305887499997,
            "hasRDI": true,
            "daily": 743.2542990384612,
            "unit": "mg"
          },
          {
            "label": "Folate equivalent (total)",
            "tag": "FOLDFE",
            "schemaOrgTag": null,
            "total": 173.00596249999998,
            "hasRDI": true,
            "daily": 43.251490624999995,
            "unit": "µg"
          },
          {
            "label": "Folate (food)",
            "tag": "FOLFD",
            "schemaOrgTag": null,
            "total": 173.00596249999998,
            "hasRDI": false,
            "daily": 0.0,
            "unit": "µg"
          },
          {
            "label": "Folic acid",
            "tag": "FOLAC",
            "schemaOrgTag": null,
            "total": 0.0,
            "hasRDI": false,
            "daily": 0.0,
            "unit": "µg"
          },
          {
            "label": "Vitamin B12",
            "tag": "VITB12",
            "schemaOrgTag": null,
            "total": 17.9462,
            "hasRDI": true,
            "daily": 747.7583333333334,
            "unit": "µg"
          },
          {
            "label": "Vitamin D",
            "tag": "VITD",
            "schemaOrgTag": null,
            "total": 309.2875,
            "hasRDI": true,
            "daily": 2061.916666666667,
            "unit": "µg"
          },
          {
            "label": "Vitamin E",
            "tag": "TOCPHA",
            "schemaOrgTag": null,
            "total": 8.562753000000003,
            "hasRDI": true,
            "daily": 57.085020000000014,
            "unit": "mg"
          },
          {
            "label": "Vitamin K",
            "tag": "VITK1",
            "schemaOrgTag": null,
            "total": 90.95762124999997,
            "hasRDI": true,
            "daily": 75.79801770833332,
            "unit": "µg"
          },
          {
            "label": "Sugar alcohols",
            "tag": "Sugar.alcohol",
            "schemaOrgTag": null,
            "total": 0.0,
            "hasRDI": false,
            "daily": 0.0,
            "unit": "g"
          },
          {
            "label": "Water",
            "tag": "WATER",
            "schemaOrgTag": null,
            "total": 2390.7682907500002,
            "hasRDI": false,
            "daily": 0.0,
            "unit": "g"
          }
        ]
      },
      "bookmarked": false,
      "bought": false
    }
  ]
}
console.log(JSON.stringify(sortByRecipe(test)))
sortRecipe.js
Displaying sortRecipe.js.
