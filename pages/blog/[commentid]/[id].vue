<template>
    <div>
        <h1>Comment Ke : {{ $route.params.commentid }}</h1>
        <h1>ID : {{ $route.params.id }}</h1>
    </div>
</template>

<script setup>
    const route = useRoute()
    const commentID = route.params.commentid;

    // Tidak ada yang bergantung satu sama lain, satu aja gpp
    useHead({
        title: `${commentID} Hai`,
        htmlAttrs: {
            lang: 'en'
        },

        viewport: 'width=device-width, initial-scale=1',
        charset: 'utf-8',
        meta: [
            { name: 'description', content: 'My amazing site.' }
        ],
        link: [
            { 
                rel: 'stylesheet', 
                href: 'https://cdn.jsdelivr.net/npm/bootstrap@4.1.3/dist/css/bootstrap.min.css', 
                crossorigin: 'anonymous' 
            }
        ],
        script: [
            {
                src: 'https://code.jquery.com/jquery-3.6.1.min.js',
                integrity: 'sha256-o88AwQnZB+VDvE9tvIXrMQaPlFFSUTR+nldQm1LuPXQ=',
                crossorigin: 'anonymous'
            }
        ]
    })
</script>