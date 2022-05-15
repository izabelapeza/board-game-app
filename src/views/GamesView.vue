<template>
  <div class="games games-view">
    <div class="games__category">
      <span
        v-for="category in games.allCategory"
        :key="category"
        @click="changeCategory(category)"
        :style="`background-color: ${
          useGetColor(category === activeCategory ? category : '')[0]
        }; color: ${
          useGetColor(category === activeCategory ? category : '')[1]
        }`"
        class="game-category game-category__main"
      >
        {{ category }}
      </span>
    </div>
    <div class="games__grid">
      <GameCard
        v-for="game in games.sortByCategory(activeCategory)"
        :key="game.id"
        :image="game.image"
        :title="game.title"
        :category="game.category"
      />
    </div>
  </div>
</template>

<script setup>
/*
  imports
*/
import { ref } from "vue";
import GameCard from "@/components/Cards/GameCard.vue";
import { useGamesStore } from "@/stores/games.js";
import { useGetColor } from "@/use/useGetColor.js";
/*
  game store
*/
const games = useGamesStore();
/*
  sort games
*/
const activeCategory = ref("wszystkie");
const changeCategory = (c) => (activeCategory.value = c);
</script>
