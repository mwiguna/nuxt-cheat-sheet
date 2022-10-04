<template>
    <div>
        <div>
            Count : {{ count }}
            <button @click="addCount">Count</button>

            <div>Profil : {{ token }}</div>
        </div>
    </div>
</template>

<script setup>
    // Store Pinia
    import { useCounterStore } from '~~/stores/counter'
    const counter = useCounterStore()

    let count = ref(counter.count)
    
    const addCount = () => {
        counter.increment()
        count.value = counter.count
    }
    
    // Token
    const token = useCookie('token').value
    if(!token) await navigateTo('/')
</script>