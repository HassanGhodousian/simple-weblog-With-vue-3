<template>
  <div class="container mt-5">
    <div class="row">
      <div v-if="loaling" class="spinner-border" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
      <div v-else class="col-md-3 mt-3">
        <UserCardView :user="user" />
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import UserCardView from "@/components/users/UserView.vue";
import { ref } from "vue";
import { useRoute } from "vue-router";
export default {
  components: {
    UserCardView,
  },
  setup() {
    const user = ref({});
    const loaling = ref(true);
    const route = useRoute();
    function getUser() {
      axios
        .get(`https://jsonplaceholder.typicode.com/users/${route.params.id}`)
        .then(function (response) {
          user.value = response.data;
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
    return { user, loaling };
  },
};
</script>
<style></style>
