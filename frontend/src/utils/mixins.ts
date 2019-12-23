export default function (vuetify: any) {
  return {
    computed: {
      $smallScreen () {
        return vuetify.framework.breakpoint.smAndDown
      }
    }
  }
}
