import './src/styles/main.css'
import './src/styles/markdown.css'
import 'uno.css'

export function setupVue3({ app }) {
    app.provide('test', 'hello')
    // app.use(...)
  }
  