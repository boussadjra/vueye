
<script setup lang="ts">
import textFieldProps from '~/components/core/inputs/VTextField/textFieldProps'
useHead({
    title: 'Buttons',
})
const email = ref('')
const variantEmail = computed(() => {
    if (email.value == '')
        return {
            variant: 'default',
            message: ''
        }
    else if (email.value.length < 5)
        return {
            variant: 'warning',
            message: 'Email is too short'
        }
    else if (!email.value.includes('@'))
        return {
            variant: 'error',
            message: 'Email is not valid'
        }
    else
        return {
            variant: 'success',
            message: 'Email is valid'
        }


})


const showPwd = ref(false)
const pwd = ref('')

</script> 
<template>
    <ComponentsDemo title="Text fields">
        <ComponentsDemoItem title="Variants">
            <div class="flex flex-wrap gap-4">
                <VTextField label="User name :" />
                <VTextField variant="primary" label="User name :" />
                <VTextField variant="secondary" label="User name :" />
                <VTextField variant="info" label="User name :" />
                <VTextField variant="success" label="User name :" />
                <VTextField variant="warning" label="User name :" />
                <VTextField variant="error" label="User name :" />
            </div>
        </ComponentsDemoItem>
        <ComponentsDemoItem title="Bound value with different status">
            <div class="flex flex-col flex-wrap w-96 ">
                <VTextField label="Email :" block v-model="email" :variant="variantEmail.variant"
                    :hint="variantEmail.message" />
            </div>
        </ComponentsDemoItem>
        <ComponentsDemoItem title="Prepend and append icons">
            <div class="flex flex-wrap gap-4 ">
                <VTextField label="Password :" type="password" prepend="i-carbon-password" />
                <VTextField label="Website :" type="website" prepend="i-carbon-link" />
                <VTextField label="Website :" type="website" variant="success" append="i-carbon-checkmark" />
                <VTextField v-model="pwd" label="Password :" :type="showPwd ? 'text' : 'password'"
                    prepend="i-carbon-password" @append-click="showPwd = !showPwd"
                    :append="showPwd ? 'i-carbon-view' : 'i-carbon-view-off'" />

            </div>
        </ComponentsDemoItem>
        <ComponentsDemoItem title="Different input types">
            <div class="flex flex-wrap gap-4 ">
                <VTextField label="Percentage :" type="number" append="i-carbon-percentage" />
                <VTextField label="Color :" type="color" append="i-carbon-color-palette" />
                <VTextField label="Date :" type="date" />
                <VTextField label="Time :" type="time" />

            </div>
        </ComponentsDemoItem>
        <ComponentsDemoItem title="Text area">
            <div class="flex flex-wrap gap-4 w-96">
                <VTextField label="Description" tag="textarea" block />


            </div>
        </ComponentsDemoItem>
        <ComponentsDemoItem title="Full example">
            <div class="flex flex-wrap max-w-xl gap-4 not-prose">
                <VCard block>
                    <template #header>
                        <div class="flex justify-center">
                            <h1 class="text-xl">Login</h1>
                        </div>

                    </template>
                    <div class="grid gap-4 place-content-center ">
                        <VTextField label="User name" prepend="i-carbon-user" block/>
                     <VTextField block v-model="pwd" label="Password :" :type="showPwd ? 'text' : 'password'"
                    prepend="i-carbon-locked" @append-click="showPwd = !showPwd"
                    :append="showPwd ? 'i-carbon-view' : 'i-carbon-view-off'" />

              
                        <VBtn variant="primary" block>
                            Login
                        </VBtn>
                    </div>
                    <template #footer>
                        <div class="flex flex-col items-center text-xs">
                       
                                <p><router-link to="/" class="!text-blue-500">Forgot password?</router-link></p>
                                <p >
                                    Don't have an account? <router-link to="/" class="!text-blue-500">Sign up</router-link>
                                </p>
                                
                     
                        </div>

                    </template>
                </VCard>


            </div>
        </ComponentsDemoItem>

    </ComponentsDemo>
    <PropsDoc :component-props="textFieldProps" />
</template>

<route lang="yaml">
meta:
  layout: dashboard
</route>