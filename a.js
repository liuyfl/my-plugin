$(function(){
 //     var canvas = document.getElementById('myCanvas'),width = canvas.width,height = canvas.height,ctx = canvas.getContext('2d');  
 //         var step,startAngle,endAngle,step1,startAngle1,endAngle1,add=Math.PI*2/100;
 //         var x;
 //         var y;
 //         var radius;
 //         var animation_interval = 20,n = 100;
 //         var varName;

  
 //                 step=1;
 //                  step1=1;
 //                 startAngle=Math.PI ;
 //                 startAngle1=Math.PI*2;
 //                 ctx.strokeStyle ='red';
 //                 //圆心位置
 //                 x=Math.floor(Math.random()*1000+100);
 //                 y=Math.floor(Math.random()*100+100);
 //                 radius = Math.floor(Math.random()*50+50);

 // var animation = function () {  
 //     if (step <= 50) {  
 //         endAngle = startAngle - add ;  
 //         drawArc(startAngle, endAngle,true); 
 //                 startAngle = endAngle;
 //         step++;  
 //     } else {  
 //         window.clearInterval(varName);  
 //     }  
         
 // };
 //  var animation1 = function () {  
 //     if (step1 <= 50) {  
 //         endAngle1 = startAngle1 - add ;  
 //         drawArc(startAngle1, endAngle1,true); 
 //                 startAngle1 = endAngle1;
 //         step1++;  
 //     } else {  
 //         window.clearInterval(varName1);  
 //     }  
         
 // };
 // function drawArc(s, e,flag) {  
 //     ctx.beginPath();   
 //     ctx.arc(x, y, radius, s, e, flag);  
 //         ctx.lineWidth = 1.0;        
 //         ctx.stroke();  
 // }
var cvs=document.getElementById('cvs'),ctx=cvs.getContext('2d');
        var step,startAngle,endAngle,step1,startAngle1,endAngle1,add=Math.PI*2/100;
        step=1;
        step1=1;
        startAngle=Math.PI ;
        startAngle1=Math.PI*2;
        var x=400,y=100,radius=100,circle1;
        ctx.strokeStyle ='white';
        var animation=function(x){
          if (step <= 100) {  
            endAngle = startAngle - add ;  
            drawArc(x,startAngle, endAngle,true); 
            startAngle = endAngle;
            step++;  
          } else {  
            clearInterval(circle1);  
          }  
        }
        function drawArc(x,s, e,flag) {  
          ctx.beginPath();   
          ctx.arc(x, y, radius, s, e, flag);  
          ctx.lineWidth = 1.0;        
          ctx.stroke();  
        }
        circle1= window.setInterval(function(){animation(200);}, 20);
 // $('#btn').click(function(){
  //  varName= setInterval(animation, 20);
  // varName1= setInterval(animation1,20);
 // })
 
  // ctx.strokeStyle='white';
  // ctx.beginPath();
  // ctx.moveTo(20,20);
  // ctx.lineTo(100,24);
  // ctx.stroke();
  ctx.textAlign="start";
  ctx.fillText("Hello World!",100,100);
  var img=new Image();
  img.src="images/8.jpg";
  img.onload = function() {  
      ctx.drawImage(img, 0, 0);  
 } 
});