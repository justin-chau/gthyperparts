<template>
    <div>
        <p class="title is-3">Create Assembly</p>
        <p class="subtitle is-5">Fill in the information below to create a new assembly in {{this.$route.params.project_id}}.</p>
        <div class="buttons">
            <b-button class="is-primary" @click="$router.go(-1)">Back</b-button>
        </div>

        <section>
            <b-field label="Assembly Name">
                <b-input></b-input>
            </b-field>

            <b-field label="Assembly Quantity">
                <b-input></b-input>
            </b-field>

            <b-field label="Assembly Status">
                <b-select placeholder="Select a subject">
                    <option value="Design">Design</option>
                    <option value="Review">Review</option>
                    <option value="Manufacturing">Manufacturing</option>
                    <option value="Complete">Complete</option>
                </b-select>
            </b-field>

            <b-field label="Assembly Parent">
                <b-select placeholder="Select an assembly">
                    <option v-for="assembly in getSortedAssemblies" v-bind:key="assembly.id">
                        {{assembly.assem_id}} - {{assembly.assem_name}}
                    </option>
                </b-select>
            </b-field>

            <b-field label="Assembly Assign">
                <b-select placeholder="Select a user">
                    <option v-for="user in users.data" v-bind:key="user.id">
                        {{user.user_name}} - {{user.user_email}}
                    </option>
                </b-select>
            </b-field>
        </section>
    </div>
</template>

<script>
import router from '../router'
import { mapState } from 'vuex'
export default {
    name: 'create-assembly',
    computed: {
        ...mapState(['assemblies', 'users']),
        getSortedAssemblies: function() {
            return Object.values(this.$store.state.assemblies.data).filter(assem => assem.assem_project == this.$route.params.project_id)
        }
    }
}
</script>

