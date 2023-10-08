import { html } from "lighterhtml";
import settings from "../settings.json";

export const renderFooter = html.node`<footer class="footer">
  <div class="tagline" style="color:darkred">
    Photography: <a href="https://www.instagram.com/nocta_photography/">@nocta_photography</a> <br />
    Design: <a href="https://www.instagram.com/alchemicalowl/">@alchemicalowl</a> <br />
  </div>
</footer>
`;
