<template>
  <header>
    <nav ref="navbarRef">
      <div class="navbar">
        <div class="navbar__left">
          <RouterLink class="navbar__logo" to="/">tabulo</RouterLink>
          <span @click="showLinks" class="navbar__burger">
            <font-awesome-icon :icon="['fas', 'bars']" v-if="!exposedLink" />
            <font-awesome-icon :icon="['fas', 'xmark']" v-else />
          </span>
        </div>
        <div class="navbar__sites">
          <ul class="navbar__links">
            <li :class="{ 'active-link': exposedLink }">
              <RouterLink class="navbar__link" to="/">Strona główna</RouterLink>
            </li>
            <li :class="{ 'active-link': exposedLink }">
              <RouterLink class="navbar__link" to="/games"
                >Lista gier</RouterLink
              >
            </li>
            <li :class="{ 'active-link': exposedLink }">
              <RouterLink class="navbar__link" to="/team">Zespół</RouterLink>
            </li>
            <li :class="{ 'active-link': exposedLink }">
              <RouterLink class="navbar__link" to="/contact"
                >Kontakt</RouterLink
              >
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup>
/*
  imports
*/
import { ref } from "vue";
import { RouterLink } from "vue-router";
import { onClickOutside } from '@vueuse/core'

/*
  show links
*/
const exposedLink = ref(false);
const showLinks = () => {
  exposedLink.value = !exposedLink.value;
};

/*
  click outside to close
*/
const navbarRef = ref(null)
onClickOutside(navbarRef, () => exposedLink.value = false)
</script>
