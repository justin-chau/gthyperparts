<template>
    <router-link v-bind:to="{name: 'component-list', params: {project_id: project.project_id}}">
        <div class="card has-background-primary">
        <div class="card-content">
            <p class="title is-1 has-text-white">{{project.project_id}}</p>
            <p class="subtitle is-6 has-text-white">{{project.project_name}}</p>
                <b-field grouped group-multiline>
                    <div class="control">
                        <b-taglist attached>
                            <b-tag rounded type="is-white">Status</b-tag>
                            <b-tag rounded type="is-info">{{project.project_status}}</b-tag>
                        </b-taglist>
                    </div>

                    <div class="control">
                        <b-taglist attached>
                            <b-tag rounded type="is-white">Assemblies</b-tag>
                            <b-tag rounded type="is-info">{{project.project_num_assems}}</b-tag>
                        </b-taglist>
                    </div>

                    <div class="control">
                        <b-taglist attached>
                            <b-tag rounded type="is-white">Parts</b-tag>
                            <b-tag rounded type="is-info">{{project.project_num_parts}}</b-tag>
                        </b-taglist>
                    </div>
                </b-field>
            </div>
        </div>
    </router-link>
</template>

<script>
export default {
    name: 'project-item',
    props: ["project"]
}
</script>

<style scoped>
    .card {
        margin-top: 20px;
        margin-bottom: 20px;
    }
</style>
