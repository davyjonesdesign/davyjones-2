<script>
import LogoIcon from '../components/icons/LogoIcon.vue'
import SiteLinks from '../components/SiteLinks.vue'
import SocialLinks from '../components/SocialLinks.vue'

export default {
    components: {
        SiteLinks,
        SocialLinks,
        LogoIcon
    },
}
</script>

<template>
    <footer class="page-wrap footer">
        <div class="content-wrap footer-wrapper">
            <div class="logo-summary-section">
                <LogoIcon />
                <p class="summary">Davy Jones is a user interface designer specializing in fostering expansive enterprise design systems.</p>
            </div>
            <div class="footer-links">
                <SocialLinks />
                <SiteLinks />
            </div>

        </div>
        <div class="credits">This site was <a class="figma-link" href="https://www.figma.com/proto/6gKrCfishGsJQYHD2HxqiR/davyjones.me?page-id=0%3A1&node-id=1-2&scaling=scale-down&starting-point-node-id=1%3A2&mode=design&t=mHlTHB5tLY3PIajw-1">designed in Figma</a> and developed with Vue.</div>
    </footer>
</template>