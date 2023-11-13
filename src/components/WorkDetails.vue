<script>
import data from "../data/data";
import TextLink from "./TextLink.vue";
import BackIcon from "./icons/IconBack.vue"
import LinkIcon from "./icons/IconLink.vue"
import FooterSection from "./FooterSection.vue";

export default {
    components: {
        TextLink,
        BackIcon,
        LinkIcon,
        FooterSection
    },
    data() {
        return {
            TextLink,
            BackIcon,
            LinkIcon
        }
    },
    name: "WorkDetails",
    props: ["alias"],
    created() {
    const alias = this.$route.params.alias;
        const work = data.find((el) => el.alias === alias);
        if (!work) {
        return this.$router.push("404");
        }
        this.work = work;
    },
    beforeRouteUpdate (to, from, next) {
    const toDepth = to.path.split('/').length
    const fromDepth = from.path.split('/').length
    this.transitionName = toDepth < fromDepth ? 'slide-down' : 'slide-up'
    next()
  },
}

</script>


<template>
    <div>
        <div class="page-wrap">
            <div class="content-wrap details-wrapper">
                <div class="details-header">
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
                    <div class="details-header-content">
                        <h2>{{ work.title }}</h2>
                        <h4>{{ work.subtitle }}</h4>
                    </div>
                </div>
                <div class="details-body">
                    <text-link 
                        to="/work" 
                        text="Back to Work"  
                        :show-icon="true"
                        :icon="BackIcon">
                    </text-link>
            
                    <!-- details grid -->

                    <div class="details-grid-wrapper">
                            <div class="grid-col-wrapper">
                                <h6 class="grid-col-head">Role</h6>
                                <p class="row-2 role-p">{{ work.role }}</p>
                            </div>
                            <div class="grid-col-wrapper">
                                <h6 class="grid-col-head">Target Audience</h6>
                                <p class=" row-2 target-p">{{ work.targAud }}</p>
                            </div>
                            <div class="grid-col-wrapper grid-col-wrapper-links">
                                <h6 class="grid-col-head">
                                    Project Links
                                </h6>
                                <div class="row-2 project-links-links">
                                    <text-link
                                        v-for="(link, index) in work.links"
                                        :key="index"
                                        :url=link.link
                                        class="project-links-link"
                                        v-bind:text="link.linkDescription"  
                                        :show-icon="true"
                                        :icon="LinkIcon">
                                    </text-link>
                                </div>
                            </div>
                    </div>

                    <!-- detail section -->
                    <div class="details-section">

                        <!-- Overview -->
                        <div class="details-section_content">
                            <h3 class="details-section-header" >Overview</h3>
                            <h5 class="details-section-subheader" >Problem</h5>
                            <p v-for="work in work.ovProb" :key="work">{{ work }}</p>
                            <h5 class="details-section-subheader" >Solution</h5>
                            <p v-for="work in work.ovSol" :key="work">{{ work }}</p>
                        </div>
                        <div class="details-section_visual">
                            <div class="details-visual-img-wrap">
                                <img 
                                class="details-visual" v-bind:alt="work.ovImg" v-if="work.ovImg" 
                                :src="work.ovImg" />
                            </div>
                            <iframe
                                class="details-visual iframe"
                                v-if="work.ovProto"
                                :src="work.ovProto + '%26hide-ui%3D1'"
                                allowfullscreen
                            ></iframe>
                            <p class="details-visiual_caption">{{ work.ovVisCap }}</p>
                        </div>
                    </div>

                    <!-- Goal -->
                    <div class="details-section">
                        <div class="details-section_content">
                            <h3 class="details-section-header" >Goal</h3>
                            <h5 class="details-section-subheader" >Objective</h5>
                            <p v-for="work in work.goalObj" :key="work">{{ work }}</p>
                        </div>
                        <div class="details-section_visual">
                            <div class="details-visual-img-wrap">
                                <img 
                                class="details-visual" v-bind:alt="work.goalImg" v-if="work.goalImg" 
                                :src="work.goalImg" />
                            </div>
                            <iframe
                                class="details-visual iframe"
                                v-if="work.goalProto"
                                :src="work.goalProto + '%26hide-ui%3D1'"
                                allowfullscreen
                            ></iframe>
                            <p class="details-visiual_caption">{{ work.goalVisCap }}</p>
                        </div>
                    </div>
                    
                    <!-- Approach -->
                    <div class="details-section">
                        <div class="details-section_content">
                            <h3 class="details-section-header" >Approach</h3>
                            <h5 class="details-section-subheader" >Method</h5>
                            <p v-for="work in work.apprMeth" :key="work">{{ work }}</p>
                            <h5 class="details-section-subheader" >Design</h5>
                            <p v-for="work in work.apprDes" :key="work">{{ work }}</p>
                            <h5 v-if="work.apprKf" class="details-section-subheader" >Key Features</h5>
                            <ul class="details-kf_list" v-if="work.apprKf">
                                <li class="details-kf_listItem"  v-for="work in work.apprKf" :key="work">{{ work }}</li>
                            </ul>
                        </div>
                        <div class="details-section_visual">
                            <div class="details-visual-img-wrap">
                                <img 
                                class="details-visual" v-bind:alt="work.apprImg" v-if="work.apprImg" 
                                :src="work.apprImg" />
                            </div>
                            <iframe
                                class="details-visual iframe"
                                v-if="work.apprProto"
                                :src="work.apprProto + '%26hide-ui%3D1'"
                                allowfullscreen
                            ></iframe>
                            <p class="details-visiual_caption">{{ work.apprVisCap }}</p>
                        </div>
                    </div>
                    
                    <!-- Outcome -->
                    <div class="details-section">
                        <div class="details-section_content">
                            <h3 class="details-section-header" >Outcome</h3>
                            <h5 class="details-section-subheader" >Future Work</h5>
                            <p v-for="work in work.outFut" :key="work">{{ work }}</p>
                            <h5 class="details-section-subheader" >Ongoing Work</h5>
                            <p v-for="work in work.outOn" :key="work">{{ work }}</p>
                        </div>
                        <div class="details-section_visual">
                            <div class="details-visual-img-wrap">
                                <img 
                                class="details-visual" v-bind:alt="work.outImg" v-if="work.outImg" 
                                :src="work.outImg" />
                            </div>
                            <iframe
                                class="details-visual iframe"
                                v-if="work.outProto"
                                :src="work.outProto + '%26hide-ui%3D1'"
                                allowfullscreen
                            ></iframe>
                            <p class="details-visiual_caption">{{ work.outVisCap }}</p>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
        <FooterSection />
    </div>
    
    
</template>