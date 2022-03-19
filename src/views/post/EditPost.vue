<template>
  <div v-if="pageLoaling" class="spinner-border" role="status">
    <span class="visually-hidden">Loading...</span>
  </div>
  <div v-else class="ms-5">
    <h2>edit post</h2>
    <FormData
      @formUser="updatpost"
      :button-loading="loading"
      button-text="Edit post"
      :post="post"
    />
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
import FormData from "@/components/posts/FormData.vue";

import axios from "axios";
import Swal from "sweetalert2";
import { useRoute } from "vue-router";
export default {
  components: { FormData },

  setup() {
    const loading = ref(false);
    const pageLoaling = ref(true);

    const post = ref({});

    const route = useRoute();

    function updatpost(formUser) {
      loading.value = true;
      axios
        .put(`https://jsonplaceholder.typicode.com/posts/${route.params.id}`, {
          id: route.params.id,
          title: formUser.title,
          body: formUser.body,
          userId: 1,
        })
        .then(function () {
          loading.value = false;

          Swal.fire({
            title: "Thanks!",
            text: "ویرایش پست با موفقیت انجام شد",
            icon: "success",
            confirmButtonText: "بسیار خوب",
          });
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
          pageLoaling.value = false;
          // loading.value = false;
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
    return { updatpost, pageLoaling, post, loading };
  },
};
</script>

<style></style>
