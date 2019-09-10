<template>
    <div>
        <p class="title is-3">Project List</p>
        <p class="subtitle is-5">Welcome to GT HyperParts. Select a project to work on from below or create a new one.</p>
        <div class="buttons">
            <b-button class="is-primary"
                @click="isProjectModalActive = true">
                Create a New Project
            </b-button>
        </div>
        <b-modal :active.sync="isProjectModalActive" has-modal-card>
            <create-project></create-project>
        </b-modal>
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
import CreateProject from './CreateProject'

export default {
    name: 'project-list',
    components: {
        ProjectItem,
        CreateProject
    },
    data() {
        return {
            isProjectModalActive: false,
        }
    },
    computed: mapState([
        'projects',
    ])
}
</script>

