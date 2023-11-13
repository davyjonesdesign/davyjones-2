<script>
import TextLink from '@/components/TextLink.vue';
import EmailIcon from './icons/IconEmail.vue'

export default {
    components: {
        EmailIcon,
        TextLink,
    },
    data() {
        return {
            EmailIcon,
            TextLink,
        }
    }
}
</script>

<template>
    <div class="site-links">
        <h6>Email</h6>
        <text-link url="https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=dmjones.me@gmail.com" text="dmjones.me@gmail.com" :show-icon="true" :icon="EmailIcon"></text-link>
    </div>
</template>