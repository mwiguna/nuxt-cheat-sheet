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
                <NuxtLink to="/user">User</NuxtLink>
            </li>
            <li @click="login">
                <NuxtLink to="/user/profil">Profil</NuxtLink>
            </li>
        </ul>
    </div>
</template>

<script setup>
    const login = async () => {
        const token = useCookie('token')
        token.value = "abc123"
    }
</script>
  