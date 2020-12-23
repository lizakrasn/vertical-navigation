import myNavigation from './scripts/myNavigation'

const mySlider = new myNavigation()

mySlider.addNavigation()
mySlider.setSectionColors(['#FFD700', '#8FBC8F', '#FF7F50', '#00BFFF', '#FFB6C1'])
mySlider.setAnimationDuration(1000)

const addPopUp = () => {
  const popUp = document.createElement('div')
  const container = document.querySelector('.fullscreen')
  popUp.classList.add('popUp')

  container.append(popUp)

  setTimeout(() => {
    popUp.remove()
  }, 1000)
}

mySlider.onScroll('start', addPopUp)
