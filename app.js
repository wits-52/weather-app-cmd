const yargs=require('yargs');
const geocode=require('./geocode/geocode');
const weather=require('./weather/weather');

const argv=yargs.options({
    a:{
        demand:true,
        alias:'address',
        describe:'address to fetch latitude and longitude',
        string:true
    }
})
.help()
.alias('help','h')
.argv;

var add=encodeURIComponent(argv.address);
geocode.geocodeAddress(add,(errormessage,result)=>{
    if(errormessage)
    console.log(errormessage);
    else{
        weather.forecast(result.lat,result.lon,(errormessage,result)=>{
            if(errormessage)
            console.log(errormessage);
            else {
                //console.log(result);
                console.log(`Summary:${result.summary} \nTemprature:${result.temp} \nApparentTemprature:${result.apptemp}`);
            }
        });
    }
});