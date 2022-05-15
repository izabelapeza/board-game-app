<template>
  <div class="games games-view">
    <div class="games__grid">
      <GameCard
        v-for="game in games.games"
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
import GameCard from "@/components/Cards/GameCard.vue";
import { useGamesStore } from "@/stores/games.js";
/*
  game store
*/
const games = useGamesStore();
</script>
