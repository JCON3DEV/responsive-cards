var express = require("express");
var ejs = require("ejs");
var app = express();

// Static Files
// app.use(express.static('public'));
// app.use('/css', express.static(__dirname + 'public/css'))
// app.use('/js', express.static(__dirname + 'public/js'))
// app.use('/img', express.static(__dirname + 'public/images'))

// =======================================
// temporary.  relocate;
const adverts = [
  {
    image: "../../resources/computers.png",
    title: "Virtual Camp Experience",
    location: "Alberta",
    synopsis:
      "This Program provides parents and teachers with a regular e-newsletter updates featuring educational materials, videos virtual tours and games, as well as access to activity schedules offering a structured day of fun and hands on learning for kids ages 5 - 11 and 12 - 18.",
    "extra-info":
      "words wordswords wordswords wordswords wordswords wordswords wordswords wordswords wordswords wordswords wordswords wordswords wordswords wordswords wordswords wordswords words",
  },
  {
    image: "../../resources/summercamp.png",
    title: "Virtual Camp Experience",
    location: "Brittish Columbia",
    synopsis:
      "Summer is in full swing! Now is the perfect time for studetns to learn about BC's amazing agriculture and food story. We've compiled a fun 90 week learning schedule from June 29th to August 28 to help K-12 Students strengthen their agriculture and food knowledge before Fall arrives. Each week has a different theme and all resources are free to download!",
    "extra-info":
      "words wordswords wordswords wordswords wordswords wordswords wordswords wordswords wordswords wordswords wordswords wordswords wordswords wordswords wordswords wordswords words",
  },
  {
    image: "../../resources/school.png",
    title: "Celebrating Liberation with a Promise",
    location: "Prince Edward Island",
    synopsis:
      "The spring tulip bulbs at schools will bloom into a beautiful display that will help raise awareness and honour the Canadaian who contributed to the Liberation of Europe 75 years ado. The teachers guide shares this story and provides activities linked to science and social studies curriculum.",
    "extra-info":
      "Some quick example text to build on the card title and make up the bulk of the card's content. Some quick example text to build on the card title and make up the bulk of the card's content. Some quick example text to build on the card title and make up the bulk of the card's content.",
  },
];
//  ========================================

// let funcTest = document.querySelector('.funcTest')
// let hide = document.querySelector('.hide');
// let show = document.querySelector('.hidden')
// let close = document.querySelector("overlay-close");

app.set("view engine", "ejs");

app.get("/", function (req, res) {
  console.log("This is adverts; ----->", adverts);
  let templateVars = adverts;

  res.render("test", { templateVars });
});

app.listen(3000, function () {
  console.log("server is listening!!!");
});


function on() {
  document.getElementById("overlay").style.display = "block";
}
function off() {
  document.getElementById("overlay").style.display = "none";
}
function on2() {
  document.getElementById("overlay-2").style.display = "block";
}
function off2() {
  document.getElementById("overlay-2").style.display = "none";
}
function on3() {
  document.getElementById("overlay-3").style.display = "block";
}
function off3() {
  document.getElementById("overlay-3").style.display = "none";
}