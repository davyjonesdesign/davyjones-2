<script>
import lottie from 'lottie-web'
import LogoIcon from '@/components/icons/LogoIcon.vue'
import WorkIconData from '@/components/icons/work.json'
import HomeIconData from '@/components/icons/home.json'
import HomeIconData2 from '@/components/icons/home2.json'
import WorkIcon from '@/components/icons/IconWork.vue'
import AboutIcon from '@/components/icons/IconAbout.vue'
import ConnectIcon from '@/components/icons/IconConnect.vue'


export default {
  components: {
      LogoIcon,
      HomeIconData,
      WorkIconData,
      WorkIcon,
      AboutIcon,
      ConnectIcon
  },
  mounted() {
    this.initLottie();
    const initUserTheme = this.getTheme() || this.getMediaPreference();
    this.setTheme(initUserTheme);
  },

  data() {
    return {
      userTheme: "light-theme",
      animationData: HomeIconData, // Initial animation data
      animation: null,
    };
  },

  methods: {
    initLottie() {
      if (this.animation) {
        this.animation.destroy();
      }

      this.animation = lottie.loadAnimation({
        container: this.$refs.lottieContainer,
        renderer: 'svg',
        animationData: this.animationData,
        loop: false,
        autoplay: false,
        rendererSettings: {
          className: 'nav-link-icon',
          preserveAspectRatio: 'xMidYMid meet',
        },
        easing: 'easeInQuad',
      });

      this.animation.setSpeed(6);
    },
    updateLottieData() {
      this.animationData = this.$route.name === 'home' ? HomeIconData2 : HomeIconData;
      this.initLottie();
    },
    playLottie() {
      this.initLottie();
      this.animation.play();
    },
    reverseLottie() {
      if (this.animation) {
        this.animation.setDirection(-1);
        this.animation.play();

        this.animation.addEventListener('complete', () => {
          this.animation.pause();
          this.animation.goToAndStop(0, true);
        });
      }
    },
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
  watch: {
    $route(to, from) {
      if (to.name !== from.name) {
        this.updateLottieData();
      }
    },
  },
  mounted() {
    this.initLottie();
    this.updateLottieData();
    const initUserTheme = this.getTheme() || this.getMediaPreference();
    this.setTheme(initUserTheme);
  },
};
</script>

<template>
    <div class="header-wrap">
      <div class="NavRail">
        <LogoIcon />
        <nav class="NavRail-links">
            <RouterLink to="/" class="navRail-link" @mouseover="playLottie" @mouseout="reverseLottie">
                <!-- <HomeIcon /> -->
                <div ref="lottieContainer" class="lottie-container"></div>
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
<style scoped>
.lottie-container {
  pointer-events: none;
}
</style>