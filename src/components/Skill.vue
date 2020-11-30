<template>
  <div class="flex flex-col items-center justify-center mx-auto w-1/3 md:w-1/4">
    <div class="flex items-center justify-center w-10 h-10 mb-4 sm:w-16 sm:h-16 lg:w-20 lg:h-20">
      <g-image
          class="transition duration-300 ease-in-out transform outline-none cursor-pointer md:grayscale hover:full-colour focus:outline-none hover:-translate-y-1 hover:scale-105"
          :src="require(`!!assets-loader!@icons/${icon}.svg`)"
          :alt="icon"
      />
    </div>
    <p class="text-sm font-bold dark:text-green-400">{{ name }}</p>
    <p class="text-xs italic text-gray-700 dark:text-gray-200">{{ proficiency }}</p>
    <!-- TODO: Replace with stars -->
    <div class="mt-2 flex w-2/3 md:w-1/3 h-2 max-w-xs mb-4 overflow-hidden text-xs bg-green-100 rounded-full shadow-md md:h-2 lg:h-2">
      <div
          :style="{ width: progressWidth }"
          class="flex flex-col justify-center text-center text-white bg-green-400 shadow-none whitespace-nowrap"
      ></div>
    </div>
  </div>
</template>

<script>

const RATING_MAX = 5

export default {
  name: 'Skill',
  data () {
    return {
      proficiency: this.getProficiencyText(this.level)
    }
  },
  props: {
    name: {
      type: String,
      required: true
    },
    level: {
      type: Number,
      required: true
    },
    icon: {
      type: String,
      required: true
    }
  },
  computed: {
    progressWidth () {
      const percentageWidth = (this.level / RATING_MAX) * 100
      return `${percentageWidth}%`
    }
  },
  methods: {
    getProficiencyText (level) {
      switch (Math.floor(level)) {
        case 1:
          return 'Familiar'
        case 2:
          return 'Experienced'
        case 3:
          return 'Proficient'
        case 4:
          return 'Expert'
        default:
          return 'Experienced'
      }
    }
  }
}
</script>

<style scoped>
</style>
