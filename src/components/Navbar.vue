<template>
    <b-navbar class="is-fixed-top">
        <template slot="brand">
            <b-navbar-item tag="router-link" :to="{ name: 'project-list' }">
                <p class="title is-6">GT HyperParts</p>
            </b-navbar-item>
        </template>

        <template slot="start">
            <b-navbar-item tag="router-link" :to="{ name: 'project-list' }">
                Project List
            </b-navbar-item>

            <b-navbar-dropdown hoverable label="Admin">
                <b-navbar-item tag="router-link" :to="{ name: 'user-list' }">
                    User List
                </b-navbar-item>
                <b-navbar-item tag="router-link" :to="{ name: 'create-user' }">
                    Create User
                </b-navbar-item>
            </b-navbar-dropdown>
        </template>

        <template slot="end">
            <b-navbar-item tag="div">
                <div class="buttons">
                    <b-button type="is-primary" tag="router-link" :to="{ name: 'project-list' }">
                        Login
                    </b-button>
                    <b-button type="is-info" tag="router-link" :to="{ name: 'project-list' }">
                        Sign Up
                    </b-button>
                </div>
            </b-navbar-item>
        </template>
    </b-navbar>
</template>