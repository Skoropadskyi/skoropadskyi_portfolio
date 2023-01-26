<template>
  <router-link
    :to="project.url"
    class="rounded-xl shadow-lg hover:shadow-xl cursor-pointer mb-10 sm:mb-0 bg-secondary-light dark:bg-neutral-800"
    aria-label="Single Project"
  >
    <div>
      <img
        :src="project.img"
        :alt="project.title"
        class="rounded-t-xl border-none"
      />
    </div>
    <div class="text-center px-4 py-6">
      <p
        class="font-tomorrow-semibold text-xl text-ternary-dark dark:text-ternary-light font-semibold mb-2"
      >
        {{ project.title }}
      </p>
      <span
        class="font-tomorrow-medium text-lg text-ternary-dark dark:text-ternary-light"
        >{{ project.category }}</span
      >
    </div>
  </router-link>
</template>

<script>
export default {
  props: ['project'],
}
</script>

<style lang="scss" scoped></style>
