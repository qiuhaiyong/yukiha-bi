<template>
  <el-collapse-item title="自定义颜色" name="color">
    <div class="color-config-container config-container">
      <el-table :data="colorList" style="width: 100%" height="200">
        <el-table-column type="index" width="50" />
        <el-table-column label="颜色">
          <template #default="{ row, $index }">
            <el-space>
              <el-color-picker v-model="colorList[$index]"></el-color-picker>
              <el-text>{{ row }}</el-text>
            </el-space>
          </template>
        </el-table-column>
        <el-table-column label="操作" width="80">
          <El-button icon="delete" type="danger" link @click="deleteColor($index)"></El-button>
        </el-table-column>
      </el-table>
      <el-button link icon="plus" type="primary" @click="addColor"></el-button>
    </div>
  </el-collapse-item>
</template>

<script setup>
import useRectStore from '@/stores/rect'
import { computed } from 'vue'

const rectSotre = useRectStore()

const activeRect = computed(() => rectSotre.activeRect)

const colorList = computed({
  get: () => activeRect.value?.options?.color || [],
  set: (val) => rectSotre.changeColor(val)
})

// 随机颜色
const getRandomColor = () => {
  let letters = '0123456789ABCDEF'
  let color = '#'
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)]
  }
  return color
}

const deleteColor = (index) => {
  rectSotre.deleteColor(index)
}

const addColor = () => {
  rectSotre.addColor(getRandomColor())
}
</script>

<style scoped>
/* common style */
.config-container {
  padding: 0 10px;
}
.color-config-container {
  text-align: center;
}
</style>
