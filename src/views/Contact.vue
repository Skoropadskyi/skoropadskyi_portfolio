<template>
  <div
    class="container mx-auto flex flex-col-reverse md:flex-row py-5 md:py-10 md:mt-10"
  >
    <!-- Contact details -->
    <ContactDetails :contacts="contacts" />
  </div>
</template>

<script>
import feather from 'feather-icons'
import ContactDetails from '@/components/contact/ContactDetails.vue'

export default {
  components: {
    ContactDetails,
  },
  data: () => {
    return {
      contacts: [
        {
          id: 1,
          name: 'Kharkov, Ukraine',
          icon: 'map-pin',
        },
        {
          id: 2,
          name: 'oleh.skoropadskyi@gmail.com',
          icon: 'mail',
        },
        {
          id: 3,
          name: '+38 095 048 54 92',
          icon: 'phone',
        },
      ],
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
