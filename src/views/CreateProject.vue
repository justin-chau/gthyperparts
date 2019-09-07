<template>
    <div>
        <p class="title is-3">Create Project</p>
        <p class="subtitle is-5">
            Enter the information below to create a new project. 
            A four character alphaneumeric code is recomended for the 
            project identifer.
        </p>
        <div class="buttons">
            <b-button class="is-primary" @click="$router.go(-1)">Back</b-button>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'
import router from '../router'
export default {
    name: 'create-project'
}
</script>

