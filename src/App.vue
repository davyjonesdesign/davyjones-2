<script setup>
import { RouterLink, RouterView } from "vue-router";
import NavRail from "@/components/NavRail.vue";
import HeaderMobile from "@/components/HeaderMobile.vue";

</script>

<template>
  <div class="app-wrapper">
    <header>
      <NavRail />
    </header>
    <HeaderMobile />
    
      
      <router-view v-slot="{ Component, route }">
        <transition id="main-wrapper" class="main-wrapper" preventScroll :name="route.meta.transition">
            <component :is="Component" />
        </transition>

      </router-view>
  </div>
</template>