import React from 'react'

export default function SideList() {
    return (
        <div id='side-list'>
          <ul className="list-group list-group-flush" style={{ color: 'aqua' }}>
            <li className="list-group-item"><a className="btn7 dropdown-toggle" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">Languages</a>
              <div className="collapse" id="collapseExample">
                <ul className="list-group list-group-flush">
                  <li className="list-group-item sub">Albanian</li>
                  <li className="list-group-item sub">Arabic</li>
                  <li className="list-group-item sub">Bhojpuri</li>
                  <li className="list-group-item sub">Bengali</li>
                  <li className="list-group-item sub">Catalan</li>
                  <li className="list-group-item sub">Dutch</li>
                  <li className="list-group-item sub">English</li>
                  <li className="list-group-item sub">French</li>
                </ul>
              </div></li>
            <li className="list-group-item">A second item</li>
            <li className="list-group-item">A third item</li>
          </ul>
        </div>
    )
}
