<template>
  <div class="game-card">
    <img :src="getImageUrl(image)" alt="Game Cover" class="game-card__img" />
    <h1>{{ title }}</h1>
    <h2
      :style="`background-color: ${useGetColor(category)[0]}; color: ${
        useGetColor(category)[1]
      }`"
      class="game-category"
    >
      {{ category }}
    </h2>
  </div>
</template>

<script setup>
/*
  imports
*/
import { useGetColor } from "@/use/useGetColor.js";

/*
  props
*/
const props = defineProps(["image", "title", "category"]);

/*
  get image url
*/
const getImageUrl = (name) => {
  return new URL(`../../assets/img/covers/${name}`, import.meta.url).href;
};
</script>
