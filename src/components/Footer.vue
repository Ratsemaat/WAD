<template> 
           <div class="Footer">
             <div id="but">
                <router-link to="/contact">Contact Us</router-link>
             </div>
           </div>

</template> 
 
<script> 
    export default { 
        name: "Footer",
    };
</script> 
 
<style> 
  .Footer{ 
    clear: both;
    background: white;
    width: 100%;
    position: relative;
    left: 0;
    bottom: 0px;
    
  }

  #but {
    margin-top: 1em;
    margin-bottom: 1em;
    text-align: center;
  }

  #but a{
  width: 20%;
  height: 3em;
  padding: 10px;
  margin-top: 2em;
  margin-left: 4px;
  font-size: medium;
  background: #195b96;
  color: #ffffff;
  font-weight: bold;
  border-radius: 6px;
  border: 1px solid white;
}
  
</style> 