import {createRouter, createWebHistory} from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: 'Portfolio - Home',
    },
  },
  {
    path: '/about',
    name: 'About',
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/About.vue'),
    meta: {
      title: 'Portfolio - About',
    },
  },
  {
    path: '/projects',
    name: 'Projects',
    component: () =>
      import(/* webpackChunkName: "projects" */ '../views/Projects.vue'),
    meta: {
      title: 'Portfolio - Projects',
    },
  },
  {
    path: '/projects/mogo-project',
    name: 'MoGo Project',
    component: () =>
      import(/* webpackChunkName: "projects" */ '../views/MoGoProject.vue'),
    meta: {
      title: 'Portfolio - MoGo Project',
    },
  },
  {
    path: '/projects/marketika-project',
    name: 'Marketika Project',
    component: () =>
      import(/* webpackChunkName: "projects" */ '../views/MarketikaProject'),
    meta: {
      title: 'Portfolio - Marketika Project',
    },
  },
  {
    path: '/projects/luxestate-project',
    name: 'Luxestate Project',
    component: () =>
      import(/* webpackChunkName: "projects" */ '../views/LuxestateProject'),
    meta: {
      title: 'Portfolio - Luxestate Project',
    },
  },
  {
    path: '/projects/food-project',
    name: 'Food Project',
    component: () =>
      import(/* webpackChunkName: "projects" */ '../views/FoodProject'),
    meta: {
      title: 'Portfolio - Food Project',
    },
  },
  {
    path: '/projects/pikadu-project',
    name: 'Pikadu Project',
    component: () =>
      import(/* webpackChunkName: "projects" */ '../views/PikaduProject'),
    meta: {
      title: 'Portfolio - Pikadu Project',
    },
  },
  {
    path: '/projects/deliveryfood-project',
    name: 'DeliveryFood Project',
    component: () =>
      import(/* webpackChunkName: "projects" */ '../views/DeliveryFoodProject'),
    meta: {
      title: 'Portfolio - DeliveryFood Project',
    },
  },
  {
    path: '/projects/spintech-project',
    name: 'Spintech Project',
    component: () =>
      import(/* webpackChunkName: "projects" */ '../views/SpintechProject'),
    meta: {
      title: 'Portfolio - Spintech Project',
    },
  },
  {
    path: '/projects/natours-project',
    name: 'Natours Project',
    component: () =>
      import(/* webpackChunkName: "projects" */ '../views/NatoursProject'),
    meta: {
      title: 'Portfolio - Natours Project',
    },
  },
  {
    path: '/projects/nexter-project',
    name: 'Nexter Project',
    component: () =>
      import(/* webpackChunkName: "projects" */ '../views/NexterProject'),
    meta: {
      title: 'Portfolio - Nexter Project',
    },
  },
  {
    path: '/projects/artgallery-project',
    name: 'Art Gallery Project',
    component: () =>
      import(/* webpackChunkName: "projects" */ '../views/ArtProject'),
    meta: {
      title: 'Portfolio - Art Gallery Project',
    },
  },
  {
    path: '/projects/shop-project',
    name: 'Shop Project',
    component: () =>
      import(/* webpackChunkName: "projects" */ '../views/ShopProject'),
    meta: {
      title: 'Portfolio - Shop Project',
    },
  },
  {
    path: '/projects/megadev-project',
    name: 'MeGaDev Project',
    component: () =>
      import(/* webpackChunkName: "projects" */ '../views/MeGaDevProject'),
    meta: {
      title: 'Portfolio - MeGaDev Project',
    },
  },
  {
    path: '/projects/polars-project',
    name: 'Polars Project',
    component: () =>
      import(/* webpackChunkName: "projects" */ '../views/PolarsProject'),
    meta: {
      title: 'Portfolio - Polars Project',
    },
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () =>
      import(/* webpackChunkName: "projects" */ '../views/Contact.vue'),
    meta: {
      title: 'Portfolio - Contact',
    },
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior() {
    document.getElementById('app').scrollIntoView()
  },
})

export default router

/**
 * Below code will display the component/active page title
 * Powered by: Nangialai Stoman
 */

// This callback runs before every route change, including on page load.
router.beforeEach((to, from, next) => {
  // This goes through the matched routes from last to first, finding the closest route with a title.
  // e.g., if we have `/some/deep/nested/route` and `/some`, `/deep`, and `/nested` have titles,
  // `/nested`'s will be chosen.
  const nearestWithTitle = to.matched
    .slice()
    .reverse()
    .find((r) => r.meta && r.meta.title)

  // Find the nearest route element with meta tags.
  const nearestWithMeta = to.matched
    .slice()
    .reverse()
    .find((r) => r.meta && r.meta.metaTags)

  const previousNearestWithMeta = from.matched
    .slice()
    .reverse()
    .find((r) => r.meta && r.meta.metaTags)

  // If a route with a title was found, set the document (page) title to that value.
  if (nearestWithTitle) {
    document.title = nearestWithTitle.meta.title
  } else if (previousNearestWithMeta) {
    document.title = previousNearestWithMeta.meta.title
  }

  // Remove any stale meta tags from the document using the key attribute we set below.
  Array.from(document.querySelectorAll('[data-vue-router-controlled]')).map(
    (el) => el.parentNode.removeChild(el)
  )

  // Skip rendering meta tags if there are none.
  if (!nearestWithMeta) return next()

  // Turn the meta tag definitions into actual elements in the head.
  nearestWithMeta.meta.metaTags
    .map((tagDef) => {
      const tag = document.createElement('meta')

      Object.keys(tagDef).forEach((key) => {
        tag.setAttribute(key, tagDef[key])
      })

      // We use this to track which meta tags we create so we don't interfere with other ones.
      tag.setAttribute('data-vue-router-controlled', '')

      return tag
    })
    // Add the meta tags to the document head.
    .forEach((tag) => document.head.appendChild(tag))

  next()
})
