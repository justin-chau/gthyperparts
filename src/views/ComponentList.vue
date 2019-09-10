<template>
    <div>
        <p class="title is-3">Component List</p>
        <p class="subtitle is-5">All Parts and Assemblies in {{this.$route.params.project_id}} ({{getProjectName}})</p>
        <div class="buttons">
            <b-button class="is-primary"
                @click="isAssemblyModalActive = true">
                Create Assembly
            </b-button>
            <b-button class="is-info"
                @click="isPartModalActive = true">
                Create Part
            </b-button>
        </div>
        <b-modal :active.sync="isAssemblyModalActive" has-modal-card>
            <create-assembly></create-assembly>
        </b-modal>
        <b-modal :active.sync="isPartModalActive" has-modal-card>
            <create-part></create-part>
        </b-modal>
        <div v-for="assembly in getSortedAssemblies" v-bind:key="assembly.id">
            <assembly-item v-bind:assembly="assembly"></assembly-item>
        </div>
        <div v-for="part in getSortedParts" v-bind:key="part.id">
            <part-item v-bind:part="part"></part-item>
        </div>
    </div>
</template>

<script>
import AssemblyItem from '../components/AssemblyItem'
import PartItem from '../components/PartItem'
import CreateAssembly from './CreateAssembly'
import CreatePart from './CreatePart'
import { mapState } from 'vuex'
import router from '../router'
export default {
    name: 'component-list',
    components: {
        PartItem,
        AssemblyItem,
        CreateAssembly,
        CreatePart
    },
    data() {
        return {
            isAssemblyModalActive: false,
            isPartModalActive: false
        }
    },
    computed: {
        ...mapState(['assemblies', 'parts']),
        getSortedAssemblies: function() {
            return Object.values(this.$store.state.assemblies.data).filter(assem => assem.assem_project == this.$route.params.project_id)
        },
        getSortedParts: function() {
            return Object.values(this.$store.state.parts.data).filter(part => part.part_project == this.$route.params.project_id)
        },
        getProjectName: function() {
            return Object.values(this.$store.state.projects.data).filter(project => project.project_id == this.$route.params.project_id)[0].project_name
        }
    },
    created() {
        //Checks if project exists, if not navigate home.
        var projectCheck = Object.values(this.$store.state.projects.data).filter(project => project.project_id == this.$route.params.project_id)

        if (projectCheck === undefined || projectCheck.length == 0) {
            router.push({ name: 'project-list' })
        }
    },
    beforeRouteUpdate(to, from, next) {
        //Checks if project exists, if not navigate home.
        var projectCheck = Object.values(this.$store.state.projects.data).filter(project => project.project_id == to.params.project_id)

        if (projectCheck === undefined || projectCheck.length == 0) {
            router.push({ name: 'project-list' })
        } else {
            next()
        }
    }
}
</script>