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



                        async  function getCameroonData(){
                        const data=  await getCsvData();
                        
                            const entryToCameroon=data[49].info.slice(52,738);
                            const testingOrScreening=data[49].info.slice(770,1424);
                            const travelInCameroon=data[49].info.slice(1892,2176);
                            const placesServices=data[49].info.slice(2280,2820);
                            const accomodation=data[49].info.slice(2192,2250);
                        
                            const quarantineInfo=data[49].optional2;
                            const certifiation=data[49].optional3;
                            const published=data[49].published;
                            document.getElementById("entrycam").innerHTML=entryToCameroon;
                            document.getElementById("arrival").innerHTML=testingOrScreening;
                            document.getElementById("infoc").innerHTML=quarantineInfo;
                            document.getElementById("certificates").innerHTML=certifiation;
                            document.getElementById("travelIn").innerHTML=travelInCameroon+accomodation;
                            document.getElementById("places").innerHTML=placesServices;
                
                            //console.log(quarantineInfo)
                        }
                           
                        
                        
                      
                           
                        // console.log(quarantineInfo);
                        //console.log(data[49].info);
                            // console.log(data[49].info.slice(2280,2820));
                            // console.log(accomodation);
                        //console.log(data[49])
                            
                        window.onload=   getCameroonData();
                    

                        let cameroonURL="https://api.covid19api.com/live/country/cameroon/status/confirmed/date/2020-03-21T13:13:30Z";
                        let dataUrl="https://covid.ourworldindata.org/data/owid-covid-data.json";

                        
                        var generalData=fetch(dataUrl, {
                            method: 'get'
                        })
                        .then(response => response.json());


                        let cameroonRecoveries=[];

                         //fetched Cameroon data to extract recoveries data and add object {Recovered:number} to exisiting data
      const fetchedCamData=fetch(cameroonURL, {
    method: 'get'
})
.then(response => response.json())
.then(jsonData => {
 //keep just few to make working with it easier and also because i will combine data from two sources and the days and must match. the other set has more data, this one here has less
jsonData.splice(0,jsonData.length-70);

for(let i=0; i<jsonData.length;i++){
cameroonRecoveries[i]=jsonData[i].Recovered;

}

let smallCamData=jsonData;
    return smallCamData;
            
}).catch(err => {
        console.log(err);
    });

    //fetchedCamData.then(jsonData=> console.log(jsonData));


    // to make it easier to plot, i will only take the first 70 datatsets from this
            // this makes it easier to take corresponding values from the other api

        //var deleterecords=data2.splice(0,data2.MUS.data.length-70);



        let smallCombinedCameroonData=generalData.then(jsonData => {
            
            const new_cases=[];
            const new_deaths=[];
            const dates=[]
            const total_cases=[];
            const total_deaths=[];
           
            let cameroonData=jsonData.CMR.data;
            // removes the rest and keeps the last 70( lastest)
           cameroonData.splice(0,cameroonData.length-70);
           const updated=cameroonData[cameroonData.length-1].date;
           // create an array for each of the data to be plotted
            for(let i=0; i<cameroonData.length;i++){
                new_cases[i]=cameroonData[i].new_cases;
                new_deaths[i]=cameroonData[i].new_deaths;
                total_cases[i]=cameroonData[i].total_cases;
                total_deaths[i]=cameroonData[i].total_deaths;
                dates[i]=cameroonData[i].date;
                
                  }
                    const singleTotalCases=total_cases[total_cases.length-1];
                  const singleTotalDeaths=total_deaths[total_deaths.length-1];
                  const singleNewDeaths=[new_deaths.length-1];
                  const singleNewCases=new_cases[new_cases.length-1];
                  const singleRecoveredCases=cameroonRecoveries[cameroonRecoveries.length-1];

                  
        



                  let myChart1=  document.getElementById("myChart").getContext('2d');
         
                  let chart1= new Chart(myChart1,{
                type:'line',
               data:{
                
                   labels:dates,
                   datasets:[{
                        borderColor:"Green",
                        label:"Recovered Cases",
                     data:cameroonRecoveries,
                     backgroundColor:"Green",
                     borderWidth:1,
                     minBarLength:100
          
                     }]
               },
               
            options:{
                title:{
                 
                   display:true ,
                   text:" Cameroon Covid Statistics"
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
                                borderWidth:1,
                                minBarLength:100
                     
                     
                                },
                                {
                                    borderColor:"Purple",
                                    label:"Total Deaths",
                                 data:total_deaths,
                                 backgroundColor:"Purple",
                                 borderWidth:1,
                                 minBarLength:100
                      
                                 }]
                           },
                           
                        options:{
                            title:{
                             
                               display:true ,
                               text:" Cameroon Covid Statistics"
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
                                borderWidth:1,
                                minBarLength:100
                     
                                },
                                {
                                    fill:false,
                                    borderColor:"Red",
                                    label:"Total Deaths",
                                 data:total_deaths,
                                 backgroundColor:"Red",
                                  borderWidth:1,
                                  minBarLength:100
                      
                      
                                 }]
                           },
                           options:{
                               title:{
                                
                                  display:true ,
                                  text:" Cameroon Covid Statistics"
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
                                borderWidth:1,
                                minBarLength:100
                     
                                },
                                {
                                    fill:false,
                                    borderColor:"Red",
                                    label:"Total Deaths",
                                 data:total_deaths,
                                 backgroundColor:"Red",
                                  borderWidth:1,
                                  minBarLength:100
                      
                      
                                 }]
                           },
                           options:{
                               title:{
                                
                                  display:true ,
                                  text:" Cameroon Covid Statistics"
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