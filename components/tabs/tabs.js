Component({
  mixins: [{
    didMount() {
      console.log(this.props)
    },
  }],
  data: {
    y: 2,
    titleList: [1, 2, 3]
  },
  props: {
    x: 1
  },
  didUpdate(prevProps, prevData) {

  },
  didUnmount() { },
  methods: {
    onMyClick(ev) {
     this.props.onCounterPlusOne(this.data.titleList);
    },
  },
})