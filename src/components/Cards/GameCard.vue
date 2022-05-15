<template>
  <div class="game-card">
    <img :src="getImageUrl(image)" alt="Game Cover" class="game-card__img" />
    <h1>{{ title }}</h1>
    <h2
      :style="`background-color: ${getColor(category)[0]}; color: ${
        getColor(category)[1]
      }`"
    >
      {{ category }}
    </h2>
  </div>
</template>

<script setup>
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

/*
  get colors
*/
const getColor = (value) => {
  let color;
  switch (value) {
    case "rodzinne":
      color = "3, 218, 198";
      break;
    case "imprezowe":
      color = "187, 134, 252";
      break;
    case "strategiczne":
      color = "218, 186, 3";
      break;
    default:
      color = "0, 0, 0";
  }
  return [`rgba(${color}, 0.25)`, `rgb(${color})`];
};
</script>
