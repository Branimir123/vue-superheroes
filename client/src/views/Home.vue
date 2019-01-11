<template>
  <div class="home">
    <HeroSwitch />
  </div>
</template>

<script>
// @ is an alias to /src
import HeroSwitch from '@/components/HeroSwitch.vue';

export default {
  name: 'home',
  components: {
    HeroSwitch,
  },
};
</script>
