// @flow
import { addLocaleData, IntlProvider, FormattedMessage } from 'react-intl'

export const work = [
  {
    workplaceId: 'infoartnet',
    workplaceName: 'InfoartNet',
    workplaceUrl: 'http://infoartnet.hu',
    workplaceLogo: 'infoartnet.png',
    workplaceCity: 'Győr',
    workedFrom: 2008,
    workedTill: 2009,
    position: 'Graphic and Sitebuilder',
    jobDescription: 'Creating graphic design for clients in Fireworks, "sliceing" the self made or other designs, creating web templates and implementing the templates into the multisite CMS system. Designing and programming flash banners or flash webpage components.',
    furtherProjects: [
      'https://teknosfestek.hu',
      'http://johidegkonyha.hu/',
      'http://www.fotoplus.hu/',
      'http://www.ipvideokamera.hu',
      'http://www.febobo.hu'
    ],
  },
  {
    workplaceId: 'greentube',
    workplaceName: 'Greentube Internet Entertainment Solutions GmbH',
    workplaceUrl: 'http://greentube.com',
    workplaceLogo: 'greentube.svg',
    workplaceCity: 'Wien',
    workedFrom: 2009,
    workedTill: 2016,
    position: 'Front-End Developer',
    jobDescription: '<h4>Implementation of websites</h4>\
    <ul>\
      <li>Relaunch websites – Liftin&apos; up Sites to State of Art. Big platforms 200.000 - 500.000 user per Day.</li>\
      <li>Multi Language support up to 22 Language (included arabic, russian, georgian, greek, etc.)</li>\
      <li>Multi Site solution with central Codebase for multiple Websites</li>\
    </ul>\
    <h4>Maintenance</h4>\
    <ul>\
      <li>Deployment to dev, staging and live Environments with Git, Jenkins, FTP</li>\
      <li>Bugfixes of existing Systems, Documentation of issues in Jira</li>\
      <li>Cooperation with Platform Management Team - Daily work, nothing special,</li>\
      <li>Tickets with Scrum (Milestones, Releases, Versions)</li>\
    </ul>\
    <h4>Cooperation with:</h4>\
    <ul>\
      <li>Business Intelligence Team, implementation of requests (Adobe Omniture)</li>\
      <li>Marketing Team - Maintenance and Development of Affiliate system Code (XML, XSL dino)</li>\
      <li>CRM Team - adjustments to Teaser tool, creating of Landingpages, E-Mail templates</li>\
      <li>Internal and external Testers (Games Quality)</li>\
      <li>External Companies regarding Implementation they Code into our Websites (Games in Iframe, Flash, HTML5)</li>\
      <li>External AB Test Company (Maximiser), Vendor Code Implementation of test-winners</li>\
      <li>Backend Team (DotNet) - Implementation of changes im XML, JSON. Building custom frontend for an existing Backend, later writing VMC templates for C#</li>\
      <li>Graphic Team - collective Definition of graphical Assets Formats, architect, CDN (more ten thousand Pictures) Technical communication with UI Graphic, making decisions about the Implementation of Design, wireframing, mockups</li>\
      <li>Mobile Team - at the beginning separate mobile Website solutions, later matches to they WebApps</li>\
      <li>Database Team - Adoption of used attributes, asking for help in case of bugs</li>\
      <li>As Frontend Team member Code review in Gerrit</li>\
    </ul>\
    <h4>Development</h4>\
    <ul>\
      <li>Optimization of existing HTML Code regarding SEO, OG, Standards, amount of data, etc.Technology Updates for Style (e.g. Bootstrap, Material Design; Media Queries, postcss). Adopting external Companies Code requests (requireJs) to internal REST API</li>\
      <li>Development of brand new Ideas in SVG Avatar-System solutions</li>\
      <li>Making decisions of new CSS Technic like flexbox model, naming conventions like BEM, building own SASS framework</li>\
      <li>Development of dynamic Styleguide</li>\
      <li>As member Automatizing and Test with Grunt, Gulp, Jenkins, Selenium</li>\
    </ul>',
    furtherProjects: [
      'https://beatya.com'
    ]
  },
  {
    workplaceId: 'seso',
    workplaceName: 'SESO Media Group',
    workplaceUrl: 'http://seso.at',
    workplaceLogo: 'seso.png',
    workplaceCity: 'Wien',
    workedFrom: 2016,
    workedTill: 2017,
    position: 'Senior Frontend Developer',
    jobDescription:  '<h4><a href="http://win2day.at" target="_blank">Win2Day</a> platform frontend development.</h4>\
    <ul>\
    <li>The decision of the frontend architecture was already made when I was joined to the company. My task was to continue and finish it.</li>\
    <li>The professional design was also created by the agency, but as Developer I was having some freedom to design, how the page should behave in different screen resolutions, how it should reat on the user actions, how elements shoud be animated. Because of the high amount of users many device was supported, and the developers should take care, that the page design fits to all of them in any conditions, like e.g.: the dropdown menü shold also work within an overlay on a small mobile screen even if there is no space left, or the items can not be scrolled.</li>\
    <li>Becasue of my experience in the gaming industrie I was having the task to implement the games into the frontend. On the beginning it was look like an impossible task, because\
      <ol>\
        <li>high amount of games was made with different technologies like flash or html5,</li>\
        <li>they was having very various sizes and aspect ratios,</li>\
        <li>some of them was having a maximal display size,</li>\
        <li>some of them was responsible on it&apos;s own, managed by self contained scripts</li>\
        <li>some of them could be resized,</li>\
        <li>and some I was unable to scale at all. (only css transform was possible)</li>\
        <li>On "desktop" devices the games shold be able to play in fullscreen, but with the conditions written abowe,</li>\
        <li>and because it was not a build in function for all of the games, it shoud be implemented also by us.</li>\
        <li>Some games was designed only for desktop usage,</li>\
        <li>some only for mobile,</li>\
        <li>and some for both.</li>\
        <li>Furthermore, - as usual - the agency worked separatly from the customer company, so we only received some example games, not all of them, for each and every possible cases.</li>\
      </ol>This was definitely the biggest challange in the frontend, because the games was the core concept of the platform.</li>\
    <li>During the daily work while I was implementing pages and features I was continously experimenting and thinking, and with the help of my colleges and the backend developers of the client, after some good ideas, we was successfully fulfilled the task, and all of the planned games was implemented.</li>\
    <li>Also several interesting solutions was also created, like the CSS only Lotto Balls, the flexbox "grid like" responsive accordion, or the "real-time" Tournaments items.</li>\
    </ul>\
    ',
  },
  {
    workplaceId: 'radarservices',
    workplaceName: 'RadarServices - Cybersecurity World',
    workplaceUrl: 'http://radarservices.com',
    workplaceLogo: 'radar_services_logo.svg',
    workplaceCity: 'Wien',
    workedFrom: 2017,
    workedTill: 'present',
    position: 'JavaScript Frontend Developer',
    jobDescription: 'RadarServices is a serious Cybersecurity company. I think even my jobdescription is a secret...',
  },
];
