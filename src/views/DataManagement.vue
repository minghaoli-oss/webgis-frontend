<!-- src/views/DataManagement.vue -->
<template>
    <div class="data-management">
      <!-- 搜索与新增 -->
      <div class="action-bar">
        <el-input v-model="searchKeyword" placeholder="输入油田名称" style="width: 300px" />
        <el-button type="success" @click="showDialog = true">新增记录</el-button>
      </div>
  
      <!-- 数据表格 -->
      <el-table :data="filteredData" border>
        <el-table-column prop="name" label="油田名称" />
        <el-table-column prop="basin" label="所属盆地" />
        <el-table-column prop="reserves" label="资源储量（亿吨）" />
        <el-table-column label="操作">
          <template #default="scope">
            <el-button size="mini" @click="editItem(scope.row)">编辑</el-button>
            <el-button type="danger" size="mini" @click="deleteItem(scope.row.id)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
  
      <!-- 新增/编辑对话框 -->
      <el-dialog v-model="showDialog" title="油田数据编辑">
        <el-form :model="currentItem" label-width="100px">
          <el-form-item label="油田名称">
            <el-input v-model="currentItem.name" />
          </el-form-item>
          <el-form-item label="所属盆地">
            <el-input v-model="currentItem.basin" />
          </el-form-item>
          <el-form-item label="资源储量">
            <el-input-number v-model="currentItem.reserves" :min="0" />
          </el-form-item>
        </el-form>
        <template #footer>
          <el-button @click="showDialog = false">取消</el-button>
          <el-button type="primary" @click="saveItem">保存</el-button>
        </template>
      </el-dialog>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        searchKeyword: '',
        showDialog: false,
        currentItem: { id: null, name: '', basin: '', reserves: 0 },
        // 模拟数据（后续替换为真实API）
        tableData: [
          { id: 1, name: '大庆油田', basin: '松辽盆地', reserves: 50 },
          { id: 2, name: '普拉德霍湾油田', basin: '阿拉斯加盆地', reserves: 35 }
        ]
      }
    },
    computed: {
      filteredData() {
        return this.tableData.filter(item => 
          item.name.includes(this.searchKeyword)
        )
      }
    },
    methods: {
      editItem(item) {
        this.currentItem = { ...item }
        this.showDialog = true
      },
      deleteItem(id) {
        this.tableData = this.tableData.filter(item => item.id !== id)
      },
      saveItem() {
        if (this.currentItem.id) {
          const index = this.tableData.findIndex(item => item.id === this.currentItem.id)
          this.tableData.splice(index, 1, this.currentItem)
        } else {
          this.tableData.push({ ...this.currentItem, id: Date.now() })
        }
        this.showDialog = false
      }
    }
  }
  </script>
  
  <style scoped>
  .action-bar {
    margin-bottom: 20px;
    display: flex;
    justify-content: space-between;
  }
  </style>