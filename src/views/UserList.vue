<template>
    <div>
        <p class="title is-3">User List</p>
        <p class="subtitle is-5">
            View all the users of GT HyperParts below.
        </p>
        <div class="buttons">
            <b-button class="is-primary" @click="$router.go(-1)">Back</b-button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'user-list',
    data () {
        return {

        }
    }
}
</script>