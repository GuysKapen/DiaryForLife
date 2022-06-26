import PlayButton from "../components/PlayButton"

const categoriesInfos = [
  {
    category: "A. Identifiers",
    examples: "Contact details, such as real name, alias, postal address, telephone or mobile contact number, unique personal identifier, online identifier, Internet Protocol address, email address, and account name ",
    collected: false
  },
  {
    category: "B. Personal information categories listed in the California Customer Records statute",
    examples: "Name, contact information, education, employment, employment history, and financial information",
    collected: false
  },
  {
    category: "C. Protected classification characteristics under California or federal law",
    examples: "Gender and date of birth",
    collected: false
  },
  {
    category: "D. Commercial information",
    examples: "Transaction information, purchase history, financial details, and payment information",
    collected: false
  },
  {
    category: "E. Biometric information",
    examples: "Fingerprints and voiceprints",
    collected: false
  },
  {
    category: "F. Internet or other similar network activity",
    examples: "Browsing history, search history, online behavior , interest data, and interactions with our and other websites, applications, systems, and advertisements",
    collected: false
  },
  {
    category: "G. Geolocation data",
    examples: "Device location",
    collected: false
  },
  {
    category: "H. Audio, electronic, visual, thermal, olfactory, or similar information",
    examples: "Images and audio, video or call recordings created in connection with our business activities",
    collected: false
  },
  {
    category: "I. Professional or employment-related information",
    examples: "Business contact details in order to provide you our services at a business level or job title, work history, and professional qualifications if you apply for a job with us",
    collected: false
  },
  {
    category: "J. Education Information",
    examples: "Student records and directory information",
    collected: false
  },
  {
    category: "K. Inferences drawn from other personal information",
    examples: "Inferences drawn from any of the collected personal information listed above to create a profile or summary about, for example, an individual’s preferences and characteristics",
    collected: false
  },
]

