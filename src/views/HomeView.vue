<script>
import WorkCard from "@/components/WorkCard.vue";
import data from "../data/data";
import TextLink from '../components/TextLink.vue';
import DownloadIcon from "../components/icons/IconDownload.vue";
import FooterSection from "@/components/FooterSection.vue";


export default {
  components: {
    WorkCard,
    TextLink,
    DownloadIcon,
    FooterSection
  },
  data() {
    return {
      // Use slice to get the first 3 items from data
      WorkCards: data.slice(0, 3),
      DownloadIcon
    };
  }
};
</script>

<template>
  
  <div>
    <div class="page-wrap">
      <div class="content-wrap home-page">
        <div class="splash-content">
          <h1>Davy Jones</h1>
          <h4>Hi, I am a versatile designer with expertise in UI, UX, and product design, specializing in fostering expansive enterprise design systems.</h4>
          <text-link
            url="/files/Jones-Davy-Resume_11-2023.pdf"
            text="Download my CV/Resume"
            :show-icon="true"
            :icon="DownloadIcon" 
          ></text-link>
        </div>
        <div class="work-splash">
          <h6 class="latest-work-header">Latest Work</h6>
          <div class="splashCard-wrapper">
            <WorkCard
              class="sm"
              v-for="work in WorkCards"
              :key="work.pathName"
              :work="work"
              :show-description="false"
            />
          </div>
          <div class="more-btn">
            <router-link to="/work" class="btn-primary">
              More Work
            </router-link>
          </div>
        </div>
      </div>
    </div>
    <FooterSection />
  </div>
</template>
