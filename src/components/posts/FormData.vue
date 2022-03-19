<template>
  <form class="col-6" @submit.prevent="validete">
    <div class="mb-3 mt-5">
      <label for="exampleInputEmail1" class="form-label">Title</label>
      <textarea
        class="form-control"
        rows="1"
        v-model.lazy.trim="form.title"
      ></textarea>

      <div id="emailHelp" class="form-text text-danger">
        {{ form.titleErrorText }}
      </div>
    </div>

    <div class="mb-3">
      <label for="exampleInputEmail1" class="form-label">Body</label>
      <textarea
        class="form-control"
        rows="5"
        v-model.lazy.trim="form.body"
      ></textarea>

      <div id="emailHelp" class="form-text text-danger">
        {{ form.bodyErrorText }}
      </div>
    </div>

    <button type="submit" class="btn btn-dark" :disabled="buttonLoading">
      <div
        class="spinner-border spinner-border-sm"
        v-if="buttonLoading"
        role="status"
      >
        <span class="visually-hidden btn-sm">Loading...</span>
      </div>

      {{ buttonText }}
    </button>
  </form>
</template>

<script>
import { reactive } from "@vue/reactivity";

export default {
  props: {
    buttonLoading: Boolean,
    buttonText: String,
    post: Object,
  },
  setup(props, { emit }) {
    const form = reactive({
      title: "",
      titleErrorText: "",
      body: "",
      bodyErrorText: "",
    });
    function setInput() {
      if (props.post !== undefined) {
        form.title = props.post.title;
        form.body = props.post.body;
      }
    }
    setInput();
    function validete() {
      if (form.title === "") {
        form.titleErrorText = "title is required";
      } else {
        form.titleErrorText = "";
      }
      if (form.body === "") {
        form.bodyErrorText = "body is required";
      } else {
        form.bodyErrorText = "";
      }
      if (form.title !== "" && form.body !== "") {
        emit("formUser", form);
      }
      console.log(props);
    }
    return { form, validete };
  },
};
</script>

<style></style>
