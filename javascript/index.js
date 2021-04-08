    
    
    $(document).ready(function(){
       
        async function getCsvData(){
            //loaded csv data
            let csvData=  d3.csv("Datatravel.csv");
            return csvData;

        }
   
                                async function getMauritiusData(){
                                    const data=   await getCsvData();
                                    //console.log(data)
                                        const lastest=data[171].info.slice(13,542);
                                    
                                
                                document.getElementById("latestmau").innerHTML=lastest;
                                
                                    
                                
                                        }
    
            getMauritiusData();
        


            async  function getUKData(){
                const data=   await getCsvData();
                const lastest=data[274].info.slice(13,560);
            
            
                document.getElementById("latestuk").innerHTML=lastest;
            
            
            }
            
           getUKData();
        
    
               

          async  function getCameroonData(){
            
            const data=   await getCsvData();
                const entryToCameroon=data[49].info.slice(52,738);
            
                
                document.getElementById("latestcam").innerHTML=entryToCameroon;
            
            
            }
                getCameroonData();
 
     
     
   
   

 
 

    });

    
    