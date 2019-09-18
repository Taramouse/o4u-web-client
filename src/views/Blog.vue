<template>
  <div class="blog container-fluid">
    <h1 class="text-center display-4 mb-4">Optimized4U Blog</h1>
    <b-card-group group
                  columns
                  id="posts">
      <!-- TODO: use post.image for img-src -->
      <b-card img-src="https://picsum.photos/300/300/?image=41"
              img-alt="Image"
              img-top
              tag="article"
              style="max-width: 20rem;"
              class="mb-2"
              v-for="post in posts"
              :key="post.id"
              :title="post.title">
        <b-card-text>
          {{post.intro}}
        </b-card-text>
        <template v-slot:footer>
          <small class="text-muted">{{ post.updated_at }}</small>
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
      baseUrl: 'http://192.168.0.11:8000/api/posts'
    }
  },
  created () {
    this.getPosts()
  },
  methods: {
    getPosts () {
      axios.get(this.baseUrl).then((response) => {
        this.posts = response.data.data
      }).catch((error) => {
        console.log(error)
      })
    }
  }
}
</script>
<style>
</style>
