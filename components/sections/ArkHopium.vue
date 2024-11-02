<template>
    <ArkFrame legend="hopium.header">
        <ArkFrameHelp description="hopium.subtext" :isbutton="false" modalid="hopium-help" />
        <ul class="text-white list-disc w-full pl-12">
            <li v-for="i in 7" :key="i">{{ $t(`hopium.${i}`) }}</li>
        </ul>
    </ArkFrame>
</template>