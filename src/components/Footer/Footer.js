import './footer.css'

const Footer = () => {

  const rootElement = document.documentElement
  const scrollToTop = () => {
    // scroll to top logic
    rootElement.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }
  document.addEventListener('DOMContentLoaded', function () {
    let buttonToTop = document.querySelector('.scrollToTopBtn')
    //traitement le dom est accessible
    window.addEventListener('scroll', () => {
      console.log('scroll !')
      if (window.scrollY > 150) {
        buttonToTop.classList.add('showBtn')
      }
      else if (window.scrollY < 150) {
        buttonToTop.classList.remove('showBtn')
      }
    })
  });
  return (
    <>
      <footer>
        <button className='scrollToTopBtn' onClick={scrollToTop}>☝️</button>
      </footer>
    </>
  )
}

export default Footer