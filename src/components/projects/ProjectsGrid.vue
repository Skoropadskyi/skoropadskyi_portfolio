<template>
  <!-- Projects grid -->
  <section class="pt-10 sm:pt-14">
    <!-- Projects grid title -->
    <div class="text-center">
      <p
        class="font-tomorrow-semibold text-2xl sm:text-5xl font-semibold mb-2 text-ternary-dark dark:text-ternary-light"
      >
        {{ projectsHeading }}
      </p>
    </div>

    <!-- Filter and search projects -->
    <div class="mt-10 sm:mt-10">
      <h3
        class="font-tomorrow-regular text-center text-secondary-dark dark:text-ternary-light text-md sm:text-xl font-normal mb-4"
      >
        Search projects by title or filter by category
      </h3>
      <div
        class="flex justify-between border-b border-primary-light dark:border-neutral-800 pb-3 gap-2"
      >
        <div class="flex justify-between gap-2">
          <span
            class="hidden sm:block bg-primary-light dark:bg-neutral-800 p-2.5 shadow-sm rounded-xl cursor-pointer"
          >
            <i
              data-feather="search"
              class="text-ternary-dark dark:text-ternary-light"
            ></i>
          </span>
          <input
            v-model="searchProject"
            class="font-tomorrow-medium pl-3 pr-1 sm:px-4 py-2 border-1 border-gray-200 dark:border-neutral-800 rounded-lg text-sm sm:text-md bg-secondary-light dark:bg-neutral-800 text-primary-dark dark:text-ternary-light"
            id="name"
            name="name"
            type="search"
            required=""
            placeholder="Search Projects"
            aria-label="Name"
          />
        </div>
      </div>
    </div>

    <!-- Projects grid -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-6 sm:gap-10">
      <ProjectSingle
        v-for="project in filteredProjects"
        :key="project.id"
        :project="project"
      />
    </div>
  </section>
</template>

<script>
import feather from 'feather-icons'
import ProjectSingle from './ProjectSingle.vue'
import projects from '../../data/projects'

export default {
  components: {ProjectSingle},
  data: () => {
    return {
      projects,
      projectsHeading: 'Projects Portfolio',
      searchProject: '',
    }
  },
  computed: {
    // Get the filtered projects
    filteredProjects() {
      if (this.searchProject) {
        return this.filterProjectsBySearch()
      }
      return this.projects
    },
  },
  methods: {
    // Filter projects by title search
    filterProjectsBySearch() {
      let project = new RegExp(this.searchProject, 'i')
      return this.projects.filter((el) => el.title.match(project))
    },
  },
  mounted() {
    feather.replace()
  },
}
</script>

<style scoped></style>
