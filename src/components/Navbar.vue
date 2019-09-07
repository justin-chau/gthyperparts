<template>
    <b-navbar>
        <template slot="brand">
            <b-navbar-item tag="router-link" :to="{ path: '/' }">
                <p class="title is-6">GT HyperParts</p>
            </b-navbar-item>
        </template>

        <template slot="start">
            <b-navbar-dropdown hoverable label="Projects">
                <b-navbar-item tag="router-link" :to="{ path: '/' }">
                    Project List
                </b-navbar-item>
                <b-navbar-item tag="router-link" :to="{ path: '/create-project' }">
                    Create Project
                </b-navbar-item>
            </b-navbar-dropdown>

            <b-navbar-dropdown hoverable label="Admin">
                <b-navbar-item tag="router-link" :to="{ path: '/user-list' }">
                    User List
                </b-navbar-item>
                <b-navbar-item tag="router-link" :to="{ path: '/create-user' }">
                    Create User
                </b-navbar-item>
            </b-navbar-dropdown>
        </template>

        <template slot="end">
            <b-navbar-item tag="div">
                <div class="buttons">
                    <b-button type="is-primary" tag="router-link" :to="{ path: '/' }">
                        Login
                    </b-button>
                    <b-button type="is-info" tag="router-link" :to="{ path: '/' }">
                        Sign Up
                    </b-button>
                </div>
            </b-navbar-item>
        </template>
    </b-navbar>
</template>