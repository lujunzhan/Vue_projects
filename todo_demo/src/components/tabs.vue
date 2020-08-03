<template>
  <div class="bottom_part">
    <div class="helper">
      <span class="left">{{unFinishedTodoLength}} items left</span>
      <span class="tabs">
        <span v-for="state in states" :key="state" :class="[state,filter === state?'actived':' ']" @click="toggleFilter(state)">{{state}}</span>
      </span>
      <span class="clear" @click="clearAllCompleted">Clear Completed</span>
    </div>
    <!-- 底部样式 -->
    <div class="bottom1"></div>
    <div class="bottom2"></div>
  </div>
</template>

<script>
  export default {
    props: {
      filter: {
        type: String,
        required: true,
      },
      todos: {
        type: Array,
        required: true
      }
    },
    data() {
      return {
        states: ["All", "Active", "Completed"],
      };
    },
    computed: {
      unFinishedTodoLength() {
        return this.todos.filter(todo => !todo.completed).length
      }
    },
    methods: {
      clearAllCompleted() {
        this.$emit('clearAllCompleted')
      },
      toggleFilter(state) {
        this.$emit('toggle', state)
      },

    },
  };
</script>

<style scoped="scoped">
  .bottom_part
  {
    height: 40px;
  }
  .helper {
    font-weight: 100;
    display: flex;
    justify-content: space-between;
    padding:8px 0;
    line-height: 30px;
    background-color: #fff;
    font-size: 14px;
    -webkit-font-smoothing: antialiased;
    align-items: center;
  }

  .bottom1 {
    position: relative;
    top: 0px;
    width: 99%;
    left: 2px;
    height: 4px;
    background-color: #f3f3f3;
    border: 1px solid #d6d6d6;
  }

  .bottom2 {
    position: relative;
    top: 0px;
    width: 98%;
    left: 5px;
    height: 4px;
    background-color: #f3f3f3;
    box-shadow:0px 0px 1px 1px #d6d6d6;
  }

  .left,
  .clear,
  .tabs {
    padding: 0 10px;
    box-sizing: border-box;
    -webkit-flex-wrap: nowrap;
  }

  .left,
  .clear {
    width: 150px;
  }

  .left {
    text-align: left;
  }

  .clear {
    text-align: right;
    cursor: pointer;
  }

  .tabs {
    width: 200px;
    display: flex;
    justify-content: space-around;
  }
  /* 当屏幕发生变化时 */
  @media screen and (max-width:500px) {
    .helper{
      /* display: block; */
    }
  }

  .All,
  .Active,
  .Completed {
    display: inline-block;
    padding: 0 10px;
    cursor: pointer;
    border: 1px solid rgba(175, 47, 47, 0);

  }

  .All:hover,
  .Active:hover,
  .Completed:hover {
    border-color: rgba(175, 47, 47, 0.1);
    border-radius: 5px;
  }

  .actived {
    border-color: rgba(175, 47, 47, 0.4);
    border-radius: 5px;
  }
</style>
