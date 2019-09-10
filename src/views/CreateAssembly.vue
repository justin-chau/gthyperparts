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
                <b-input v-model="assem_name" placeholder="Enter a name"></b-input>
            </b-field>

            <b-field label="Assembly Quantity">
                <b-input v-model="assem_quantity" placeholder="Enter a quantity"></b-input>
            </b-field>

            <b-field label="Assembly Status" style="width: auto">
                <b-select v-model="assem_status" expanded placeholder="Select a status">
                    <option value="Design">Design</option>
                    <option value="Review">Review</option>
                    <option value="Manufacturing">Manufacturing</option>
                    <option value="Complete">Complete</option>
                </b-select>
            </b-field>

            <b-field label="Assembly Parent">
                <b-select v-model="assem_parent" expanded placeholder="Select an assembly">
                    <option value='none'>None</option>
                    <option :value="assembly.assem_id" v-for="assembly in getSortedAssemblies" v-bind:key="assembly.id">
                        {{assembly.assem_id}} - {{assembly.assem_name}}
                    </option>
                </b-select>
            </b-field>

            <b-field label="Assembly Assign">
                <b-select v-model="assem_assign" expanded placeholder="Select a user">
                    <option value='none'>None</option>
                    <option :value="user.user_id" v-for="user in users.data" v-bind:key="user.id">
                        {{user.user_name}} - {{user.user_email}}
                    </option>
                </b-select>
            </b-field>

            <b-field label="Notes">
                <b-input v-model="assem_notes" maxlength="200" type="textarea"></b-input>
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
import { increment } from 'vuex-easy-firestore';
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
            if (next_assem_id.toString().length > 1) {
                return project_id + '-A-' + next_assem_id + '00'
            } else {
                return project_id + '-A-' + '0' + next_assem_id + '00'
            }
            
        }
    },
    methods: {
        submitAssembly: function () {
            store.dispatch('assemblies/set', {
                assem_id: this.assem_id,
                assem_project: this.$route.params.project_id,
                assem_assign: this.assem_assign,
                assem_name: this.assem_name,
                assem_status: this.assem_status,
                assem_parent: this.assem_parent,
                assem_notes: this.assem_notes,
                assem_quantity: this.assem_quantity
            })
            store.dispatch('projects/set', {
                id: Object.values(this.$store.state.projects.data).filter(project => project.project_id == this.$route.params.project_id)[0].id,
                project_num_assems: increment(1)
            })
            this.$parent.close()
        }
    }
}
</script>

