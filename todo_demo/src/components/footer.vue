<template>
  <div id="footer">
    <span style="position: fixed;bottom: 20px;">Written by {{author}}</span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      author: "LJZ",
    };
  },
};
</script>

<style>
#footer {
    margin-top: 10px;
    text-align: center;
    /* color: #bfbfbf;
     */
    color: rgb(248, 241, 241);
    font-size: 10px;
    text-shadow: 0 1px 0 #bfbfbf;
    display: flex;
    justify-content: center;
}
</style>
