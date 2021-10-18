
$.ajax({
  url: "https://api.jsonbin.io/b/616d685d4a82881d6c61dd8f/1",
  headers: {
    "secret-key": "$2b$10$g0YD28kxgaYz2SeiBkEnRus8wNSVgngZzDfABrsqe7SuZEPNra/Oa",
  },
  type: "GET",
  success: function (data) {
    console.log(data);
    $("#post-list").html(function(){
      var html ="";
      data.posts.map(post => 
        html = html.concat(
        '<div class="post">'+
          '<div class="top-bar">'+
            '<img src='+post.profile_picture+'>'+
            '<p1 class ="date">'+ post.post_time +'</p1>'+
          '</div>'+ 
          getImageDivIfExists(post.img_link)+
          '<p1>'+post.title+'</p1>'+
          '<img src="https://w7.pngwing.com/pngs/440/84/png-transparent-white-and-blue-thumbs-up-logo-facebook-like-button-computer-icons-free-s-like-button-miscellaneous-text-hand.png">'+
        '</div>')
        );
      console.log(html)
      return html;

    });
  },
});
var getImageDivIfExists = ((img_link) => {
  
    if(img_link=="None"){
      return "";
    }
    return(
    '<div class="img-container">'+
      '<img src='+img_link+'>'+
    '</div>'
    );
});
