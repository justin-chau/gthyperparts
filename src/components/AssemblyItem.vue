<template>
    <div class="card has-background-primary">
        <div class="card-content">
            <div class="columns">
                <div class="column is-10">
                    <p class="title is-4 has-text-white">{{getAssemblyIdentifier}}</p>
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
                                <b-tag rounded type="is-white">Quantity</b-tag>
                                <b-tag rounded type="is-info">{{assembly.assem_quantity}}</b-tag>
                            </b-taglist>
                        </div>
                        <div class="control">
                            <b-taglist attached>
                                <b-tag rounded type="is-white">Parent</b-tag>
                                <b-tag rounded type="is-info">{{getParent}}</b-tag>
                            </b-taglist>
                        </div>
                        <div class="control">
                            <b-taglist attached>
                                <b-tag rounded type="is-white">Assigned</b-tag>
                                <b-tag rounded type="is-info">{{getAssignedUser}}</b-tag>
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
    props: ["assembly"],
    computed: {
        getAssignedUser: function() {
            if(this.assembly.assem_assign == 'none'){
                return 'None'
            } else {
                return Object.values(this.$store.state.users.data).filter(user => user.user_id == this.assembly.assem_assign)[0].user_name
            }
        },
        getParent: function() {
            if (this.assembly.assem_parent == 'none'){
                return 'None'
            } else {
                if (this.assembly.assem_parent.toString().length > 1) {
                    return this.assembly.assem_project + '-A-' + this.assembly.assem_parent + '00'
                } else {
                    return this.assembly.assem_project + '-A-' + '0' + this.assembly.assem_parent + '00'
                }       
            }
        },
        getAssemblyIdentifier: function() {
            if (this.assembly.assem_id.toString().length > 1) {
                return this.assembly.assem_project + '-A-' + this.assembly.assem_id + '00'
            } else {
                return this.assembly.assem_project + '-A-' + '0' + this.assembly.assem_id + '00'
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