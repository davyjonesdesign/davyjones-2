<template>
  <div>
    <router-link class="text-link" v-if="to" :to="to">
      <div v-if="showIcon">
        <component :is="icon" class="icon"></component>
      </div>
      <div class="link-text">{{ text }}</div>
    </router-link>
    <a class="text-link" v-else :href="url" target="_blank">
      <div v-if="showIcon">
        <component :is="icon" class="icon"></component>
      </div>
      <div class="link-text">{{ text }}</div>
    </a>
  </div>
</template>

<script>
export default {
  props: {
    url: String,
    to: String,      // Router link to
    text: String,
    showIcon: Boolean,
    icon: String,    // Icon component name (e.g., "DownloadIcon")
  },
};
</script>

<style>
/* Define your icon styles here if needed */

</style>
