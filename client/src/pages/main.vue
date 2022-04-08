<template>
  <div id="mainview">
    <SidebarMenu />
    <h1>{{titleText}}</h1>
    <img height="500" width="500" v-bind:src="getMainLogoUrl()"/>
    <h2>{{dashboardData}}
  </div>
</template>

<script>
import SidebarMenu from '../components/MenuTab/SidebarMenu.vue'
// main page를 정의합니다.
export default {
  components: {
    SidebarMenu
  },
  created () {
    // 페이지 최초 생성 시
  },
  mounted () {
    // 페이지 드로잉 이후
    this.getDashboardInfo()
  },
  // binding data
  data () {
    return {
      titleText: '으딜 들어와!',
      dashboardData: null
    }
  },
  methods: {
    // 메인 화면의 로고 경로 가져오기
    getMainLogoUrl () {
      var filename = 'cat_punch.png'
      var images = require.context('../assets/images/', false, /\.png$/)
      return images('./' + filename)
    },
    getDashboardInfo () {
      this.$http.post('/api/init/getDashboardData', {
        user: 'admin'
      })
        .then((res) => {
          if (res.data.none || res.data.error) {
            alert('none or error data')
            return
          }
          var data = res.data
          this.dashboardData = data
        })
    }
  }
}
</script>

<style>
#mainview {
  padding-left:50px;
}
</style>
