<template>
  <div class="bg-light">
    <!-- menggunakan component navbar -->
    <NavBar/>    

    <!-- menampilkan view di routing -->
    <router-view></router-view>    

  </div>
</template>

<script>

  import NavBar from './components/NavBar';  

  export default {
    name : "App",
    components : {
      NavBar,
    }
  }
</script>

<style lang="scss" scoped>

</style>