function Policy() {
  return (
    <div className="app">
      <section className='pt-48 pb-16 px-64'>
        <h1 className='text-5xl font-black text-gray-800'>Privacy</h1>
        <div className="mt-8">
          <div>
            <img src="" alt="" />
          </div>
          <div>
            <h3 className='font-bold text-base'>The Omoir Team</h3>
            <p className='text-gray-600 text-sm'>June 20, 2022</p>
          </div>
        </div>
      </section>
      <section className='px-64'>
        <div className="mt-8">
          <div>
            <img src="" alt="" />
          </div>
          <div className='flex items-center'>
            <div className='circle-cmp app__flex' key={`circle-quill`}>
              <span className='app__flex bg-gradient-to-l rounded-full p-2 h-24 w-24 text-transparent from-indigo-600 to-blue-600'>
                <span className="material-icons text-white text-6xl">
                  history_edu
                </span>
              </span>
            </div>
            <p className='text-gray-600 p-text text-lg mx-8'>Download Omoir free tody and enjoy writing your diaries, keep track of your moments, events and mood</p>
            <div className="w-48 flex-shrink-0 mx-auto">
              <PlayButton />
            </div>
          </div>
        </div>
      </section>

      {/* Policy */}
      <section id='privacy-policy' className='px-64 mt-16'>
        <h1 className='p-text text-5xl font-black text-gray-800'>Privacy Notice</h1>
        <p className='text-gray-600 font-semibold'>Last updated June 20, 2022</p>
        <p>
          This privacy notice for Omoir <span> ("Company ," "we," "us," or "our" )</span>, describes how and why we might collect, store, use, and/or share ("process") your information when you use our services ("<span>Services</span>"), such as when you:</p>
        <ul>
          <li>
            Download and use our mobile application (Omoir) , or any other application of ours that links to this privacy notice
          </li>
          <li>
            Engage with us in other related ways, including any sales, marketing, or events
          </li>
        </ul>
        <p><span>Questions or concerns?</span> Reading this privacy notice will help you understand your privacy rights and choices. If you do not agree with our policies and practices, please do not use our Services. If you still have any questions or concerns, please contact us at guysdeveloperrobot@gmail.com.</p>

        <div>
          <h3>Summary Of Key Points</h3>
          <p className='text-gray-800 font-semibold text-base'>This summary provides key points from our privacy notice, but you can find out more details about any of these topics by clicking the link following each key point or by using our table of contents below to find the section you are looking for. You can also click <a href="#toc">here</a> to go directly to our table of contents.</p>
          <p><span>What personal information do we process?</span>When you visit, use, or navigate our Services, we may process personal information depending on how you interact with Omoir and the Services, the choices you make, and the products and features you use. Click  <a href="#personal-info">here</a> to learn more.</p>
          <p><span>Do we process any sensitive personal information?</span>We do not process sensitive personal information.</p>
          <p><span>Do we receive any information from third parties?</span>We do not receive any information from third parties.</p>
          <p><span>How do we process your information?</span>We process your information to provide, improve, and administer our Services, communicate with you, for security and fraud prevention, and to comply with law. We may also process your information for other purposes with your consent. We process your information only when we have a valid legal reason to do so. Click <a href="#info-use">here</a> to learn more.</p>
          <p><span>In what situations and with which types of parties do we share personal information?</span>We may share information in specific situations and with specific categories of third parties. Click <a href="#who-share">here</a> to learn more.</p>
          <p><span>How do we keep your information safe?</span>We have organizational and technical processes and procedures in place to protect your personal information. However, no electronic transmission over the internet or information storage technology can be guaranteed to be 100% secure, so we cannot promise or guarantee that hackers, cybercriminals, or other unauthorized third parties will not be able to defeat our security and improperly collect, access, steal, or modify your information. Click <a href="#info-safe">here</a> to learn more.</p>
          <p><span>What are your rights?</span>Depending on where you are located geographically, the applicable privacy law may mean you have certain rights regarding your personal information. Click <a href="#info-safe"></a> to learn more.</p>
          <p><span>How do you exercise your rights?</span>The easiest way to exercise your rights is by filling out our data subject request form available here , or by contacting us. We will consider and act upon any request in accordance with applicable data protection laws. </p>
          <p>Want to learn more about what Omoir does with any information we collect? Click  <a href="#toc">here</a> to review the notice in full.</p>
        </div>

        <div id="toc">
          <h2>Table Of Contens</h2>
          <a href="#info-collect">1. What Information Do We Collect?</a>
          <a href="#info-use">2. How Do We Process Your Information?</a>
          <a href="#legal-bases">3. What Legal Bases Do We Rely On To Process Your Personal Information?</a>
          <a href="#who-share">4. When And With Whom Do We Share Your Personal Information?</a>
          <a href="#how-long">5. How Long Do We Keep Your Information?</a>
          <a href="#info-safe">6. How Do We Keep Your Information Safe?</a>
          <a href="#privacy-rights">7. What Are Your Privacy Rights?</a>
          <a href="#do-not-track">8. Controls For Do-Not-Track Features</a>
          <a href="#ca">9. Do California Residents Have Specific Privacy Rights?</a>
          <a href="#update">10. Do We Make Updates To This Notice?</a>
          <a href="#contact">11. How Can You Contact Us About This Notice?</a>
          <a href="#request">12. How Can You Review, Update, Or Delete The Data We Collect From You?</a>
        </div>

        <div id="info-collect">
          <h2>1. What Information Do We Collect? </h2>
          <p id="personal-info" className='p-text-bold'>Personal information you disclose to us </p>
          <p><span>In short: </span>We collect personal information that you provide to us.</p>
          <p>We collect personal information that you voluntarily provide to us when you express an interest in obtaining information about us or our products and Services, when you participate in activities on the Services, or otherwise when you contact us.</p>
          <p><span>Sensitive Information.</span>We do not process sensitive information</p>
          <p><span>Application Data.</span>If you use our application(s), we also may collect the following information if you choose to provide us with access or permission:</p>
          <ul>
            <li><span>Mobile Device Data. </span> We automatically collect device information (such as your mobile device ID, model, and manufacturer), operating system, version information and system configuration information, device and application identification numbers, browser type and version, hardware model Internet service provider and/or mobile carrier, and Internet Protocol (IP) address (or proxy server). If you are using our application(s), we may also collect information about the phone network associated with your mobile device, your mobile device’s operating system or platform, the type of mobile device you use, your mobile device’s unique device ID, and information about the features of our application(s) you accessed.</li>
            <li><span>Push Notifications. </span> We may request to send you push notifications regarding your account or certain features of the application(s). If you wish to opt out from receiving these types of communications, you may turn them off in your device's settings.</li>
          </ul>
          <p>This information is primarily needed to maintain the security and operation of our application(s), for troubleshooting, and for our internal analytics and reporting purposes.</p>
          <p className='text-gray-400'>All personal information that you provide to us must be true, complete, and accurate, and you must notify us of any changes to such personal information.</p>
          <p className='p-text-bold'>Information automatically collected</p>
          <p><span>In short: </span>Some information — such as your Internet Protocol (IP) address and/or browser and device characteristics — is collected automatically when you visit our Services.</p>
          <p>We automatically collect certain information when you visit, use, or navigate the Services. This information does not reveal your specific identity (like your name or contact information) but may include device and usage information, such as your IP address, browser and device characteristics, operating system, language preferences, referring URLs, device name, country, location, information about how and when you use our Services, and other technical information. This information is primarily needed to maintain the security and operation of our Services, and for our internal analytics and reporting purposes.</p>
          <p>The information we collect includes:</p>
          <ul>
            <li>
              <span>Log and Usage Data. </span>Log and usage data is service-related, diagnostic, usage, and performance information our servers automatically collect when you access or use our Services and which we record in log files. Depending on how you interact with us, this log data may include your IP address, device information, browser type, and settings and information about your activity in the Services (such as the date/time stamps associated with your usage, pages and files viewed, searches, and other actions you take such as which features you use), device event information (such as system activity, error reports (sometimes called "crash dumps"), and hardware settings).
            </li>
            <li>
              <span>Device Data. </span> We collect device data such as information about your computer, phone, tablet, or other device you use to access the Services. Depending on the device used, this device data may include information such as your IP address (or proxy server), device and application identification numbers, location, browser type, hardware model, Internet service provider and/or mobile carrier, operating system, and system configuration information.
            </li>
          </ul>
        </div>
        <div id="info-use">
          <h2>2. How Do We Process Your Information? </h2>
          <p><span>In short: </span>We process your information to provide, improve, and administer our Services, communicate with you, for security and fraud prevention, and to comply with law. We may also process your information for other purposes with your consent. </p>
          <p>We process your personal information for a variety of reasons, depending on how you interact with our Services, including: </p>
          <ul>
            <li><span>To save or protect an individual's vital interest.</span>
              We may process your information when necessary to save or protect an individual’s vital interest, such as to prevent harm.
            </li>
          </ul>
        </div>

        <div id="legal-bases">
          <h2> 3. What Legal Bases Do We Rely On To Process Your Information? </h2>
          <p><span>In Short: </span>We only process your personal information when we believe it is necessary and we have a valid legal reason (i.e. , legal basis) to do so under applicable law, like with your consent, to comply with laws, to provide you with services to enter into or fulfill our contractual obligations, to protect your rights, or to fulfill our legitimate business interests. </p>
          <p className='p-text-bold underline'>If you are located in the EU or UK, this section applies to you.</p>
          <p> The General Data Protection Regulation (GDPR) and UK GDPR require us to explain the valid legal bases we rely on in order to process your personal information. As such, we may rely on the following legal bases to process your personal information: </p>
          <ul>
            <li>
              <span>Consent.</span>We may process your information if you have given us permission (i.e. , consent) to use your personal information for a specific purpose. You can withdraw your consent at any time. Click <a href="#withdraw-consent">here</a> to learn more.
            </li>
            <li>
              <span>Legal Obligations.</span>We may process your information where we believe it is necessary for compliance with our legal obligations, such as to cooperate with a law enforcement body or regulatory agency, exercise or defend our legal rights, or disclose your information as evidence in litigation in which we are involved.
            </li>
            <li>
              <span>Vital Interests.</span>We may process your information where we believe it is necessary to protect your vital interests or the vital interests of a third party, such as situations involving potential threats to the safety of any person.
            </li>
          </ul>
          <p className='p-text-bold underline'>If you are located in Canada, this section applies to you.</p>
          <p> We may process your information if you have given us specific permission (i.e. , express consent) to use your personal information for a specific purpose, or in situations where your permission can be inferred (i.e. , implied consent). You can withdraw your consent at any time. Click <a href="#withdraw-consent"></a> to learn more. </p>
          <p> In some exceptional cases, we may be legally permitted under applicable law to process your information without your consent, including, for example: </p>
          <ul>
            <li>
              If collection is clearly in the interests of an individual and consent cannot be obtained in a timely way
            </li>
            <li>
              For investigations and fraud detection and prevention
            </li>
            <li>
              For business transactions provided certain conditions are met
            </li>
            <li>
              If it is contained in a witness statement and the collection is necessary to assess, process, or settle an insurance claim
            </li>
            <li>
              For identifying injured, ill, or deceased persons and communicating with next of kin
            </li>
            <li>
              If we have reasonable grounds to believe an individual has been, is, or may be victim of financial abuse
            </li>
            <li>
              If it is reasonable to expect collection and use with consent would compromise the availability or the accuracy of the information and the collection is reasonable for purposes related to investigating a breach of an agreement or a contravention of the laws of Canada or a province
            </li>
            <li>
              If disclosure is required to comply with a subpoena, warrant, court order, or rules of the court relating to the production of records
            </li>
            <li>
              If it was produced by an individual in the course of their employment, business, or profession and the collection is consistent with the purposes for which the information was produced
            </li>
            <li>
              If the collection is solely for journalistic, artistic, or literary purposes
            </li>
            <li>
              If the information is publicly available and is specified by the regulations
            </li>
          </ul>
        </div>

        <div id="who-share">
          <h2> 4. When And With Whom Do We Share Your Personal Information? </h2>
          <p><span>In Short: </span>We may share information in specific situations described in this section and/or with the following categories of third parties. </p>
          <p><span>Vendors, Consultants, and Other Third-Party Service Providers. </span> We may share your data with third-party vendors, service providers, contractors, or agents (<span>"third parties"</span>) who perform services for us or on our behalf and require access to such information to do that work. We have contracts in place with our third parties, which are designed to help safeguard your personal information. This means that they cannot do anything with your personal information unless we have instructed them to do it. They will also not share your personal information with any organization apart from us. They also commit to protect the data they hold on our behalf and to retain it for the period we instruct. The categories of third parties we may share personal information with are as follows: </p>
          <ul>
            <li>
              Data Analytics Services
            </li>
          </ul>
          <p> We also may need to share your personal information in the following situations: </p>
          <ul>
            <li>
              <span>Business Transfers. </span>
              We may share or transfer your information in connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business to another company.
            </li>
          </ul>
        </div>

        <div id="how-long">
          <h2> 5. How Long Do We Keep Your Information? </h2>
          <p><span>In Short: </span> We keep your information for as long as necessary to fulfill the purposes outlined in this privacy notice unless otherwise required by law. </p>
          <p> We will only keep your personal information for as long as it is necessary for the purposes set out in this privacy notice, unless a longer retention period is required or permitted by law (such as tax, accounting, or other legal requirements). No purpose in this notice will require us keeping your personal information for longer than 1 year . </p>
          <p> When we have no ongoing legitimate business need to process your personal information, we will either delete or anonymize such information, or, if this is not possible (for example, because your personal information has been stored in backup archives), then we will securely store your personal information and isolate it from any further processing until deletion is possible. </p>
        </div>

        <div id="info-safe">
          <h2> 6. How Do We Keep Your Information Safe? </h2>
          <p><span>In Short: </span>We aim to protect your personal information through a system of organizational and technical security measures.</p>
          <p> We have implemented appropriate and reasonable technical and organizational security measures designed to protect the security of any personal information we process. However, despite our safeguards and efforts to secure your information, no electronic transmission over the Internet or information storage technology can be guaranteed to be 100% secure, so we cannot promise or guarantee that hackers, cybercriminals, or other unauthorized third parties will not be able to defeat our security and improperly collect, access, steal, or modify your information. Although we will do our best to protect your personal information, transmission of personal information to and from our Services is at your own risk. You should only access the Services within a secure environment. </p>
        </div>

        <div id="privacy-rights">
          <h2> 7. What Are Your Privacy Rights? </h2>
          <p><span>In Short: </span>In some regions, such as the European Economic Area (EEA), United Kingdom (UK), and Canada , you have rights that allow you greater access to and control over your personal information.  You may review, change, or terminate your account at any time.</p>
          <p> In some regions (like the EEA, UK, and Canada ), you have certain rights under applicable data protection laws. These may include the right (i) to request access and obtain a copy of your personal information, (ii) to request rectification or erasure; (iii) to restrict the processing of your personal information; and (iv) if applicable, to data portability. In certain circumstances, you may also have the right to object to the processing of your personal information. You can make such a request by contacting us by using the contact details provided in the section " HOW CAN YOU CONTACT US ABOUT THIS NOTICE? " below. </p>
          <p> We will consider and act upon any request in accordance with applicable data protection laws. </p>
          <p> If you are located in the EEA or UK and you believe we are unlawfully processing your personal information, you also have the right to complain to your local data protection supervisory authority. You can find their contact details here: <a href="https://ec.europa.eu/justice/data-protection/bodies/authorities/index_en.htm.">https://ec.europa.eu/justice/data-protection/bodies/authorities/index_en.htm.</a>  </p>
          <p> If you are located in Switzerland, the contact details for the data protection authorities are available here: <a href="https://www.edoeb.admin.ch/edoeb/en/home.html.">https://www.edoeb.admin.ch/edoeb/en/home.html.</a> </p>
          <p id="withdraw-consent"><span>Withdrawing your consent: </span>If we are relying on your consent to process your personal information, which may be express and/or implied consent depending on the applicable law, you have the right to withdraw your consent at any time. You can withdraw your consent at any time by contacting us by using the contact details provided in the section " HOW CAN YOU CONTACT US ABOUT THIS NOTICE? " below .
          </p>
          <p> However, please note that this will not affect the lawfulness of the processing before its withdrawal, nor when applicable law allows, will it affect the processing of your personal information conducted in reliance on lawful processing grounds other than consent. </p>
        </div>

        <div id="do-not-track">
          <h2> 8. Controls For Do-Not-Track Features </h2>
          <p> Most web browsers and some mobile operating systems and mobile applications include a Do-Not-Track ( "DNT" ) feature or setting you can activate to signal your privacy preference not to have data about your online browsing activities monitored and collected. At this stage no uniform technology standard for recognizing and implementing DNT signals has been finalized . As such, we do not currently respond to DNT browser signals or any other mechanism that automatically communicates your choice not to be tracked online. If a standard for online tracking is adopted that we must follow in the future, we will inform you about that practice in a revised version of this privacy notice. </p>
        </div>

        <div id="ca">
          <h2> 9. Do California Residents Have Specific Privacy Rights? </h2>
          <p><span>In Short: </span>Yes, if you are a resident of California, you are granted specific rights regarding access to your personal information.</p>
          <p> California Civil Code Section 1798.83, also known as the "Shine The Light" law, permits our users who are California residents to request and obtain from us, once a year and free of charge, information about categories of personal information (if any) we disclosed to third parties for direct marketing purposes and the names and addresses of all third parties with which we shared personal information in the immediately preceding calendar year. If you are a California resident and would like to make such a request, please submit your request in writing to us using the contact information provided below. </p>
          <p> If you are under 18 years of age, reside in California, and have a registered account with Services, you have the right to request removal of unwanted data that you publicly post on the Services. To request removal of such data, please contact us using the contact information provided below and include the email address associated with your account and a statement that you reside in California. We will make sure the data is not publicly displayed on the Services, but please be aware that the data may not be completely or comprehensively removed from all our systems (e.g. , backups, etc.). </p>
          <p className='p-text-bold'> CCPA Privacy Notice </p>
          <p> The California Code of Regulations defines a "resident" as: </p>
          <ul>
            <li> (1) every individual who is in the State of California for other than a temporary or transitory purpose and </li>
            <li> (2) every individual who is domiciled in the State of California who is outside the State of California for a temporary or transitory purpose </li>
          </ul>
          <p> All other individuals are defined as "non-residents." </p>
          <p> If this definition of "resident" applies to you, we must adhere to certain rights and obligations regarding your personal information. </p>
          <p className='p-text-bold'> What categories of personal information do we collect? </p>
          <p> We have collected the following categories of personal information in the past twelve (12) months: </p>


          <div className="flex flex-col my-4">
            <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Category
                        </th>
                        <th scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Examples
                        </th>
                        <th scope="col"
                          className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Collected
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">

                      {categoriesInfos.map((ele, index) => (<tr>
                        <td className="text-sm font-medium text-gray-900 px-6">{ele.category}</td>
                        <td className="px-6 py-4 text-sm text-gray-500">{ele.examples}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-center">
                          {ele.collected ? (<span
                            className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
                            Yes
                          </span>) : (<span
                            className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                            No
                          </span>)}

                        </td>

                      </tr>))}


                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>



          <p> We may also collect other personal information outside of these categories instances where you interact with us in person, online, or by phone or mail in the context of: </p>
          <ul>
            <li>
              Receiving help through our customer support channels;
            </li>
            <li>
              Participation in customer surveys or contests; and
            </li>
            <li>
              Facilitation in the delivery of our Services and to respond to your inquiries.
            </li>
          </ul>
          <p className='p-text-bold'> How do we use and share your personal information? </p>
          <p> More information about our data collection and sharing practices can be found in this privacy notice . </p>
          <p> You may contact us by email at  guysdeveloperrobot@gmail.com , or by referring to the contact details at the bottom of this document. </p>
          <p> If you are using an authorized agent to exercise your right to opt out we may deny a request if the authorized agent does not submit proof that they have been validly authorized to act on your behalf. </p>
          <p className='p-text-bold'> Will your information be shared with anyone else? </p>
          <p> We may disclose your personal information with our service providers pursuant to a written contract between us and each service provider. Each service provider is a for-profit entity that processes the information on our behalf. </p>
          <p> We may use your personal information for our own business purposes, such as for undertaking internal research for technological development and demonstration. This is not considered to be "selling" of your personal information. </p>
          <p className='p-text-bold'> Omoir has not sold any personal information to third parties for a business or commercial purpose in the preceding twelve (12) months.</p>
          <p>Omoir  has disclosed the following categories of personal information to third parties for a business or commercial purpose in the preceding twelve (12) months: </p>
          <ul>
            <li>
              Category B. Personal information, as defined in the California Customer Records law, such as your name, contact information, education, employment, employment history, and financial information.
            </li>
          </ul>
          <p> The categories of third parties to whom we disclosed personal information for a business or commercial purpose can be found under " WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION? " . </p>
          <p className='p-text-bold'> Your rights with respect to your personal data </p>
          <p className='underline'> Right to request deletion of the data — Request to delete </p>
          <p> You can ask for the deletion of your personal information. If you ask us to delete your personal information, we will respect your request and delete your personal information, subject to certain exceptions provided by law, such as (but not limited to) the exercise by another consumer of his or her right to free speech, our compliance requirements resulting from a legal obligation, or any processing that may be required to protect against illegal activities. </p>
          <p className='underline'>Right to be informed — Request to know</p>
          <p> Depending on the circumstances, you have a right to know: </p>
          <ul>
            <li>
              whether we collect and use your personal information;
            </li>
            <li>
              the categories of personal information that we collect;
            </li>
            <li>
              the purposes for which the collected personal information is used;
            </li>
            <li>
              whether we sell your personal information to third parties;
            </li>
            <li>
              the categories of personal information that we sold or disclosed for a business purpose;
            </li>
            <li>
              the categories of third parties to whom the personal information was sold or disclosed for a business purpose; and
            </li>
            <li>
              the business or commercial purpose for collecting or selling personal information.
            </li>
          </ul>
          <p> In accordance with applicable law, we are not obligated to provide or delete consumer information that is de-identified in response to a consumer request or to re-identify individual data to verify a consumer request. </p>
          <p className='underline'> Right to Non-Discrimination for the Exercise of a Consumer’s Privacy Rights </p>
          <p> We will not discriminate against you if you exercise your privacy rights. </p>
          <p className='underline'>Verification process</p>
          <p> Upon receiving your request, we will need to verify your identity to determine you are the same person about whom we have the information in our system. These verification efforts require us to ask you to provide information so that we can match it with information you have previously provided us. For instance, depending on the type of request you submit, we may ask you to provide certain information so that we can match the information you provide with the information we already have on file, or we may contact you through a communication method (e.g. , phone or email) that you have previously provided to us. We may also use other verification methods as the circumstances dictate. </p>
          <p> We will only use personal information provided in your request to verify your identity or authority to make the request. To the extent possible, we will avoid requesting additional information from you for the purposes of verification. However, if we cannot verify your identity from the information already maintained by us, we may request that you provide additional information for the purposes of verifying your identity and for security or fraud-prevention purposes. We will delete such additionally provided information as soon as we finish verifying you. </p>
          <p className='underline'>Other privacy rights</p>
          <ul>
            <li>
              You may object to the processing of your personal information.
            </li>
            <li>
              You may request correction of your personal data if it is incorrect or no longer relevant, or ask to restrict the processing of the information.
            </li>
            <li>
              You can designate an authorized agent to make a request under the CCPA on your behalf. We may deny a request from an authorized agent that does not submit proof that they have been validly authorized to act on your behalf in accordance with the CCPA.
            </li>
            <li>
              You may request to opt out from future selling of your personal information to third parties. Upon receiving an opt-out request, we will act upon the request as soon as feasibly possible, but no later than fifteen (15) days from the date of the request submission.
            </li>
          </ul>
          <p> To exercise these rights, you can contact us  by email at guysdeveloperrobot@gmail.com ,<span>or by referring to the contact details at the bottom of this document. If you have a complaint about how we handle your data, we would like to hear from you.</span> </p>
        </div>

        <div id="update">
          <h2> 10. Do We Make Updates To This Notice? </h2>
          <p><span>In Short: </span> Yes, we will update this notice as necessary to stay compliant with relevant laws. </p>
          <p> We may update this privacy notice from time to time. The updated version will be indicated by an updated "Revised" date and the updated version will be effective as soon as it is accessible. If we make material changes to this privacy notice, we may notify you either by prominently posting a notice of such changes or by directly sending you a notification. We encourage you to review this privacy notice frequently to be informed of how we are protecting your information. </p>
        </div>

        <div id="contact">
          <h2> 11. How Can You Contact Us About This Notice? </h2>
          <p> If you have questions or comments about this notice, you may email us at guysdeveloperrobot@gmail.com  or by post to: </p>
          <p> Omoir </p>
          <p>The Omoir Team</p>
        </div>

        <div id="request">
          <h2> 12. How Can You Review, Update, Or Delete The Data We Collect From You? </h2>
          <p> Based on the applicable laws of your country, you may have the right to request access to the personal information we collect from you, change that information, or delete it. To request to review, update, or delete your personal information, please submit a request form by clicking here . </p>
        </div>
      </section>
    </div>
  )
}

export default Policy
