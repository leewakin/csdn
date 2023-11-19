async function main() {
  const style = document.createElement('style')
  style.textContent = `
    .passport-login-container {
      display: none !important;
    }

    #content_views pre code {
      user-select: text !important;
    }
  `
  document.head.append(style)

  console.log('css inject success')
}

main().catch(console.error)
