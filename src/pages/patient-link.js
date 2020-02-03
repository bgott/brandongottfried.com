import React from 'react'
import Layout from '../components/layout'
import img_01 from '../assets/images/img_01.png'
import img_02 from '../assets/images/img_02.png'
import img_03 from '../assets/images/img_03.png'
import img_04 from '../assets/images/img_04.png'
import img_05 from '../assets/images/img_05.png'
import img_06 from '../assets/images/img_06.png'
import persona_1 from '../assets/images/persona_1.png'
import persona_2 from '../assets/images/persona_2.png'
import persona_3 from '../assets/images/persona_3.png'
import persona_4 from '../assets/images/persona_4.png'
import insight_1 from '../assets/images/insights_1.png'
import insight_2 from '../assets/images/insights_2.png'
import insight_3 from '../assets/images/insights_3.png'
import insight_4 from '../assets/images/insights_4.png'
import insight_5 from '../assets/images/insights_5.png'
import insight_6 from '../assets/images/insights_6.png'
import insight_7 from '../assets/images/insights_7.png'
import insight_8 from '../assets/images/insights_8.png'
import insight_9 from '../assets/images/insights_9.png'
import insight_10 from '../assets/images/insights_10.png'
import design_system from '../assets/images/design_system.png'
import entrance_1 from '../assets/images/entrance_1.png'
import entrance_2 from '../assets/images/entrance_2.png'
import entrance_3 from '../assets/images/entrance_3.png'
import entrance_4 from '../assets/images/entrance_4.png'
import functionality from '../assets/images/functionality.png'
import tutorial from '../assets/images/tutorial.png'
import lifecycle from '../assets/images/lifecycle.png'
import lifecycle_02 from '../assets/images/lifecycle_02.png'
import share_01 from '../assets/images/share_01.png'
import share_02 from '../assets/images/share_02.png'
import share_03 from '../assets/images/share_03.png'
import ingestion_01 from '../assets/images/ingestion_01.png'
import ingestion_02 from '../assets/images/ingestion_02.png'
import redundancy_01 from '../assets/images/redundancy_01.png'
import data_01 from '../assets/images/data_01.png'
import data_02 from '../assets/images/data_02.png'
import data_03 from '../assets/images/data_03.png'
import data_04 from '../assets/images/data_04.png'
import data_05 from '../assets/images/data_05.png'
import data_06 from '../assets/images/data_06.png'
import data_07 from '../assets/images/data_07.png'
import data_08 from '../assets/images/data_08.png'
import data_09 from '../assets/images/data_09.png'


import icon_01 from '../assets/images/icon_user_obs.svg'
import icon_02 from '../assets/images/icon_support_logs.svg'
import icon_03 from '../assets/images/icon_personas.svg'
import icon_04 from '../assets/images/icon_journey.svg'
import icon_05 from '../assets/images/icon_architecture.svg'
import icon_06 from '../assets/images/icon_prototype.svg'

