var imgArr=new Array();
if(!localStorage.getItem('imArray')){
    window.localStorage.setItem('imArray', JSON.stringify(imgArr));
}
localStorage.setItem('',JSON.stringify(imgArr));
 
//  window.addEventListener('load', likeImg);

//  function likeImg()
//  {

//    // existing = existing ? existing.split(',') : [];
//    // console.log(existing);
//    // var storedNames = JSON.parse(localStorage.getItem('imArray'));
//     //console.log(storedNames[0]);
//     // for(var i=0;i<existing.length;i++)
//     // {
//     //    let k=existing[i];
       
//     //     var element=document.getElementById(k);
//     //     element.style.color="red";
//     // }
//     var existing = localStorage.getItem('imArray');
//     existing = existing.split(',');
    
//     console.log(existing)
//     console.log(existing[0].toString());
//     //var element=document.getElementById((existing[10].toString()));
//     //console.log(element);
//     var k=existing[12].toString();
//     // let form = document.querySelector(`#${k}`); 
//     // console.log(form);
//     console.log(k);
    

// }
// var existing = localStorage.getItem('imArray');
// existing = existing.split(',');
// var k=existing[13].toString();
//     let form = document.querySelector(`#${k}`); 
//     console.log(form);
//     console.log(k);


function Search() {
   // document.getElementById("image").innerHTML = "";
    let query=document.getElementById("searchq").value;
    let client_id="o1C0NM6WjEBwvTz11SVYSjF2YOUUufHsEzkjfgsMfC4";
  const url = "https://api.unsplash.com/search/photos?client_id="+client_id+"&query="+query+"&per_page=28";
  const imageDiv = document.querySelector('.image');
    fetch(url)
        .then(response => {
            return response.json();
        })
        .then(data => {
            //let index=0;
                data.results.forEach(photo=>{
                    //index++;
                    //console.log(photo.id);
                    let result=`
                <div id="imdiv">
                    <div class="imdis">
                        <img src="${photo.urls.regular}" id="myImg" alt="photo">
                       
                        <span><i id="searchbtn" class="fa fa-search-plus" aria-hidden="true" data-src="${photo.urls.regular}" onClick="zoom(this)"></i></span>
                    </div>
                   
                    <div>
                             <i value="test" data-id="${photo.id}" id="${photo.id}" class="fa fa-heart-o button2" aria-hidden="true" onClick="changeColor(this)"></i> 
                    </div>
                    
                </div>
                <div id="myModal" class="modal">
                    <!-- The Close Button -->
                    <span class="close" onClick="cg()">&times;</span>
                    <!-- Modal Content (The Image) -->
                    <img class="modal-content" id="img01" onClick="cg()">
                    <!-- Modal Caption (Image Text) -->
                    <div id="caption"></div>
                </div>
                   
  
`
                    ;
                   $(".image").append(result)
                })
            });
            // var existing = localStorage.getItem('imArray');
            // existing = existing.split(',');
            // var k=existing[13].toString();
            //     let form = document.getElementById(existing[13]); 
            //    console.log(form);
            //    console.log(k);
            // var existing = localStorage.getItem('imArray');
            // existing = existing.split(',');
            
            // existing.forEach(function(id) {
            //   $('.button2[data-id=' + id + ']').attr('favorite', '');
            // });
            var existing = localStorage.getItem('imArray');
                 existing = existing.split(',');
                 for(var i=0;i<existing.length;i++)
                 {
                     let k=existing[i];
                     var z=k.toString();
                    console.log(k);
                    console.log(z);
                   var t= document.getElementById(z);
                   if(t!=null){ 
                    t.style.color="red";
                    console.log(t);   
                  }
                  
                  }

}


// $(document).ready(function(){
//     var existing = localStorage.getItem('imArray');
//     existing = existing.split(',');
//     for(var i=0;i<existing.length;i++)
//     {
//         let k=existing[i];
//         var z=k.toString();
//       // console.log(k);
//        console.log(z);
//       var t= document.getElementById(z);
//       t.style.color="red";
//      }
// })

function Clear(){
    $('.image').empty();
}


function  changeColor(b1)
{
   let k=b1.id;
   var element=document.getElementById(k);
   var existing = localStorage.getItem('imArray');
   existing = existing ? existing.split(',') : [];
    if(existing.includes(k))
    {
       element.style.color="black";
       var index = existing.indexOf(k);
        if (index > -1) 
        {
            existing.splice(index, 1);
            var x = localStorage.getItem('imArray');
            localStorage.setItem('imArray',existing.toString());
        }
    }
    else{
    
        element.style.color="red";
        existing.push(k);
        var x = localStorage.getItem('imArray');
       // addToLocalStorageArray(x,k);
        localStorage.setItem('imArray', existing.toString());
    }
   
}


function cg() {
    console.log("abc");
   document.getElementById("myModal").style.display = "none";
}



// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("myImg");

var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
var modal = document.getElementById("myModal");
function zoom(k)
{
    var x = k.getAttribute("data-src"); 
    document.getElementById("myModal").style.display = "block";
    document.getElementById("img01").src = x;
  
  //captionText.innerHTML = this.alt;
}

// function zoom2(k)
// {
//     document.getElementById("myModal").style.display = "block";
//     document.getElementById("img01").src = k.src;
//     return k.src; 
// }
// var addToLocalStorageArray = function (imArray, value) {

//     // Get the existing data
    

    
// 	var existing = localStorage.getItem('imArray');
   
// 	// If no existing data, create an array
// 	// Otherwise, convert the localStorage string to an array
// 	existing = existing ? existing.split(',') : [];

// 	// Add new data to localStorage Array
// 	existing.push(value);

// 	// Save back to localStorage
// 	localStorage.setItem('imArray', existing.toString());

// };

// var deleteFromLocalStorageArray = function(imArray,index)
// {
//     var existing = localStorage.getItem('imArray');
//     existing = existing ? existing.split(',') : [];
//     if (index > -1) 
//     {
//         existing.splice(index, 1);
//         localStorage.setItem('imArray',existing.toString());
//     }


// }