<script setup>
import { RouterLink, RouterView } from "vue-router";
import NavRail from "@/components/NavRail.vue";
import HeaderMobile from "@/components/HeaderMobile.vue";
import FooterSection from "@/components/FooterSection.vue";

</script>

<template>
  <div class="app-wrapper">
    <header>
      <NavRail />
    </header>
    <HeaderMobile />
    <div id="main-wrapper" class="main-wrapper">
      
      <router-view v-slot="{ Component, route }">
        
        <transition :name="route.meta.transition">
          <component :is="Component" />
        </transition>
      </router-view>
      <FooterSection />
    </div>
  </div>
</template>