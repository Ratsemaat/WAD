<template>
  <div class="post">
    <div class="top-bar">
      <img :src="data.profile_picture" />
      <p class="date">{{ data.timestamp }}</p>
    </div>
    <div v-if="data.img_link" class="img-container">
        <img :src="data.img_link"/>
    </div>
    <p>{{ data.title }}</p>
    <div class="like-container">
      <button class="like-btn" type="submit" style="background: transparent" v-on:click="increaseLike(data.id)">
        <img class="like-btn-img"
             src="https://w7.pngwing.com/pngs/440/84/png-transparent-white-and-blue-thumbs-up-logo-facebook-like-button-computer-icons-free-s-like-button-miscellaneous-text-hand.png"/>
      </button>
      <p class="like-number">{{data.numberOfLikes}}</p>
    </div>
  </div>
</template>
<script>
export default {
  name: "post",
  props: ["data"],
  components: {},
  methods: {
    increaseLike: function (postId) {
      this.$store.commit('increment', postId)
    },
  }
};
</script> 
 
<style>
.top-bar {
  display: flex;
  justify-content: space-between;
  padding: 5px;
}

.date {
  color: gray;
}


.like-btn-img {
  height: 100%;
  width: 100%;
}

.like-btn {
  width: 5em;
  height: 4em;
  margin-bottom: 1em;
  margin-left: 1em;
  padding: 0;
  border-radius: 1em;
  border: transparent;
}

.like-container{
  display: flex;
  flex-direction: row;
  justify-content: left;
}

.like-number{
  margin-left: 2em;
  font-size: 1.2em;
}
.top-bar img {
  max-width: 40px;
  max-height: 40px;
}

.post {
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  box-shadow: 0 0 10px 2px rgb(185, 185, 185);
}

.img-container {
  max-width: 100%;
  max-height: 100%;
}

.img-container img {
  max-width: 100%;
  max-height: 100%;
  min-width: 100%;
}
.post > p {
  padding: 20px;
  font-size: 30px;
}
</style> 