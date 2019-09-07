import Vue from 'vue'
import Router from 'vue-router'
import ProjectList from './views/ProjectList'
import CreateProject from './views/CreateProject'
import EditProject from './views/EditProject'
import ComponentList from './views/ComponentList'
import UserList from './views/UserList'
import CreateUser from './views/CreateUser'
import CreatePart from './views/CreatePart'
import CreateAssembly from './views/CreateAssembly'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'project-list',
      component: ProjectList
    },
    {
      path: '/create-project',
      name: 'create-project',
      component: CreateProject
    },
    {
      path: '/create-assembly/:project_id',
      name: 'create-assembly',
      component: CreateAssembly
    },
    {
      path: '/create-part/:project_id',
      name: 'create-part',
      component: CreatePart
    },
    {
      path: '/edit-project/:project_id',
      name: 'edit-project',
      component: EditProject
    },
    {
      path: '/component-list/:project_id',
      name: 'component-list',
      component: ComponentList
    },
    {
      path: '/user-list',
      name: 'user-list',
      component: UserList
    },
    {
      path: '/create-user',
      name: 'create-user',
      component: CreateUser
    },
    {
      path: "*",
      name: 'redirect',
      component: ProjectList
    }
  ]
})
