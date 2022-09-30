<template>
    <div v-if="!pending">
        <div v-for="user in users.data">
            {{ user.nama }}
        </div>
        
        <NuxtLink to="/user/add">Add</NuxtLink>
    </div>
    <div v-else>Loading</div>
</template>

<script setup>
    const route = routeHelper() // composable auto import di semua file
    const { pending, data: users} = useLazyFetch(route.usersUrl, {initialCache: false}) 
</script>
