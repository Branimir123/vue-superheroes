<template>
  <div>
      <h1>Contact Page</h1>
      {{ $route.params }}
      <button @click="goHome">Home</button>
      <button><router-link to="/about">About Page</router-link></button>
  </div>
</template>

<script>
export default {
  name: 'Contact',
  methods: {
    goHome() {
      return this.$router.push('/');
    },
  },
};
</script>

<style scoped lang="scss">
h1 {
    color: green;
    font-size: 55px;
}
</style>
