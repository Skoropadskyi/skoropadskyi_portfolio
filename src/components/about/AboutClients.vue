<template>
  <div class="mt-10 sm:mt-20">
    <p
      class="font-tomorrow-semibold text-2xl sm:text-3xl text-primary-dark dark:text-primary-light"
    >
      {{ clientsHeading }}
    </p>
    <div class="grid grid-cols-2 sm:grid-cols-4 mt-10 sm:mt-14 gap-2">
      <AboutClientSingle
        v-for="client in clients"
        :key="client.id"
        :client="client"
      />
    </div>
  </div>
</template>

<script>
import AboutClientSingle from './AboutClientSingle.vue'

export default {
  components: {
    AboutClientSingle,
  },
  data: () => {
    return {
      clientsHeading: 'Technologies I work with',
      clients: [
        {
          id: 1,
          title: 'HTML',
          img: require('@/assets/images/technologies/html.svg'),
        },
        {
          id: 2,
          title: 'CSS',
          img: require('@/assets/images/technologies/css.svg'),
        },
        {
          id: 3,
          title: 'Sass',
          img: require('@/assets/images/technologies/sass.svg'),
        },
        {
          id: 4,
          title: 'Bootstrap',
          img: require('@/assets/images/technologies/bootstrap.svg'),
        },
        {
          id: 5,
          title: 'TailwindCSS',
          img: require('@/assets/images/technologies/tailwindcss.svg'),
        },
        {
          id: 6,
          title: 'JS',
          img: require('@/assets/images/technologies/js.svg'),
        },
        {
          id: 7,
          title: 'Angular',
          img: require('@/assets/images/technologies/angularjs.svg'),
        },
        {
          id: 8,
          title: 'Vue',
          img: require('@/assets/images/technologies/vue.svg'),
        },
        {
          id: 9,
          title: 'Nuxt',
          img: require('@/assets/images/technologies/nuxt.svg'),
        },
        {
          id: 10,
          title: 'Figma',
          img: require('@/assets/images/technologies/figma.svg'),
        },
        {
          id: 11,
          title: 'Photoshop',
          img: require('@/assets/images/technologies/photoshop.svg'),
        },
        {
          id: 12,
          title: 'XD',
          img: require('@/assets/images/technologies/xd.svg'),
        },
      ],
    }
  },
}
</script>
