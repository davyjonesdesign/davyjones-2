<script>
import TextLink from '@/components/TextLink.vue';
import GitIcon from "../components/icons/IconGit.vue";
import InstaIcon from "../components/icons/IconInsta.vue";
import LinkedIcon from "../components/icons/IconLinked.vue";

export default {
    components: {
        TextLink,
        GitIcon,
        InstaIcon,
        LinkedIcon
    },
    data() {
        return {
            TextLink,
            GitIcon,
            InstaIcon,
            LinkedIcon
        }
    }
}
</script>

<template>
    <div class="social-wrapper">
        <h6>Social</h6>
        <text-link url="https://instagram.com/davyjonesdesign/" text="Instagram" :show-icon="true"
            :icon="InstaIcon"></text-link>
        <text-link url="https://linkedin.com/in/davyjonesdesign/" text="LinkedIn" :show-icon="true"
            :icon="LinkedIcon"></text-link>
        <text-link url="https://github.com/davyjonesdesign" text="GitHub" :show-icon="true" :icon="GitIcon"></text-link>
    </div>
</template>