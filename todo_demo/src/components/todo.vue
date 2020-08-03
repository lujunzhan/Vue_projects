<template>
  <section class="real-app">
    <input
      type="text"
      class="add-input"
      autofocus="autofocus"
      placeholder="需要做什么?"
      @keyup.enter="addTodo"
    />
    <Item
    :todo="todo"
    v-for="todo in filteredTodos"
    :key="todo.id"
    @del="deleteTodo"
    />
    <Tabs
    :filter="filter"
    :todos="todos"
    @toggle="toggleFilter"
    @clearAllCompleted="clearAllCompleted"
    ></Tabs>
  </section>
</template>

<script>
import Item from "./item.vue";
import Tabs from "./tabs.vue";

let id =0;
export default {
  data() {
    return {
      todos: [],
      filter:'All'
    };
  },
  components: {
    Item,
    Tabs
  },
  computed: {
      filteredTodos(){
          if(this.filter === 'All')
          {
              return this.todos
          }
          const completed = (this.filter === 'Completed')
          return this.todos.filter(todo=>completed===todo.completed)
      }
  },
  methods: {
    addTodo(e) {
      // 增加todo的项
      // 当不为空时才能输入
      if(e.target.value)
      {
        this.todos.unshift({
            id:id++,
            content:e.target.value.trim(),
            completed:false
        })
        e.target.value = ''
      }

    },
    deleteTodo(id){
      // 删除某一项
        this.todos.splice(this.todos.findIndex(todo=>todo.id ===id ),1)
    },
    toggleFilter(state)
    {
      // 状态切换
        this.filter = state
    },
    clearAllCompleted(){
      // 清除所有完成的项目
        this.todos = this.todos.filter(todo=>!todo.completed)
    }
  },

};
</script>

<style scoped>

  @media screen and (max-width:500px) {
    .real-app{
      width: 82% !important;
      height: 400px !important;
    }
  }
.real-app {
  width: 55%;
  margin: 0 auto;
  height: 477px;
  overflow-y: scroll;
  overflow-x:hidden;
  /* box-shadow: 0 0 5px #666; */
}
/* 当要出现滚动条时 进行隐藏 */
 ::-webkit-scrollbar {
          display: none;
 }
/* 修改placeholder */
::-webkit-input-placeholder { /* WebKit browsers */
color: #D9D9D9;
}
:-moz-placeholder { /* Mozilla Firefox 4 to 18 */
color:#D9D9D9;
}
::-moz-placeholder { /* Mozilla Firefox 19+ */
color: #D9D9D9;
}
:-ms-input-placeholder { /* Internet Explorer 10+ */
color:#D9D9D9;
}

.add-input {
  position: relative;
  margin: 0;
  width: 100%;
  font-size: 24px;
  font-family: inherit;
  font-weight: inherit;
  line-height: 1.4rem;
  border: 0;
  outline: none;
  color: inherit;
  padding: 6px;
  border: 1px solid #999;
  box-shadow: inset 0 -1px 5px 0 rgba(0, 0, 0, 0.5);
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
  padding: 16px 16px 16px 16px;
  border: none;
  box-shadow: inset 0 -1px 1px rgba(0, 0, 0, 0.1);
}
</style>
