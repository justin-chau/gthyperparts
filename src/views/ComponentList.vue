<template>
    <div>
        <p class="title is-3">Component List</p>
        <p class="subtitle is-5">All Parts and Assemblies in {{this.$route.params.project_id}} ({{getProjectName}})</p>
        <div class="buttons">
            <b-button class="is-primary" tag="router-link" :to="{ name: 'create-assembly'}">Create a New Assembly</b-button>
            <b-button class="is-info" tag="router-link" :to="{ name: 'create-part' }">Create a New Part</b-button>
        </div>
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
import { mapState } from 'vuex'
import router from '../router'
export default {
    name: 'component-list',
    components: {
        PartItem,
        AssemblyItem
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
            router.push({path: '/'})
        }
    },
    beforeRouteUpdate(to, from, next) {
        //Checks if project exists, if not navigate home.
        var projectCheck = Object.values(this.$store.state.projects.data).filter(project => project.project_id == to.params.project_id)

        if (projectCheck === undefined || projectCheck.length == 0) {
            router.push({ name: 'project-list' })
        }
    }
}
</script>