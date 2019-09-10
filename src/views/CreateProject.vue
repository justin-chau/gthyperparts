<template>
    <div class="modal-card" style="width: auto">
        <header class="modal-card-head">
            <p class="modal-card-title">Create Project</p>
        </header>
        <section class="modal-card-body">
            <p class="subtitle is-5">Fill in the information below to create a new project.</p>
            <b-field label="Project Name">
                <b-input></b-input>
            </b-field>

            <b-field label="Project Identifier (4 Characters)">
                <b-input></b-input>
            </b-field>

            <b-field label="Project Status" style="width: auto">
                <b-select expanded placeholder="Select a subject">
                    <option value="Design">Design</option>
                    <option value="Review">Review</option>
                    <option value="Manufacturing">Manufacturing</option>
                    <option value="Complete">Complete</option>
                </b-select>
            </b-field>

        </section>
        <footer class="modal-card-foot">
            <b-button @click="$parent.close()">Close</b-button>
            <b-button @click="$parent.close()">Submit</b-button>
        </footer>
    </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
    name: 'create-project'
}
</script>

