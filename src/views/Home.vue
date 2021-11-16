<template> 

    <div class="home">
        <div id ="post-list">
            <post v-for= "p in postList" :key="p.id" :data="p"></post>
        </div>
    </div>
</template> 
 
<script>
    import post from "../components/Post";

    export default { 
        name: "Home",
        components:{
            post,
        },
        computed: {
            postList(){
                return this.$store.state.postList
            }
        }
    };
</script> 
 
<style> 
 .home {
  background-color: white;
  width: 50%;
}
#post-list {
  margin: 100px;
}
</style> 