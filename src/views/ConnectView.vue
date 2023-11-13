<script>
import ConnectForm from '../components/ConnectForm.vue'
import ConnectLinks from '../components/ConnectLinks.vue'
import SocialLinks from '../components/SocialLinks.vue'

export default {
    components: {
        ConnectForm,
        ConnectLinks,
        SocialLinks
    },
}
</script>

<template>
    <div class="page-wrap connect-page">
        <div class="content-wrap">
            <div class="page-content-wrapper">
                <h2 class="page-header">Connect</h2>
                <p class="page-p">If you’d like to know more or have a project you’d like to discuss, don’t hesitate to reach out.</p>
                <div class="connect-links-wrap">
                    <SocialLinks />
                    <ConnectLinks />
                    
                </div>
            </div>
            <ConnectForm />
            
        </div>
    </div>
</template>