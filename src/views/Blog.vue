<template>
  <div class="blog container-fluid">
    <h1 class="text-center display-4 mb-4">Optimized4U Blog</h1>
    <b-card-group group
                  columns
                  id="posts">
      <!-- TODO: use post.image for img-src -->
      <b-card :img-src="post.thumb_thumbnail_url"
              img-alt="Image"
              img-top
              tag="article"
              style="max-width: 20rem;"
              class="mb-2 text-center"
              v-for="post in posts"
              :key="post.id"
              :title="post.title">
        <b-card-text class="text-left"
                     v-html="post.content">
        </b-card-text>
        <template v-slot:footer>
          <small class="text-muted">{{ post.posted_at }}</small>
        </template>
      </b-card>
    </b-card-group>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      posts: [],
      baseUrl: 'http://optimized4u.ddns.net:8000/api/posts',
      baseLocalBlogUrl: 'http://192.168.0.11:8000/api/v1/posts',
      apiToken: '?api_token=atJLEyd7KJQ1BFuBI5vUieLXE2AVW4pN9kFca8Nz'
    }
  },
  created () {
    axios.get(this.baseUrl).then((response) => {
      this.posts = response.data.data
    }).catch((error) => {
      console.log(error)
    })
  }
}
</script>
<style>
</style>
