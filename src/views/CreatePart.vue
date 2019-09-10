<template>
    <div class="modal-card" style="width: auto">
        <header class="modal-card-head">
            <p class="modal-card-title">Create Part</p>
        </header>
        <section class="modal-card-body">
            <p class="subtitle is-5">Fill in the information below to create a new part in {{this.$route.params.project_id}}.</p>
            <b-field label="Part Name">
                <b-input></b-input>
            </b-field>

            <b-field label="Part Quantity">
                <b-input></b-input>
            </b-field>

            <b-field label="Part Status" style="width: auto">
                <b-select expanded placeholder="Select a status">
                    <option value="Design">Design</option>
                    <option value="Review">Review</option>
                    <option value="Manufacturing">Manufacturing</option>
                    <option value="Complete">Complete</option>
                </b-select>
            </b-field>

            <b-field label="Part Parent">
                <b-select expanded placeholder="Select an assembly">
                    <option v-for="assembly in getSortedAssemblies" v-bind:key="assembly.id">
                        {{assembly.assem_id}} - {{assembly.assem_name}}
                    </option>
                </b-select>
            </b-field>

            <b-field label="Part Assign">
                <b-select expanded placeholder="Select a user">
                    <option v-for="user in users.data" v-bind:key="user.id">
                        {{user.user_name}} - {{user.user_email}}
                    </option>
                </b-select>
            </b-field>

            <b-field label="Notes">
                <b-input maxlength="200" type="textarea"></b-input>
            </b-field>
        </section>
        <footer class="modal-card-foot">
            <b-button @click="$parent.close()">Close</b-button>
            <b-button @click="$parent.close()">Submit</b-button>
        </footer>
    </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
    name: 'create-part',
    computed: {
        ...mapState(['assemblies', 'users']),
        getSortedAssemblies: function() {
            return Object.values(this.$store.state.assemblies.data).filter(assem => assem.assem_project == this.$route.params.project_id)
        }
    }
}
</script>

