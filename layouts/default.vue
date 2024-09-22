<template>
    <Html :lang="$t('lang')">

    <Head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
        <link rel="manifest" href="/site.webmanifest">

        <title>{{ $t('title') }}</title>

        <meta name="author" content="CDXX-LXIX">
        <meta name="description" :content="$t('description')">
        <meta name="keywords" :content="$t('keywords')">
    </Head>

    <Body>
        <slot />
    </Body>

    </Html>
</template>

<script setup>

</script>