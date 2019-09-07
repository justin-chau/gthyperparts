<template>
    <div>
        <p class="title is-3">Project List</p>
        <p class="subtitle is-5">Welcome to GT HyperParts. Select a project to work on from below or create a new one.</p>
        <b-button class="is-primary" tag="router-link" :to="{ name:'create-project' }">Create a New Project</b-button>
        <div v-for="project in projects.data" v-bind:key="project.id">
            <project-item 
                v-bind:project="project"
            ></project-item>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'
import ProjectItem from '../components/ProjectItem'

export default {
    name: 'project-list',
    components: {
        ProjectItem
    },
    computed: mapState([
        'projects',
    ])
}
</script>

