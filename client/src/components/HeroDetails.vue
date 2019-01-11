<template>
<div>
    <div class="hero-wrapper" :style="{ position: 'relative' }">
        <h1 @click="$emit('titleClick', hero.name)">{{ hero.name }}</h1>
        <div>
            <img v-pin:position.top.left class="logo" :src="hero.logoSrc" @click="incrementPowerHero" alt="">
        </div>
            <slot>
                <p>Header</p>
            </slot>
        <div :class="{ isWeak: isWeak }">Total power: {{ totalPower }}</div>
        <span @click="incrementGlobalCounter">{{ hero.strength | strength }} </span>
        <div v-show="isWeak" :style="{color: 'red'}">Weak Hero!</div>

        <span>Global Counter {{ counter }} </span>
    </div>
</div>
</template>
<script>
import { mapState } from 'vuex';

export default {
  name: 'HeroDetails',
  props: {
    hero: Object,
    position: {
      type: String,
      required: true,
      validator(value) {
        return ['top', 'bottom'].includes(value);
      },
    },
  },
  created() {
    console.log('Created lifecycle hook', this.$store.state.superheroes);
  },
  computed:
    mapState({
      counter: state => state.superheroes.counter,

      totalPower() {
        return this.hero.power + this.hero.agility + this.hero.endurance;
      },
      isWeak() {
        return this.totalPower < 30;
      },
    }),
  methods: {
    incrementPowerHero() {
      this.hero.power += 1;
    },
    incrementGlobalCounter() {
      this.$store.commit('superheroes/increment', 5);
    },
  },
  directives: {
    pin: {
      inserted(el, binding) {
        console.log('inserted called');
        if (binding.arg !== 'position') {
          return;
        }

        Object.keys(binding.modifiers).forEach((mod) => {
          el.style.position = 'absolute';
          el.style[mod] = '5px';
        });
      },
      update(el, binding) {
        console.log('update called');
        if (binding.arg !== 'position') {
          return;
        }

        Object.keys(binding.modifiers).forEach((mod) => {
          el.style.position = 'absolute';
          el.style[mod] = '5px';
        });
      },
    },
  },
  filters: {
    strength(strength) {
      return strength !== 'Money' ? `💪 ${strength}` : `$$$ ${strength} damn rich bastard`;
    },
  },
};
</script>
<style scoped lang="scss">
.logo {
  width: 150px;
  height: auto;
}
div.hero-wrapper {
    border: 1px solid green;
    padding: 25px;
    margin: 25px;
    .isWeak {
        color: red;
    }
}
</style>
