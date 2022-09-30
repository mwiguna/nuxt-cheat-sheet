<template>
    <NuxtLayout :name="layoutName">
        <h1>Category : {{ params.category }}</h1>
    </NuxtLayout>
</template>

<script setup>
    const route = useRoute();
    const params = route.params;

    const layoutName = "custom";
</script>