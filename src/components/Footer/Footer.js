import './footer.css'
import ScrollTop from '../ScrollTop';

const Footer = () => {
  return (
    <>
      {/* <div>
        <button className='scrollToTopBtn' onClick={scrollToTop}>☝️</button>
      </div> */}
      <ScrollTop showBelow={50} />
      <footer id="myFooter">
        <div className="art">
          <div className="content">
            <section>
              <h3>Movie App</h3>
            </section>
            {/* <section>
              <div className="social">
                <i>github <i class="fab fa-github"></i></i>
              </div>
            </section> */}
            <section>
              <div className="notice">
                Créer avec ❤️ par
                <strong> Emmanuel Ratier</strong>
              </div>
            </section>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer