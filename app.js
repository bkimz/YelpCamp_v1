var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}))

    var campgrounds = [
        {name: "Salmon Creek", image: "https://static.pexels.com/photos/192518/pexels-photo-192518.jpeg"},
        {name: "Restya Ballz Resort", image: "https://static.pexels.com/photos/25540/pexels-photo-25540.jpg"},
        {name: "Khao Yai National Park", image: "https://static.pexels.com/photos/27865/pexels-photo-27865.jpg"}
        ]



app.get("/", function(req, res){

    res.render("landing");
});

app.get("/campgrounds", function(req, res){

        
        res.render("campgrounds", {campgrounds:campgrounds});
});

app.get("/campgrounds/new", function(req, res){
    res.render("new");
    
})

app.post("/campgrounds", function(req, res){
    //get data from form and add to campgrounds array
    var name = req.body.name;
    var image = req.body.image;
    var newCampground = {name: name, image: image}
    campgrounds.push(newCampground);
    
    //redirect back to campgrounds page
    res.redirect("/campgrounds");
})

app.listen(process.env.PORT, process.env.IP, function(req, res){
    console.log("yelpcamp server has started");
});