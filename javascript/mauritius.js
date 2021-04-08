
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




                    async function getMauritiusData(){
                        const data=  await getCsvData();
                        //console.log(data)
                            const lastest=data[171].info.slice(13,542);
                        const entryToMauritius=data[171].info.slice(860,1041);
                        const travelInMauritius=data[171].info.slice(1107,1324);
                        const placesServices=data[171].info.slice(1488,2300);
                        const accomodation=data[171].info.slice(1340,1458);
                        
                        const quarantineInfo=data[171].optional2;
                        const booking=data[171].info.slice(582,810);
                        const certifiation=data[171].optional3;
                        const published=data[171].published;
            
                        document.getElementById("lastest").innerHTML=lastest;
                        document.getElementById("infomu").innerHTML=quarantineInfo;
                        document.getElementById("certificatesmu").innerHTML=certifiation;
                        document.getElementById("travelInmu").innerHTML=travelInMauritius;
                        document.getElementById("places").innerHTML=placesServices;
                        document.getElementById("entrymu").innerHTML=entryToMauritius+booking;
                       
                       
                        
                    
                            }
                    
                           window.onload= getMauritiusData();




                           let mauritiusURL="https://api.covid19api.com/live/country/mauritius/status/confirmed/date/2020-03-21T13:13:30Z";
                           let dataUrl="https://covid.ourworldindata.org/data/owid-covid-data.json";

                           let mauritiusRecoveries=[];

                           
                           var generalData=fetch(dataUrl, {
                            method: 'get'
                        })
                        .then(response => response.json());
    

                           //fetched Mauritius data to extract recoveries data
        const fetchedMurData=fetch(mauritiusURL, {
            method: 'get'
        })
        .then(response => response.json())
         .then(jsonData => {
            //always keep the last 70 dataset

           jsonData.splice(0,jsonData.length-70);

            for(let i=0; i<jsonData.length;i++){
               mauritiusRecoveries[i]=jsonData[i].Recovered;
                
                }
               
            let smallMauData=jsonData;
               // console.log(mauritiusRecoveries)
                return smallMauData;
        }).catch(err => {
                console.log(err);
            });
    
           // fetchedMurData.then(jsonData=> console.log(jsonData));




           // to make it easier to plot, i will only take the first 70 datatsets from this
            // this makes it easier to take corresponding values from the other api

        //var deleterecords=data2.splice(0,data2.MUS.data.length-70);



        let smallCombinedMauritiusData=generalData.then(jsonData => {
   
            const new_cases=[];
            const new_deaths=[];
            const dates=[]
            const total_cases=[];
            const total_deaths=[];
           
            let mauritiusData=jsonData.MUS.data;
            // removes the rest and keeps the last 70( lastest)
            mauritiusData.splice(0, mauritiusData.length-70);
           const updated= mauritiusData[ mauritiusData.length-1].date;
           // create an array for each of the data to be plotted
            for(let i=0; i< mauritiusData.length;i++){
                new_cases[i]= mauritiusData[i].new_cases;
                new_deaths[i]= mauritiusData[i].new_deaths;
                total_cases[i]= mauritiusData[i].total_cases;
                total_deaths[i]= mauritiusData[i].total_deaths;
                dates[i]= mauritiusData[i].date;
                
                  }
                    const singleTotalCases=total_cases[total_cases.length-1];
                  const singleTotalDeaths=total_deaths[total_deaths.length-1];
                  const singleNewDeaths=[new_deaths.length-1];
                  const singleNewCases=new_cases[new_cases.length-1];
                  const singleRecoveredCases=mauritiusRecoveries[mauritiusRecoveries.length-1];

                  
        



                  let myChart1=  document.getElementById("myChart").getContext('2d');
         
                  let chart1= new Chart(myChart1,{
                type:'line',
               data:{
                
                   labels:dates,
                   datasets:[{
                        borderColor:"Green",
                        label:"Recovered Cases",
                     data:mauritiusRecoveries,
                     backgroundColor:"Green",
                     borderWidth:1
          
          
                     }]
               },
               
            options:{
                title:{
                 
                   display:true ,
                   text:" Mauritius Covid Statistics"
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
                               text:" Mauritius Covid Statistics"
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
                                  text:" Mauritius Covid Statistics"
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
                                  text:" Mauritius Covid Statistics"
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