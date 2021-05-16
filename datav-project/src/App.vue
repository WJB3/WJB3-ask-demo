<template>
  <div id="app"> 
    <router-view />
  </div>
</template>

<script> 

export default {
  name: 'App',
  components: { 
  }
}
</script>

<style>
html,body,#app{
  width:100%;
  height: 100%;
  margin:0;
} 
#app{
  background: url(./assets/data.jpeg);
  background-repeat: no-repeat;
  background-size:100% 100%;
  overflow: hidden;
}
</style>
