

<script setup lang="ts">

import { PropType } from 'vue'

const props = defineProps({
    componentProps: {
        type: Object as PropType<Record<string, any>>
        ,
        default: () => []
    }
})

let propsNames = computed(() => {
    return Object.keys(props.componentProps)
})
</script>
<template>
    <div class="py-8 pr-8 ">
        <!-- render table with prop names -->
        <table class="table w-full striped ">
            <thead class="border-b ">
                <tr>
                    <th class="px-3 text-left">Prop Name</th>
                    <th class="px-3 text-left">Prop Type</th>
                    <th class="px-3 text-left">Default Value</th>
                    <th class="px-3 text-left">Description</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="propName in propsNames">
                    <td class="px-4 py-2 ">{{ propName }}</td>
                    <td class="px-4 py-2 font-mono text-sm text-fuchsia-600">
                    {{ componentProps[propName].type?.name }}
                    </td>
                    <td class="px-4 py-2 font-mono text-sm text-cyan-500" v-if="typeof componentProps[propName].default=='boolean'">{{  componentProps[propName].default }} </td>
                    <td class="px-4 py-2 text-cyan-500" v-else-if="typeof componentProps[propName].default=='string'">'{{  componentProps[propName].default }}' </td>
                    <td class="px-4 py-2 " v-else>{{  componentProps[propName].default }} </td>
                    <td class="px-4 py-2 text-sm prose" v-html="componentProps[propName].description"></td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<style scoped>
.table.striped tr:nth-child(even) {
    @apply bg-gray-100 dark:bg-gray-900
}
</style>