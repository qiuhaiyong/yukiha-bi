<template>
  <div class="basic-config-container">
    <el-form :label-position="'left'" label-width="70px">
      <el-form-item :label="'配置模式'">
        <el-radio-group
          :model-value="modelValue"
          @change="(val) => emits('update:modelValue', val)"
        >
          <el-radio value="view">视图</el-radio>
          <el-radio value="js">js</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="图表尺寸">
        <el-space>
          <el-input-number v-model="width" controls-position="right" />
          <el-input-number v-model="height" controls-position="right" />
        </el-space>
      </el-form-item>
      <el-form-item label="图表位置">
        <el-space>
          <el-input-number v-model="left" controls-position="right" />
          <el-input-number v-model="top" controls-position="right" />
        </el-space>
      </el-form-item>
      <el-form-item label="图表名称">
        <el-input v-model="name" />
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup>
import useRectStore from '@/stores/rect'
import { computed } from 'vue'
defineOptions({
  name: 'BasicConfig'
})
const props = defineProps(['modelValue'])

const emits = defineEmits(['update:modelValue'])

const rectSotre = useRectStore()

const activeRect = computed(() => rectSotre.activeRect)

const width = computed({
  get: () => activeRect.value?.width,
  set: (val) => rectSotre.changeWidth(val)
})

const height = computed({
  get: () => activeRect.value?.height,
  set: (val) => rectSotre.changeHeight(val)
})

const top = computed({
  get: () => activeRect.value?.top,
  set: (val) => rectSotre.changeTop(val)
})

const left = computed({
  get: () => activeRect.value?.left,
  set: (val) => rectSotre.changeLeft(val)
})

const name = computed({
  get: () => activeRect.value?.name,
  set: (val) => rectSotre.changeName(val)
})
</script>

<style scoped>
.basic-config-container {
  :deep() {
    .el-input-number {
      width: 100px;
    }
  }
}
</style>
