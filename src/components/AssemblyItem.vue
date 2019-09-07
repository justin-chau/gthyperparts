<template>
    <div class="card has-background-primary">
        <div class="card-content">
            <div class="columns">
                <div class="column is-10">
                    <p class="title is-4 has-text-white">{{project_id}}-A-{{assembly.assem_id}}00</p>
                    <p class="subtitle is-6 has-text-white">{{assembly.assem_name}}</p>
                    <b-field grouped group-multiline>
                        <div class="control">
                            <b-taglist attached>
                                <b-tag rounded type="is-white">Status</b-tag>
                                <b-tag rounded type="is-info">{{assembly.assem_status}}</b-tag>
                            </b-taglist>
                            
                        </div>
                        <div class="control">
                            <b-taglist attached>
                                <b-tag rounded type="is-white">Parent</b-tag>
                                <b-tag rounded type="is-info">{{assembly.parent_assem | handleNone(project_id)}}</b-tag>
                            </b-taglist>
                            
                        </div>
                        
                    </b-field>
                </div>
                <div class="column">
                    <div class="buttons move-right">
                        <b-button type="is-primary">Edit</b-button>
                        <b-button type="is-info">View</b-button>
                    </div>   
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "assembly-item",
    props: ["assembly", "project_id"],
    filters: {
        handleNone: function(parent, project_id){
            if(parent == 'none'){
                return 'None'
            } else {
                return project_id + '-A-' + parent + '00'
            }
        }
    }
}
</script>

<style scoped>
    .card {
        margin-top: 20px;
        margin-bottom: 20px;
    }

    @media only screen and (min-width: 768px){
        .move-right {
            float: right;
        }
    }
</style>