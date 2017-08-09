<template>
  <a
    v-bind:href="href"
    v-on:click="go"
  >
    <slot></slot>
  </a>
</template>

<script>
  import router from '../router'
 
  export default {
    props: {
      href: {
        type:String,
        required: true 
      }
    },
    methods: {
      
      go (event) { 
        event.preventDefault()
        this.$root.currentRoute = this.href
        window.history.pushState(
          null,
          router[this.href],
          this.href
        )
      }
    }
  }
</script>

<style scoped>
  .active {
    color: cornflowerblue;
  }
</style>