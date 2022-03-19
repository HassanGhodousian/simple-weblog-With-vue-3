<template>
  <div class="ms-5">
    <h2>create post</h2>
    <FormData
      @formUser="createpost"
      :button-loading="loading"
      button-text="Create post"
    />
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
import axios from "axios";
import Swal from "sweetalert2";
import FormData from "@/components/posts/FormData.vue";
export default {
  components: { FormData },

  setup() {
    const loading = ref(false);
    function createpost(formUser) {
      console.log(formUser);
      loading.value = true;

      axios
        .post("https://jsonplaceholder.typicode.com/posts", {
          title: "form.title",
          body: "form.body",
          userId: 1,
        })
        .then(function () {
          loading.value = false;
          Swal.fire({
            title: "Thanks!",
            text: "ایجاد پست با موفقیت انجام شد",
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
    return { createpost, loading };
  },
};
</script>

<style></style>
