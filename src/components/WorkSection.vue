<script>
import WorkCard from "@/components/WorkCard.vue";
import data from "../data/data-archived";

export default {
    components: {
        WorkCard
    },
    data() {
        return {
            filteredPorts: data,
        }
    }
}
</script>
<template>
    <div class="work-section">
        <WorkCard
          v-for="port in filteredPorts"
          :key="port.pathName"
          :port="port"
        />
    </div>
</template>