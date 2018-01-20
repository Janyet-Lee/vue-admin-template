<template>
  <div class="m-pdf-viewer">
    <code class="introduction">
      <span>根据不同项目需求，有可能会使用到pdf预览组件，因此先在本项目里集成该组件，可根据实际情况进行使用</span>
      <a class="link" href="https://github.com/FranckFreiburger/vue-pdf">文档链接</a>
    </code>
    <div class="page-control">
      <button @click="pre">向前翻页</button>
      <span>{{currentPage}} / {{pageCount}}</span>
      <button @click="next">向后翻页</button>
    </div>
    <div class="page-control">
      <input v-model.number="stashPage" type="number">
      <button @click="jump">跳转</button>
    </div>
    <pdf 
      src="https://cdn.mozilla.net/pdfjs/tracemonkey.pdf"
      :page="page" 
      @page-loaded="currentPage = $event"
      @num-pages="pageCount = $event" >
    </pdf>
  </div>
</template>

<script>
import pdf from 'vue-pdf'

export default {
  data() {
    return {
      page: 2,
      pageCount: 0,
      currentPage: 0,
      stashPage: 0
    }
  },
  components: {
    pdf
  },
  methods: {
    pre() {
      this.page = this.page <= 1 ? 1 : (this.page -= 1)
    },
    next() {
      this.page = this.page < this.pageCount ? (this.page += 1) : this.pageCount
    },
    jump() {
      this.page = this.stashPage
    }
  }
}
</script>


<style lang="scss">
.m-pdf-viewer {
  .introduction {
    margin-top: 20px;
    margin-left: 30px;
  }

  .link {
    color: #42b983;
  }

  .page-control {
    text-align: center;
    margin-bottom: 15px;

    button {
      border: none;
      background: transparent;
      color: #42b983;
      font-size: 14px;
      outline: none;
    }
  }
}
</style>
