import React from 'react'

const HeroStreams = () => {
  return (
    <header className="Header">
      <div className="Header-content">
        <div className="Header-items">
          <div className="Header-item">
            <div className="Header-title">
              <a href="https://instagram.com/gndx" target="_blank" rel="noopener noreferrer">
                <h2>
                  <span>Live Streams</span>@gndx
                </h2>
              </a>
              <p>❤️👨‍💻🔥</p>
            </div>
          </div>
          <div className="Header-item">
            <figure>
              <img src="https://arepa.s3.amazonaws.com/youtube.png" alt="Youtube" />
            </figure>
            <div className="Header-title">
              <a
                href="https://www.youtube.com/channel/UCw05fUBPwmpu-ehXFMqfdMw?sub_confirmation=1"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h2>
                  <span>Youtube</span>Oscar Barajas
                </h2>
              </a>
              <p>🗓️ Viernes 9PM</p>
            </div>
          </div>
          <div className="Header-item">
            <figure>
              <img src="https://arepa.s3.amazonaws.com/youtube.png" alt="Youtube" />
            </figure>
            <div className="Header-title">
              <a
                href="https://www.youtube.com/channel/UCw05fUBPwmpu-ehXFMqfdMw?sub_confirmation=1"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h2>
                  <span>Youtube</span>Oscar Barajas
                </h2>
              </a>
              <p>🗓️ Sabado 10PM</p>
            </div>
          </div>
          <div className="Header-item">
            <figure>
              <img src="https://arepa.s3.amazonaws.com/app-icons-twitch.png" alt="Twitch" />
            </figure>
            <div className="Header-title">
              <a href="https://twitch.tv/gndxdev" target="_blank" rel="noopener noreferrer">
                <h2>
                  <span>Twitch</span>gndxdev
                </h2>
              </a>
              <p>🗓️ Domingos 8PM</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default HeroStreams
