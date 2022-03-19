<template>
  <div class="container mt-5">
    <div class="row">
      <div v-if="loading" class="spinner-border" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
      <div v-else class="col-md-3 mt-3" v-for="user in users" :key="user.id">
        <UserCardView :user="user" />
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import UserCardView from "@/components/users/UserView.vue";
import { ref } from "vue";
export default {
  components: {
    UserCardView,
  },
  setup() {
    const users = ref([]);
    const loading = ref(true);
    function getPost() {
      axios
        .get("https://jsonplaceholder.typicode.com/users")
        .then(function (response) {
          users.value = response.data;
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
    getPost();
    return { users, loading };
  },
};
</script>
<style></style>
