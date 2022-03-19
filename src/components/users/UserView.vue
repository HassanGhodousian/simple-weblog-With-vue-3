<template>
  <div class="card">
    <router-link
      class="nav-link card-header"
      :to="{ name: 'userid', params: { id: user.id } }"
      >{{ user.name }}</router-link
    >

    <ul class="list-group list-group-flush">
      <li class="list-group-item">username :{{ user.username }}</li>
      <li class="list-group-item">email : {{ user.email }}</li>
      <li class="list-group-item">phone : {{ user.phone }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    user: Object,
  },
  setup() {},
};
</script>

<style></style>
