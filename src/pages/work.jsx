// @flow

import React from 'react'
// import Link from 'gatsby-link'

import {
  Container,
  Item,
} from 'semantic-ui-react'

const work = [
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
    projects: [
      {
        title: 'zatony.hu',
        subtitle: '',
        description: '',
        image: 'zatony.hu.jpg',
        url: 'http://zatony.hu/',
        year: 2009,
        tags: [
          'Graphic Design'
        ],
      },
      {
        title: 'gyorilovag.hu',
        subtitle: '',
        description: '',
        image: 'gyorilovag.hu.jpg',
        url: 'http://gyorilovag.hu/ ',
        year: 2009,
        tags: [
          'Graphic Design',
          'Flash'
        ],
      },
      {
        title: 'satorberbeadas.hu',
        subtitle: '',
        description: '',
        image: 'satorberbeadas.hu.jpg',
        url: 'http://www.satorberbeadas.hu/',
        year: 2009,
        tags: [
          'Graphic Design'
        ],
      },
      {
        title: 'johidegkonyha.hu',
        subtitle: '',
        description: '',
        image: 'johidegkonyha.hu.jpg',
        url: '',
        year: 2009,
        tags: [
          'Graphic Design'
        ],
      },
    ],
    furtherProjects: [
      'https://teknosfestek.hu',
      'http://johidegkonyha.hu/',
      'http://www.fotoplus.hu/',
      'http://www.ipvideokamera.hu',
      'http://www.febobo.hu'
    ]
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
    jobDescription: '<ul>\
    <li>\
    <h4>Implementation of websites</h4>\
<p>Relaunch websites – Liftin&apos; up Sites to State of Art. Big platforms 200.000 - 500.000 user per Day.<br />\
Multi Language support up to 22 Language (included arabic, russian, georgian, greek, etc.)<br />\
Multi Site solution with central Codebase for multiple Websites</p>\
<br />\
</li>\
<li><h4>Maintenance</h4>\
<p>Deployment to dev, staging and live Environments with Git, Jenkins, FTP<br />\
Bugfixes of existing Systems, Documentation of issues in Jira<br />\
Cooperation with Platform Management Team - Daily work, nothing special,<br />\
Tickets with Scrum (Milestones, Releases, Versions)</p>\
<br />\
<li><h4>Cooperation with:</h4>\
<p>Business Intelligence Team, implementation of requests (Adobe Omniture)<br />\
Marketing Team - Maintenance and Development of Affiliate system Code (XML, XSL dino)<br />\
CRM Team - adjustments to Teaser tool, creating of Landingpages, E-Mail templates<br />\
Internal and external Testers (Games Quality)<br />\
External Companies regarding Implementation they Code into our Websites (Games in Iframe, Flash, HTML5)<br />\
External AB Test Company (Maximiser), Vendor Code Implementation of test-winners<br />\
Backend Team (DotNet) - Implementation of changes im XML, JSON. Building custom frontend for an existing Backend, later writing VMC templates for C#<br />\
Graphic Team - collective Definition of graphical Assets Formats, architect, CDN (more ten thousand Pictures) Technical communication with UI Graphic, making decisions about the Implementation of Design, wireframing, mockups<br />\
Mobile Team - at the beginning separate mobile Website solutions, later matches to they WebApps<br />\
Database Team - Adoption of used attributes, asking for help in case of bugs<br />\
As Frontend Team member Code review in Gerrit</p>\
<br />\
<li><h4>Development</h4>\
<p>Optimization of existing HTML Code regarding SEO, OG, Standards, amount of data, etc.Technology Updates for Style (e.g. Bootstrap, Material Design; Media Queries, postcss). Adopting external Companies Code requests (requireJs) to internal REST API<br />\
Development of brand new Ideas in SVG Avatar-System solutions<br />\
Making decisions of new CSS Technic like flexbox model, naming conventions like BEM, building own SASS framework<br />\
Development of dynamic Styleguide<br />\
As member Automatizing and Test with Grunt, Gulp, Jenkins, Selenium</li></ul>',
    projects: [

    ],
    furtherProjects: [
      'https://gametwist.com',
      'https://stargames.com',
      'https://skill7.com',
      'https://beatya.com',
      'http://starvegas.it',
      'https://feniksscasino.lv'
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
    jobDescription: '',
    projects: [

    ],
  },
  {
    workplaceId: 'radarservices',
    workplaceName: 'RadarServices - Cybersecurity World',
    workplaceUrl: 'http://radarservices.com',
    workplaceLogo: 'radarservices.jpg',
    workplaceCity: 'Wien',
    workedFrom: 2017,
    workedTill: 'present',
    position: 'JavaScript Frontend Developer',
    jobDescription: '',
    projects: [

    ],
  },
]

const WorkItem = (props) => {
  const {
    workplaceId,
    workplaceName,
    workplaceUrl,
    workplaceLogo,
    workplaceCity,
    workedFrom,
    workedTill,
    position,
    jobDescription,
  } = props

  const LogoUrl = `/images/work/${workplaceId}/${workplaceLogo}`
  return (
    <Item>
      <Item.Image src={LogoUrl} />

      <Item.Content>
        <Item.Header>{position} at <a target='_blank' href={workplaceUrl}>{workplaceName}</a> </Item.Header>
        <Item.Meta>({workedFrom} - {workedTill})</Item.Meta>
        <Item.Description><em>Job description:</em> <div dangerouslySetInnerHTML={{__html: jobDescription}} /></Item.Description>
      </Item.Content>
    </Item>
  )
}

const WorkPage = () => (
  <Container>
    <h1>Work</h1>

    <h4>Disclaimer</h4>

    <p>Please notice that none of the mentioned online projects are my property. They can be changed in any time by the owners. There is a high chance, that the example projects may not reflect they state at the point when I was workin on them. The following list was made by me, based on my workexperience, without any permission or agreement of the companies, owners or stakeholders.</p>

    <Item.Group divided>
      {work.map(item => (<WorkItem {...item} key={item.workplaceId} />))}
    </Item.Group>
  </Container>
)

export default WorkPage
