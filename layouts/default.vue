<template>
    <div class="container mt-5">
        <h1>Parent Layout Header</h1>
        <slot />
        <Footer v-if="!hideFooter" />
    </div>
</template>

<script setup>
    const hideFooter = false;
</script>