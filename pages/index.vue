<template>
    <div>
        <ul>
            <li>
                <NuxtLink to="/home">Home</NuxtLink>
            </li>
            <li>
                <NuxtLink to="/blog/1">Single Param</NuxtLink>
            </li>
            <li>
                <NuxtLink to="/blog/1/2">Multi Param</NuxtLink>
            </li>
            <li>
                <NuxtLink to="/user" >User</NuxtLink>
            </li>
            <li @click="login">
                Login
            </li>
        </ul>
    </div>
</template>

<script setup>
    const login = async () => {
        localStorage.setItem('token', 'abc123')
        await navigateTo('/user/profil')
    }
</script>
  