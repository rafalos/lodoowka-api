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
                    single.push($(this).text())
                })
                ings.push(single)
            })
            ings.forEach(function(ing) {
                Ingredient.create({
                    name: ing[0],
                    cal: parseInt(ing[1]),
                    protein: parseInt(ing[2]),
                    fat: parseInt(ing[3]),
                    carb: parseInt(ing[4]),
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
