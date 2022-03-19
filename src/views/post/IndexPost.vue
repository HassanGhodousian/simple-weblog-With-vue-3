<template>
  <div class="container mt-5">
    <div class="row">
      <div>
        <router-link class="btn btn-dark btn-sm" :to="{ name: 'create' }"
          >Create Post</router-link
        >
      </div>
      <div v-if="loading" class="spinner-border" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
      <div v-else class="col-md-3 mt-3" v-for="post in posts" :key="post.id">
        <div class="card">
          <ul class="list-group list-group-flush">
            <router-link
              class="nav-link card-header"
              :to="{ name: 'postid', params: { id: post.id } }"
              >{{ post.title }}</router-link
            >
            <li class="list-group-item">{{ post.body }}</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { ref } from "vue";
export default {
  components: {},
  setup() {
    // console.log("index post");
    const posts = ref([]);
    const loading = ref(true);
    function getUser() {
      axios
        .get("https://jsonplaceholder.typicode.com/posts")
        .then(function (response) {
          posts.value = response.data;
          loading.value = false;
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
        .then(function () {
          // always executed
        });
    }
    getUser();
    return { posts, loading };
  },
};
</script>
<style></style>
