const themeButtons = document.querySelectorAll('.button-theme')

const handleThemeChange = (e) => {
  const theme = e.currentTarget.dataset.theme;
  document.documentElement.setAttribute('data-theme', theme)
  localStorage.setItem('customTheme', theme)
}

themeButtons.forEach(c => c.addEventListener('click', handleThemeChange))




window.addEventListener('DOMContentLoaded', () => {
  let customTheme = window.localStorage.getItem('customTheme')
  if(customTheme) 
  {
    document.documentElement.setAttribute('data-theme', customTheme)
  }
  })