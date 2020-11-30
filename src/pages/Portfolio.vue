<template>
  <Layout class="h-full">
    <div class="container mx-auto px-2 pt-8">
      <div class="flex flex-row flex-wrap md:mx-8 lg:-mx-2">
        <div v-for="project in $page.portfolio.edges" :key="project.node.id" class="w-full p-2 lg:w-1/2 p-2">
          <project
              :title="project.node.title"
              :description="project.node.content"
              :imageUrl="`uploads/${project.node.image}`"
              :link="project.node.github"
              :tags="project.node.tags"
              :date="project.node.date"
          />
        </div>
      </div>
    </div>
  </Layout>
</template>

<page-query>
query {
  portfolio: allPortfolio( filter: {published: {eq: true}}, sortBy: "date") {
    edges {
      node {
        id
        title
        content
        date
        image
        github
        tags
      }
    }
  }
}
</page-query>

<script>
import Project from '../components/Project'

export default {
  name: 'Portfolio',
  components: {
    Project
  },
  metaInfo: {
    title: 'Portfolio'
  }
}
</script>
