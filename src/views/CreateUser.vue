<template>
    <div>
        <p class="title is-3">Create User</p>
        <p class="subtitle is-5">
            Enter the information below to create a new user for GT HyperParts. 
        </p>
        <div class="buttons">
            <b-button class="is-primary" @click="$router.go(-1)">Back</b-button>
        </div>
    </div>
</template>

<script>
import router from '../router'
export default {
    name: 'create-user',
    data () {
        return {

        }
    }
}
</script>