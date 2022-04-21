import img from "../media/img.png";

const Follow = props => {
    return (
      <section className="follow">
        <div className="bank">
          <h3 className="title">FOLLOW B.A.N.K</h3>
          <div className="social">
            <span className="face circle">
              <i class="fa-brands fa-facebook-f"></i>
            </span>
            <span className="twitter circle">
              <i class="fa-brands fa-twitter"></i>
            </span>
            <span className="linked circle">
              <i class="fa-brands fa-linkedin-in"></i>
            </span>
            <span className="youtube circle">
              <i class="fa-brands fa-youtube"></i>
            </span>
          </div>
          <p className="content">
            BANKCODE.com <span className="slash">|</span> info@BANKCODE.com{" "}
            <span className="slash">|</span>
            702-342-0742
          </p>
        </div>
        <div className="spliter"></div>
        <div className="contact">
          <div className="info">
            <div className="photo">
              <img src={img} alt="person" />
            </div>
            <div className="details">
              <h3 className="title">CONNECT WITH ME</h3>
              <p className="content">ESTHER WILDENBERG</p>
              <p className="content">BANKCODE.COM/ESTHER</p>
              <p className="content">esther@bankcode.com</p>
              <p className="content">702-342-0742</p>
              <div className="social">
                <span className="face circle">
                  <i class="fa-brands fa-facebook-f"></i>
                </span>
                <span className="twitter circle">
                  <i class="fa-brands fa-twitter"></i>
                </span>
                <span className="linked circle">
                  <i class="fa-brands fa-linkedin-in"></i>
                </span>
                <span className="instg circle">
                  <i class="fa-brands fa-instagram"></i>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
}

export default Follow;