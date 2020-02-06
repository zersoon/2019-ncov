var pageScroll = {
  scrollTop: '',
  bodyCls: 'modal-open',
  lock: function () {
    this.scrollTop = document.scrollingElement.scrollTop
    document.body.classList.add(this.bodyCls)
    document.body.style.top = -this.scrollTop + 'px'
  },
  unlock: function () {
    document.body.classList.remove(this.bodyCls)
    document.scrollingElement.scrollTop = this.scrollTop
  }
}

export { pageScroll }
