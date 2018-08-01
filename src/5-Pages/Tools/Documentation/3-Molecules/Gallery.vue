<template>
  <div>
    <div class="wrapper">
      <h3><i class="icon far fa-images"></i>Gallery</h3>
      <p>from <a class="link" href="https://github.com/RobinCK/vue-gallery">Vue-Gallery</a> (blueimp gallery)</p>
      <gallery
      :images="imageGallery.images"
      :index="imageGallery.index"
      @close="imageGallery.index = null">
      </gallery>
      <div class="row small-up-2 medium-up-4">
        <div class="column" v-for="(image, imageIndex) in imageGallery.images" :key="imageIndex">
          <img :src="image" alt="" @click="imageGallery.index = imageIndex">
        </div>
      </div>

      <code-highlight type="html" title="Markup">
      &lt;gallery :images="images" :index="index" @close="index = null"&gt;&lt;/gallery&gt;
      </code-highlight>
      <code-highlight type="html" title="Markup">
      &lt;div class=&quot;row small-up-2 medium-up-4&quot;&gt;
        &lt;div class=&quot;column&quot; v-for=&quot;(image, imageIndex) in images&quot; :key=&quot;imageIndex&quot;&gt;
          &lt;img :src=&quot;image&quot; alt=&quot;&quot; @click=&quot;index = imageIndex&quot;&gt;
        &lt;/div&gt;
      &lt;/div&gt;
      </code-highlight>
      <hr>

      <h4>Videos</h4>
      <gallery
      :images="videoGallery.videos"
      :index="videoGallery.index"
      :options="{youTubeVideoIdProperty: 'youtube', youTubePlayerVars: undefined, youTubeClickToPlay: true}"
      @close="videoGallery.index = null">
      </gallery>
      <div class="row small-up-2 medium-up-4">
        <div class="column" v-for="(video, videoIndex) in videoGallery.videos" :key="videoIndex">
          <img :src="video.poster" alt="" @click="videoGallery.index = videoIndex">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      imageGallery: {
        id: 'image-gallery',
        index: null,
        images: [
          'https://placeimg.com/900/900/any',
          'https://placeimg.com/1200/800/any/2',
          'https://placeimg.com/600/900/any/3',
          'https://placeimg.com/800/400/any/4'
        ]
      },
      videoGallery: {
        id: 'video-gallery',
        index: null,
        videos: [
          {
            title: 'A YouYube video',
            href: 'https://www.youtube.com/watch?v=hNdlUHBJDKs',
            type: 'text/html',
            youtube: 'hNdlUHBJDKs',
            poster: 'https://img.youtube.com/vi/hNdlUHBJDKs/maxresdefault.jpg'
          },
          {
            title: 'A YouYube video 2',
            href: 'https://www.youtube.com/watch?v=s5iUsaPPtnk',
            type: 'text/html',
            youtube: 's5iUsaPPtnk',
            poster: 'https://img.youtube.com/vi/s5iUsaPPtnk/maxresdefault.jpg'
          }
        ]
      }
    }
  }
}
</script>
