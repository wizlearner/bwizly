<template>
    <div class="tile is-child box" @click="onVideoSelect(video)">
      <img :src="imgUrl" />
      <p class="subtitle is-6">{{ videoTitle }}</p>
      <p class="subtitle is-6">{{ likes }}</p>
      <p class="subtitle is-6">{{ views }}</p>

    </div>
</template>

<script>
export default {
  props: {
    video: Object,
    imgUrl: String,
    videoTitle: String,
    likes: Number,
    views: Number
  },
  methods: {
    onVideoSelect(video) {
      this.$emit('selectedVideo', this.video);
    }
  }
};
</script>

<style>
  .tile.is-child:hover {
    cursor: pointer;
  }
  .tile.is-child.img {
    width:168px;
  }

</style>