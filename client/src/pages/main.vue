<template>
  <div>
    <h1>{{titleText}}</h1>
    <img height="500" width="500" v-bind:src="getMainLogoUrl()"/>
    <h2>{{dashboardData}}
  </div>
</template>

<script>
export default {
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
</style>
