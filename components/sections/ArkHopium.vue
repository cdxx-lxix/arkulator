<template>
    <ArkFrame legend="hopium.header">
        <ArkFrameHelp description="hopium.subtext" :isbutton="false" modalid="hopium-help" />
        <ul class="text-white list-disc w-full pl-12">
            <li>{{ $t('hopium.textone') }}</li>
            <li>{{ $t('hopium.texttwo') }}</li>
            <li>{{ $t('hopium.textthree') }}</li>
            <li>{{ $t('hopium.textfour') }}</li>
            <li>{{ $t('hopium.textfive') }}</li>
            <li>{{ $t('hopium.textsix') }}</li>
        </ul>
    </ArkFrame>
</template>