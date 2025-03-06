import { html } from "lighterhtml";
import settings from "../settings.json";

export const renderFooter = html.node`<footer class="footer">
  <div class="tagline" style="color:darkred">
    Photography: <a href="https://www.instagram.com/nocta_photography/">@nocta_photography</a>,<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <a href="https://www.instagram.com/dani_morell/"
      >@dani_morell</a
      >, Paula Gutiérrez
       <br />
    Design: <a href="https://www.instagram.com/alchemicalowl/">@alchemicalowl</a> <br />
    Created with <a href="https://glitch.com/">Glitch</a> and served by <a href="https://www.fastly.com/">Fastly</a> 
  </div>
</footer>
`;
