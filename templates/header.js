import { html } from "lighterhtml";
import settings from "../settings.json";

export const renderHeader = html.node`<div>
  <div class='avatar-container'>
    <img src='${settings.avatarImage}' class='avatar' alt='${settings.name}' />
  </div>
  <h1> <a href="https://www.instagram.com/p/C5THW6Vijgu/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==">${settings.name}</a></h1>
</div>`;
