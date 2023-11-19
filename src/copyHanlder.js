import { throttle, copy } from './utils.js'

async function main() {
  const contentViews = document.querySelector('#content_views')
  const copyBtns = document.querySelectorAll('[data-title="登录后复制"]')

  const copyBtnHandler = throttle(e => {
    const btn = e.target
    const title = btn.dataset.title
    const text = btn.parentNode?.innerText
    if (text) {
      copy(text)
      btn.dataset.title = '复制成功'
      setTimeout(() => {
        btn.dataset.title = title
      }, 512)
    }
  }, 512)

  contentViews.addEventListener('copy', () => {
    const v = window.getSelection().toString()
    copy(v)
  })
  copyBtns.forEach(btn => btn.addEventListener('click', copyBtnHandler))

  console.log('copy event registered')
}

main().catch(console.error)
