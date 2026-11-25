import Home from "@/pages/home/Home.vue";
import { createRouter, createWebHashHistory } from "vue-router";
import AutoCAD from '@/pages/autocad/AutoCAD.vue'
import ThreeDModelling from '@/pages/3d-modelling/ThreeDModelling.vue'
import GraphicDesign from '@/pages/graphic-design/GraphicDesign.vue'
import AboutMe from '@/pages/about-me/AboutMe.vue'
import Blender from '@/pages/3d-modelling/Blender.vue'
import SketchUp from '@/pages/3d-modelling/SketchUp.vue'


export const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),

  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/:patchMatch(.*)',
      redirect: '/'
    },
    {
  path: '/autocad',
  name: 'autocad',
  component: AutoCAD,
},
{
  path: '/3d-modelling',
  name: '3d-modelling',
  component: ThreeDModelling,
  children: [
    { path: 'blender', component: Blender },
    { path: 'sketchup', component: SketchUp },
  ],
},
{
  path: '/graphic-design',
  name: 'graphic-design',
  component: GraphicDesign,
},
{
  path: '/about-me',
  name: 'about-me',
  component: AboutMe,
},
  ]
})