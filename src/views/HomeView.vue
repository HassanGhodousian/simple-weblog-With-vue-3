<template>
  <div class="container mt-5">
    <div class="row">
      <div class="col-md-6">
        <p>
          Home Page dolor sit amet, consectetur adipisicing elit. Cumque, rem
          ex. Explicabo harum velit numquam commodi vero ullam impedit omnis
          praesentium fuga corrupti rerum, quas quo vitae natus possimus!
          Provident!
        </p>
        <router-link class="btn btn-dark" to="/users">users</router-link>
        <router-link class="btn btn-dark mx-2" to="/posts">posts</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeView",
  components: {},
};
</script>
<style scoped></style>
