
$.ajax({
  url: "https://api.jsonbin.io/b/616d685d4a82881d6c61dd8f",
  headers: {
    "secret-key": "$2b$10$g0YD28kxgaYz2SeiBkEnRus8wNSVgngZzDfABrsqe7SuZEPNra/Oa",
  },
  type: "GET",
  success: function (data) {
    console.log(data);
    $("#post-list").html(
      data.posts.map(post => 
        <div class="post">
          <div class="top-bar">
            <img src={post.profile_picture}/>
            <p1 class ="date">Sep 18, 2020 15: 16</p1>
          </div>
          <div class="img-container">
            <img src={post.img_link}/>
          </div>
          <p1>{post.title}</p1>
          <img src="https://w7.pngwing.com/pngs/440/84/png-transparent-white-and-blue-thumbs-up-logo-facebook-like-button-computer-icons-free-s-like-button-miscellaneous-text-hand.png" />
        </div>
      )
    )
  },
});
