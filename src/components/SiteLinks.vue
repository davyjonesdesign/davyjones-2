<script>
import TextLink from '@/components/TextLink.vue';
import HomeIcon from './icons/IconHome.vue'
import WorkIcon from './icons/IconWork.vue'
import AboutIcon from './icons/IconAbout.vue'
import ConnectIcon from './icons/IconConnect.vue'

export default {
    components: {
        HomeIcon,
        WorkIcon,
        AboutIcon,
        ConnectIcon,
        TextLink,
    },
    data() {
        return {
            HomeIcon,
            WorkIcon,
            AboutIcon,
            ConnectIcon,
            TextLink,
        }
    }
}
</script>

<template>
    <div class="site-links">
        <h6>Site Links</h6>
        <text-link to="/" text="Home" :show-icon="false" :icon="HomeIcon"></text-link>
        <text-link to="/work" text="Work" :show-icon="false" :icon="WorkIcon"></text-link>
        <text-link to="/about" text="About" :show-icon="false" :icon="AboutIcon"></text-link>
        <text-link to="/connect" text="Connect" :show-icon="false" :icon="ConnectIcon"></text-link>
    </div>
</template>