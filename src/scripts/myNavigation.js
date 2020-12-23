export default class myNavigation {
  constructor(){
    this.body = document.querySelector('.fullscreen')
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
    const dotsContainer = document.createElement('div')

    dotsContainer.classList.add('dots')

    this.body.append(dotsContainer)

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
    this.#animateScroll(numberOfSection - 1)
    this.#updateActiveClass(numberOfSection - 1)
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

  onScroll(event, callback) {
    if(event === 'start') {
      this.onScrollCallbacks.start.push(callback)
    } else if(event === 'end') {
      this.onScrollCallbacks.end.push(callback)
    }
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

   
    this.spinValue = count
    this.content.style.transform = `translateY(-${count * 100}vh)`

    setTimeout(() => {
      this.canScroll = true

      this.onScrollCallbacks.end.forEach(callback => {
        callback()
      })
    }, this.animationDuration)
  }

  #updateActiveClass = (numberOfSection) => {
    const dots = [...document.querySelectorAll('.dots__item')]

    dots.forEach((dot) => dot.classList.remove('dots__item_is-active'))
    dots[numberOfSection].classList.add('dots__item_is-active')
  }
}