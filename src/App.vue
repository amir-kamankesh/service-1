<template>
  <div id="app">
    <div id="nav">
      <h3>in the parent</h3>
      <iframe style="width: 500px;height: 700px;" src="https://awesome-jepsen-38b7f8.netlify.com"></iframe>
    </div>
  </div>
</template>

<script>
  
  import api from '@/apis';
  
  export default {
      mounted() {
          setTimeout(() => {
              api.fetchSingleMovie();
          }, 5000);
      }
  }
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
