
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
               
                data.results.forEach(photo=>{
                    let result=`<img src="${photo.urls.regular}">`;
                   $(".image").append(result)
                })
            });
}

function Clear(){
    $('.image').empty();
}