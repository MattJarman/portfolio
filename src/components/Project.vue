<template>
  <div class="rounded-md overflow-hidden shadow-md bg-white dark:bg-prussian-blue">
    <g-image
        :src="imageUrl"
        :alt="title"
        className="w-full"
    />
    <div class="px-6 py-4 max-h-lg min-h-32 lg:min-h-64">
      <p class="font-bold text-2xl mb-2 sm:text-4xl dark:text-green-400">
        {{ title }}
      </p>
      <div class="description text-gray-700 text-xs md:text-sm dark:text-gray-200" v-html="description"></div>
    </div>
    <div class="flex flex-row px-6 py-4">
      <div class="w-2/3 space-y-4 flex-grow overflow-x-auto">
        <span v-for="tag in tags" :key="tag" class="text-xs font-bold inline-block bg-gray-100 rounded-full px-3 py-1 text-gray-900 mr-2">
          {{ tag }}
        </span>
      </div>
      <div class="mt-auto">
        <a :href="link" target="_blank">
          <font-awesome-icon class="text-xl transition duration-300 ease-in-out transform cursor-pointer hover:-translate-y-1 hover:scale-110 hover:text-github outline-none focus:outline-none dark:text-green-400" :icon="['fab', 'github']"/>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Project',
  props: {
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    imageUrl: {
      type: String,
      required: true
    },
    link: {
      type: String,
      required: true
    },
    date: {
      type: String,
      required: true
    },
    tags: {
      type: Array,
      required: false
    }
  }
}
</script>

<style scoped>
.description >>> h1 {
  @apply text-3xl;
}

.description >>> h2 {
  @apply text-2xl;
}

.description >>> h3 {
  @apply text-xl;
}

.description >>> ul {
  @apply list-disc pl-8;
}

.description >>> a {
  @apply text-green-600 dark:text-green-400;
}
</style>
