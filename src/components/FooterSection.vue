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
                <p class="summary">Davy Jones a versatile designer with expertise in UI, UX, and product design, specializing in fostering expansive enterprise design systems.</p>
            </div>
            <div class="footer-links">
                <SocialLinks />
                <SiteLinks />
            </div>

        </div>
        <div class="credits">This site was <a target="_blank" class="figma-link" href="https://www.figma.com/file/6gKrCfishGsJQYHD2HxqiR/davyjones.me(portfolio)?type=design&node-id=0%3A1&mode=design&t=2gweuBc77zzPnidg-1">designed in Figma</a> and developed with Vue.</div>
    </footer>
</template>