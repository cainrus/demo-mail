import type { App } from 'vue'

export const FocusPlugin = {
  install(app: App) {
    app.directive('focus', {
      mounted(el) {
        el.focus()
      }
    })
  }
}
