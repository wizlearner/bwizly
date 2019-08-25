<template>
  <div>
    <VideoPlayerHeader/>
    <section class="section">
      <div class="container">
        <div class="tile is-ancestor">
          <div class="tile is-parent is-9">
            <article class="tile is-child">
              <VideoPlayerSearchBar @termChange="videoSearch($event)" />
              <div v-if="show">
                <VideoPlayerDetail :selectedVideo="selectedVideo" :videos="videos"/>
              </div>
              <div v-else>
                <h4>...Loading ⟳</h4>
              </div>
            </article>
          </div>
          
          <div class="tile is-parent is-3 is-vertical">
            <article v-for="video in videos" :key="video.etag" class="tile is-child">
              <VideoPlayerList  
                @selectedVideo="videoSelect($event)"
                :video="video"
                :imgUrl="video.snippet.thumbnails.medium.url"
                :videoTitle="video.snippet.title" 
                :likes="video.snippet.likes"
                :views="video.snippet.views"
                                                     />
            </article>
          </div>
        </div>
      </div> <!-- /.container -->
    </section>
    <VideoPlayerFooter />
  </div>
</template>

<script>



//import { YOUTUBE_API_KEY } from '@/config';
import YouTubeSearch from 'youtube-api-search'

import VideoPlayerSearchBar from '@/components/VideoPlayerSearchBar'
import VideoPlayerList from '@/components/VideoPlayerList'
import VideoPlayerDetail from '@/components/VideoPlayerDetail'
import VideoPlayerHeader from '@/components/VideoPlayerHeader'
import VideoPlayerFooter from '@/components/VideoPlayerFooter'

const YOUTUBE_API_KEY = 'AIzaSyBtMpRMLx9ScxKCl_-XgaukxZWin-qyxA4'

export default {
 
  name: 'VideoPlayers',
  data() {
    return {
      show: false,
      video: null,
      videos: [],
      selectedVideo: null,
    }
  },
  components: {
    VideoPlayerSearchBar,
    VideoPlayerList,
    VideoPlayerDetail,
    VideoPlayerHeader,
    VideoPlayerFooter
  },

  // components: { CreatePlayList},
  created() {
    // init search
    this.videoSearch('Surfing');
  },
  methods: {
    videoSearch(searchTerm) {
      YouTubeSearch( {key: YOUTUBE_API_KEY, term: searchTerm}, (videos) => {
        this.videos = videos;
        // get the first video (before one is selected --this is the default)
        this.selectedVideo = videos[0];
        this.show = true;
      });
    },
    videoSelect(video) {
      this.selectedVideo = video;
    }
  },
};
</script>

<style>
  .container p {
    font-family: 'Open Sans', sans-serif;
  }

  .tile.is-parent{

  }


</style>