<template>
  <div class="Header">
      <div class="logo">
        <img
          src="../assets/pic.png"
          style="max-width: 3em; max-height: 3em; vertical-align: middle"
        />
      </div>
      <div id="nav">
        <router-link to="/">Home</router-link>
        <router-link to="/contact">Contact Us</router-link>
        <router-link to="/login">Login</router-link>
      </div>
      <div class="search-box"><input type="text" /><button>Search</button></div>
      <div class="login">
        <img
          v-on:click="showUserInfo()"
          src="https://studiolorier.com/wp-content/uploads/2018/10/Profile-Round-Sander-Lorier.jpg"
          style="max-width: 3em; max-height: 3em; padding-top: 0.25em"
        />
      </div>
    <div class="dropdown" id="drop">
      <div class="space"></div>
      <div class="visible">
        <div class="box">
          <p>John Doe</p>
          <br />
          <p>john.doe@example.com</p>
        </div>
      </div>
    </div>
</div>
</template>
<script>
export default {
  name: "Header",
  methods: {
    showUserInfo: function () {
      var x = document.getElementById("drop");
      if (x.style.display === "block") {
        x.style.display = "none";
      } else {
        x.style.display = "block";
      }
    },
  },
};
</script> 
 
<style>
.Header {
  margin-top: 0px;
  padding: 0px;
  justify-content: space-between;
  display: flex;
  position: fixed;
  text-align: center;

  top: 0;
  background-color: #ffffff;
  width: 100%;
  padding-top: 0.25em;
  padding-bottom: 0.25em;
  max-height: 3.5em;
}
#nav {
  text-align: center;
  flex: 1.8;
  width: 20%;
  height: 3em;
  color: #ffffff;
  font-weight: bold;
  padding-top: 1em;
  border-radius: 6px;
}

#nav a {
  width: 20%;
  height: 3em;
  padding: 10px;
  margin-left: 4px;
  font-size: medium;
  background: #195b96;
  color: #ffffff;
  font-weight: bold;
  border-radius: 6px;
  border: 1px solid white;
}

.search-box {
  flex: 3;
  width: 100%;
  text-align: center;
  padding-top: 0.5em;
}
div.search-box input {
  width: 85%;
  height: 2.5em;
  font-size: medium;
  border: 1px solid gray;
  border-radius: 4px;
}
div.search-box button {
  width: 15%;
  height: 3em;
  font-size: medium;
  background: #195b96;
  color: #ffffff;
  font-weight: bold;
  border-radius: 6px;
  border: 1px solid white;
}

div.search-box button:hover {
  background: #012b50;
}
.logo {
  flex: 0.2;
  text-align: left;
  vertical-align: middle;
  padding-top: 0.5em;
  padding-bottom: 2em;
}
.login {
  flex:2;
  text-align: right;
  padding-right: 0.5em;
}
.dropdown {
  top:3.6em;
  position: fixed;
  height: 5em;
  width: 100%;
}
.visible {
  width:25%;
  float: right;
  background-color: white;
  color:gray;
  box-shadow: 0 0 10px 2px rgb(185, 185, 185);
}
.space {
  width:75%;
  float:left;
}
.box {
  padding-top: 5%;
  padding-left: 15%;
  padding-bottom: 5%;
}
#drop{
  display: none;
}

</style> 