<template>
  <div class="app-container">
    <el-button style='margin-bottom:20px' type="primary" icon="document" @click="handleDownload" :loading="downloadLoading">导出已选择项</el-button>
    <el-table :data="list" v-loading.body="listLoading" element-loading-text="拼命加载中" border fit highlight-current-row @selection-change="handleSelectionChange"
      ref="multipleTable">
      <el-table-column type="selection" align="center"></el-table-column>
      <el-table-column align="center" label='ID' width="95">
        <template slot-scope="scope">
          {{scope.$index}}
        </template>
      </el-table-column>
      <el-table-column label="文章标题">
        <template slot-scope="scope">
          {{scope.row.title}}
        </template>
      </el-table-column>
      <el-table-column label="作者" width="95" align="center">
        <template slot-scope="scope">
          <el-tag>{{scope.row.author}}</el-tag>
        </template>
      </el-table-column>
      <el-table-column label="阅读数" width="115" align="center">
        <template slot-scope="scope">
          {{scope.row.pageviews}}
        </template>
      </el-table-column>
      <el-table-column align="center" prop="created_at" label="发布时间" width="220">
        <template slot-scope="scope">
          <i class="el-icon-time"></i>
          <span>{{scope.row.timestamp}}</span>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
// import { fetchList } from '@/api/article'

export default {
  name: 'selectExcel',
  data() {
    return {
      list: [],
      listLoading: true,
      multipleSelection: [],
      downloadLoading: false,
      filename: ''
    }
  },
  created() {
    this.fetchData()
    this.list.forEach((ele, index) => {
      ele.id = index
    })
  },
  methods: {
    async fetchData() {
      this.listLoading = true
      const { code, data } = await this.api.get('/api/template/getExcelList')
      if (code === 200) {
        this.list = data.array
        this.listLoading = false
        this.list.forEach((ele, index) => {
          ele.id = index
        })
      }
    },
    handleSelectionChange(val) {
      this.multipleSelection = val
    },
    handleDownload() {
      if (this.multipleSelection.length) {
        this.downloadLoading = true
      import('utils/excel/Export2Excel').then(excel => {
        const tHeader = ['序号', '文章标题', '作者', '阅读数', '发布时间']
        const filterVal = ['id', 'title', 'author', 'pageviews', 'timestamp']
        const list = this.multipleSelection
        const data = this.formatJson(filterVal, list)
        excel.export_json_to_excel(tHeader, data, this.filename)
        this.$refs.multipleTable.clearSelection()
        this.downloadLoading = false
      })
      } else {
        this.$message({
          message: '请至少选择一条记录',
          type: 'warning'
        })
      }
    },
    formatJson(filterVal, jsonData) {
      return jsonData.map(v => filterVal.map(j => v[j]))
    }
  }
}
</script>
