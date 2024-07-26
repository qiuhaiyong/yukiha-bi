export default {
  changeDataOptionsNormal(value, key) {
    const id = this.activeRectId
    if (id === null) {
      return
    }
    const index = this.rects.findIndex((item) => item.id === id)
    this.rects[index].dataOptions[key] = value
  }
}
