<script>
import TextLink from '../components/TextLink.vue';
import DownloadIcon from "../components/icons/IconDownload.vue";
import FooterSection from "@/components/FooterSection.vue";

export default {
    components: {
    TextLink,
    DownloadIcon,
    FooterSection
  },
  data() {
        return {
        DownloadIcon
        };
    }
}
</script>

<template>
    
    <div>
        <div class="page-wrap about-page">
            <div class="content-wrap">
            
                <div class="page-content-wrapper">
                    <h2 class="page-header">Hi, I’m Davy!</h2>
                    <p class="page-p">My name is Davy Jones, and I am a UX/UI designer with a Masters in Graphic and Web design and almost a decade of experience in graphic and web design. I bring a unique perspective to teams, valuing collaboration and mental flexibility while delivering fresh solutions with design excellence. 
                    </p>
                    <p class="page-p">I am a avid hiking enthusiast, a coffee connoisseur, and love a hearty wintery jog through the snow.</p>
                    <text-link
                        url="/files/Jones-Davy-Resume_11-2023.pdf"
                        download
                        text="Download my CV/Resume"
                        :show-icon="true"
                        :icon="DownloadIcon" 
                        ></text-link>
                </div>

                <div class="about-img-wrapper">
                    <img class="about-img" src="@/assets/me.jpg" alt="Picture of me, Davy Jones" />
                </div>
            </div>
        </div>
        <FooterSection />
    </div>
</template>