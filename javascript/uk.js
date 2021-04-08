$(document).ready(function(){


    


  // typing text animation script
  var typed = new Typed(".typing", {
    strings: ["Mauritius", "Cameroon", "United Kingdom"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
}); 
    
async function getCsvData(){
    //loaded csv data
    let csvData=  d3.csv("Datatravel.csv");
    
    return csvData;

}




 async  function getUKData(){
    const data=  await getCsvData();
  const entryToUK=data[274].info.slice(610,1180);
  const travelInUK=data[274].info.slice(1181,2790);
        
  const advise=data[274].info.slice(2818,3400);
  const lastest=data[274].info.slice(13,560);
  const quarantineInfo=data[274].optional2;
  const certifiation=data[274].optional3;
  const published=data[274].published;

   document.getElementById("entryuk").innerHTML=entryToUK;

   
    document.getElementById("knews").innerHTML=lastest;
  
    document.getElementById("infouk").innerHTML=quarantineInfo;
    document.getElementById("certificatesuk").innerHTML=certifiation;
    document.getElementById("placeuk").innerHTML=travelInUK;
    document.getElementById("placesuk").innerHTML=travelInUK;



}


window.onload= getUKData();



let ukURL="https://api.covid19api.com/live/country/united-kingdom/status/confirmed/date/2020-03-21T13:13:30Z";
let dataUrl="https://covid.ourworldindata.org/data/owid-covid-data.json";

var generalData=fetch(dataUrl, {
    method: 'get'
})
.then(response => response.json());
let unitedKingdomRecoveries=[];

//fetched UK data to extract recoveries data
const fetchedUkData=fetch(ukURL, {
    method: 'get'
})
.then(response => response.json())
.then(jsonData => {
   
    // this deletes all rows but the last 70, which i then use later on
    jsonData.splice(0,jsonData.length-70);
    // after reducing to 70 extract the Recovered cases
    for(let i=0; i<jsonData.length;i++){
      unitedKingdomRecoveries[i]=jsonData[i].Recovered;
      //longs.push(parseInt(jsonData[i].Lon));
          //lats.push(parseInt(jsonData[i].Lat))
        }
    

        let smallUKData=jsonData;
    //return smallUKData;
}).catch(err => {
        console.log(err);
    });


    // to make it easier to plot, i will only take the first 70 datatsets from this
            // this makes it easier to take corresponding values from the other api

        //var deleterecords=data2.splice(0,data2.MUS.data.length-70);




        let smallCombinedUKData=generalData.then(jsonData => {
            const new_cases=[];
            const new_deaths=[];
            const dates=[]
            const total_cases=[];
            const total_deaths=[];
           
            let ukData=jsonData.GBR.data;
            // removes the rest and keeps the last 70( lastest)
           ukData.splice(0,ukData.length-70);
           const updated=ukData[ukData.length-1].date;
           // create an array for each of the data to be plotted
            for(let i=0; i<ukData.length;i++){
                new_cases[i]=ukData[i].new_cases;
                new_deaths[i]=ukData[i].new_deaths;
                total_cases[i]=ukData[i].total_cases;
                total_deaths[i]=ukData[i].total_deaths;
                dates[i]=ukData[i].date;
                
                  }
                    const singleTotalCases=total_cases[total_cases.length-1];
                  const singleTotalDeaths=total_deaths[total_deaths.length-1];
                  const singleNewDeaths=[new_deaths.length-1];
                  const singleNewCases=new_cases[new_cases.length-1];
                  const singleRecoveredCases=unitedKingdomRecoveries[unitedKingdomRecoveries.length-1];

                  
        



                  let myChart1=  document.getElementById("myChart").getContext('2d');
         
                  let chart1= new Chart(myChart1,{
                type:'line',
               data:{
                
                   labels:dates,
                   datasets:[{
                        borderColor:"Green",
                        label:"Recovered Cases",
                     data:unitedKingdomRecoveries,
                     backgroundColor:"Green",
                     borderWidth:1
          
          
                     }]
               },
               
            options:{
                title:{
                 
                   display:true ,
                   text:" United Kingdom  Covid Statistics"
                }
                ,
                responsive:true,
                
                legend:{
                    display:true
                }
            }
         
                  });


                              let myChart2=  document.getElementById("myChart2").getContext('2d');
         
                              let chart2= new Chart(myChart2,{
                            type:'bar',
                           data:{
                            
                               labels:dates,
                               datasets:[{
                                fill:false,
                                borderColor:"Blue",
                                   label:"New Cases",
                                data:new_cases,
                                backgroundColor:"Blue",
                                borderWidth:1
                     
                     
                                },
                                {
                                    borderColor:"Purple",
                                    label:"Total Deaths",
                                 data:total_deaths,
                                 backgroundColor:"Purple",
                                 borderWidth:1
                      
                      
                                 }]
                           },
                           
                        options:{
                            title:{
                             
                               display:true ,
                               text:" United Kingdom  Covid Statistics"
                            }
                            ,
                            responsive:true,
                            
                            legend:{
                                display:true
                            }
                        }
                
                              });






 
                              let myChart3=  document.getElementById("myChart3").getContext('2d');
         
                              let chart3= new Chart(myChart3,{
                            type:'line',
                           data:{
                               
                               labels:dates,
                               datasets:[{
                                fill:false,
                                   label:"Total Cases",
                                data:total_cases,
                                backgroundColor:"Pink",
                                borderColor:"Pink",
                                borderWidth:1
                     
                     
                                },
                                {
                                    fill:false,
                                    borderColor:"Red",
                                    label:"Total Deaths",
                                 data:total_deaths,
                                 backgroundColor:"Red",
                                  borderWidth:1
                      
                      
                                 }]
                           },
                           options:{
                               title:{
                                
                                  display:true ,
                                  text:" United Kingdom Covid Statistics"
                               }
                               ,
                               responsive:true,
                               
                               legend:{
                                   display:true
                               }
                           }
                        
                     
                              });



                              

                              let myChart4=  document.getElementById("myChart4").getContext('2d');
         
                              let chart4= new Chart(myChart4,{
                            type:'bar',
                           data:{
                               
                               labels:dates,
                               datasets:[{
                                fill:false,
                                   label:"Total Cases",
                                data:total_cases,
                                backgroundColor:"Pink",
                                borderColor:"Pink",
                                borderWidth:1
                     
                     
                                },
                                {
                                    fill:false,
                                    borderColor:"Red",
                                    label:"Total Deaths",
                                 data:total_deaths,
                                 backgroundColor:"Red",
                                  borderWidth:1
                      
                      
                                 }]
                           },
                           options:{
                               title:{
                                
                                  display:true ,
                                  text:" United Kingdom Covid Statistics"
                               }
                               ,
                               responsive:true,
                               
                               legend:{
                                   display:true
                               }
                           }
                        
                     
                              });



                                
                     
                     
                     


                    })
                    .catch(err => {
                            console.log(err);
                        });








 


});