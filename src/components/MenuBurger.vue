<template>
		<!-- UsedIn: NavBar Component of this Project for Menu Burger -->
		<!--  Src: https://www.npmjs.com/package/vue-burger-menu -->

	<Slide>
      	<a id="home" href="/home">
        <span>Home</span>
      	</a>
        
        <a id="login" href="/login">
        <span>Login</span>
      	</a>
      
        <a id="create-play-list" href="/create-play-list">
        <span>Create Playlist1</span>
      	</a>
      
        <a id="watch-video" href="/watch-video">
        <span>Watch Video</span>
      	</a>

		<a id="alphabets" href="/alphabets">
        <span>Alphabets Game</span>
      	</a>

      	<a id="animals" href="/animals">
        <span>Animal Game</span>
      	</a>

      	<a id="numbers" href="/numbers">
        <span>Numbers Game</span>
      	</a>

       <!-- <span>Kids Progress</span>
        <span>Parent Dashboard</span>
        <span>Youtube PlayList</span> -->
    </Slide>
</template>

<script>

import { Slide } from 'vue-burger-menu'  // npm install vue-burger-menu --save

export default {
  components: {
        Slide// Register your component
    }
}
</script>

<style lang="scss" scoped>
@import '@/theme/variables.scss';

// from here added menu bar

  .bm-burger-button {
      position: fixed;
      width: 12px;
      height: 12px;
      left: 18px;
      top: 18px;
      cursor: pointer;
    }
    .bm-burger-bars {
      background-color: #373a47;
    }
    .line-style {
      position: absolute;
      height: 20%;
      left: 0;
      right: 0;
    }
    .cross-style {
      position: absolute;
      top: 12px;
      right: 12px;
      cursor: pointer;
    }
    .bm-cross {
      background: #bdc3c7;
    }
    .bm-cross-button {
      height: 30px;
      width: 30px;
    }
    .bm-menu {
      height: 100%; /* 100% Full-height */
      width: 0; /* 0 width - change this with JavaScript */
      position: fixed; /* Stay in place */
      z-index: 1000; /* Stay on top */
      top: 0;
      left: 0;
      background-color: rgb(00, 00, 65); /* Black*/
      overflow-x: hidden; /* Disable horizontal scroll */
      padding-top: 60px; /* Place content 60px from the top */
      transition: 0.5s; /*0.5 second transition effect to slide in the sidenav*/
    }
 
    .bm-overlay {
      background: rgba(0, 0, 0, 0.3);
    }
    .bm-item-list {
      color: #b8b7ad;
      margin-left: 10%;
      font-size: 20px;
    }
    .bm-item-list > * {
      display: flex;
      text-decoration: none;
      padding: 0.7em;
    }
    .bm-item-list > * > span {
      margin-left: 10px;
      font-weight: 700;
      color: white;
    }




</style>


