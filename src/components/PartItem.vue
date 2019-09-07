<template>
    <div class="card">
        <div class="card-content">
            <div class="columns">
                <div class="column is-10">
                    <p class="title is-4">{{part.part_project}}-P-{{part.part_parent}}{{part.part_id}}</p>
                    <p class="subtitle is-6">{{part.part_name}}</p>
                    <b-field grouped group-multiline>
                        <div class="control">
                            <b-taglist attached>
                                <b-tag rounded type="is-dark">Status</b-tag>
                                <b-tag rounded type="is-info">{{part.part_status}}</b-tag>
                            </b-taglist>
                        </div>

                        <div class="control">
                            <b-taglist attached>
                                <b-tag rounded type="is-dark">Quantity</b-tag>
                                <b-tag rounded type="is-info">{{part.part_quantity}}</b-tag>
                            </b-taglist>
                        </div>

                        <div class="control">
                            <b-taglist attached>
                                <b-tag rounded type="is-dark">Parent</b-tag>
                                <b-tag rounded type="is-info">{{getParent}}</b-tag>
                            </b-taglist>
                        </div>

                        <div class="control">
                            <b-taglist attached>
                                <b-tag rounded type="is-dark">Assigned</b-tag>
                                <b-tag rounded type="is-info">{{getAssignedUser}}</b-tag>
                            </b-taglist>
                        </div>

                        
                    </b-field>
                </div>
                <div class="column">
                    <div class="buttons move-right">
                        <b-button type="is-white">Edit</b-button>
                        <b-button type="is-info">View</b-button>
                    </div>   
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "part-item",
    props: ["part"],
    computed: {
        getAssignedUser: function() {
            return Object.values(this.$store.state.users.data).filter(user => user.user_id == this.part.part_assign)[0].user_name
        },
        getParent: function(){
            if(this.part.part_parent == 'none'){
                return 'None'
            } else {
                return this.part.part_project + '-A-' + this.part.part_parent + '00'
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