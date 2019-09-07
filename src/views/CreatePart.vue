<template>
    <div>
        <p class="title is-3">Create Part</p>
        <p class="subtitle is-5">Fill in the information below to create a new part in...</p>
        <div class="buttons">
            <b-button class="is-primary" @click="$router.go(-1)">Back</b-button>
        </div>
    </div>
</template>

<script>
import router from '../router'
export default {
    name: 'create-part',
    data () {
        return {

        }
    }
}
</script>

