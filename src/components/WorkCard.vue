<script>
export default {
  props: {
    work: {
      type: Object,
      required: true,
    },
    showDescription: {
      type: Boolean,
      default: true, // Display description by default, change to false if you want to hide it
    },
  },
  data() {
    return {
      ports: null,
    };
  },
}
</script>

<template>
    <router-link 
        
        :to="{ name: 'WorkDetails', params: {alias: work.alias } }">
        <div class="workCard">
            <div class="visual-wrapper">
                <img
                    class="workCard-visual"
                    v-if="work.splashImg"
                    :src="work.splashImg"
                    v-bind:alt="work.splashImg"
                />
                <video
                    class="workCard-visual"
                    v-if="work.vid"
                    autoplay
                    loop
                    muted
                    :src="work.vid"
                    v-bind:alt="work.title"
                ></video>
            </div>
            <!-- You can access properties of 'card' here -->
            <div class="workCard-content">
                <h4 class="workCard-title">{{ work.title }}</h4>
                <p class="workCard-description" v-if="showDescription">{{ work.subtitle }}</p>
            </div>
            <!-- Add more content here as needed -->
        </div>
    </router-link>
</template>