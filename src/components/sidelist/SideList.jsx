import React from "react";

export default function SideList() {
  return (
    <div id="side-list">
      <ul class="list-group list-group-flush" style={{ color: "aqua" }}>
        <li class="list-group-item">
          <a
            class="btn5 dropdown-toggle"
            data-bs-toggle="collapse"
            href="#collapseExample"
            role="button"
            aria-expanded="false"
            aria-controls="collapseExample"
          >
            Languages
          </a>
          <div class="collapse" id="collapseExample">
            <ul class="list-group list-group-flush">
              <li class="list-group-item sub">Albanian</li>
              <li class="list-group-item sub">Arabic</li>
              <li class="list-group-item sub">Bhojpuri</li>
              <li class="list-group-item sub">Bengali</li>
              <li class="list-group-item sub">Catalan</li>
              <li class="list-group-item sub">Dutch</li>
              <li class="list-group-item sub">English</li>
              <li class="list-group-item sub">French</li>
            </ul>
          </div>
        </li>
        <li class="list-group-item">A second item</li>
        <li class="list-group-item">A third item</li>
      </ul>
    </div>
  );
}
