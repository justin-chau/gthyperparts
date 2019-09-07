<template>
    <div>
        <p class="title is-3">Component List</p>
        <p class="subtitle is-5">{{project_id}} - {{project_name}}</p>
        <div class="buttons">
            <b-button class="is-primary" tag="router-link" :to="{ path: '/create-project' }">Create a New Assembly</b-button>
            <b-button class="is-info" tag="router-link" :to="{ path: '/create-project' }">Create a New Part</b-button>
        </div>

        <div v-for="assembly in assemblies" v-bind:key="assembly.assem_numeber">
            <assembly-item v-bind:assembly="assembly" v-bind:project_id="project_id"></assembly-item>
        </div>
        <div v-for="part in parts" v-bind:key="part.part_number">
            <part-item v-bind:part="part" v-bind:project_id="project_id" v-bind:users="users"></part-item>
        </div>
        
    </div>
</template>

<script>
import db from '../components/firebaseInit'
import PartItem from '../components/PartItem'
import AssemblyItem from '../components/AssemblyItem'
export default {
    name: 'component-list',
    components: {
        PartItem,
        AssemblyItem
    },
    data () {
        return {
            assemblies : [],
            parts: [],
            users: [],
            project_name: '',
            project_id: ''
        }
    },
    beforeRouteEnter(to, from, next) {
        var assemblies = []
        var parts = []
        var users = []
        db.collection('assemblies').where('project_id', '==', to.params.project_id).get()
        .then(querySnapshot => {
            querySnapshot.forEach(doc => {
                assemblies.push(doc.data())
            })
        })

        db.collection('parts').where('project_id', '==', to.params.project_id).get()
        .then(querySnapshot => {
            querySnapshot.forEach(doc => {
                parts.push(doc.data())
            })
        })

        db.collection('users').get()
        .then(querySnapshot => {
            querySnapshot.forEach(doc => {
                users.push(doc.data())
            })
        })

        db.collection('projects').where('project_id', '==', to.params.project_id).get()
        .then(querySnapshot => {
            querySnapshot.forEach(doc => {
                next(vm => {
                    vm.parts = parts
                    vm.assemblies = assemblies
                    vm.users = users
                    vm.project_name = doc.data().project_name
                    vm.project_id = doc.data().project_id
                })
            })
        })  
    },
}
</script>