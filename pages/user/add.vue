<template>
    <div>
        <input type="text" v-model="name" />
        <input type="submit" @click="submit" />

        <div>{{ responseData }}</div>
    </div>
</template>

<script setup>
    let responseData = ref('default');
    let name = ref('');

    async function submit(){
        let formData = new FormData();
        formData.append('name', name.value);
        formData.append('token', localStorage.getItem('token'));

        const response = await $fetch('https://wiguna.cendikiawandigital.com/apitest/ranker/user/postData', {
            method: 'POST',
            body: formData
        });

        responseData.value = response.data;
    }
</script>
