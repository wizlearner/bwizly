<template>
  <div class="page-wrapper">
    <nav-bar></nav-bar>
    <h1 class="video-player">{{ appTitle }}</h1>
    <!-- <img alt="logo-bento" class="logo" src="@/assets/img/bento-starter.svg" />
     -->
    <div class="video-container">
    
    
     <VideoPlayer></VideoPlayer>

   
 <a
      rel="noopener"
      class="documentation-link"
      target="_blank"
      href="https://www.youtube.com/"
      >Youtube Page →</a>
   
      </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import VideoPlayer from '@/components/VideoPlayer'

export default {
 components: {VideoPlayer},
 name: 'CreatePlayList',
  head: function() {
    return {
      title: {
        inner: 'Home'
      },

      components: {VideoPlayer},

      meta: [
        {
          name: 'description',
          content: `${this.appTitle} home page`,
          id: 'desc'
        }
      ]
    }
  },
  computed: mapState('app', ['appTitle'])
}
</script>

<style lang="scss" scoped>
@import '@/theme/variables.scss';

.page-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .logo {
    margin-bottom: 3rem;
  }

  .home-page-title {
    text-align: center;
  }

  .documentation-link {
    display: inline-block;
    font-size: 1.2rem;
    color: #fff;
    background-color: #5d6788;
    padding: 0.8rem 1.6rem;
    border-radius: 4px;
    transition: background-color 0.1s ease;
    box-sizing: border-box;
    text-decoration: none;
    width: fit-content;
    font-weight: 500;
  }

   .video-link {
    display: inline-block;
    font-size: 1.2rem;
    color: #fff;
    background-color: #5d6788;
    padding: 0.8rem 1.6rem;
    border-radius: 4px;
    transition: background-color 0.1s ease;
    box-sizing: border-box;
    text-decoration: none;
    width: fit-content;
    font-weight: 500; 
  }

  .video-player{
    display:flex;
    width:1200px;
    margin:auto;
}

.video-container{
    margin-right:40px;
}
}
</style>
