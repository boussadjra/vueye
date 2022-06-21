<script setup lang="ts">

</script>
<template>
    <Story title="Components/alerts" :layout="{ type: 'grid', width: 'auto' }">
        <Variant title="Variants">
            <div class="flex flex-wrap gap-2">
                <VAlert> </VAlert>
                <VAlert variant="primary"> </VAlert>
                <VAlert variant="secondary"></VAlert>
                <VAlert variant="info"></VAlert>
                <VAlert variant="warning"></VAlert>
                <VAlert variant="error"></VAlert>
                <VAlert variant="success"></VAlert>
            </div>
        </Variant>
        <Variant title="Outlined">
            <div class="flex flex-wrap gap-2">
                <VAlert outlined> </VAlert>
                <VAlert outlined variant="primary"> </VAlert>
                <VAlert outlined variant="secondary"></VAlert>
                <VAlert outlined variant="info"></VAlert>
                <VAlert outlined variant="warning"></VAlert>
                <VAlert outlined variant="error"></VAlert>
                <VAlert outlined variant="success"></VAlert>
            </div>
        </Variant>
    </Story>
</template>

<style scoped>
</style>
