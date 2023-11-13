<script>
import LogoIcon from '@/components/icons/LogoIcon.vue'


export default {
  components: {
      LogoIcon
  },
  mounted() {
    const initUserTheme = this.getTheme() || this.getMediaPreference();
    this.setTheme(initUserTheme);
  },

  data() {
    return {
      userTheme: "light-theme",
    };
  },

  methods: {
    toggleTheme() {
      if (this.userTheme === 'light-theme') {
        this.setTheme("dark-theme");
      } else {
        this.setTheme("light-theme");
      }
    },

    getTheme() {
      return localStorage.getItem("user-theme");
    },

    setTheme(theme) {
      localStorage.setItem("user-theme", theme);
      this.userTheme = theme;
      document.documentElement.className = theme;
    },

    getMediaPreference() {
      const hasDarkPreference = window.matchMedia("(prefers-color-scheme: dark)").matches;
      if (hasDarkPreference) {
        return "dark-theme";
      } else {
        return "light-theme";
      }
    },
  },
};
</script>

<template>
    <div class="mobile-header">
        <LogoIcon />
        <div class="btn-circle" @click="toggleTheme">
            <p class="darkMode-label" :class="{ 'checked': userTheme === 'dark-theme' }">
                {{ userTheme === 'dark-theme' ? 'Light' : 'Dark' }}
            </p>
        </div>
        
    </div>
</template>