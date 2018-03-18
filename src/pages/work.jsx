// @flow

import React from 'react'
// import Link from 'gatsby-link'

import {
  Container,
  Item,
} from 'semantic-ui-react'

const work = [
  {
    workplaceName: 'InfoartNet',
    workplaceUrl: 'htttp://infoartnet.hu',
    workplaceLogo: 'infoartnet.jpg',
    workplaceCity: 'Győr',
    workedFrom: 2008,
    workedTill: 2009,
    position: 'Graphic and Sitebuilder',
    jobDescription: 'Creating graphic design for clients in Fireworks, "sliceing" the self made or other designs, creating web templates and implementing the templates into the multisite CMS system. Designing and programming flash banners or flash webpage components.',
    projects: [

    ],
  },
  {
    workplaceName: 'Greentube Internet Entertainment Solutions GmbH',
    workplaceUrl: 'htttp://greentube.com',
    workplaceLogo: 'greentube.jpg',
    workplaceCity: 'Wien',
    workedFrom: 2009,
    workedTill: 2016,
    position: 'Front-End Developer',
    jobDescription: '<ul>\
    <li>\
    <h3>Implementation of websites<h3>\
<p>Relaunch websites – Liftin&apos; up Sites to State of Art. Big platforms 200.000 - 500.000 user per Day.<br />\
Multi Language support up to 22 Language (included arabic, russian, georgian, greek, etc.)<br />\
Multi Site solution with central Codebase for multiple Websites</p>\
</li>\
<li><h3>Maintenance</h3>\
<p>Deployment to dev, staging and live Environments with Git, Jenkins, FTP<br />\
Bugfixes of existing Systems, Documentation of issues in Jira<br />\
Cooperation with Platform Management Team - Daily work, nothing special,<br />\
Tickets with Scrum (Milestones, Releases, Versions)</p>\
<li><h3>Cooperation with:</h3>\
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
<li><h3>Development</h3>\
<p>Optimization of existing HTML Code regarding SEO, OG, Standards, amount of data, etc.Technology Updates for Style (e.g. Bootstrap, Material Design; Media Queries, postcss). Adopting external Companies Code requests (requireJs) to internal REST API<br />\
Development of brand new Ideas in SVG Avatar-System solutions<br />\
Making decisions of new CSS Technic like flexbox model, naming conventions like BEM, building own SASS framework<br />\
Development of dynamic Styleguide<br />\
As member Automatizing and Test with Grunt, Gulp, Jenkins, Selenium</li></ul>',
    projects: [

    ],
  },
  {
    workplaceName: 'SESO Media Group',
    workplaceUrl: 'htttp://greentube.com',
    workplaceLogo: 'greentube.jpg',
    workplaceCity: 'Wien',
    workedFrom: 2016,
    workedTill: 2017,
    position: 'Senior Frontend Developer',
    jobDescription: '',
    projects: [

    ],
  },
]

const WorkItem = (props) => {
  const {
    workplaceName,
    workplaceUrl,
    workplaceLogo,
    workplaceCity,
    workedFrom,
    workedTill,
    position,
    jobDescription,
  } = props

  const LogoUrl = `/static/images/${workplaceLogo}`
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

    <h3>Disclaimer</h3>

    <p>Please notice that none of the mentioned online projects are my property. They can be changed in any time by the owners. There is a high chance, that the example projects may not reflect they state at the point when I was workin on them. The following list was made by me, based on my workexperience, without any permission or agreement of the companies, owners or stakeholders.</p>

    <Item.Group divided>
      {work.map(item => (<WorkItem {...item} key={item.workplaceName} />))}
    </Item.Group>
  </Container>
)

export default WorkPage
