<template>
  <div id="app">
    <no-ssr>
      <flat-surface-shader
        class="shader"
        type="canvas" 
        :light="{ambient: '#B7309D', diffuse: '#f38adf', draw: false, speed: 0.000003, dampening: 0.25, gravity: 800   }" 
        :mesh="{segments, slices: 7, width: 1.8, height: 1.8, speed: 0.0003}">
        <div class="landing">
          <div class="meetup"><a href="https://www.meetup.com/Hamar-Digirama">meetup.com/hamar-digirama</a></div>
          <h1 class="title">Hamar Digirama</h1>
          <h2 class="coming-up">Neste meetup : <span class="date">22. august</span></h2>
        </div>
      </flat-surface-shader>
    </no-ssr>
  </div>
</template>

<style lang="scss" scoped>
  .meetup a {
    display: block;
    font-size: 4vw;
    margin-bottom: 2vw;
    text-align: center;
    text-transform: uppercase;
    font-weight: 800;
    @media (min-width: 600px) {
      font-size: 2vw;
      text-align: right;
    }
  }

  .title {
    margin: 0;
    text-shadow: 2px 2px 8px #222;
    text-align: center;
    font-size: 15vw;
    font-weight: 800;

    @media (min-width: 600px) {
      font-size: 8vw;
    }    
  }

  .coming-up {
    font-size: 4vw;
    text-transform: uppercase;
    margin-left: 10px;
    text-align: center;
    margin-top: 20px;
    clear: both;

    @media (min-width: 600px) {
      float: right;
      font-size: 2vw;
    }  
  }

  .date {
    color: #E5FD90;
    text-shadow: 2px 2px 2px #222;
    font-size: 10vw;
    vertical-align: baseline;

    @media (min-width: 600px) {
      font-size: 5vw;
    }  
  }
</style>


<script>
  export default {
    asyncData: () => ({
      segments: 9
    }),
    mounted() {
      this.segments = Math.round(window.innerWidth / 135)
      
      window.addEventListener('resize', () => {
        this.segments = Math.round(window.innerWidth / 135)
      })
    }
  }
</script>
