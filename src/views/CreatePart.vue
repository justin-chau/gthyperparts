<template>
    <div class="modal-card" style="width: auto">
        <header class="modal-card-head">
            <p class="modal-card-title">Create Part</p>
        </header>
        <section class="modal-card-body">
            <p class="subtitle is-5">Fill in the information below to create a new part in {{this.$route.params.project_id}}.</p>
            <b-field label="Part Identifier">
                <b-input disabled :placeholder="getNewPartIdentifier"></b-input>
            </b-field>
            
            <b-field label="Part Name">
                <b-input v-model="part_name"></b-input>
            </b-field>

            <b-field label="Part Quantity">
                <b-input v-model="part_quantity" placeholder="Enter a quantity"></b-input>
            </b-field>

            <b-field label="Part Status" style="width: auto">
                <b-select v-model="part_status" expanded placeholder="Select a status">
                    <option value="Design">Design</option>
                    <option value="Review">Review</option>
                    <option value="Manufacturing">Manufacturing</option>
                    <option value="Complete">Complete</option>
                </b-select>
            </b-field>

            <b-field label="Part Parent">
                <b-select v-model="part_parent" expanded placeholder="Select an assembly">
                    <option :value="assembly.assem_id" v-for="assembly in getSortedAssemblies" v-bind:key="assembly.id">
                        {{assembly.assem_id}} - {{assembly.assem_name}}
                    </option>
                </b-select>
            </b-field>

            <b-field label="Part Assign">
                <b-select v-model="part_assign" expanded placeholder="Select a user">
                    <option value='none'>None</option>
                    <option :value="user.user_id" v-for="user in users.data" v-bind:key="user.id">
                        {{user.user_name}} - {{user.user_email}}
                    </option>
                </b-select>
            </b-field>

            <b-field label="Notes">
                <b-input v-model="part_notes" maxlength="200" type="textarea"></b-input>
            </b-field>

        </section>
        <footer class="modal-card-foot">
            <b-button @click="$parent.close()">Close</b-button>
            <b-button @click="submitPart">Submit</b-button>
        </footer>
    </div>
</template>

<script>
import { mapState } from 'vuex'
import { increment } from 'vuex-easy-firestore'
import store from '../store/index'
export default {
    name: 'create-part',
    data() {
        return {
            part_id: null,
            part_name: null,
            part_quantity: null,
            part_status: null,
            part_parent: null,
            part_assign: null,
            part_notes: null
        }
    },
    computed: {
        ...mapState(['assemblies', 'users']),
        getSortedAssemblies: function() {
            return Object.values(this.$store.state.assemblies.data).filter(assem => assem.assem_project == this.$route.params.project_id)
        },
        getNewPartIdentifier: function() {
            var project_id = this.$route.params.project_id
            if (this.part_parent == null) {
                return 'Select a parent to view part identifier.'
            } else {
                var current_num_parts = Object.values(this.$store.state.assemblies.data).filter(assembly => assembly.assem_id == this.part_parent)[0].assem_num_parts
                this.part_id = current_num_parts + 1
                if (this.part_id.toString().length > 1) {
                    return project_id + '-A-' + this.part_id + '00'
                } else {
                    return project_id + '-A-' + '0' + this.part_id + '00'
                }
            }
            
            
        }
    },
    methods: {
        submitPart: function () {
            store.dispatch('parts/set', {
                part_id: this.part_id,
                part_project: this.$route.params.project_id,
                part_assign: this.part_assign,
                part_name: this.part_name,
                part_status: this.part_status,
                part_parent: this.part_parent,
                part_notes: this.part_notes,
                part_quantity: this.part_quantity
            })
            store.dispatch('projects/set', {
                id: Object.values(this.$store.state.projects.data).filter(project => project.project_id == this.$route.params.project_id)[0].id,
                project_num_parts: increment(1)
            })
            this.$parent.close()
        }
    }
}
</script>

