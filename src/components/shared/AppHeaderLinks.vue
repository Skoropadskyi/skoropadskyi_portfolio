<template>
  <!-- Header links -->
  <div
    :class="isOpen ? 'block' : 'hidden'"
    class="m-0 sm:ml-4 mt-5 sm:mt-3 sm:flex p-5 sm:p-0 justify-center items-center shadow-lg sm:shadow-none"
  >
    <router-link
      to="/projects"
      class="font-tomorrow-regular block text-left text-lg text-primary-dark dark:text-ternary-light hover:text-green-600 dark:hover:text-green-300 sm:mx-4 mb-2 sm:py-2"
      aria-label="Projects"
      >Projects</router-link
    >
    <router-link
      to="/about"
      class="font-tomorrow-regular block text-left text-lg text-primary-dark dark:text-ternary-light hover:text-green-600 dark:hover:text-green-300 sm:mx-4 mb-2 sm:py-2 border-t-2 pt-3 sm:pt-2 sm:border-t-0 border-primary-light dark:border-secondary-dark"
      aria-label="About Me"
      >About Me</router-link
    >
    <router-link
      to="/contact"
      class="font-tomorrow-regular block text-left text-lg text-primary-dark dark:text-ternary-light hover:text-green-600 dark:hover:text-green-300 sm:mx-4 mb-2 sm:py-2 border-t-2 pt-3 sm:pt-2 sm:border-t-0 border-primary-light dark:border-secondary-dark"
      aria-label="Contact"
      >Contact</router-link
    >
    <!--    <div-->
    <!--      class="border-t-2 pt-3 sm:pt-0 sm:border-t-0 border-primary-light dark:border-secondary-dark"-->
    <!--    >-->
    <!--      <button-->
    <!--        class="font-general-medium sm:hidden block text-left text-md font-medium bg-green-500 hover:bg-green-600 text-white shadow-sm rounded-sm px-4 py-2 mt-2 duration-500"-->
    <!--        @click="showModal()"-->
    <!--        aria-label="Hire Me Button"-->
    <!--      >-->
    <!--        Hire Me-->
    <!--      </button>-->
    <!--    </div>-->
  </div>
</template>

<script>
export default {
  props: ['showModal', 'isOpen'],
}
</script>

<style lang="scss" scoped></style>
