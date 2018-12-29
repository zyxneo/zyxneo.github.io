// @flow
import React from 'react'
import { FormattedMessage, FormattedHTMLMessage } from 'react-intl'

const worklist = [
  {
    workplaceId: 'infoartnet',
    workplaceName: 'InfoartNet',
    workplaceUrl: 'http://infoartnet.hu',
    workplaceLogo: 'infoartnet.png',
    workplaceCity: 'Győr',
    workedFrom: 2008,
    workedTill: 2009,
    position: <FormattedMessage id="infoartnet.position" defaultMessage="Graphic and Sitebuilder"/>,
    jobDescription: <FormattedHTMLMessage id="infoartnet.jobDescription" defaultMessage="Creating graphic design for clients in Fireworks..."/>,
    furtherProjects: [
      'teknosfestek.hu',
      'johidegkonyha.hu',
      'fotoplus.hu',
      'ipvideokamera.hu',
      'vizisportok.hu',
      'febobo.hu',
      'gaszler.hu',
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
    position: <FormattedMessage id="greentube.position" defaultMessage="Front-End Developer"/>,
    jobDescription: <FormattedHTMLMessage id="greentube.jobDescription" defaultMessage="<h4>Implementation of websites</h4><ul><li>Relaunch websites – Liftin&apos; up Sites to State of Art. Big platforms 200.000 - 500.000 user per Day.</li><li>Multi Language support up to 22 Language (included arabic, russian, georgian, greek, etc.)</li><li>Multi Site solution with central Codebase for multiple Websites</li></ul><h4>Maintenance</h4><ul><li>Deployment to dev, staging and live Environments with Git, Jenkins, FTP</li><li>Bugfixes of existing Systems, Documentation of issues in Jira</li><li>Cooperation with Platform Management Team - Daily work, nothing special,</li><li>Tickets with Scrum (Milestones, Releases, Versions)</li></ul><h4>Cooperation with:</h4><ul><li>Business Intelligence Team, implementation of requests (Adobe Omniture)</li><li>Marketing Team - Maintenance and Development of Affiliate system Code (XML, XSL dino)</li><li>CRM Team - adjustments to Teaser tool, creating of Landingpages, E-Mail templates</li><li>Internal and external Testers (Games Quality)</li><li>External Companies regarding Implementation they Code into our Websites (Games in Iframe, Flash, HTML5)</li><li>External AB Test Company (Maximiser), Vendor Code Implementation of test-winners</li><li>Backend Team (DotNet) - Implementation of changes im XML, JSON. Building custom frontend for an existing Backend, later writing VMC templates for C#</li><li>Graphic Team - collective Definition of graphical Assets Formats, architect, CDN (more ten thousand Pictures) Technical communication with UI Graphic, making decisions about the Implementation of Design, wireframing, mockups</li><li>Mobile Team - at the beginning separate mobile Website solutions, later matches to they WebApps</li><li>Database Team - Adoption of used attributes, asking for help in case of bugs</li><li>As Frontend Team member Code review in Gerrit</li></ul><h4>Development</h4><ul><li>Optimization of existing HTML Code regarding SEO, OG, Standards, amount of data, etc.Technology Updates for Style (e.g. Bootstrap, Material Design; Media Queries, postcss). Adopting external Companies Code requests (requireJs) to internal REST API</li><li>Development of brand new Ideas in SVG Avatar-System solutions</li><li>Making decisions of new CSS Technic like flexbox model, naming conventions like BEM, building own SASS framework</li><li>Development of dynamic Styleguide</li><li>As member Automatizing and Test with Grunt, Gulp, Jenkins, Selenium</li></ul>"/>,
    furtherProjects: [
      'beatya.com',
      'tipp3.at',
      'luckyfox'
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
    position: <FormattedMessage id="seso.position" defaultMessage="Senior Front-End Developer"/>,
    jobDescription: <FormattedHTMLMessage id="seso.jobDescription" defaultMessage="Win2Day platform frontend development."/>,
  },
  {
    workplaceId: 'radarservices',
    workplaceName: 'RadarServices - Cybersecurity World',
    workplaceUrl: 'http://radarservices.com',
    workplaceLogo: 'radar_services_logo.svg',
    workplaceCity: 'Wien',
    workedFrom: 2017,
    workedTill: 'present',
    position: <FormattedMessage id="radarservices.position" defaultMessage="JavaScript Frontend Developer"/>,
    jobDescription: <FormattedHTMLMessage id="radarservices.jobDescription" defaultMessage="RadarServices is a serious Cybersecurity company. I think even my jobdescription is a secret..."/>,
  },
];

export default worklist
