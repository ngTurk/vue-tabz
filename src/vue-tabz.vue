<template>
  <ul class="vue-tabz" :style="cssVars">
    <li
      v-for="(tabData, i) in data"
      :key="tabData"
      :class="{ active: currentIndex === i }"
      @click="changeIndex(i)"
    >
      {{ tabData }}
    </li>
  </ul>
</template>

<script>
export default {
  name: 'vue-tabz',
  data() {
    return {
      currentIndex: 0,
    };
  },
  props: {
    data: {
      type: Array,
      default: () => [],
    },
    mainColor: {
      type: String,
      default: "",
    },
    maxWidth: {
      type: String,
      default: "",
    },
  },
  computed: {
    cssVars() {
      return {
        "--main-color": `#${this.mainColor.replace('#', '')}`,
        "--max-width": `${parseInt(this.maxWidth, 10)}px`,
      };
    },
  },
  methods: {
    /**
     * Change current index based on tab index
     *
     * @param {Number} index tab index
     * @return void
     */
    changeIndex(index) {
      this.currentIndex = index;

      this.$emit("clickedTab", {
        index,
        tab: this.data[index],
      });
    },
  },
};
</script>

<style>
    .vue-tabz {
        color: var(--main-color);
        display: flex;
        font-size: 14px;
        height: 30px;
        justify-content: space-between;
        line-height: 16px;
        list-style-type: none;
        margin: 0;
        max-width: var(--max-width);
        padding: 0;
        text-align: center;
        width: 100%;
    }

    .vue-tabz li {
        border-bottom: solid 1px var(--main-color);
        cursor: pointer;
        opacity: 0.3;
        padding-bottom: 12px;
        text-transform: uppercase;
        width: 100%;
    }

    .vue-tabz li.active {
        border-bottom: solid 2px var(--main-color);
        opacity: 1;
    }

    @media only screen and (max-width: 640px) {
        .vue-tabz {
            padding: 0;
        }
    }
</style>