const rp = require('request-promise');
const cheerio = require('cheerio');
const Ingredient = require("../models/ingredient")
var async = require('async');
const options = {
    uri: "https://potrafiszschudnac.pl/diety/tabele-kalorycznosci-produktow/",
    transform: function (body) {
      return cheerio.load(body);
    }
}

var table =[]
var scraper = {
    fetchIng(){
        rp(options).then(($) => {
            var ings = []
            $("tr").each(function(index, tr){
                var single = []
                $(this).children("td").each(function(index, td){
                    td = $(td).text()
                    td = td.replace(/,/g, ".");
                    single.push(td)
                })
                ings.push(single)
            })
            ings.forEach(function(ing) {
                Ingredient.create({
                    name: ing[0],
                    cal: ing[1],
                    protein: ing[2],
                    fat: ing[3],
                    carb: ing[4],
                }, function(err, created) {
                    if(err) {
                        console.log(err)
                    } else {
                        console.log("created")
                    }
                })
            })
        })  
    }
}

module.exports = scraper
