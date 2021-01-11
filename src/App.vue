<template>
  <div id="app">
    <NavBar  />
    <HomePage  />
    
  </div>
</template>

<script>
import NavBar from "./components/shared/NavBar";
import HomePage from "@/components/pages/HomePage";

export default {
  data(){
    return{
      hide:''
    }
  },
  name: "App",
  components: {
    NavBar,
    HomePage,
  },

  

 
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
