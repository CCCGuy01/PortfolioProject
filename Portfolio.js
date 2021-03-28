$(document).ready(function(){

    $(".hours").hide();

    $(".about").click(function(){
        alert("We're a hip new restaurant with a kickin' sauce!")
    })

    $(".Menu").click(function(){
        $(".vid").html("<img src='pokemenu.jpg' style='max-width:100%; max-height:100%'>")
    })

    $(".Hour").click(function(){
        $(".hours").toggle();
    })
    
    $(".map").html("<img src='https://api.tomtom.com/map/1/staticimage?layer=basic&style=main&format=png&zoom=12&center=4.899886%2C%2052.379031&width=512&height=512&view=Unified&key=LcH2m3k78bcGfJm1ZtnGBh4Ppir9SGCx' style='max-width:100%; max-height:100%'></img>");
    
    //records[0].fields.geopoint[0]
    //records[0].fields.geopoint[1]

    var form = "";
    form += "<form id='formy'><label for='name'>Name</label><input type='text' id='name' name='name' placeholder='Your name..'>";
    form += "<label for='email'>Email</label><input type='text' id='email' name='email' placeholder='Email Address..'>"
    form += "<label for='subject'>Subject</label><textarea id='subject' name='subject' placeholder='Write something..' style='height:200px'></textarea>";
    form += "<input type='submit' value='Submit'></form>";
    
    $(".contact").click(function(){
        $("formy").hide();
        $(".sidelist").append(form);
        $("form").submit(function(event){
            event.preventDefault();
            alert("Thanks! We got your message and will get back to you shortly!")
        })
    })
    var loc = "";
    loc += "<form id='formz'><label for='zip'>Locations</label><input type='text' id='zip' name='zip' placeholder='Enter your zip..'>"
    
    $(".locations").html(loc);
    $('#formz').keypress(function(e){
        if (e.which == 13) {
            $('#formz').submit(function(event){
                event.preventDefault();
                var zip = event.currentTarget[0].value
                //alert(zip)
                $.get("https://public.opendatasoft.com/api/records/1.0/search/?dataset=us-zip-code-latitude-and-longitude&q=&facet=zip&refine.zip=" + zip, function(res){
                    var ycoord = res.records[0].fields.geopoint[0];
                    
                    var xcoord = res.records[0].fields.geopoint[1];
                    //alert(ycoord)
                    $(".map").html("<img src='https://api.tomtom.com/map/1/staticimage?layer=basic&style=main&format=png&zoom=12&center=" + xcoord + "%2C%20" + ycoord + "&width=512&height=512&view=Unified&key=LcH2m3k78bcGfJm1ZtnGBh4Ppir9SGCx' style='max-width:100%; max-height:100%'></img>");
                })
            })
            //return false;
        }
    })


   // $.get("https://public.opendatasoft.com/api/records/1.0/search/?dataset=us-zip-code-latitude-and-longitude&q=&facet=zip&refine.zip=" + zip, function(res)

})