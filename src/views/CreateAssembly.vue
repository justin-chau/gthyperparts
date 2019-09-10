<template>
    <div class="modal-card" style="width: auto">
        <header class="modal-card-head">
            <p class="modal-card-title">Create Assembly</p>
        </header>
        <section class="modal-card-body">
            <p class="subtitle is-5">Fill in the information below to create a new assembly in {{this.$route.params.project_id}}.</p>
            
            <b-field label="Assembly Identifier">
                <b-input disabled :placeholder="getNewAssemblyIdentifier"></b-input>
            </b-field>

            <b-field label="Assembly Name">
                <b-input></b-input>
            </b-field>

            <b-field label="Assembly Quantity">
                <b-input></b-input>
            </b-field>

            <b-field label="Assembly Status" style="width: auto">
                <b-select expanded placeholder="Select a status">
                    <option value="Design">Design</option>
                    <option value="Review">Review</option>
                    <option value="Manufacturing">Manufacturing</option>
                    <option value="Complete">Complete</option>
                </b-select>
            </b-field>

            <b-field label="Assembly Parent">
                <b-select expanded placeholder="Select an assembly">
                    <option>None</option>
                    <option v-for="assembly in getSortedAssemblies" v-bind:key="assembly.id">
                        {{assembly.assem_id}} - {{assembly.assem_name}}
                    </option>
                </b-select>
            </b-field>

            <b-field label="Assembly Assign">
                <b-select expanded placeholder="Select a user">
                    <option>None</option>
                    <option v-for="user in users.data" v-bind:key="user.id">
                        {{user.user_email}}
                    </option>
                </b-select>
            </b-field>

            <b-field label="Notes">
                <b-input maxlength="200" type="textarea"></b-input>
            </b-field>
        </section>
        <footer class="modal-card-foot">
            <b-button @click="$parent.close()">Close</b-button>
            <b-button @click="submitAssembly">Submit</b-button>
        </footer>
    </div>
</template>

<script>
import { mapState } from 'vuex'
import store from '../store/index'
export default {
    name: 'create-assembly',
    data() {
        return {
            assem_id: null,
            assem_name: null,
            assem_quantity: null,
            assem_status: null,
            assem_parent: null,
            assem_assign: null,
            assem_notes: null
        }
    },
    computed: {
        ...mapState(['assemblies', 'users', 'projects']),
        getSortedAssemblies: function() {
            return Object.values(this.$store.state.assemblies.data).filter(assem => assem.assem_project == this.$route.params.project_id)
        },
        getNewAssemblyIdentifier: function() {
            var project_id = this.$route.params.project_id
            var next_assem_id = Object.values(this.$store.state.projects.data).filter(project => project.project_id == this.$route.params.project_id)[0].project_num_assems
            this.assem_id = next_assem_id 
            var string_assem_id = ''
            if (next_assem_id.toString().length > 1) {
                string_assem_id = next_assem_id.toString()
            } else {
                string_assem_id = '0' + next_assem_id.toString()
            }
            return project_id + '-A-' + string_assem_id + '00'
        }
    },
    methods: {
        submitAssembly: function () {
            store.dispatch('assemblies/set', {
                assem_id: '0' + this.assem_id.toString(),
                assem_project: this.$route.params.project_id,
                assem_assign: 1,
                assem_name: 'Test'
            })
            store.dispatch('projects/set', {
                id: Object.values(this.$store.state.projects.data).filter(project => project.project_id == this.$route.params.project_id)[0].id,
                project_num_assems: this.assem_id + 1
            })
            this.$parent.close()
        }
    }
}
</script>

