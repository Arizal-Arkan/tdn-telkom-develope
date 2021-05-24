/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable max-lines */
/* eslint-disable max-len */
import React from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import DocumentBackground from './../../utils/DocumentBackground';
import styles from './styles.scoped.css';
import { IMAGES } from '../../configs';
import { useMediaQuery } from 'react-responsive';

export default function DetailService() {
  const isMobile = useMediaQuery({ maxWidth: 600 });
  DocumentBackground('img-bg-detail-service');

  if (isMobile) {
    DocumentBackground(null);
  }

  const location = useLocation();
  const history = useHistory();
  const dataState = location.state;

  const dataDetail = [
    {
      path: 'frontend-developer',
      title: 'Frontend Developer',
      detail: (
        <p>
          Frontend Developer’s primary role is in developing user-facing web
          apps, with specific emphasis on user interface design. They are going
          to use a library of internal UI components or create custom UI
          components. Frontend Developer will work with a small team and can
          switch teams or projects depending on business needs. Together with UI
          Designer and UX Researcher, they are fully empowered to design and
          mockup into well-researched apps, and of course will consume backend
          API services.
        </p>
      ),
      listDetail: (
        <p>
          - Maintain and improve website <br />
          - Optimize applications for maximum speed <br />
          - Stay up-to-date on emerging technologies <br />
          - Develop, improve, maintain, and publish high quality user-facing web
          <br />
          - Ensure apps that you develop are cross-device compatible, adhere to
          our company-wide style guide, and matches the designed user experience
          <br />
          - Doing test driven development
          <br />
          - Within a cross-functional team, collaborate with other developers,
          quality assurance, product owner, scrum master, and etc
          <br />
          - Apply design patterns and design principles to produce maintainable
          code
          <br />- Solve technical problems
        </p>
      ),
      logo: IMAGES.FE,
    },
    {
      path: 'software-architec',
      title: 'Software Architect',
      detail: (
        <p>
          Software Architect will see the “big picture” and create architectural
          approaches for software design and implementation to guide the
          development team. They will provide solution architecture for the
          business problem, platform integration with third party services,
          designing and developing complex features for business needs. Software
          Architect will assist in defining scope and sizing of work and anchor
          Proof of Concept developments.
        </p>
      ),
      listDetail: (
        <p>
          - Collaborate with other professionals to determine functional and
          non-functional requirements for new software or applications <br />-
          Within a cross-functional team, collaborate with backend, frontend,
          quality assurance, documentation engineer, product owner, and etc{' '}
          <br />
          - Keep abreast about new advances in own technology areas and propose
          the implementation of state-of-art technology <br />
          - Use tools and methodologies to create representations for functions
          and user interface of desired product <br />
          - Develop high-level product specifications with attention to system
          integration and feasibility <br />
          - Define all aspects of development from appropriate technology and
          workflow to coding standards <br />- Provide technical guidance and
          coaching to developers and engineers <br />
          - Ensure software meets all requirements of quality, security,
          modifiability, extensibility etc. <br />
          - Oversee progress of development team to ensure consistency with
          initial design <br />
          - Communicate successfully all concepts and guidelines to development
          team <br />
          - Solve complex technical problems <br />
        </p>
      ),
      logo: IMAGES.SOFTW,
    },
    {
      path: 'mobile-developer',
      title: 'Mobile Developer',
      detail: (
        <p>
          Mobile Developer’s primary role is developing high-quality apps with
          specific emphasis on User Interface Design, build a clean code, and
          maintain the next generation of applications. They duties may include
          collaborating with the design team for new application features,
          consuming backend API services, identifying and fixing application
          bottlenecks, maintaining the core code, and updating applications
          published on the App Store/Play Store.
        </p>
      ),
      listDetail: (
        <p>
          - Write a clean code, complete programming, and perform testing and
          debugging of applications <br />
          - Maintain and improve product apps
          <br />
          - Stay up-to-date on emerging technologies
          <br />
          - Ensure apps that develop are cross-device compatible, adhere to our
          company-wide style guide, and matches the designed user experience
          <br />
          - Doing test driven development
          <br />
          - Within a cross-functional team, collaborate with other developers,
          quality assurance, UI/UX, Scrum Master, and etc
          <br />
          - Apply design patterns and design principles to produce maintainable
          code
          <br />- Together finding technical problems solutions
        </p>
      ),
      logo: IMAGES.MOBILE,
    },
    {
      path: 'backend-developer',
      title: 'Backend Developer',
      detail: (
        <p>
          Backend Developer's primary role is in developing high-quality backend
          services with specific emphasis on long-term maintainability,
          resilience, and high scalability. They are going to write codes that
          integrate with various other systems. Backend Developers will work
          with a small team and can switch teams or projects depending on
          business needs. Together with other developers within your team, they
          are fully empowered to own the systems within the area of
          responsibility in production. They should learn and have great passion
          in solving problems using technology.
        </p>
      ),
      listDetail: (
        <p>
          - Participate in the entire application lifecycle, focusing on coding
          and debugging <br />
          - Build reusable code and libraries for future use <br />
          - Follow emerging technologies <br />
          - Develop, improve, and maintain high quality back-end services and
          APIs <br />
          - Doing test driven development <br />
          - Within a cross-functional team, collaborate with other developers
          specializing in backend, frontend, quality assurance, product owner,
          scrum master, and etc <br />
          - Apply design patterns and design principles to produce maintainable
          code <br />- Learn multiple tech stacks to use the best tools for the
          job - Solve technical problems
        </p>
      ),
      logo: IMAGES.BEN,
    },
    {
      path: 'document-enginer',
      title: 'Documentation Engineer',
      detail: (
        <p>
          Software Documentation Engineer's primary role is in creating all
          needed documentation, with specific emphasis on the technical area.
          They are going to write scripts, diagrams, and so forth for helping
          others to understand how a system works. Documentation Engineer will
          work with a small team and can switch teams or projects depending on
          business needs. Together with the team you will create a lot of
          important documents which are needed by others and for a maintainable
          product/system.
        </p>
      ),
      listDetail: (
        <p>
          - Create, update, and maintain all documentation of each
          software/product life cycle. <br />
          - Within a cross-functional team, collaborate with other developers,
          software architect, quality assurance, UI designer, UX researcher,
          product owner, and scrum master.
          <br />
          - Scripting for API Documentation and Mockup.
          <br />
          - Learn multiple tools for the job.
          <br />
          - Create a data model, diagram, workflow, and so forth to assist the
          technical team.
          <br />
        </p>
      ),
      logo: IMAGES.DOC,
    },
    {
      path: 'scrum-master',
      title: 'Scrum Master',
      detail: (
        <p>
          Scrum Master provides effective collaboration, facilitation,
          leadership and coaching skills supporting the agile development
          process and delivery of each project. They make a significant impact,
          developing and coaching new scrum teams and changing the way of work.
          The Scrum Master helps those outside the Scrum Team understand which
          of their interactions with the Scrum Team are helpful and which
          aren’t. Support agile based SDLC for software development creating
          necessary standards, tools and best practices in a clearly documented
          form.
        </p>
      ),
      listDetail: (
        <p>
          - Manage each project’s scope and timeline <br />
          - Organizing and facilitating daily stand-up meetings, backlog
          refinement, reviews, retrospectives, grooming, release planning, demos
          and other Scrum-related meetings, etc <br />
          - Serving as an Agile coach within the organization, while
          implementing and socializing scrum to newly formed teams <br />
          - Facilitate internal communication and effective collaboration
          <br />
          - Work with product owners to handle backlogs and new requests
          <br />
          - Resolve conflicts and remove obstacles that occur
          <br />
          - Help teams implement changes effectively
          <br />
          - Collaborating with team, developing and maintaining team standards,
          tools, and best practices, including working agreements and definition
          of done
          <br />- Help build a productive environment where team members ‘own’
          the product and enjoy working on it
        </p>
      ),
      logo: IMAGES.SM,
    },
    {
      path: 'quality-assurance',
      title: 'Quality Assurance',
      detail: (
        <p>
          Software Quality Assurance Engineer's primary role is ensuring the
          quality of the software so that it meets the defined standards. They
          are going to write scripts, a lot of test cases, and use some tools
          for helping to measure how good the software is. Quality Assurance
          will work with a small team and can switch teams or projects depending
          on business needs. Together with the team will create automation
          testing which keeps the software maintainable and stable.
        </p>
      ),
      listDetail: (
        <p>
          - Within a cross-functional team, collaborate with other developers,
          software architect, technical documentation engineer, product owner,
          and scrum master. <br />
          - Review requirements, specifications and technical design documents
          to provide timely and meaningful feedback
          <br />
          - Create detailed, comprehensive and well-structured test plans and
          test cases
          <br />
          - Estimate, prioritize, plan and coordinate testing activities.
          <br />
          - Design, develop and execute automation scripts using open source
          tools
          <br />
          - Identify, record, document thoroughly and track bugs
          <br />
          - Perform thorough regression testing when bugs are resolved
          <br />
          - Develop and apply testing processes for new and existing products to
          meet client needs
          <br />
          - Liaise with internal teams (e.g. developers and product managers) to
          identify system requirements
          <br />
          - Monitor debugging process results
          <br />
          - Track quality assurance metrics, like defect densities and open
          defect counts
          <br />- Stay up-to-date with new testing tools and test strategies
        </p>
      ),
      logo: IMAGES.QA,
    },
    {
      path: 'DevSecOps-engineer',
      title: 'DevSecOps Engineer',
      detail: (
        <p>
          DevOps and Security Engineer will provide automation system between
          development and operation. They will assist in deployment, build,
          testing, and release management processes. Together with team, will
          maintain day-to-day management and administration of projects.
        </p>
      ),
      listDetail: (
        <p>
          - Deploying, developing, automating, maintaining and managing current
          digital platform, to ensure the availability, performance, scalability
          and security of productions systems. <br />- Build, release and
          configuration management of production systems. <br />
          - Within a cross-functional team, collaborate with backend, frontend,
          quality assurance, documentation engineer, product owner, software
          architect and etc. <br />
          - Pre-production Acceptance Testing to help assure the quality of our
          products/services. <br />
          - Brainstorm for new ideas and ways to improvement development
          delivery. <br />
          - Handle code deployments in all environments.
          <br />
          - Automate the deployment and daily tasks (Infrastructure as Code).
          <br />
          - Ensure the system is operating properly.
          <br />- Participating in all agile activities, including sprint
          planning, daily standups, sprint reviews and retrospective.
        </p>
      ),
      logo: IMAGES.OPS,
    },
  ];

  const findPath = dataDetail.find(
    (location) => location.path === dataState.detail
  );

  const footerList = dataDetail.filter(
    (menu) => menu.path !== dataState.detail
  );

  return (
    <div className={styles['detail-service']}>
      <h2>{findPath.title}</h2>

      <div>
        <div>{findPath.detail}</div>

        <div>{findPath.listDetail}</div>
      </div>

      <div>
        <img alt="" src={IMAGES.TOGGLE} />
        {footerList.map((data, index) => (
          <div
            key={index}
            onClick={() =>
              history.push({
                pathname: `/service/${data.path}`,
                state: { detail: data.path },
              })
            }
          >
            <img alt="" src={data.logo} />
            <p>{data.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
