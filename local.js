
$.getJSON('data.json', function (json) {
  Object.keys(json).forEach(function (key){
    const val = json[key]
    if (Array.isArray(val))
      val.forEach(post => {
        $("#post-list").append(
          `<div class="post">
            <div class="top-bar">
                <img src=${post.profile_picture} >
                <p1 class="date">${post.timestamp}</p1>
            </div>
            <div class="img-container">
                <img src=${post.img_link}>
            </div>
            <p1>${post.title}</p1>
            <img src= "https://w7.pngwing.com/pngs/440/84/png-transparent-white-and-blue-thumbs-up-logo-facebook-like-button-computer-icons-free-s-like-button-miscellaneous-text-hand.png"/>

        </div>`
        )
      })
  })
})

