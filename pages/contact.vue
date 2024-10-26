<template>
    <main class="ark-main-section">
        <section id="contact-form" class="ark-app-section">
            <ArkFrame legend="contact.form.legend">
                <div class="w-full grid sm:grid-cols-4 gap-3">
                    <form class="ark-form-scoped grid grid-cols-1 md:grid-cols-2 gap-3 w-full sm:col-span-3"
                        action="https://formsubmit.co/6362b0ef65fe09cc4fb75b32c6e69204" method="POST" enctype="multipart/form-data"
                        target="_blank" ref="contactForm">
                        <div>
                            <label for="email" class="mb-2 ark-form-label">{{ $t('contact.form.email')
                                }}</label>
                            <input type="email" id="email" name="email" class="ark-form-input"
                                placeholder="doctor@babel.com">
                        </div>
                        <div>
                            <label for="contact-type" class="mb-2 ark-form-label">{{ $t('contact.form.type')
                                }}<span class="text-red-600">*</span></label>
                            <select id="contact-type" name="contact type" class="ark-form-input" v-model="contactType"
                                required>
                                <option value="" disabled selected>{{ $t('contact.form.type_placeholder') }}</option>
                                <option v-for="i in 5" :key="i">{{ $t(`contact.form.types.${i}`) }}</option>
                            </select>
                        </div>
                        <div class="col-span-1 md:col-span-2">
                            <label for="message" class="mb-2 ark-form-label">{{ $t('contact.form.message')
                                }}<span class="text-red-600">*</span></label>
                            <textarea id="message" name="message" rows="9" required class="ark-form-input"
                                :placeholder="$t('contact.form.message_placeholder')"></textarea>
                        </div>
                        <div class="flex flex-col gap-1">
                            <label class="ark-form-label" for="attachment">{{ $t('contact.form.files')
                                }}</label>
                            <input class="shadow-md text-sm rounded-lg block w-full" aria-describedby="attachment_help"
                                id="attachment" name="attachment" type="file" :accept="acceptedFilyTypes">
                            <div class="text-sm opacity-50" id="attachment_help">{{ $t('contact.form.files_help')
                                }}</div>
                        </div>
                        <input type="hidden" name="_subject"
                            :value="`[${contactType.toUpperCase()}] New Message from Arkulator`">
                        <input type="text" name="_honey" style="display:none">
                        <input type="hidden" name="_template" value="table">
                        <div class="flex flex-col gap-1">
                            <label class="ark-form-label ark-invisible-text">none</label>
                            <button type="submit" @click.prevent="submitAndClear"
                                class="shadow-md text-sm rounded-lg block w-full p-3 bg-blue-ribbon-700 hover:bg-gray-300 hover:text-black ark-smooth-animation">{{
                                $t('contact.form.submit') }}</button>
                            <div class="text-sm ark-invisible-text">none</div>
                        </div>
                    </form>
                    <div id="contact-notice" class="border-l border-white pl-3">
                        <ul class="flex flex-col gap-2">
                            <li><span class="text-red-600">*</span> {{ $t('contact.notice.1') }}</li>
                            <li v-for="i in 4" :key="i">{{ $t(`contact.notice.${i + 1}`) }}</li>
                        </ul>
                    </div>
                </div>
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
const contactForm = ref('ark-form')

const submitAndClear = () => {
    contactForm.value.submit()
    contactForm.value.reset()
}
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

.ark-form-label {
    @apply block text-sm font-medium;
}

.ark-form-input {
    @apply shadow-sm text-sm rounded-lg block w-full p-2.5;
}
</style>