<template>
    <div
        class="h-full w-full grid grid-cols-12 items-start justify-start border-solid rounded-se-3xl border-gray-500 border-[20px] bg-yellow-300">
        <div class="text-transparent">
            nuffin
        </div>

        <div class="flex col-span-4 items-start justify-start h-full bg-gray-950 text-white">
            <h1 class="text-6xl pt-10 mx-auto text-left">
                Arkulator
            </h1>
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" class="w-full h-full fill-white" viewBox="0 0 131.3 137.4"
                    xml:space="preserve">
                    <path
                        d="M.2 70.4h6v12.4h-6zm62.6 0h46.9v12.4H62.8zm-34.088 67.078v-33.9h12.4v33.9zm.033-90.533V.045h12.4v46.9z" />
                    <path
                        d="M43.7 28.7C63.3 32.5 78.5 48.3 81.6 68h8.9c-3.3-24.7-22.4-44.3-46.8-48.3zm37.4 57c-4 18.5-18.8 33-37.4 36.7v9c23.5-3.9 42.2-22.3 46.4-45.7zM0 108.6v11.8c7.4 5.7 16.3 9.6 26 11.1v-9c-10.1-1.7-19.1-6.7-26-13.9m.3-78.2v11.7C7.1 35.2 16.1 30.3 26 28.5v-9C16.5 21 7.7 24.8.3 30.4" />
                    <g />
                </svg>
            </div>
        </div>
        <div class="absolute bottom-40 left-[38%]">
            <svg class="fill-white w-24 h-24" viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.932 1.248a.5.5 0 0 0-.864 0l-7 12A.5.5 0 0 0 .5 14h14a.5.5 0 0 0 .432-.752z" />
            </svg>
        </div>

        <div class="flex col-span-6 items-start justify-start pl-2 h-full">
            <div class="flex flex-col justify-between h-full text-black">
                <div>
                    <h1 class="text-6xl pt-10 mx-auto text-left">
                        Calculation Service
                    </h1>
                    <h6 class="text-2xl pl-2 text-left">
                        {{ $t('nuxtSiteConfig.description') }}
                    </h6>
                </div>

                <div class="flex flex-row items-end w-full justify-end">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-16 h-16 fill-blue-700" viewBox="0 0 448 448">
                        <path d="M32 636.362h384v384H32z" transform="translate(0 -604.362)" />
                    </svg>
                    <svg v-for="i in 6" :key="i" xmlns="http://www.w3.org/2000/svg" class="w-16 h-16"
                        viewBox="0 0 28.046 28.046" xml:space="preserve">
                        <path
                            d="M0 4.877h3.161v18.292H0zm20.631 0h3.165v18.292h-3.165zm-15.49 0H6.72v18.292H5.141zm9.854 0h1.581v18.292h-1.581zm2.771 0h1.576v18.292h-1.576zm6.72 0h1.584v18.292h-1.584zm2.769 0h.791v18.292h-.791zm-18.49 0h4.746v18.292H8.765z" />
                    </svg>
                </div>
            </div>
        </div>

        <div class="text-transparent">
            nuffin
        </div>
    </div>
</template>

<script setup lang="ts">
// withDefaults(defineProps<{
//     title?: string
// }>(), {
//     title: 'title',
// })
</script>