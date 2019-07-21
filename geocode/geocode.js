const request=require('request');
const key="32618f8fe41049";
var geocodeAddress=(address,callback)=>{
    request(
        {
            url:`https://us1.locationiq.com/v1/search.php?key=${key}&q=${address}&format=json`,
            json:true
        },
        (error,response,body)=>{
            if(error)
            callback("unable to connect to servers...");
            else if(response.statusCode===200)
            {   callback(undefined,{
                lat:body[0].lat,
                lon:body[0].lon
            });
            }
            else callback(`Invalid address....try again. ERROR:${response.statusCode}`);
        }
    );
};
module.exports.geocodeAddress=geocodeAddress;