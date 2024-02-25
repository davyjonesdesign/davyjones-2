<script>
import lottie from 'lottie-web'
import HomeIconData from '@/components/icons/home.json'
import WorkIconData from '@/components/icons/work.json'
import AboutIconData from '@/components/icons/about.json'
import ConnectIconData from '@/components/icons/connect.json'

import LogoIcon from '@/components/icons/LogoIcon.vue'

export default {
  components: {
    LogoIcon
  },

  data() {
    return {
      userTheme: "light-theme",
      homeAnimationData: HomeIconData,
      workAnimationData: WorkIconData,
      aboutAnimationData: AboutIconData,
      connectAnimationData: ConnectIconData,
      homeAnimation: null,
      workAnimation: null,
      aboutAnimation: null,
      connectAnimation: null,
      isHomeLinkActive: false,
      isWorkLinkActive: false,
      isAboutLinkActive: false,
      isConnectLinkActive: false
    };
  },

  mounted() {
    this.initLottie();
    const initUserTheme = this.getTheme() || this.getMediaPreference();
    this.setTheme(initUserTheme);

    // Check if the current route matches the route linked to the animation
    if (this.$route.path === '/') {
      this.playHomeAnimation();
    }
    if (this.$route.path === 'work') {
      this.playWorkAnimation();
    }
    if (this.$route.path === '/about') {
      this.playAboutAnimation();
    }
    if (this.$route.path === '/connect') {
      this.playConnectAnimation();
    }
  },

  methods: {
    initLottie() {
      // home
      this.homeAnimation = lottie.loadAnimation({
        container: this.$refs.homeLottieContainer,
        renderer: 'svg',
        animationData: this.homeAnimationData,
        loop: false,
        autoplay: false,
        rendererSettings: {
          className: 'nav-link-icon',
          preserveAspectRatio: 'xMidYMid meet',
        },
        easing: 'easeInQuad',
      });

      this.homeAnimation.setSpeed(6);

      // work
      this.workAnimation = lottie.loadAnimation({
        container: this.$refs.workLottieContainer,
        renderer: 'svg',
        animationData: this.workAnimationData,
        loop: false,
        autoplay: false,
        rendererSettings: {
          className: 'nav-link-icon',
          preserveAspectRatio: 'xMidYMid meet',
        },
        easing: 'easeInQuad',
      });

      this.workAnimation.setSpeed(6);

      // about
      this.aboutAnimation = lottie.loadAnimation({
        container: this.$refs.aboutLottieContainer,
        renderer: 'svg',
        animationData: this.aboutAnimationData,
        loop: false,
        autoplay: false,
        rendererSettings: {
          className: 'nav-link-icon',
          preserveAspectRatio: 'xMidYMid meet',
        },
        easing: 'easeInQuad',
      });

      this.aboutAnimation.setSpeed(6);

      // connect
      this.connectAnimation = lottie.loadAnimation({
        container: this.$refs.connectLottieContainer,
        renderer: 'svg',
        animationData: this.connectAnimationData,
        loop: false,
        autoplay: false,
        rendererSettings: {
          className: 'nav-link-icon',
          preserveAspectRatio: 'xMidYMid meet',
        },
        easing: 'easeInQuad',
      });

      this.connectAnimation.setSpeed(6);
    },
    playHomeLottie(event, route) {
      event.preventDefault();
      this.isHomeLinkActive = true;
      this.$router.push(route);
      this.playHomeAnimation();
    },
    playWorkLottie(event, route) {
      event.preventDefault();
      this.isWorkLinkActive = true;
      this.$router.push(route);
      this.playWorkAnimation();
    },
    playAboutLottie(event, route) {
      event.preventDefault();
      this.isAboutLinkActive = true;
      this.$router.push(route);
      this.playAboutAnimation();
    },
    playConnectLottie(event, route) {
      event.preventDefault();
      this.isConnectLinkActive = true;
      this.$router.push(route);
      this.playConnectAnimation();
    },
    playHomeAnimation() {
      if (this.homeAnimation) {
        this.homeAnimation.play();
      }
    },
    playWorkAnimation() {
      if (this.workAnimation) {
        this.workAnimation.play();
      }
    },
    playAboutAnimation() {
      if (this.aboutAnimation) {
        this.aboutAnimation.play();
      }
    },
    playConnectAnimation() {
      if (this.connectAnimation) {
        this.connectAnimation.play();
      }
    },
    resetHomeAnimation() {
      if (this.homeAnimation) {
        this.homeAnimation.goToAndStop(0);
      }
    },
    resetWorkAnimation() {
      if (this.workAnimation) {
        this.workAnimation.goToAndStop(0);
      }
    },
    resetAboutAnimation() {
      if (this.aboutAnimation) {
        this.aboutAnimation.goToAndStop(0);
      }
    },
    resetConnectAnimation() {
      if (this.connectAnimation) {
        this.connectAnimation.goToAndStop(0);
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
    '$route'(to, from) {
      if (to.name !== from.name) {
        this.isHomeLinkActive = to.path === '/'; // Check if the current route is active for Home
        if (this.isHomeLinkActive) {
          this.playHomeAnimation();
        } else {
          this.resetHomeAnimation();
        }

        this.isWorkLinkActive = to.path === '/work'; // Check if the current route is active for Work
        if (this.isWorkLinkActive) {
          this.playWorkAnimation();
        } else {
          this.resetWorkAnimation();
        }

        this.isAboutLinkActive = to.path === '/about'; // Check if the current route is active for About
        if (this.isAboutLinkActive) {
          this.playAboutAnimation();
        } else {
          this.resetAboutAnimation();
        }

        this.isConnectLinkActive = to.path === '/connect'; // Check if the current route is active for Connect
        if (this.isConnectLinkActive) {
          this.playConnectAnimation();
        } else {
          this.resetConnectAnimation();
        }
      }
    }
  }
};
</script>

<template>
  <div class="header-wrap">
    <div class="NavRail">
      <LogoIcon />
      <nav class="NavRail-links">
        <RouterLink to="/" class="navRail-link" @click="playHomeLottie($event, '/')">
          <div ref="homeLottieContainer" class="lottie-container"></div>
          Home
        </RouterLink>
        <RouterLink to="/work" class="navRail-link" @click="playWorkLottie($event, '/work')">
          <div ref="workLottieContainer" class="lottie-container"></div>
          Work
        </RouterLink>
        <RouterLink to="/about" class="navRail-link" @click="playAboutLottie($event, '/about')">
          <div ref="aboutLottieContainer" class="lottie-container"></div>
          About
        </RouterLink>
        <RouterLink to="/connect" class="navRail-link" @click="playConnectLottie($event, '/connect')">
          <div ref="connectLottieContainer" class="lottie-container"></div>
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
