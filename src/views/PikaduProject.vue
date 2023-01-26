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
        singleProjectTitle: 'Pikadu',
        singleProjectDate: 'Oct 23, 2020',
        singleProjectTag: 'UI / Frontend',
      },
      projectImages: [
        {
          id: 1,
          title: 'Pikadu Project',
          img: require('@/assets/images/projects/banner_pikadu.jpg'),
        },
        {
          id: 2,
          title: 'Pikadu Project',
          img: require('@/assets/images/projects/pikadu_2.jpg'),
        }
      ],
      projectInfo: {
        technologies: [
          {
            title: 'Tools & Technologies',
            techs: ['HTML', 'CSS', 'JS', 'Adobe Photoshop'],
          },
        ],
        socialSharingsHeading: 'Project Link',
        socialSharings: [
          {
            id: 1,
            name: 'GitHub',
            icon: 'github',
            url: 'https://github.com/Skoropadskyi/Pikadu',
          },
          {
            id: 2,
            name: 'GitHub',
            icon: 'external-link',
            url: 'https://skoropadskyi.github.io/Pikadu',
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
