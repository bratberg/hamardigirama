<template>
  <div>
      <!-- <nav class="navbar">
        <nuxt-link to="/">Hjem</nuxt-link>
        <nuxt-link to="/speakers">Speakers</nuxt-link>
      </nav> -->
      <nuxt />
  </div>
</template>

<style lang="scss">
 * {
      margin: 0;
      padding: 0;
  }

  .navbar {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    background-color: rgba(34,34,34, 0.1);
    padding: 1vw;
    text-align: center;
    font-weight: 800;
  }

  a {
      color: #E5FD90;
      text-shadow: 2px 2px 2px #222;
      text-transform: uppercase;
      text-decoration: none;
      margin: 0 1em;
      padding-bottom: 4px;
      transition: border .2s ease-in-out;
      font-size: 5vw;
      
      &:hover {
        color: #92fffb;
      }

      @media (min-width: 600px) {
         font-size: 4vw;
      }

      @media (min-width: 800px) {
         font-size: 2vw;
      }

      @media (min-width: 1000px) {
         font-size: 1.5vw;
      }
    }
</style>

<style lang="scss">
 

  body {
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    background-color: #333;
  }

  .shader {
      display: flex;
      width: 100vw;
      height: 100vh;
      align-items: center;
      justify-content: center;
  }

  .landing, .speakers {
    position: absolute;
  }

  .page-enter-active, .page-leave-active {
    transition: transform .5s;
  }
  .page-enter, .page-leave-active {
    transform: translateX(-100%);
  }
</style>


<script>
import '~/js/console-image.js';
if (typeof window !== 'undefined') {
  console.image('https://i.pinimg.com/originals/27/d9/89/27d989c104fa89b3ba2149e959900b57.jpg')
}
export default {
  asyncData() {
    return {}
  }
}
</script>

