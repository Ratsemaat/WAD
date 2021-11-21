<template>

  <div class="home">
    <div id="post-list">
      <post v-for="p in postList" :key="p.id" :data="p"></post>
    </div>
    <div class="reset-btn-container">
      <button class="reset-btn" v-on:click="resetLikes">Reset Likes</button>
    </div>
  </div>
</template>

<script>
import post from "../components/Post";

export default {
  name: "Home",
  components: {
    post,
  },
  methods: {
    resetLikes: function () {
      for (let i = 0; i < this.postList.length; i++) {
        this.postList[i].numberOfLikes = 0;
      }
    }
  },
  computed: {
    postList() {
      return this.$store.state.postList
    }
  }
};
</script>

<style>
.home {
  background-color: white;
  width: 50%;
  align-content: center;

}

#post-list {
  margin: 100px;
}

.reset-btn-container {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 3em;
}

.reset-btn {
  height: 4em;
  width: 8em;
  margin-bottom: 1em;
  background: #1D83B1;
  color: white;
  border: none;
  border-radius: 2em;
}
</style> 