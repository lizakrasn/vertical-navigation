import Slider from './scripts/Slider'

const slider = new Slider({
  body: document.querySelector('.fullscreen'),
  sections: [...document.querySelectorAll('.section')],
  content: document.querySelector('.sections'),
  addNavigation: true,
  duration: 1000,
  sectionColors: ['#FFD700', '#8FBC8F', '#FF7F50', '#00BFFF', '#FFB6C1'],
})

slider.goToSection(1)

const addPopUp = () => {
  const popUp = document.createElement('div')
  const container = document.querySelector('.fullscreen')
  popUp.classList.add('popUp')

  container.append(popUp)

  setTimeout(() => {
    popUp.remove()
  }, 1000)
}

slider.onScroll('start', addPopUp)
