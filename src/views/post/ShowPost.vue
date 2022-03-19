<template>
  <div class="container mt-5">
    <div class="row">
      <div v-if="loaling" class="spinner-border" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
      <div v-else class="col-md-3 mt-3">
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

        <div class="card-footer">
          <button @click="deletePost" class="btn btn-danger me-2 btn-sm">
            Delete
          </button>
          <router-link
            class="btn btn-dark btn-sm"
            :to="{ name: 'edit', params: { id: post.id } }"
            >Edit</router-link
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { ref } from "vue";
import { useRoute } from "vue-router";
import Swal from "sweetalert2";
export default {
  components: {},
  setup() {
    const post = ref({});
    const loaling = ref(true);
    const route = useRoute();

    function deletePost() {
      axios
        .delete(`https://jsonplaceholder.typicode.com/posts/${route.params.id}`)
        .then(function () {
          Swal.fire({
            title: "Thanks!",
            text: `حذف پست   (${route.params.id})با موفقیت انجام شد `,
            icon: "warning",
            confirmButtonText: "بسیار خوب",
          });
          loaling.value = false;
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
        .then(function () {
          // always executed
        });
    }

    function getUser() {
      axios
        .get(`https://jsonplaceholder.typicode.com/posts/${route.params.id}`)
        .then(function (response) {
          post.value = response.data;
          loaling.value = false;
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
    return { deletePost, post, loaling };
  },
};
</script>
<style></style>
