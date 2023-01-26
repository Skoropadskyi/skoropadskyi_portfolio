<template>
  <div class="block sm:flex sm:gap-10 mt-10 sm:mt-20">
    <!-- About profile image -->
    <div class="w-full sm:w-1/4 mb-7 sm:mb-0">
      <img
        src="@/assets/images/profile.png"
        class="rounded-xl w-96"
        alt="Avatar"
      />
    </div>

    <!-- About details -->
    <div class="w-full sm:w-3/4 text-left">
      <p
        v-for="bio in bios"
        :key="bio.id"
        class="font-tomorrow-regular mb-4 text-ternary-dark dark:text-ternary-light text-lg"
      >
        {{ bio.bio }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  setup() {
    return {
      bios: [
        {
          id: 1,
          bio: "Hi. Let me introduce my self, I am Skoropadskyi Oleh. I'm a Front-end developer from the beautiful city of Kharkiv, Ukraine. My main point is improving my skills and become a professional Web developer. Here you can find my works and on GitHub source code. Always open to new opportunities and challenges, don't hesitate to contact me.",
        },
      ],
    }
  },
}
</script>
