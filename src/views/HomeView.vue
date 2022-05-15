<template>
  <div class="home">
    <div class="home__greeting">
      <h1>
        Najlepsze &#127922;
        <span class="home__gradient">gry planszowe</span>
        &#129303;
      </h1>
      <h2>Sprawdź nasze recenzje, znajdź coś dla siebie!</h2>
    </div>
    <div class="home__games">
      <h2 class="home__games__heading">Wybrane tytuły</h2>
      <div class="games games__grid">
        <GameCard
          v-for="game in games.randomGames(3)"
          :key="game.id"
          :image="game.image"
          :title="game.title"
          :category="game.category"
        />
      </div>
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
