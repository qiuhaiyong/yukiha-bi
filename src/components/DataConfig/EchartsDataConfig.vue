<template>
  <div class="echarts-data-config-container">
    <el-form :label-position="'left'" label-width="100px">
      <el-form-item label="数据类型">
        <el-select v-model="dataType">
          <el-option v-for="item in dataTypeOptions" :label="item.label" :value="item.value" />
        </el-select>
      </el-form-item>
      <el-form-item label="数据源">
        <el-button link type="primary" @click="dialogTableVisible = true">编辑数据源</el-button>
      </el-form-item>
    </el-form>
    <el-dialog v-model="dialogTableVisible" title="编辑数据源" width="650">
      <el-table :data="tableData" height="400px">
        <el-table-column property="name" label="名称" width="200">
          <template #default="{ $index, row }">
            <el-input v-if="$index == editIndex" v-model="row.name"></el-input>
            <span v-else>{{ row.name }}</span>
          </template>
        </el-table-column>
        <el-table-column property="value" label="值" width="150">
          <template #default="{ $index, row }">
            <el-input v-if="$index == editIndex" v-model="row.value"></el-input>
            <span v-else>{{ row.value }}</span>
          </template>
        </el-table-column>
        <el-table-column label="操作">
          <template #default="{ $index, row }">
            <el-button
              icon="edit"
              type="primary"
              @click="editIndex = $index"
              v-if="editIndex != $index"
            >
            </el-button>
            <el-button icon="check" type="primary" @click="editIndex = null" v-else></el-button>
            <el-button icon="delete" type="danger" @click="deleteRow($index)"></el-button>
          </template>
        </el-table-column>
      </el-table>
      <template #footer>
        <div class="dialog-footer">
          <div class="tool-btn">
            <el-button type="primary" @click="addRow"> 新增一行 </el-button>
          </div>
          <div class="operation-btn">
            <el-button @click="cancel">取消</el-button>
            <el-button type="primary" @click="confirm"> 确认 </el-button>
          </div>
        </div>
      </template>
    </el-dialog>
  </div>
</template>

<script setup>
import dataMethodMap from '@/components/ToolBar/rectdata'
import useRectStore from '@/stores/rect'
import { cloneDeep } from 'lodash'
import { computed, ref, watch } from 'vue'

const dataTypeOptions = [
  {
    label: '静态数据',
    value: 'static'
  }
]

const rectSotre = useRectStore()

const activeRect = computed(() => rectSotre.activeRect)

const dataType = computed({
  get: () => activeRect.value?.dataOptions?.type,
  set: (val) => rectSotre.changeDataOptionsNormal(val, 'type')
})

const dialogTableVisible = ref(false)

const tableData = ref([])

const editIndex = ref(null)

// 添加行
const addRow = () => {
  tableData.value.push({
    name: 'name' + (tableData.value.length + 1),
    value: 100
  })
}

// 删除行
const deleteRow = (index) => {
  tableData.value.splice(index, 1)
  if (index === editIndex.value) {
    editIndex.value = null
  }
}

const cancel = () => {
  editIndex.value = null
  dialogTableVisible.value = false
}

// 确定保存
const confirm = () => {
  const rect = cloneDeep(activeRect.value)
  rect.dataOptions.data = tableData.value
  dataMethodMap.get(rect.type)?.(rect)
  rectSotre.updateRect(rect)
  // 关闭弹框
  editIndex.value = null
  dialogTableVisible.value = false
}

watch(
  () => activeRect.value,
  (newVla) => {
    if (newVla) {
      editIndex.value = null
      tableData.value = cloneDeep(newVla.dataOptions.data)
    }
  }
)

const a = () => {}
</script>

<style scoped>
.echarts-data-config-container {
  .dialog-footer {
    display: flex;
    justify-content: space-between;
  }
}
</style>
