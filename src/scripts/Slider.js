export default class Slider {
  constructor({
    body,
    sections,
    content,
    duration,
    addNavigation,
    sectionColors
  }){
    this.body = body
    this.sections = sections
    this.content = content

    this.animationDuration = duration || 1000
    this.navigation = addNavigation || false
    this.colors = sectionColors || []

    this.activeSectionIndex = 0
    this.canScroll = true
    this.prevTime = new Date().getTime();

    this.onScrollCallbacks = {
      'end': null,
      'start': null
    }

    this.addNavigation(this.navigation)
    this.setAnimationDuration(this.animationDuration)
    this.setSectionColors(this.colors)
    this.#subscribeToMousewheel()

    this.resetTransform()
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
    this.onScrollCallbacks[event] = callback
  }

  wheelEvent = (event) => {
    let curTime = new Date().getTime();

    let timeDiff = curTime - this.prevTime;
    this.prevTime = curTime;

    console.log(curTime, this.prevTime, timeDiff)

    if (timeDiff < 300) {
      event.preventDefault()
      return
    }

    console.log('called wheel event', this.canScroll)
    if(!this.canScroll) {
      return
    }

    this.canScroll = false

    if (event.deltaY > 0) {
      if(this.activeSectionIndex < this.sections.length -1) {
        this.activeSectionIndex += 1;
      }
    } else {
      if(this.activeSectionIndex > 0) {
        this.activeSectionIndex -= 1;
      }
    }

    this.#animateScroll(this.activeSectionIndex)
    this.#updateActiveClass(this.activeSectionIndex)
  }

  #subscribeToMousewheel = () => {
    window.addEventListener('wheel', (event) => this.wheelEvent(event))
  }

  #animateScroll = (count) => {
    if (this.onScrollCallbacks.start) {
      this.onScrollCallbacks.start()
    }

    this.activeSectionIndex = count
    this.content.style.transform = `translateY(-${count * 100}vh)`
    console.log('start animate', this.canScroll)

    setTimeout(() => {
      this.canScroll = true
      console.log('end setTimeout', this.canScroll)

      if (this.onScrollCallbacks.end) {
        this.onScrollCallbacks.end()
      }
    }, this.animationDuration)
  }

  #updateActiveClass = (numberOfSection) => {
    const dots = [...document.querySelectorAll('.dots__item')]

    dots.forEach((dot) => dot.classList.remove('dots__item_is-active'))
    dots[numberOfSection].classList.add('dots__item_is-active')
  }

  resetTransform = () => {
    setTimeout(()=>{
      this.content.style.transitionDuration = null
      this.content.style.transform = `translateY(-${this.sections.length*100}vh)`
      setTimeout(() => {
        this.content.style.transitionDuration = null
        this.content.style.transform = 'translateY(0)'
        setTimeout(()=>{
          this.setAnimationDuration(this.animationDuration)
        }, 30)
      }, 30);
    }, 30);
  }
}