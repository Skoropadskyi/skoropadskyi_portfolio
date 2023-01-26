<template>
  <div class="container mx-auto mt-10 sm:mt-20">
    <!-- Project header -->
    <ProjectHeader :singleProjectHeader="singleProjectHeader" />

    <!-- Project gallery -->
    <ProjectGallery :projectImages="projectImages" />

    <!-- Project information -->
    <ProjectInfo :projectInfo="projectInfo" />
  </div>
</template>

<script>
import feather from 'feather-icons'
import ProjectHeader from '../components/projects/ProjectHeader.vue'
import ProjectGallery from '../components/projects/ProjectGallery.vue'
import ProjectInfo from '../components/projects/ProjectInfo.vue'

export default {
  name: 'Projects',
  components: {
    ProjectHeader,
    ProjectGallery,
    ProjectInfo,
  },
  data: () => {
    return {
      singleProjectHeader: {
        singleProjectTitle: 'Polars',
        singleProjectDate: 'May 1, 2022',
        singleProjectTag: 'UI / Frontend',
      },
      projectImages: [
        {
          id: 1,
          title: 'Polars Project',
          img: require('@/assets/images/projects/banner_polars.jpg'),
        },
        {
          id: 2,
          title: 'Polars Project',
          img: require('@/assets/images/projects/polars_2.jpg'),
        },
        {
          id: 3,
          title: 'Polars Project',
          img: require('@/assets/images/projects/polars_3.jpg'),
        },
      ],
      projectInfo: {
        technologies: [
          {
            title: 'Tools & Technologies',
            techs: [
              'HTML',
              'CSS(SCSS)',
              'Bootstrap',
              'Vue3.js',
              'Vuex',
              'Nuxt.js',
              'Web3',
              'Figma',
            ],
          },
        ],
        projectDetailsHeading: 'Details',
        projectDetails: [
          {
            id: 1,
            details: 'Worked in the development team on the Polars product.',
          },
          {
            id: 2,
            details:
              '“Cryptocurrency platform” - development of the Cryptocurrency platform. Users have the possibility to connect their crypto wallets to the platform and do any transactions. The platform has its own tokens with changing rates. The rates of the tokens depend on the results of sports events',
          },
        ],
        socialSharingsHeading: 'Project Link',
        socialSharings: [
          {
            id: 1,
            name: 'GitHub',
            icon: 'external-link',
            url: 'https://polygon.polars.io/trade/make-prediction',
          },
        ],
      },
    }
  },
  mounted() {
    feather.replace()
  },
  updated() {
    feather.replace()
  },
  methods: {},
}
</script>

<style scoped></style>
