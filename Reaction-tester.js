
        
            var startTime=new Date().getTime();
            var flag=0;
            var bestTime;
                
                setTimeout(appear,Math.random()*3000);
            
            
            document.getElementById("square").onclick=function(){
                document.getElementById("square").style.display="none";
                var endTime=new Date().getTime();
                var totalTime=(endTime-startTime)/1000;
                document.getElementById("totalTime").innerHTML=totalTime+"s";
                if(flag==1){
                 bestTime=totalTime;
                    document.getElementById("bestTime").innerHTML=bestTime+"s";
                }
                else{
                   if(bestTime>totalTime){
                       bestTime=totalTime;
                   }
                    document.getElementById("bestTime").innerHTML=bestTime+"s";
                }
                
            setTimeout(appear,Math.random()*3000);
            }
            
            function getRandomColor(){
                
                var array=["1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"];
                var color="#";
                var i;
                for(i=0;i<6;i++)
                    {
                        color=color+array[Math.floor(Math.random()*16)];
                    }
                return color;
            }
            
            function appear(){
                var top=Math.random()*400;// will generate b/w =0-400
                var left=Math.random()*1000;
                var width=(Math.random()*300)+50;// will generate b\w 50-350
                if(Math.random()>0.5){
                    document.getElementById("square").style.borderRadius="50%";
                }
                else{
                    document.getElementById("square").style.borderRadius="0%";
                }
                
                document.getElementById("square").style.top=top+"px";
                document.getElementById("square").style.left=left+"px";
                document.getElementById("square").style.width=width+"px";
                document.getElementById("square").style.height=width+"px";
                document.getElementById("square").style.display="block";
                document.getElementById("square").style.backgroundColor=getRandomColor();
                startTime=new Date().getTime();
                flag++;
            }
        
