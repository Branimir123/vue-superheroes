<template>
  <div v-if="heroes" class="hero-wrapper">
    <div v-for="hero in heroes" :key="hero.name">
      <HeroDetails v-bind:hero="hero" position="top" @titleClick="handleTitleClicked">
         {{ mostPowerful === hero.name ? 'I`m the most powerful' : '' }}
      </HeroDetails>
    </div>
  </div>
</template>

<script>
import HeroDetails from '@/components/HeroDetails.vue';

export default {
  name: 'HeroSwitch',
  components: {
    HeroDetails,
  },
  created() {
    this.$store.dispatch('superheroes/getSuperheroData');
  },
  computed: {
    heroes() {
      console.log(this.$store.state.superheroes);
      return this.$store.state.superheroes.heroes;
    },
    mostPowerful() {
      const res = this.heroes.reduce((max, hero) => Math.max(max, hero.power), this.heroes[0].power);

      const heroName = this.heroes.find(hero => hero.power === res).name;

      return heroName;
    },
  },
  methods: {
    handleTitleClicked(name) {
      console.log(...arguments);
      alert(`${name} Clicked`);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* .hero-wrapper {
  border: 1px solid red;
} */
</style>
