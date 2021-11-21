<template>
  <div class="login">
    <header />
    <div class="form">
      <div>
        <img src="../assets/pic.png" style="height: 8em; width: 8em" />
      </div>

      <div class="content">
        <b style="font-size: 1.5em; padding-bottom: 0.5em"
          >Welcome to postIt!</b
        >

        <div>
          <a
            style="font-size: 1.1em; color: lightskyblue"
            href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
            >Create an Account</a
          >
        </div>

        <div style="padding-bottom: 1em">
          <p>Or</p>
          <b style="font-size: 1.2em">Please Log In</b>
        </div>

        <input class="input-field" type="email" placeholder="Email" />
        <input class="input-field" type="password" placeholder="Password" />

        <button class="default-btn">
          <a style="color: white; text-decoration: none" href="index.html"
            >Log In</a
          >
        </button>

        <a
          style="padding-top: 2em; color: lightskyblue"
          href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
          >Forgot password?
        </a>
      </div>

      <div style="width: 8em"></div>
    </div>
    <footer />
  </div>
</template> 
 
<script>
export default {
  name: "Login",
};
</script> 

<style>
.form {
  margin-top: 150px;
  margin-bottom: 100px;
  display: flex;
  flex-direction: row;
  background: #ffffff;
}


.content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 30em;
  gap: 0.5em;
  padding-right: 1em;
  padding-left: 1em;
}
</style> 