<template>
  <el-collapse-item title="四周偏移量" name="grid">
    <div class="gird-config-container config-container">
      <el-form :label-position="'left'" label-width="100px">
        <el-form-item label="上偏移量">
          <el-input-number v-model="gridTop" :min="0" />
        </el-form-item>
        <el-form-item label="右偏移量">
          <el-input-number v-model="gridRight" :min="0" />
        </el-form-item>
        <el-form-item label="下偏移量">
          <el-input-number v-model="gridBottom" :min="0" />
        </el-form-item>
        <el-form-item label="左偏移量">
          <el-input-number v-model="gridLeft" :min="0" />
        </el-form-item>
      </el-form>
    </div>
  </el-collapse-item>
</template>

<script setup>
import useRectStore from '@/stores/rect'
import { computed } from 'vue'

const rectSotre = useRectStore()

const activeRect = computed(() => rectSotre.activeRect)

const gridTop = computed({
  get: () => activeRect.value?.options?.grid?.top,
  set: (val) => rectSotre.changeGrid(val, 'top')
})

const gridRight = computed({
  get: () => activeRect.value?.options?.grid?.right,
  set: (val) => rectSotre.changeGrid(val, 'right')
})

const gridBottom = computed({
  get: () => activeRect.value?.options?.grid?.bottom,
  set: (val) => rectSotre.changeGrid(val, 'bottom')
})
const gridLeft = computed({
  get: () => activeRect.value?.options?.grid?.left,
  set: (val) => rectSotre.changeGrid(val, 'left')
})
</script>

<style scoped>
.config-container {
  padding: 0 10px;
}
</style>
