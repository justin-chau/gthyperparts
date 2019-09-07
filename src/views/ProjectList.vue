<template>
    <div>
        <p class="title is-3">Project List</p>
        <p class="subtitle is-5">Welcome to GT HyperParts. Select a project to work on from below or create a new one.</p>
        <b-button class="is-primary" tag="router-link" :to="{ path: '/create-project' }">Create a New Project</b-button>
        <div v-for="project in projects" v-bind:key="project.id">
            <project-item 
                v-bind:project="project"
            ></project-item>
        </div>
    </div>
</template>

<script>
import db from '../components/firebaseInit'
import ProjectItem from '../components/ProjectItem'
export default {
    name: 'project-list',
    components: {
        ProjectItem
    },
    data () {
        return {
            projects: []
        }
    },
    created () {
        db.collection('projects').orderBy("project_id").get().then(querySnapshot => {
            querySnapshot.forEach(doc => {
                const data = {
                    'id': doc.id,
                    'project_id': doc.data().project_id,
                    'project_name': doc.data().project_name,
                    'num_of_assemblies': doc.data().num_of_assemblies,
                    'num_of_parts': doc.data().num_of_parts,
                    'project_status': doc.data().project_status
                }
                this.projects.push(data) 
            })
        })
    }
}
</script>

