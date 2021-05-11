
function handleResize(windowHeight, windowWidth){
function debounce(fn, ms) {
    let timer
    return _ => {
      clearTimeout(timer)
      timer = setTimeout(_ => {
        timer = null
        fn.apply(this, arguments)
      }, ms)
    };
  }

  React.useEffect(() => {
    const debouncedHandleResize = debounce(function handleResize() {
        setDimensions({
          height: window.innerHeight,
          width: window.innerWidth
        })
      }, 1)

    window.addEventListener('resize', debouncedHandleResize)

    return _ => {
        window.removeEventListener('resize', debouncedHandleResize)
  }
})
}