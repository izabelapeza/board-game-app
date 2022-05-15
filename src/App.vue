<template>
  <div class="page-container">
    <TopNavbar class="sticky-navbar" />
    <RouterView class="content" />
    <FooterComponent />
  </div>
</template>

<script setup>
/*
  imports
*/
import TopNavbar from "@/components/Layout/TopNavbar.vue";
import FooterComponent from "@/components/Layout/FooterComponent.vue";
import { RouterView } from "vue-router";
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  background-color: $primary-color;
  color: $text-color;
}
.page-container {
  position: relative;
  min-height: 100vh;
}
.content {
  padding-bottom: 400px;

  @include media-md {
    padding-bottom: 280px;
  }
}
</style>
