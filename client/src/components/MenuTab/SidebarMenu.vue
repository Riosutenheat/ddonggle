<template>
  <sidebar-menu
    class="sidebar"
    :collapsed="collapsed"
    :menu="menu"
    @item-click="onItemClick"
    @collapse="onCollapse"
    />
</template>

<script>
export default {
  data () {
    return {
      collapsed: true,
      menu: [
        {
          header: true,
          title: 'ddongle',
          hiddenOnCollapse: true
        },
        {
          title: 'Dashboard',
          icon: 'fa fa-list'
        }
        // {
        //   title: 'Charts',
        //   icon: 'fa fa-chart-area',
        //   child: [
        //     {
        //       title: 'Sub Link'
        //     }
        //   ]
        // }
      ]
    }
  },
  methods: {
    onItemClick (e, i) {
      console.log('onItemClick')
    },
    onCollapse (c) {
      console.log('onCollapse')
      this.collapsed = c
    }
  }
}
</script>

<style>
.sidebar.v-sidebar-menu .vsm--toggle-btn:after {
  content: '\f105';
  font-family: "FontAwesome";
  display: inline-block;
}
.sidebar.v-sidebar-menu.vsm_expanded .vsm--toggle-btn:after {
  transform: rotate(180deg);
}
</style>
