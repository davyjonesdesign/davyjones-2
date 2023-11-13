<script>
import LogoIcon from '@/components/icons/LogoIcon.vue'
import HomeIcon from '@/components/icons/IconHome.vue'
import WorkIcon from '@/components/icons/IconWork.vue'
import AboutIcon from '@/components/icons/IconAbout.vue'
import ConnectIcon from '@/components/icons/IconConnect.vue'


export default {
  components: {
      LogoIcon,
      HomeIcon,
      WorkIcon,
      AboutIcon,
      ConnectIcon
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
    <div class="header-wrap">
      <div class="NavRail">
        <LogoIcon />
        <nav class="NavRail-links">
            <RouterLink to="/" class="navRail-link">
                <HomeIcon />
                Home
            </RouterLink>
            <RouterLink to="/work" class="navRail-link">
                <WorkIcon />
                Work
            </RouterLink>
            <RouterLink to="/about" class="navRail-link">
                <AboutIcon />
                About
            </RouterLink>
            <RouterLink to="/connect" class="navRail-link">
              <ConnectIcon />
              Connect
            </RouterLink>
        </nav>
        <div class="btn-circle" @click="toggleTheme">
            <p class="darkMode-label" :class="{ 'checked': userTheme === 'dark-theme' }">
                {{ userTheme === 'dark-theme' ? 'Light Mode' : 'Dark Mode' }}
            </p>
        </div>
      </div>
        
  </div>
</template>