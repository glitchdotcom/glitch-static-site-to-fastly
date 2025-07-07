import { html } from "lighterhtml";
import settings from "../settings.json";

export const renderHeader = html.node`<div>
  <div class='avatar-container'>
    <img src='${settings.avatarImage}' class='avatar' alt='${settings.name}' />
  </div>
  <h1> <i> <a href="https://open.spotify.com/album/723yOSHWeJRcBQZS0JJzLk?autoplay=true">${settings.name}</i></a></h1>
</div>`;
