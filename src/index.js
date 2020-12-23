import myNavigation from './scripts/myNavigation'

const myVerticalNavigation = new myNavigation()

myVerticalNavigation.addNavigation()
myVerticalNavigation.setSectionColors(['#FFD700', '#8FBC8F', '#FF7F50', '#00BFFF', '#FFB6C1'])
myVerticalNavigation.setAnimationDuration(1000)

const addPopUp = () => {
  const popUp = document.createElement('div')
  const container = document.querySelector('.fullscreen')
  popUp.classList.add('popUp')

  container.append(popUp)

  setTimeout(() => {
    popUp.remove()
  }, 1000)
}

myVerticalNavigation.onScrollStart(addPopUp)
