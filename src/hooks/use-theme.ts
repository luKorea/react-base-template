// 跟随系统主题自动切换
const darkThemeMq = window.matchMedia('(prefers-color-scheme: dark)')

function handleFunction(e: any) {
  if (e.matches) {
    document.body.setAttribute('arco-theme', 'dark')
  } else {
    document.body.removeAttribute('arco-theme')
  }
}

const useTheme = () => {
  if (darkThemeMq.addEventListener) {
    darkThemeMq.addEventListener('change', handleFunction)
  } else {
    darkThemeMq.addListener(handleFunction)
  }
}

export { useTheme }
