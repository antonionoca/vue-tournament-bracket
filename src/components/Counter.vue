<template>
  <div>
    <p>Times: {{counter}}</p>
    <button @click="incrementMain">+</button>
    <button @click="decrementMain">-</button>
  </div>
</template>

<style scoped lang="less">
  button {
  }
</style>

<script>
  import { mapGetters } from 'vuex'

  export default {
    name: 'Counter',
    computed: {
      ...mapGetters({
        counter: 'mainCounter'
      })
    },
    methods: {
      incrementMain () {
        this.$store.dispatch('incrementMain')
      },
      decrementMain () {
        this.$store.dispatch('decrementMain')
      }
    }
  }

</script>
