const request=require('request');
const key="5d7cfe4a3f2e61f9c7b6956df3b4048a";
var forecast=(lat,lon,callback)=>{
    request(
        {
            url:`https://api.darksky.net/forecast/${key}/${lat},${lon}`,
            json:true
        },
        (error,response,body) => { 
            if(error)
            callback(`Some error occured..unable to connect. ERROR:${error}`);
            else if(response.statusCode===200)
            callback(undefined,
                {
                summary:body.currently.summary,
                temp:body.currently.temperature,
                apptemp:body.currently.apparentTemperature
                }
            );
            else {
                callback(`unable to find weather...maybe address is incorrect...try again...ERROR${response.statusCode}`);
            }
        }
    );
};
module.exports.forecast=forecast;