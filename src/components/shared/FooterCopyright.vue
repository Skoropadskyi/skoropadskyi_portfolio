<template>
  <div class="flex justify-center items-center text-center">
    <div
      class="font-tomorrow-regular text-lg text-ternary-dark dark:text-ternary-light"
    >
      &copy; {{ copyrightDate }}.
      <a
        href="https://www.altronixsoft.com/"
        target="__blank"
        class="font-tomorrow-medium hover:underline hover:text-green-600 dark:hover:text-green-300 duration-500"
      >
        {{ projectName }}
      </a>
      . Developed by
      <a
        href="https://github.com/Skoropadskyi"
        target="__blank"
        class="font-tomorrow-medium text-secondary-dark dark:text-secondary-light uppercase hover:underline hover:text-green-600 dark:hover:text-green-300 duration-500"
        >{{ author }}</a
      >
    </div>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      copyrightDate: new Date().getFullYear(),
      projectName: 'AltronixSoftware',
      author: 'Oleh Skoropadskyi',
    }
  },
}
</script>

<style lang="scss" scoped></style>
