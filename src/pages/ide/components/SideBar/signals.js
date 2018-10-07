var signals = {
  methods: {
    // 打开设置窗口,点击设置按钮时触发
    SIGNAL_OPENSET(sender, receiver = 'parent', slot = 'slotToggleSettings') {
      return {
        event: "openset",
        sender: sender,
        receiver: receiver,
        slot: slot,
        kwargs: {}
      }
    },
    SIGNAL_CLEAR(sender, receiver = 'cli', slot = 'slotClearTerm') {
      return {
        event: "clearTerm",
        sender: sender,
        receiver: receiver,
        slot: slot,
        kwargs: {}
      }
    }
  }
}

export default signals