<template>
  <div class="bg-blue-500">Hello world from {{ test }}</div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import { project } from '~/config/project'

@Component
export default class IndexPage extends Vue {
  test: string = project.name
  head() {
    return {
      title: project.name,
    }
  }
}
</script>