const PatientLink = () => (
  <Layout>
    <div id="main" className="alt">
        <div className="project-highlights">
            <section>
                <div className="intro">
                    <div className="content">
                        <h1>Operation: Patient Link</h1>
                        <p>When first launched, Patient Link was a breath of fresh air for healthcare administrators — deliver patients digital access to their medical imaging at the click of a button. No longer would facility staff need to expend valuable time and resources burning images to discs. As customer needs evolved over time Medicom’s flagship product, ImageX, was iterated and improved upon while the Patient Link experience fell by the wayside — outdated, cumbersome, and non-intuitive.</p>
                        <p>I led an ambitious project to re-design Patient Link from the ground up for one of the fastest growing healthcare startups in the country.</p>
                        <p id="nda">In the interest of protecting proprietary company information, I have omitted and obfuscated confidential information in this case study. All information in this case study is my own and does not necessarily reflect the views of Medicom.</p>
                    </div>
                    <div className="image">
                        <div className="img-100">
                            <img src={img_01} alt="" />
                        </div>
                    </div>

                </div>
            </section>
            <section>
                <div className="type-one">
                    <div className="content">
                        <h2>Who is <span className="i">Medicom?</span> What is <span className="i">Patient Link?</span></h2>
                        <p>Medicom is transforming the way medical imaging and healthcare data is exchanged and accessed. Medicom’s flagship product — ImageX — is a peer- to-peer network for diagnostic image exchange and is built specifically for sharing images directly from one picture archiving and communication system (PACS) to another. ImageX eliminates the hassle of CDs, VPNs, and the cloud for inter-organizational data exchange.</p>
                        <p>Medicom’s Patient Link was borne of the quickly discovered need to further eliminate the hassle and inefficiency of CDs by utilizing this digitization to deliver imaging data to patients. Patient Link aimed to provide patients with digital on-demand access to their medical and diagnostic images. Facility staff could generate and distribute access codes which grant patients instant portal authentication. From there patients could view, download, and share their medical imaging data.</p>
                        <p>Patient Link struggled to scale alongside the evolution of Medicom’s other technologies. Outdated designs and a total absence of both iteration and improvement left Patient Link in a state of disharmony with the expectations of patients and healthcare providers. Core usability was challenged. Disparate features introduced serious complexities for patients. Application reliability and performance issues increased exponentially. Support was a nightmare.</p>
                    </div>
                    <div className="image">
                        <div className="img-description">
                            <p>Evolution of the Login and Dashboard interfaces of the Patient Link application from old (left) to new (right).</p>
                        </div>
                        <div className="img-85">
                            <img src={img_02} alt="" />
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="alt-bg">
                    <div className="content">
                        <h4>The Challenge</h4>
                        <h2>Recapture the Magic</h2>
                        <p>The original goal for Patient Link was straightforward — digitize the delivery of medical images to patients. However, the healthcare continuum is highly complex and increasingly disjointed. Simply providing patients with digital access to their medical images doesn’t solve the grander problem of image accessibility throughout the healthcare community. My ambition was to both design and build a strong product foundation that (1) met the needs of our rapidly evolving business and (2) fulfilled the expectations of a highly diverse base of users.</p>
                        <p>Our high level goals for version 2.0 were as follows:</p>
                        <ol>
                            <li>Transform the Patient Link experience to be intuitive for everyone.</li>
                            <li>Design an effective methodology for Patient Link users to share their images with healthcare professionals that (1) fits within the provider’s workflow and (2) utilizes the existing ImageX network infrastructure.</li>
                            <li>Design a procedural model for gathering user data for future product improvements.</li>
                        </ol>
                        <h2>My Role</h2>
                        <p>I led the product design throughout the entire project and collaborated closely with our two in-house engineers and our Chief Product Officer. As a ‘one man design army’ the roles I performed consisted of the following:</p>

                        <div className="grid-wrapper">
                            <div className="col-6">
                                <ul>
                                    <li>Researcher</li>
                                    <li>Experience Designer</li>
                                    <li>Prototyper</li>
                                    <li>Interface Designer</li>
                                </ul>
                            </div>
                            <div className="col-6">
                                <ul>
                                    <li>Marketing Content Strategist</li>
                                    <li>Product Manager</li>
                                    <li>Implementation Tester</li>
                                    <li>Front-End Developer</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="type-one">
                    <div className="content no-bottom-pad">
                        <h4>Research & Analysis</h4>
                        <h2>Methodology</h2>
                        <div className="methodology">
                            <div className="grid-wrapper">
                                <div className="col-7">
                                    <img src={icon_01} alt="" />
                                    <p>Functional observations and user interviews</p>
                                </div>
                                <div className="col-5">
                                    <img src={icon_02} alt="" />
                                    <p>Analysis of end-user support logs</p>
                                </div>
                                <div className="col-7">
                                    <img src={icon_03} alt="" />
                                    <p>Construction of user personas</p>
                                </div>
                                <div className="col-5">
                                    <img src={icon_04} alt="" />
                                    <p>Customer success journey</p>
                                </div>
                                <div className="col-7">
                                    <img src={icon_05} alt="" />
                                    <p>System architecture design</p>
                                </div>
                                <div className="col-5">
                                    <img src={icon_06} alt="" />
                                    <p>Prototype usability testing</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="type-one">
                    <div className="content no-bottom-pad">
                        <h2>Field Research</h2>
                        <p>My primary objective in conducting field research was to gain insights beyond the aesthetic flaws in the application and dive deeper into functional inadequacies. It was presumed that I’d be giving the application a major face lift, but version 2 needed to be much more than sexy — it needed to be highly functional. Field research and subsequent usability testing was devised and conducted by myself with nine participants across a diverse set of backgrounds including: oncology and radiology physicians, healthcare facility administrators, medical records department staff, and patients. Tests were tailored to individuals’ variable usage of the product.</p>
                        <div className="pullquote">
                            <q>My goal was to better understand how users navigated and interacted with the application, where expectations fell short, and what workarounds were employed when the platform failed to meet users’ needs.</q>
                        </div>
                        <p>Results were used to inform my design decisions in a data-based methodology and led to the final arrangement of application and system architecture as well as functional augmentations that were better suited to meet our users’ end goals.</p>
                    </div>
                    <div className="image alt-bg" id="quad">
                        <div className="img-description"></div>
                        <div className="grid-wrapper">
                            <div className="col-6">
                                <div className="img-100">
                                    <img src={img_03} alt="" />
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="img-100">
                                    <img src={img_04} alt="" />
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="img-100">
                                    <img src={img_05} alt="" />
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="img-100">
                                    <img src={img_06} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="type-one">
                    <div className="content no-bottom-pad">
                        <h2>User Personas</h2>
                    </div>
                    <div className="image" id="quad">
                        <div className="grid-wrapper">
                            <div className="col-6">
                                <div className="img-100">
                                    <img src={persona_1} alt="" />
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="img-100">
                                    <img src={persona_2} alt="" />
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="img-100">
                                    <img src={persona_3} alt="" />
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="img-100">
                                    <img src={persona_4} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="type-one">
                    <div className="content">
                        <h4>Research Insights</h4>
                        <h2>Functional Product Limitations</h2>
                        <div id="insights-upper" className="grid-wrapper product-insights">
                                <div className="col-5">
                                    <div className="img-100">
                                        <img src={insight_1} alt="" />
                                    </div>
                                </div>
                                <div className="col-7">
                                    <h5>Incomplete Picture</h5>
                                    <p>Access to the entirety of a patient’s medical imaging history is paramount to providing proper treatment, as what drives medical practitioners’ decisions is largley based on changes in tissue growth over time. Patient Link didn’t provide users their complete imaging history — both those spanning multiple facilities and those contained within a single facility’s archives. Facility-generated access codes were often misplaced or expired and/or contained only portions of the recent imaging history.</p>
                                </div>
                            <div className="col-5">
                                <div className="img-100">
                                    <img src={insight_2} alt="" />
                                </div>
                            </div>
                            <div className="col-7">
                                <h5>Fractured Continuum of Care</h5>
                                <p>Patient Link user experience did not easily allow managing and sharing medical imaging studies with other providers in the patient’s continuum of care, leading to difficulties in the [patient’s] process of forwarding their images to providers for secondary opinions or more specialized care.</p>
                            </div>
                            <div className="col-5">
                                <div className="img-100">
                                    <img src={insight_3} alt="" />
                                </div>
                            </div>
                            <div className="col-7">
                                <h5>Incongruous File System Design</h5>
                                <p>Access codes given directly to medical staff weren’t optimized for importing images directly to medical imaging databases (such as PACS, RIS, or Epic), so providers were burdened with stepping outside their long-established workflows to retrieve imaging studies forwarded via Patient Link.</p>
                            </div>
                            <div className="col-5">
                                <div className="img-100">
                                    <img src={insight_4} alt="" />
                                </div>
                            </div>
                            <div className="col-7">
                                <h5>Forced Redundancy</h5>
                                <p>Patient Link wasn’t designed in an integration-ready model for existing facility patient portals, resulting in redundant and highly cumbersome patient web portal experiences for end users.</p>
                            </div>
                        </div>
                        <h2>Interface Usability Limitations</h2>
                        <div className="grid-wrapper product-insights">
                            <div className="col-5">
                                <div className="img-100">
                                    <img src={insight_6} alt="" />
                                </div>
                            </div>
                            <div className="col-7">
                                <h5>Clunky and Unintuitive</h5>
                                <p>Interface designs and user page flows within the application were confusing and difficult to grasp. Buttons were impossible to find. Various sections deep within page flows denied users the ability to revert to previous screen(s), resulting in loads of erased work when small mistakes were made. Many users had difficulties logging into the portal.</p>
                            </div>
                            <div className="col-5">
                                <div className="img-100">
                                    <img src={insight_7} alt="" />
                                </div>
                            </div>
                            <div className="col-7">
                                <h5>Poorly Designed Datatables</h5>
                                <p>The application didn’t offer specialized or actionable datatables of a patient’s medical imaging history. Users were required to navigate to separate places in the application to take actions on the exams displayed in their exams table, resulting in duplicate work and the added burden of memorizing which exam(s) desired action. Information was sloppily stacked in multiple lines per row.</p>
                            </div>
                            <div className="col-5">
                                <div className="img-100">
                                    <img src={insight_8} alt="" />
                                </div>
                            </div>
                            <div className="col-7">
                                <h5>Stunted Usability Lifecycle</h5>
                                <p>End users — patients and medical staff alike — had no intuitive method for adding more recent exams to an authenticated portal or access code. This regularly resulted in facility staff generating and distributing new access codes to patients, containing only their most recent exam, further segregating them from prior imaging studies and disrupting the picture of the patient’s imaging history in its entirety.</p>
                            </div>
                            <div className="col-5">
                                <div className="img-100">
                                    <img src={insight_9} alt="" />
                                </div>
                            </div>
                            <div className="col-7">
                                <h5>Unhelpful Language</h5>
                                <p>User knowledge of medical terminology and technical familiarity weren’t taken into account. Error messages didn’t contain any helpful information — both for end users and technical support teams.</p>
                            </div>
                            <div className="col-5">
                                <div className="img-100">
                                    <img src={insight_10} alt="" />
                                </div>
                            </div>
                            <div className="col-7">
                                <h5>Driving Blind</h5>
                                <p>There were no systems in place to intimately track user interactions within the application, leading to great difficulties making data-driven decisions for future iterations of the product.</p>
                            </div>
                            <div className="col-5">
                                <div className="img-100">
                                    <img src={insight_7} alt="" />
                                </div>
                            </div>
                            <div className="col-7">
                                <h5>Confusing Download Actions</h5>
                                <p>Insufficient language and iconography frequently lead to users re-performing the ‘download’ action on large diagnostic image files/folders, not realizing their download had already begun. Cardiac CT scans (a common image type handled by Patient Link) can easily exceed 30GB (gigabytes) in filesize.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="type-four">
                    <div className="content">
                        <h4>The Re-Design</h4>
                        <h2>Building a Design Language</h2>
                        <p>I required that my designs have the capacity to scale alongside the company’s growth. To achieve this, I focused on building a consistent design language that fits the needs of a diverse set of users, as well as scalable content modules that could be repurposed across other applications. This formed the basis of ensuring more efficient handoffs between design and development teams. Components included cards, list items, custom iconography, buttons, switches, and many others.</p>
                    </div>
                    <div className="image bg-alt2">
                        <div className="img-description"></div>
                        <div className="img-75">
                            <img src={design_system} alt="" />
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="type-four">
                    <div className="content" id="friendly-entrance">
                        <h2>A Friendly Entrance</h2>
                        <p>The application now presents users with a cohesive theme and a friendly interface. Attention is directed to screen sections requiring immediate attention or user input. Buttons and text are enlarged for our primarily older audience, and language is suited for patients with limited medical and technical knowledge, with more in-depth explanations available via Information tooltips.</p>
                    </div>
                    <div className="image">
                        <div className="img-description">
                            <p>Evolution of the Access Code application entry point of the Patient Link application from old (left) to new (right).</p>
                        </div>
                        <div className="img-85">
                            <img src={entrance_1} alt="" />
                        </div>
                        <div className="img-description">
                            <p>Evolution of the Login entry point of the Patient Link application from old (left) to new (right).</p>
                        </div>
                        <div className="img-85">
                            <img src={entrance_2} alt="" />
                        </div>
                        <div className="img-description">
                            <p>Evolution of the Sign Up page for Patient Link application from old (left) to new (right).</p>
                        </div>
                        <div className="img-85">
                            <img src={entrance_3} alt="" />
                        </div>
                    </div>
                    <div className="sub-content">
                        <p>Login screens have been modified to bring user attention to the input fields of their preferred authentication method. Errors are appropriately verbose and bring user attention directly to the error field, as opposed to simply stating: “page error”, as in version one.</p>
                    </div>
                    <div className="image">
                        <div className="img-description">
                            <p>Evolution of application entry point error states from old (left) to new (right).</p>
                        </div>
                        <div className="img-85">
                            <img src={entrance_4} alt="" />
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="type-four">
                    <div className="content">
                        <h2>Functionality at Your Fingertips</h2>
                        <p>The application dashboard now presents users with a more ’action friendly’ view of their imaging studies datatable. Throughout the gathering of field data I identified three key metrics {'{'}among the roughly 25 available in DICOM metatada fields{'}'} that allow users to most quickly identify their intended actionable study: title {'{'}containing the name of the body part imaged{'}'}, institution {'{'}where the imaging study was performed{'}'}, and the date {'{'}of the exam{'}'}. Image rows are aptly organized according to these attributes in sortable columns.</p>
                        <p>Actions for each available study are accentuated with bright and elevated buttons, sporting familiar iconography. From here users can view their diagnostic reports and imaging studies, share them, and download them.</p>
                    </div>
                    <div className="image bg-alt2">
                        <div className="img-75">
                            <img src={functionality} alt="" />
                        </div>
                    </div>
                    <div className="sub-content">
                        <p>The navigation bar allows users to move to a dedicated image sharing flow, retrieve images using an access code, or access their settings panel. Users are also provided a structurally familiar user dropdown in the upper right-hand of the application, allowing for quick access to sign-out, user settings, and the product tutorial.</p>
                    </div>
                </div>
            </section>
            <section>
                <div className="type-four">
                    <div className="content">
                        <h2>What's New & How To</h2>
                        <p>The user product tutorial offers a quick and deliberate walkthrough of the new and most useful features including advanced image sharing, image retrieval, image/report viewing, and configurable file system downloads.</p>
                    </div>
                    <div className="img-full">
                        <div id="tutorial">
                            <img src={tutorial} alt="" />
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="type-four">
                    <div className="content">
                        <h2>Building Better UX with Language</h2>
                        <p>Previously, error states were uninformative and frustrating. Technical support teams were overburdened with confused users unable to perform simple tasks as a direct result of poorly- worded error language. Language for errors now strikes the balance between appropriately brief and sufficiently descriptive.</p>
                        <p>The application dashboard now features a notification panel, designed to offer patients important information about their account, required user actions, or the status of active downloads.</p>
                        <p id="no-bottom-margin">Because the application sees traffic from professional clinicians and patients alike, it was important to provide language that was both ample and appropriate to the task at hand, while taking care not to overwhelm users unfamiliar with technical language. Deeper and more technical explanations of various product features can be found alongside carefully worded feature descriptions via information tooltips and modals.</p>
                    </div>
                </div>
            </section>
            <section>
                <div className="type-four">
                    <div className="content">
                        <h2>Improving Product Lifecycle</h2>
                        <p>Study Retrieval allows users to fetch studies via access codes, and add them to an authenticated portal, thereby consolidating multiple imaging studies into a single account. Using Retrieve, patients and providers alike can store, manage, and share all of their desired imaging studies from one place. Users that have already authenticated into the portal with an access code now have the ability to sign up for a Patient Link account — without re-entering their access code — for easier future access.</p>
                    </div>
                    <div className="image bg-alt2">
                        <div className="img-85">
                            <img src={lifecycle} alt="" />
                        </div>
                    </div>
                    <div className="img-full" id="lifecycle">
                        <img src={lifecycle_02} alt="" />
                    </div>
                </div>
            </section>
            <section>
                <div className="type-four">
                    <div className="content">
                        <h2>Medicom Direct — Advanced Image Sharing</h2>
                        <p>Introducing Medicom Direct: advanced sharing of diagnostic imaging studies with providers. The most noteworthy innovation to the Patient Link experience is the advanced sharing feature, which leverages the existing Medicom ImageX network infrastructure to deposit images directly in local viewing systems for the best possible physician experience. Medical imaging exams are securely transferred directly from the original imaging center’s database to the receiving physician’s Medicom Checkpoint — a holding bay for newly received patient images awaiting physician review.</p>
                        <p>For out of network recipients, images are securely transferred via the DirectTrust protocol. They move directly from the original imaging center’s database to the receiving physicians Electronic Medical Record — a digital medical chart that help physicians organize, document, and view their patient’s medical records, so they can better diagnose and treat their patients. In this way, receiving physicians needn’t interact with access codes or the Patient Link portal; images are immediately available in their own local systems.</p>
                    </div>
                    <div className="image bg-alt2">
                        <div className="img-75">
                            <img src={share_01} alt="" />
                        </div>
                    </div>
                    <div className="sub-content">
                        <p>I designed the flow based on the idea of addressee/recipient confidence. If the Medicom system is confident of the identification of the target physician/clinician, we do the heavy lifting. Otherwise, the user is prompted to enter additional contact details for their intended recipient, such as fax number or email address. I designed and tested a flexible system optimized for ease of use.</p>
                        <p>Users can select whichever imaging studies they wish to send. Studies will be packaged together and digitally shipped in an organized structure, optimized for radiologists to read. Imaging studies that would have previously required a notebook full of physical discs to burn and carry, can now be delivered instantly in lossless digital format.</p>
                    </div>
                    <div className="img-full">
                        <img src={share_02} alt="" />
                    </div>
                    <div className="sub-content">
                        <p>Users can search for providers by name, specialty, address, or affiliated organizations. If known, the National Provider Index can also be used. Search results are presented in list-view format with an accompanying map for quicker reference. I designed ‘active loading states’ so even while users await for system results to return, they aren’t confused with seemingly frozen or unresponsive application states. If desired, users can also send digital access to their imaging studies to friends and family.</p>
                    </div>
                    <div className="img-full">
                        <img src={share_03} alt="" />
                    </div>
                </div>
            </section>
            <section>
                <div className="type-four">
                    <div className="content">
                        <h2>Faster File Ingestion</h2>
                        <p>Field interviews revealed that Patient Link users download medical imaging studies for three primary reasons — burning images to discs [to courrier along to other physicians], viewing images in a standalone viewer (outside the web), or importing images to medical imaging archive systems, namely PACS. Users now have the option to perform any of these three functions, while we guide unfamiliar users to their most probable application.</p>
                    </div>
                    <div className="image bg-alt2">
                        <div className="img-75">
                            <img src={ingestion_01} alt="" />
                        </div>
                    </div>
                    <div className="sub-content">
                        <p>Medical professionals utilize the download feature(s) much more often than patients, and for very specific reasons. Designs now incorporate a quality assurance stage for imaging files that are to be ingested into medical imaging archive systems (PACS). The flat file structure combined with quality assurance staging ensures DICOM files are properly imported.</p>
                    </div>
                    <div className="img-full">
                        <img src={ingestion_02} alt="" />
                    </div>
                </div>
            </section>
            <section>
                <div className="type-four">
                    <div className="content">
                        <h2>Improving Integration, Reducing Redundancy</h2>
                        <p>Many providers offer patient portals for their patients to perform various intake functions, complete administrative and history forms, update billing information, and communicate with staff. To drive holistic adoption of the Medicom solution, I designed and documented a REST-ful API that exports the core functionality of Patient Link to be embedded in existing patient portals. This way, patients already interacting with an existing patient portal can still view their images, share them with other providers, and download them if they wish, all without being forced into a separate portal.</p>
                    </div>
                    <div className="image bg-alt2">
                        <div className="img-75">
                            <img src={redundancy_01} alt="" />
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="type-four">
                    <div className="content">
                        <h2>Enabling Data-Driven Decisions</h2>
                        <p>No matter how keen my initial product usability insights were, they were largely intuition-based. This made my field research critical — there was almost no other organized or structured data to analyze and operate upon. I set about crafting an in-depth user tracking plan to be implemented in Mixpanel (for which we’d already acquired a license for our other products). I also conducted Information Security research into Mixpanel data retention policies to ensure anonymity and data security surrounding any potentially exposed patient information.</p>
                        <div className="pullquote">
                            <q>I wanted to set product goals, collect accurate data on product usability, identify trends in our users’ behavior, explore hypotheses, and take more informed action in the future.</q>
                        </div>
                        <p>My tracking plan is broken down here by product application section, user events, event triggers, KPIs, captured properties, and other elements. This user tracking plan provides our team valuable data-driven insights on which future product iterations will be based.</p>
                    </div>
                    <div className="image bg-alt3" id="metrics">
                        <div className="img-description">
                            <p>Application entry metrics</p>
                        </div>
                        <div className="img-85">
                            <img src={data_01} alt="" />
                        </div>
                        <div className="img-description">
                            <p>Study sharing metrics</p>
                        </div>
                        <div className="img-85">
                            <img src={data_02} alt="" />
                        </div>
                        <div className="img-description">
                            <p>Application tutorial metrics</p>
                        </div>
                        <div className="img-85">
                            <img src={data_03} alt="" />
                        </div>
                        <div className="img-description">
                            <p>Dashboard metrics</p>
                        </div>
                        <div className="img-85">
                            <img src={data_04} alt="" />
                        </div>
                        <div className="img-description">
                            <p>Imaging download metrics</p>
                        </div>
                        <div className="img-85">
                            <img src={data_05} alt="" />
                        </div>
                        <div className="img-description">
                            <p>Image viewing metrics</p>
                        </div>
                        <div className="img-85">
                            <img src={data_06} alt="" />
                        </div>
                        <div className="img-description">
                            <p>Report viewing metrics</p>
                        </div>
                        <div className="img-85">
                            <img src={data_07} alt="" />
                        </div>
                        <div className="img-description">
                            <p>Account settings metrics</p>
                        </div>
                        <div className="img-85">
                            <img src={data_08} alt="" />
                        </div>
                        <div className="img-description">
                            <p>Study retrieval metrics</p>
                        </div>
                        <div className="img-85">
                            <img src={data_09} alt="" />
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="type-five">
                    <div className="content" id="finale">
                        <h4>The Impact</h4>
                        <h2>Tremendously Positive Results</h2>
                        <p>Hundreds of hours brainstorming, carefully planning, sketching, designing, and developing brought about our desired results for the launch of Patient Link 2.0. Our entire team was proud and excited to present the new face of Patient Link to our customers.</p>
                        <p>In the months following its launch, the redesign of the Medicom Patient Link application has had an overwhelmingly positive impact on product usability, experience, and reduced technical support workload, as well as a direct effect on successful customer acquisitions.</p>
                        <div className="results">
                            <h2>TIME TO LOGIN DECREASED BY 34%</h2>
                            <h2>TIME TO SHARE IMAGES DROPPED BY 46%</h2>
                            <h2>USER ERROR RATE DECREASED BY 63%</h2>
                            <h2>CONSECUTIVE RE-DOWNLOADS DROPPED BY 81%</h2>
                            <h2>NUMBER OF SUPPORT CALLS DROPPED BY 52%</h2>
                            <h2>ACCOUNTS HOSTING MULTIPLE STUDIES INCREASED BY 26%</h2>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </div>
  </Layout>
)

export default PatientLink
