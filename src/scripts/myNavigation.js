export default class myNavigation {
  constructor(){
    this.sections = [...document.querySelectorAll('.section')]
    this.content = document.querySelector('.sections')

    this.animationDuration = 500

    this.spinValue = 0
    this.canScroll = true

    this.onScrollCallbacks = {
      'end': [],
      'start': []
    }

    this.#subscribeToMousewheel()
  }

  addNavigation = () => {
    const dotsContainer = document.querySelector('.dots')

    this.sections.forEach(() => {

      const dot = document.createElement('a')

      dot.classList.add('dots__item')

      dotsContainer.append(dot)
    })

    const dots = [...document.querySelectorAll('.dots__item')]

    dots.forEach((dot, index) => {

      if(index === 0) {
        dot.classList.add('dots__item_is-active')
      }

      dot.addEventListener('click', (event) => {
        event.preventDefault()

        this.#animateScroll(index)

        this.#updateActiveClass(index)
      })
    })
  };

  goToSection = (numberOfSection) => {
    animateScroll(numberOfSection - 1)
  }

  setSectionColors = (colors) => {
    this.sections.forEach((section, index) => {
      section.style.backgroundColor = colors[index]
    })
  }

  setAnimationDuration = (duration) => {
    this.animationDuration = duration

    this.content.style.transitionDuration = `${duration}ms`
  }

  onScrollStart(callback) {
    console.log('start')
    this.onScrollCallbacks.start.push(callback)
  }

  onScrollEnd(callback) {
    console.log('end')
    this.onScrollCallbacks.end.push(callback)
  }

  #subscribeToMousewheel = () => {
    window.addEventListener('mousewheel', (event) => {
      if(!this.canScroll) {
        return
      }

      this.canScroll = false

      if (event.deltaY > 0) {
        if(this.spinValue < this.sections.length -1) {
          this.spinValue += 1;
        }
      } else {
        if(this.spinValue > 0) {
          this.spinValue -= 1;
        }
      }

      this.#animateScroll(this.spinValue)
      this.#updateActiveClass(this.spinValue)
    })
  }

  #animateScroll = (count) => {
    this.onScrollCallbacks.start.forEach(callback => {
      callback()
    })

    this.content.style.transform = `translateY(-${count * 100}vh)`

    setTimeout(() => {
      this.canScroll = true

      this.onScrollCallbacks.end.forEach(callback => {
        callback()
      })
    }, this.animationDuration)
  }

  #updateActiveClass = (numberOfDot) => {
    const dots = [...document.querySelectorAll('.dots__item')]

    dots.forEach((dot) => dot.classList.remove('dots__item_is-active'))
    dots[numberOfDot].classList.add('dots__item_is-active')
  }
}