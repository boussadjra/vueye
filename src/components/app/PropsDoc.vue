

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
                    <td class="px-4 py-2 " data-label="Prop Name">{{ propName }}</td>
                    <td class="px-4 py-2 font-mono text-sm text-fuchsia-700 dark:text-fuchsia-300"  data-label="Prop Type">
                    {{ componentProps[propName].type?.name }}
                    </td>
                    <td class="px-4 py-2 font-mono text-sm text-cyan-700" v-if="typeof componentProps[propName].default=='boolean'"  data-label="Default value">{{  componentProps[propName].default }} </td>
                    <td class="px-4 py-2 text-cyan-700" v-else-if="typeof componentProps[propName].default=='string'" data-label="Default value">'{{  componentProps[propName].default }}' </td>
                    <td class="px-4 py-2 " v-else data-label="Default value">{{  componentProps[propName].default }} </td>
                    <td class="px-4 py-2 text-sm prose" v-html="componentProps[propName].description" data-label="Description"></td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<style scoped>
.table.striped tr:nth-child(even) {
    @apply bg-gray-100 dark:bg-gray-900
}


@media screen and (max-width: 640px) {
    table {
        border: 0;
    }
    table thead {
        display: none;
    }
    table tbody {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    table tr {
        margin-bottom: 10px;
        margin-left: 16px;
        /*margin-right: 16px;*/
        display: flex;
        flex-direction: column;
        justify-content: center;
        -webkit-box-shadow: 0 0 4px #bebebe;
        box-shadow: 0 0 4px #bebebe;
        height: 100%;
        width: 100%;
        align-items: stretch;
    }
    table td {
        display: block;
        text-align: right;
        padding: 10px;
     
    }
    table td:last-child {
        border-bottom: 0;
    }
    table td:before {
        content: attr(data-label);
        float: left;
        text-transform: uppercase;
        font-weight: bold;
        @apply text-gray-700 dark:text-gray-200
    }
}

</style>