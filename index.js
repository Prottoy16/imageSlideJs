var photos=["pinaky.jpg","pkb.jpg","prottoy.jpg"]; 
 var imgTag= document.querySelector("img");
 
 var count=0;

 function next(){
    
        count++;
        if(count<photos.length){
          imgTag.src=photos[count];
        }
        else {
            count=0;
            imgTag.src=photos[count];
        }
    
 

 }
 function prev(){
    count--;
    if(count>=0){
      imgTag.src=photos[count];
    } else {
      count=photos.length-1;
      imgTag.src=photos[count];
    }

 }