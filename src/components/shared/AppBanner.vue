<template>
  <section
    class="flex flex-col sm:justify-between items-center sm:flex-row mt-12 sm:mt-10"
  >
    <!-- Banner left contents -->
    <div class="w-full md:w-1/3 text-left">
      <h1
        class="font-tomorrow-semibold text-3xl md:text-3xl xl:text-4xl text-center sm:text-left text-ternary-dark dark:text-primary-light uppercase"
      >
        Hi, I'am Oleh
      </h1>
      <p
        class="font-tomorrow-medium mt-2 text-lg sm:text-xl xl:text-2xl text-center sm:text-left leading-none text-gray-400"
      >
        Front-End Developer
      </p>
      <div class="flex justify-center sm:block">
        <a
          target="_blank"
          href="https://drive.google.com/file/d/1E6Gr2s_Xklh-eEB-tW_18gxoY8zyRz9U/view?usp=sharing"
          class="flex justify-center items-center w-36 sm:w-48 mt-12 mb-6 sm:mb-0 text-lg border border-green-200 dark:border-ternary-dark py-2.5 sm:py-3 shadow-lg rounded-lg bg-green-50 focus:ring-1 focus:ring-green-900 hover:bg-green-700 text-gray-500 hover:text-white duration-500"
          aria-label="Download Resume"
        >
          <i
            data-feather="arrow-down-circle"
            class="ml-0 sm:ml-1 mr-2 sm:mr-3 w-5 sm:w-6 duration-100"
          ></i>
          <span class="text-sm sm:text-lg font-tomorrow-medium duration-100"
            >Download CV</span
          ></a
        >
      </div>
    </div>

    <!-- Banner right illustration -->
    <div class="w-full md:w-2/3 text-right float-right">
      <img
        v-if="theme === 'light'"
        src="@/assets/images/developer-light.svg"
        alt="Developer"
      />
      <img v-else src="@/assets/images/developer-light.svg" alt="Developer" />
    </div>
  </section>
</template>

<script>
import feather from 'feather-icons'

export default {
  name: 'Home',
  data: () => {
    return {
      theme: '',
    }
  },
  created() {
    this.theme = localStorage.getItem('theme') || 'light'
  },
  mounted() {
    feather.replace()
    this.theme = localStorage.getItem('theme') || 'light'
  },
  updated() {
    feather.replace()
  },
  methods: {},
}
</script>

<style scoped></style>
