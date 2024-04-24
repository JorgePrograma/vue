import { createWebHistory, createRouter } from "vue-router";

// blog
const HomePage = () => import("../pages/blog/HomePage.vue");
const AboutPage = () => import("../pages/blog/AboutPage.vue");
const ClientesPage = () => import("../pages/blog/ClientesPage.vue");
const ExperiencePage = () => import("../pages/blog/ExperienciePage.vue");
const TestimonialPage = () => import("../pages/blog/TestimonialPage.vue");

// auth
const LoginPage = () => import("../pages/auth/LoginPage.vue");
const RegisterPage = () => import("../pages/auth/RegisterPage.vue");
const AdminPage = () => import("../pages/admin/AdminPage.vue");

// admin
const UserPage = () => import("../pages/admin/user/UserPage.vue");
const UserAddPage = () =>
  import("../pages/admin/user/components/CreateUser.vue");

const UserEditPage = () =>
  import("../pages/admin/user/components/EditUser.vue");
const ProductPage = () => import("../pages/admin/product/ProductPage.vue");

const routes = [
  { path: "/", component: HomePage },
  { path: "/about", component: AboutPage },
  { path: "/clients", component: ClientesPage },
  { path: "/experience", component: ExperiencePage },
  { path: "/testimonio", component: TestimonialPage },
  { path: "/login", component: LoginPage },
  { path: "/register", component: RegisterPage },
  {
    path: "/admin",
    component: AdminPage,
    children: [
      {
        path: "user",
        component: UserPage,
      },
      {
        path: "user/add",
        component: UserAddPage,
      },
      {
        path: "user/edit",
        component: UserEditPage,
      },
      { path: "product", component: ProductPage },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
/**
 
src
-assets
--images
---ilustrarion.png
-domain
--User.js
---usuarios.js
-infraestructure
--datasource
---UserDatasource.js
---UserData.js
--respository
---Userrepository.js
-presentation
--components
--ImageComponent.vue
--constants
--pages
---admin
----user
-----components
------ListarUser.vue
---auth
---blog
----AboutPage.vue
----HomePage.vue
--router
---router.js
--store
---UserStore.js
-App.vue
-main.js
*/
