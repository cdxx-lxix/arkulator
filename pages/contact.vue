<template>
    <main class="ark-main-section">
        <section id="contact-form" class="ark-app-section">
            <ArkFrame legend="contact.form.legend">
                <form class="ark-form-scoped grid grid-cols-2 gap-3" action="https://formsubmit.co/your@email.com"
                    method="POST" enctype="multipart/form-data" target="_blank">
                    <div>
                        <label for="email" class="block mb-2 text-sm font-medium">{{ $t('contact.form.email') }}</label>
                        <input type="email" id="email" name="email"
                            class="shadow-sm text-sm rounded-lg block w-full p-2.5 dark:shadow-sm-light"
                            placeholder="doctor@babel.com" required>
                    </div>
                    <div>
                        <label for="contact-type" class="block mb-2 text-sm font-medium">{{ $t('contact.form.type')
                            }}</label>
                        <select id="contact-type" name="contact type" class="text-sm rounded-lg block w-full p-2.5"
                            v-model="contactType">
                            <option v-for="i in 4" :key="i">{{ $t(`contact.form.types.${i}`) }}</option>
                        </select>
                    </div>
                    <div class="col-span-2">
                        <label for="message" class="block mb-2 text-sm font-medium">{{ $t('contact.form.message')
                            }}</label>
                        <textarea id="message" name="message" rows="9"
                            class="block p-2.5 w-full text-sm rounded-lg dark:shadow-sm-light"
                            :placeholder="$t('contact.form.message_placeholder')"></textarea>
                    </div>
                    <div>
                        <label class="block mb-2 text-sm font-medium" for="additional-files">{{ $t('contact.form.files')
                            }}</label>
                        <input class="shadow-sm text-sm rounded-lg block w-full"
                            aria-describedby="additional-files_help" id="additional-files" name="attachment" type="file"
                            :accept="acceptedFilyTypes">
                        <div class="mt-1 text-sm opacity-50" id="additional-files_help">{{ $t('contact.form.files_help')
                            }}</div>
                    </div>
                    <input type="hidden" name="_subject" :value="`[${contactType.toUpperCase()}] New Message from Arkulator`">
                    <input type="text" name="_honey" style="display:none">
                    <input type="hidden" name="_template" value="table">
                    <button type="submit"
                        class="font-semibold rounded-lg text-md px-5 py-2.5 text-center bg-blue-ribbon-700 hover:bg-gray-300 hover:text-black ark-smooth-animation">{{
                            $t('contact.form.submit') }}</button>
                </form>
            </ArkFrame>
        </section>
        <section id="contact-options" class="ark-app-section">
            <ArkFrame legend="Form">
                <div>
                    div
                </div>
            </ArkFrame>
        </section>
    </main>
</template>

<script setup>
const acceptedFilyTypes = "image/*, .pdf"
const contactType = ref('')
</script>

<style scoped>
.ark-form-scoped input[type='file']::file-selector-button {
    @apply border bg-blue-ribbon-700 text-gray-300 border-blue-ribbon-700 hover:bg-gray-300 hover:text-black p-3 rounded-l-md mr-2 cursor-pointer font-semibold ark-smooth-animation;
}

input,
select,
textarea {
    @apply bg-gray-600 text-gray-300 border-gray-600 outline-none;
}
</style>