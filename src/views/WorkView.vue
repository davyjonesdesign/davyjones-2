<script>
import WorkCard from "@/components/WorkCard.vue";
import data from "../data/data";
import FooterSection from "@/components/FooterSection.vue";


export default {
    components: {
        WorkCard,
        FooterSection
    },
    data() {
        return {
            WorkCards: data,
        }
    }
}
</script>

<template>
  <div>
    <div class="page-wrap">
      <div class="content-wrap work-page">
        <h2 class="page-heading">Work</h2>
        <p>A collection of my adventures in crafting delightful user experiences through UX/UI/Product design.</p>
        <div class="work-section">
          <WorkCard
            class="xl"
            v-for="work in WorkCards"
            :key="work.pathName"
            :work="work"
            :show-description="true"
          />
        </div>
      </div>
    </div>
    <FooterSection />
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
