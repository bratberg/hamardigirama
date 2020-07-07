<template>
  <div id="app">
    <client-only>
      <flat-surface-shader
        class="shader"
        type="canvas" 
        :light="{ ambient: '#B7309D', diffuse: '#f38adf', draw: false, speed: 0.000003, dampening: 0.25, gravity: 800 }" 
        :mesh="{ segments, slices: 7, width: 1.8, height: 1.8, speed: 0.0003 }">
        <div class="landing">
          <div class="meetup">
            <a href="https://www.meetup.com/Hamar-Digirama">
              meetup.com/hamar-digirama
            </a>
          </div>
          <h1 class="title">Hamar Digirama</h1>
          <h2 class="coming-up">Neste meetup:</h2>
          <h2 class="coming-up"><span class="name" v-html="upcomingEvent.name || '&nbsp;'"></span></h2>
          <h2 class="coming-up"><span class="date" v-html="upcomingEvent.date || '&nbsp;'"></span></h2>
          <h3 class="coming-up"><span class="time" v-html="upcomingEvent.time || '&nbsp;'">{{upcomingEvent.time}}</span></h3>
        </div>
      </flat-surface-shader> 
    </client-only>
  </div>
</template>

<script>
  const getUpcomingEventDetails = (events) => {
    const nextUpcomingEvent = events.pop();
    const name = nextUpcomingEvent ? `${nextUpcomingEvent.name}`.replace('Data', 'Data­') : 'TBA';
    const date = nextUpcomingEvent ? nextUpcomingEvent.local_date.split('-').reverse().join('.') : '';
    const time = nextUpcomingEvent ? `kl. ${nextUpcomingEvent.local_time}` : '';
    return {
      name,
      date,
      time
    }
  };
  export default {
    asyncData({ app }) {
      return {
        segments: 9,
        upcomingEvent: {}
      }
    },
    mounted() {
      this.segments = Math.round(window.innerWidth / 135)
      this.$axios.$get(location.origin + '/api/meetup/upcomingEvents').then(events => {
        const upcomingEvent = getUpcomingEventDetails(events);
        this.upcomingEvent = upcomingEvent;
      }).catch(error => console.error(error))
      
      window.addEventListener('resize', () => {
        this.segments = Math.round(window.innerWidth / 135)
      })
    },
  }
</script>

<style lang="scss" scoped>
  .meetup a {
    display: block;
    font-size: 4vw;
    margin: 0 0 2vw 0;
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
    // text-shadow: 2px 2px 0px #fff;
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

  .date, .time, .name {
    color: #E5FD90;
    text-shadow: 2px 2px 2px #222;
    font-size: 10vw;
    vertical-align: baseline;

    @media (min-width: 600px) {
      font-size: 5vw;
    }  
  }

  .time {
    text-transform: none;
    font-size: 6vw;

    @media (min-width: 600px) {
      font-size: 3vw;
    }  
  }
</style>
