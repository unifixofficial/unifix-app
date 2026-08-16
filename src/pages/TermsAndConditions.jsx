import "../styles/TermsAndConditions.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Para = ({ children }) => <p className="tnc-para">{children}</p>;
const SectionHeading = ({ children }) => <h3 className="tnc-section-heading">{children}</h3>;
const SubHeading = ({ children }) => <h4 className="tnc-sub-heading">{children}</h4>;
const PartHeading = ({ children }) => <h2 className="tnc-part-heading">{children}</h2>;
const UL = ({ children }) => <ul className="tnc-list">{children}</ul>;
const Divider = () => <hr className="tnc-divider" />;
const PhoneLink = ({ number }) => (
  <a href={`tel:${number}`} style={{ fontWeight: 500, textDecoration: "none", color: "#16a34a" }} className="phone-link">
    {number}
  </a>
);

export default function TermsAndConditions() {
  return (
    <div className="tnc-page">
      <Navbar active="terms" />
      <div className="tnc-container">

        <h1 className="tnc-main-title">TERMS AND CONDITIONS FOR UNIFIX PLATFORM</h1>
        <p className="tnc-main-subtitle">Effective Date: 14 August 2026 &nbsp;|&nbsp; Last Updated: 14 August 2026</p>

        <SectionHeading>1. Introduction</SectionHeading>
        <Para>
          Welcome to UniFiX. UniFiX is a Campus Complaint Management System designed for use by educational institutions (the "Institution"). The platform provides a centralized system for submitting, tracking, and resolving campus facility and maintenance complaints, as well as managing lost and found items on campus.
        </Para>
        <Para>
          By accessing or using the UniFiX application, website, or any related services (collectively, the "Platform"), you agree to be bound by these Terms &amp; Conditions (the "Terms"). If you do not agree to these Terms, you may not use the Platform.
        </Para>
        <Para>
          These Terms apply to all users of the Platform, including students, teachers, staff, administrators, and any other individuals who access or use the Platform.
        </Para>

        <Divider />

        <SectionHeading>2. Definitions</SectionHeading>
        <UL>
          <li><strong>"UniFiX" / "Platform" / "Application"</strong> refers to the Campus Complaint Management System, including its mobile application, administrative panel, backend services, and associated websites.</li>
          <li><strong>"User"</strong> refers to any individual who creates an account, accesses, or uses the Platform in any capacity.</li>
          <li><strong>"Student"</strong> refers to a User who is enrolled at the Institution and has been assigned the student role on the Platform.</li>
          <li><strong>"Teacher"</strong> refers to a User who is employed as a faculty member at the Institution and has been assigned the teacher role on the Platform.</li>
          <li><strong>"Staff" / "Maintenance Staff"</strong> refers to a User employed by the Institution in a maintenance or facilities capacity, assigned the staff role, subject to administrative approval.</li>
          <li><strong>"Administrator" / "Admin"</strong> refers to a User granted administrative privileges to manage the Platform, including Users, complaints, and system settings.</li>
          <li><strong>"Institution"</strong> refers to the educational institution for which UniFiX is deployed.</li>
          <li><strong>"Complaint"</strong> refers to any report, request, or issue submitted through the Platform regarding campus facilities, maintenance, or related matters.</li>
          <li><strong>"Lost &amp; Found"</strong> refers to the functionality that allows Users to post and claim lost or found items on campus.</li>
          <li><strong>"Content"</strong> refers to any information, text, images, photographs, or other materials submitted by Users through the Platform.</li>
        </UL>

        <Divider />

        <SectionHeading>3. Eligibility and User Accounts</SectionHeading>

        <SubHeading>3.1 Account Creation</SubHeading>
        <Para>
          To use the Platform, you must create an account. Account creation is available to individuals affiliated with the Institution, including students, teachers, and staff members. Administrators are designated by the Institution.
        </Para>
        <Para>
          You represent and warrant that all information you provide during registration is accurate, complete, and current. You are responsible for maintaining the accuracy of your account information and updating it as necessary.
        </Para>

        <SubHeading>3.2 Account Security</SubHeading>
        <Para>You are solely responsible for maintaining the confidentiality of your account credentials, including your password. You are responsible for all activities that occur under your account. You agree to:</Para>
        <UL>
          <li>Not share your account credentials with others;</li>
          <li>Notify UniFiX immediately if you suspect any unauthorized use of your account;</li>
          <li>Use a strong, unique password and change it periodically.</li>
        </UL>
        <Para>UniFiX is not liable for any loss or damage arising from your failure to protect your account credentials.</Para>

        <SubHeading>3.3 Account Types</SubHeading>
        <Para>The Platform supports the following account types, each with different permissions and access levels:</Para>
        <UL>
          <li><strong>Student:</strong> Can submit complaints, track complaint status, use Lost &amp; Found functionality, and rate completed complaints.</li>
          <li><strong>Teacher:</strong> Can submit complaints, track complaint status, and use Lost &amp; Found functionality.</li>
          <li><strong>Staff:</strong> Can accept, process, and complete complaints assigned to them, and post found items in the Lost &amp; Found section. Staff accounts require administrative approval before becoming active.</li>
          <li><strong>Administrator:</strong> Has full access to manage Users, complaints, staff verification, ID card requests, deletion requests, security issues, and system settings.</li>
        </UL>

        <SubHeading>3.4 Account Termination</SubHeading>
        <Para>
          UniFiX reserves the right to suspend or terminate your account if you violate these Terms, engage in fraudulent or abusive behavior, or if required by the Institution. You may request account deletion through the Platform, subject to the provisions in Section 15.
        </Para>

        <Divider />

        <SectionHeading>4. Role-Based Access</SectionHeading>
        <Para>
          UniFiX implements role-based access controls to ensure that Users can only access functionality appropriate to their designated role. The Platform is configured such that:
        </Para>
        <UL>
          <li>Students and Teachers have access to complaint submission, tracking, and Lost &amp; Found features.</li>
          <li>Maintenance Staff have access to complaint management, acceptance, and processing features relevant to their assigned complaints.</li>
          <li>Administrators have access to management, oversight, and system configuration features.</li>
        </UL>
        <Para>
          Users may not attempt to access functionality beyond their authorized role. Any attempt to bypass role-based restrictions may result in account suspension or termination.
        </Para>

        <Divider />

        <SectionHeading>5. Complaint Management</SectionHeading>

        <SubHeading>5.1 Submitting a Complaint</SubHeading>
        <Para>Students and Teachers may submit complaints regarding campus facilities or maintenance issues. When submitting a complaint, Users must provide:</Para>
        <UL>
          <li>A category describing the type of issue (e.g., electrical, plumbing, cleaning);</li>
          <li>A description of the issue;</li>
          <li>The location of the issue, including building and room number;</li>
          <li>Any relevant additional details or photographs.</li>
        </UL>
        <Para>Users must provide truthful and accurate information. Submitting false, misleading, or frivolous complaints is prohibited and may result in account suspension or termination.</Para>

        <SubHeading>5.2 Complaint Processing</SubHeading>
        <Para>Once a complaint is submitted, it enters the following workflow:</Para>
        <UL>
          <li><strong>Pending:</strong> The complaint awaits assignment to appropriate maintenance staff based on its category.</li>
          <li><strong>Assigned:</strong> A staff member has accepted the complaint and taken responsibility for its resolution.</li>
          <li><strong>In Progress:</strong> The assigned staff member has begun work on the complaint.</li>
          <li><strong>Completed:</strong> The complaint has been resolved by the assigned staff member or by an administrator.</li>
          <li><strong>Rejected:</strong> The complaint has been rejected by staff or administrators for valid reasons.</li>
        </UL>
        <Para>Complaint statuses are updated in real-time, and Users may track the status of their complaints through the Platform.</Para>

        <SubHeading>5.3 Escalation</SubHeading>
        <Para>Complaints that remain unresolved beyond designated time limits may be escalated. When a complaint is escalated:</Para>
        <UL>
          <li>Administrators are notified;</li>
          <li>The Institution's Head of Department may be notified via email;</li>
          <li>Administrators may take ownership of the complaint or mark it as resolved.</li>
        </UL>
        <Para>Escalation is designed to ensure timely resolution of issues and does not guarantee immediate resolution.</Para>

        <SubHeading>5.4 Ratings</SubHeading>
        <Para>
          After a complaint is marked as completed, the submitting User may rate the staff member who resolved the complaint. Ratings are submitted voluntarily and should reflect the User's honest assessment. Abusive or manipulative rating behavior is prohibited.
        </Para>

        <SubHeading>5.5 Complaint History</SubHeading>
        <Para>
          The Platform maintains a history of complaints for each User, including complaint details, status updates, and resolution information. Users may access their own complaint history through the Platform.
        </Para>

        <Divider />

        <SectionHeading>6. Lost &amp; Found</SectionHeading>

        <SubHeading>6.1 Posting Found Items</SubHeading>
        <Para>Maintenance Staff may post information about found items on campus. Posts must include:</Para>
        <UL>
          <li>A description of the item;</li>
          <li>The location where the item was found;</li>
          <li>Information about where the item may be collected.</li>
        </UL>
        <Para>Staff may include photographs of found items to assist in identification.</Para>

        <SubHeading>6.2 Reporting Lost Items</SubHeading>
        <Para>Students and Teachers may report lost items through the Platform. Reports must include:</Para>
        <UL>
          <li>A description of the item;</li>
          <li>The location where it was lost;</li>
          <li>The date it was lost;</li>
          <li>Contact information for the reporter.</li>
        </UL>

        <SubHeading>6.3 Claims and Handovers</SubHeading>
        <Para>
          Staff who have posted found items may mark items as handed over to their rightful owner or to another individual. Claims and handovers are recorded in the Platform for accountability.
        </Para>

        <SubHeading>6.4 Accuracy and Responsibility</SubHeading>
        <Para>
          Users are responsible for the accuracy of any information they submit in connection with Lost &amp; Found posts. Users must not submit false claims or attempt to claim items that do not belong to them. UniFiX does not guarantee that lost items will be recovered or that found items will be returned to their owners.
        </Para>

        <Divider />

        <SectionHeading>7. Notifications</SectionHeading>
        <Para>The Platform may send notifications to Users regarding:</Para>
        <UL>
          <li>Complaint status changes (accepted, in progress, completed, rejected);</li>
          <li>Complaint assignment to staff;</li>
          <li>Escalation of complaints;</li>
          <li>Lost &amp; Found updates;</li>
          <li>System announcements;</li>
          <li>Other events relevant to the User's role and activity.</li>
        </UL>
        <Para>
          Notifications may be delivered through push notifications (mobile app), email, or in-app messages, depending on the User's settings and the nature of the notification. UniFiX makes reasonable efforts to deliver notifications but does not guarantee receipt. Delivery may be affected by device settings, network connectivity, or third-party service availability.
        </Para>

        <Divider />

        <SectionHeading>8. User-Generated Content and Information</SectionHeading>

        <SubHeading>8.1 Content Ownership and Responsibility</SubHeading>
        <Para>
          Users retain ownership of Content they submit through the Platform. By submitting Content, Users grant UniFiX a license to use, store, display, and process that Content as necessary to provide the Platform's services.
        </Para>

        <SubHeading>8.2 Content Standards</SubHeading>
        <Para>Users must not submit Content that is:</Para>
        <UL>
          <li>False, misleading, or fraudulent;</li>
          <li>Abusive, harassing, threatening, or discriminatory;</li>
          <li>Obscene, offensive, or otherwise inappropriate;</li>
          <li>Infringing on the rights of others;</li>
          <li>Unlawful or in violation of any applicable law or regulation;</li>
          <li>Intended to harm the Platform, its Users, or the Institution;</li>
          <li>Unrelated to the Platform's legitimate purposes.</li>
        </UL>

        <SubHeading>8.3 Content Moderation</SubHeading>
        <Para>
          UniFiX reserves the right to review, modify, or remove any Content that violates these Terms or is otherwise inappropriate. Administrators may take action on Content at their discretion.
        </Para>

        <Divider />

        <SectionHeading>9. Prohibited Use</SectionHeading>
        <Para>Users must not:</Para>
        <UL>
          <li>Access or attempt to access accounts other than their own;</li>
          <li>Bypass or attempt to bypass authentication or authorization controls;</li>
          <li>Interfere with the Platform's operation or security;</li>
          <li>Upload malicious code, files, or content;</li>
          <li>Submit fraudulent, false, or frivolous complaints;</li>
          <li>Harass, threaten, or abuse other Users or staff;</li>
          <li>Misuse the Lost &amp; Found functionality;</li>
          <li>Impersonate another User or individual;</li>
          <li>Abuse administrative functions if you are an Administrator;</li>
          <li>Reverse engineer, decompile, or disassemble the Platform;</li>
          <li>Use the Platform for any purpose other than its intended use as a campus complaint management system;</li>
          <li>Violate any applicable law, regulation, or institutional policy.</li>
        </UL>

        <Divider />

        <SectionHeading>10. Administrative Rights</SectionHeading>
        <Para>Administrators have the authority to:</Para>
        <UL>
          <li>Manage User accounts, including approval, suspension, and termination;</li>
          <li>Review, reassign, and resolve complaints;</li>
          <li>Approve or reject staff account registrations;</li>
          <li>Manage ID card update requests;</li>
          <li>Manage account deletion requests;</li>
          <li>Manage security issue reports;</li>
          <li>Manage system settings and configuration;</li>
          <li>Remove or moderate Content;</li>
          <li>Oversee and manage staff assignments.</li>
        </UL>
        <Para>
          Administrators act in accordance with institutional policies and these Terms. Abuse of administrative privileges may result in removal of administrator status and appropriate institutional action.
        </Para>

        <Divider />

        <SectionHeading>11. Third-Party Services</SectionHeading>
        <Para>UniFiX relies on the following third-party services to provide its functionality:</Para>
        <UL>
          <li><strong>Cloudinary:</strong> For storing and delivering images and files uploaded by Users.</li>
          <li><strong>Firebase / Google Cloud Messaging:</strong> For delivering push notifications to mobile devices.</li>
          <li><strong>Brevo (Sendinblue):</strong> For sending email notifications and communications.</li>
          <li><strong>PostgreSQL / Redis:</strong> For data storage and caching.</li>
          <li><strong>Sentry:</strong> For error tracking and performance monitoring.</li>
        </UL>
        <Para>
          These third-party services are operated by their respective providers and are subject to their own terms, conditions, and privacy policies. UniFiX does not control these services and is not responsible for their performance or availability. By using the Platform, you acknowledge that data may be transmitted to and processed by these third-party services.
        </Para>

        <Divider />

        <SectionHeading>12. Availability and Service Reliability</SectionHeading>
        <Para>UniFiX strives to provide a reliable and available service. However, Users acknowledge that the Platform may experience interruptions due to:</Para>
        <UL>
          <li>Scheduled or emergency maintenance;</li>
          <li>Network failures or connectivity issues;</li>
          <li>Server or infrastructure outages;</li>
          <li>Third-party service failures;</li>
          <li>Software bugs or technical issues;</li>
          <li>Events outside UniFiX's control.</li>
        </UL>
        <Para>
          UniFiX makes reasonable efforts to minimize interruptions but does not guarantee continuous, uninterrupted, or error-free access to the Platform.
        </Para>

        <Divider />

        <SectionHeading>13. Offline Functionality</SectionHeading>
        <Para>
          The UniFiX mobile application includes limited offline functionality. When a User is offline, certain information may be cached locally on their device, allowing Users to view previously loaded data even without an internet connection.
        </Para>
        <Para>
          Submitting complaints, receiving real-time updates, and performing certain actions require an active internet connection. When connectivity is restored, the application will attempt to synchronize offline data with the Platform's servers.
        </Para>

        <Divider />

        <SectionHeading>14. Data and Privacy</SectionHeading>
        <Para>
          The handling of personal information submitted through the Platform is governed by the UniFiX Privacy Policy. By using the Platform, you acknowledge that you have read, understood, and agree to the collection and processing of your personal data as described in the Privacy Policy.
        </Para>

        <Divider />

        <SectionHeading>15. Account Deletion</SectionHeading>

        <SubHeading>15.1 Student and Teacher Account Deletion</SubHeading>
        <Para>
          Students and Teachers may delete their accounts through the Platform. Account deletion will permanently remove access to the account and associated data, subject to any legal, operational, or institutional retention requirements.
        </Para>

        <SubHeading>15.2 Staff Account Deletion</SubHeading>
        <Para>
          Staff members who wish to delete their accounts must submit a deletion request through the Platform. These requests are subject to administrative review and approval. Staff accounts are not immediately deleted upon request.
        </Para>

        <SubHeading>15.3 Data Retention</SubHeading>
        <Para>
          UniFiX may retain certain information after account deletion where required for legitimate operational, legal, security, or institutional purposes, including complaint records for accountability and auditing.
        </Para>

        <Divider />

        <SectionHeading>16. Intellectual Property</SectionHeading>
        <Para>
          The Platform, including its software, code, design, user interface, trademarks, logos, and branding, is the property of UniFiX and/or its licensors. All rights are reserved.
        </Para>
        <Para>
          Users are granted a limited, non-exclusive, non-transferable, revocable license to use the Platform in accordance with these Terms. Users may not copy, modify, distribute, sell, or lease any part of the Platform without explicit written permission.
        </Para>

        <SubHeading>16.1 User Content</SubHeading>
        <Para>
          Users retain ownership of their submitted Content. By submitting Content, Users grant UniFiX a non-exclusive, worldwide, royalty-free license to use, store, display, and process that Content solely for the purpose of providing the Platform's services. This license ends when Content is deleted, except where retention is required for legitimate operational, legal, security, or institutional purposes.
        </Para>

        <Divider />

        <SectionHeading>17. Disclaimer</SectionHeading>
        <p className="tnc-caps">
          THE PLATFORM IS PROVIDED "AS IS" AND "AS AVAILABLE." UNIFIX MAKES NO REPRESENTATIONS OR WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED, REGARDING:
        </p>
        <UL>
          <li>The accuracy of user-submitted information;</li>
          <li>The availability or reliability of the Platform;</li>
          <li>The resolution of complaints or recovery of lost items;</li>
          <li>The performance of third-party services;</li>
          <li>The absence of errors, bugs, or security vulnerabilities;</li>
          <li>The suitability of the Platform for your specific needs.</li>
        </UL>
        <p className="tnc-caps">TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, UNIFIX DISCLAIMS ALL WARRANTIES, EXPRESS OR IMPLIED.</p>

        <Divider />

        <SectionHeading>18. Limitation of Liability</SectionHeading>
        <p className="tnc-caps">
          TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, UNIFIX AND ITS AFFILIATES, OFFICERS, EMPLOYEES, AND AGENTS SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES ARISING FROM OR RELATED TO YOUR USE OF THE PLATFORM, INCLUDING BUT NOT LIMITED TO:
        </p>
        <UL>
          <li>Loss of data or information;</li>
          <li>Loss of opportunity;</li>
          <li>Damage to reputation;</li>
          <li>Unauthorized access to your account;</li>
          <li>Interruptions or unavailability of the Platform;</li>
          <li>Actions taken by administrators or institutional authorities;</li>
          <li>Any other matter relating to the Platform.</li>
        </UL>
        <Para>
          UniFiX's total liability for all claims arising from or relating to the Platform shall not exceed the total amount paid by you to use the Platform. Since the Service is free, this cap applies to any claim, including negligence claims.
        </Para>

        <Divider />

        <SectionHeading>19. Indemnification</SectionHeading>
        <Para>You agree to indemnify, defend, and hold harmless UniFiX, its affiliates, officers, employees, and agents from and against any and all claims, liabilities, damages, losses, costs, and expenses (including reasonable legal fees) arising from or related to:</Para>
        <UL>
          <li>Your use of the Platform;</li>
          <li>Your violation of these Terms;</li>
          <li>Your violation of any applicable law, regulation, or institutional policy;</li>
          <li>Your violation of any rights of another party;</li>
          <li>Any Content you submit through the Platform.</li>
        </UL>

        <Divider />

        <SectionHeading>20. Suspension and Termination</SectionHeading>
        <Para>UniFiX reserves the right to suspend or terminate your account and access to the Platform at any time, with or without notice, for any reason, including but not limited to:</Para>
        <UL>
          <li>Violation of these Terms;</li>
          <li>Fraudulent, abusive, or illegal activity;</li>
          <li>Security concerns;</li>
          <li>Misuse of the Platform;</li>
          <li>Unauthorized access attempts;</li>
          <li>Impersonation;</li>
          <li>Institutional requirements;</li>
          <li>Inactivity or account abandonment.</li>
        </UL>
        <Para>
          If your account is suspended or terminated, you may no longer access or use the Platform. Termination does not relieve you of any obligations incurred prior to termination.
        </Para>

        <Divider />

        <SectionHeading>21. Changes to the Platform</SectionHeading>
        <Para>
          UniFiX may modify, update, remove, or add functionality to the Platform at any time, with or without notice. Changes may include new features, modifications to existing features, removal of features, security updates, performance improvements, bug fixes, and user interface changes. UniFiX is not liable for any loss or inconvenience resulting from changes to the Platform.
        </Para>

        <Divider />

        <SectionHeading>22. Changes to These Terms</SectionHeading>
        <Para>
          UniFiX reserves the right to revise these Terms at any time. The revised Terms will be effective as of the date indicated at the top of this document. Continued use of the Platform after the effective date of revised Terms constitutes acceptance of the revised Terms. If you do not agree to the revised Terms, you must stop using the Platform.
        </Para>

        <Divider />

        <SectionHeading>23. Governing Law and Jurisdiction</SectionHeading>
        <Para>
          These Terms shall be governed by and construed in accordance with the laws of India, without regard to its conflict of law principles. Any legal action or proceeding arising out of or related to these Terms or your use of the Platform shall be brought exclusively in the courts of Mumbai, Maharashtra, and you consent to the exclusive jurisdiction of such courts.
        </Para>

        <Divider />

        <SectionHeading>24. Contact Information</SectionHeading>
        <Para>For questions, concerns, or requests regarding these Terms or the Platform, please contact:</Para>
        <UL>
          <li><strong>UniFiX Administrator:</strong> Shahid</li>
    
          <li><strong>Support Email:</strong> <a href="mailto:unifix.helpdesk@gmail.com">unifix.helpdesk@gmail.com</a></li>
          
        </UL>

        <Divider />

        <SectionHeading>25. Miscellaneous</SectionHeading>

        <SubHeading>25.1 Entire Agreement</SubHeading>
        <Para>
          These Terms, together with the Privacy Policy, constitute the entire agreement between you and UniFiX regarding your use of the Platform and supersede all prior agreements, understandings, or representations.
        </Para>

        <SubHeading>25.2 Severability</SubHeading>
        <Para>
          If any provision of these Terms is found to be invalid, illegal, or unenforceable, the remaining provisions shall continue in full force and effect.
        </Para>

        <SubHeading>25.3 Waiver</SubHeading>
        <Para>
          The failure of UniFiX to enforce any provision of these Terms shall not constitute a waiver of that provision or any other provision.
        </Para>

        <SubHeading>25.4 Assignment</SubHeading>
        <Para>
          Users may not assign their rights or obligations under these Terms without the prior written consent of UniFiX. UniFiX may assign these Terms at its discretion.
        </Para>

        <SubHeading>25.5 No Third-Party Beneficiaries</SubHeading>
        <Para>
          These Terms are for the benefit of the parties and their permitted assigns and do not create any rights in favor of any third party.
        </Para>

        <Divider />

      </div>
      <Footer />
    </div>
  );
}