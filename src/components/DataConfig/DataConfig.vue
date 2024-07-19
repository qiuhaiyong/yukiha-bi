<template>
  <div class="data-config-container">
    <Codemirror
      v-model="code"
      :style="{ height: '400px' }"
      :autofocus="true"
      :indent-with-tab="true"
      :tab-size="2"
      :extensions="extensions"
      @ready="handleReady"
      @change="console.log('change', $event)"
    />
  </div>
</template>

<script setup>
import { javascript } from '@codemirror/lang-javascript'
import { ref, shallowRef } from 'vue'
import { Codemirror } from 'vue-codemirror'

const code = ref(`console.log('Hello, world!')`)

const extensions = [javascript()]

const view = shallowRef()

const handleReady = (payload) => {
  view.value = payload.view
}
</script>

<style></style>
