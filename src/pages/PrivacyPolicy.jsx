import "../styles/TermsAndConditions.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Para = ({ children }) => <p className="tnc-para">{children}</p>;
const SectionHeading = ({ children }) => <h3 className="tnc-section-heading">{children}</h3>;
const SubHeading = ({ children }) => <h4 className="tnc-sub-heading">{children}</h4>;
const UL = ({ children }) => <ul className="tnc-list">{children}</ul>;
const Divider = () => <hr className="tnc-divider" />;

export default function PrivacyPolicy() {
  return (
    <div className="tnc-page">
      <Navbar active="privacy" />
      <div className="tnc-container">

        <h1 className="tnc-main-title">PRIVACY POLICY</h1>
        <p className="tnc-main-subtitle">Effective Date: 14 August 2026 &nbsp;|&nbsp; Last Updated: 14 August 2026</p>

        <SectionHeading>1. Introduction</SectionHeading>
        <Para>
          UniFiX is a Campus Complaint Management System developed for Vidyavardhini's College of Engineering &amp; Technology (VCET). The platform allows students, teachers, and staff to submit, track, and resolve campus facility complaints, and to manage lost and found items on campus.
        </Para>
        <Para>
          This Privacy Policy explains how UniFiX collects, uses, stores, and protects personal information when you use the UniFiX mobile application, administrative interfaces, and related services (collectively, the "Platform").
        </Para>
        <Para>By using the Platform, you consent to the collection and use of your personal information as described in this Privacy Policy.</Para>

        <Divider />

        <SectionHeading>2. Who We Are</SectionHeading>
        <Para>UniFiX is operated on behalf of:</Para>
        <Para><strong>Vidyavardhini's College of Engineering &amp; Technology (VCET)</strong></Para>
        <Para>
          K.T. Marg, Annasaheb Vartak College Campus, Vasai Road West, Palghar - 401202, Maharashtra, India
        </Para>
        <UL>
    
        
          <li><strong>Support Email:</strong> <a href="mailto:unifix.helpdesk@gmail.com">unifix.helpdesk@gmail.com</a></li>
          <li><strong>UniFiX Project Administrator:</strong> Shahid</li>
        </UL>

        <Divider />

        <SectionHeading>3. Scope of This Privacy Policy</SectionHeading>
        <Para>This Privacy Policy applies to personal information processed through:</Para>
        <UL>
          <li>The UniFiX mobile application (Android and iOS);</li>
          <li>The UniFiX administrative panel;</li>
          <li>The UniFiX backend services and APIs;</li>
          <li>Any related services or interfaces provided as part of the UniFiX Platform.</li>
        </UL>
        <Para>
          This Privacy Policy does not apply to third-party services, websites, or applications that are not owned or controlled by UniFiX, even if they are accessible through the Platform.
        </Para>

        <Divider />

        <SectionHeading>4. Information We Collect</SectionHeading>
        <Para>UniFiX collects and processes the following categories of personal information based on your use of the Platform:</Para>

        <SubHeading>A. Account and Profile Information</SubHeading>
        <Para>When you create an account, we collect:</Para>
        <UL>
          <li><strong>Full Name:</strong> Used to identify you within the Platform and to personalize your experience.</li>
          <li><strong>Email Address:</strong> Used for authentication, account verification, notifications, and communication.</li>
          <li><strong>Phone Number:</strong> Collected for contact purposes and to enable staff to reach out regarding complaints.</li>
          <li><strong>Role/Account Type:</strong> Indicates whether you are a student, teacher, staff member, or administrator, which determines your access and permissions.</li>
          <li><strong>Gender:</strong> Collected for certain complaint routing purposes (e.g., washroom complaints assigned to same-gender staff).</li>
          <li><strong>Profile Photo:</strong> Optional; uploaded by users to personalize their profile.</li>
        </UL>

        <SubHeading>B. Student and Teacher Information</SubHeading>
        <Para>Based on your role, we may collect additional information:</Para>
        <Para><strong>For Students:</strong></Para>
        <UL>
          <li>Year of study;</li>
          <li>Branch or course of study;</li>
          <li>Roll number;</li>
          <li>Student ID card image (uploaded for verification and profile completion).</li>
        </UL>
        <Para><strong>For Teachers:</strong></Para>
        <UL>
          <li>Department;</li>
          <li>Teacher/Staff ID;</li>
          <li>Teacher ID card image (uploaded for verification and profile completion).</li>
        </UL>
        <Para><strong>For Staff:</strong></Para>
        <UL>
          <li>Department/Category;</li>
          <li>Employee ID;</li>
          <li>Designation;</li>
          <li>Years of experience;</li>
          <li>ID card image (uploaded for verification);</li>
          <li>Certificate or license image (uploaded for verification).</li>
        </UL>

        <SubHeading>C. Complaint Information</SubHeading>
        <Para>When you submit a complaint, we collect:</Para>
        <UL>
          <li>Complaint category (e.g., electrical, plumbing, cleaning);</li>
          <li>Specific sub-issue or custom issue description;</li>
          <li>Detailed description of the problem;</li>
          <li>Building and room number where the issue is located;</li>
          <li>Photographs of the issue (if uploaded);</li>
          <li>Status of the complaint (e.g., pending, assigned, in progress, completed, rejected);</li>
          <li>Staff assigned to the complaint;</li>
          <li>Rating and feedback provided upon complaint completion;</li>
          <li>Timestamps of submission, assignment, and resolution.</li>
        </UL>

        <SubHeading>D. Lost &amp; Found Information</SubHeading>
        <Para>When you use the Lost &amp; Found functionality, we collect:</Para>
        <UL>
          <li>Item name and description;</li>
          <li>Category of the item;</li>
          <li>Location where the item was found or lost;</li>
          <li>Date and time information;</li>
          <li>Photographs of the item (if uploaded);</li>
          <li>Collection or handover details;</li>
          <li>Reporter/claimer identity.</li>
        </UL>

        <SubHeading>E. Images and Uploaded Files</SubHeading>
        <Para>The Platform allows users to upload images and documents, including profile photos, Student/Teacher/Staff ID cards, complaint photographs, Lost &amp; Found item photographs, and staff certificates or licenses. These files are stored using Cloudinary, a third-party image and file hosting service.</Para>

        <SubHeading>F. Authentication Information</SubHeading>
        <UL>
          <li><strong>Password:</strong> Stored securely using Argon2 hashing. The Platform does not store plain-text passwords.</li>
          <li><strong>Access Tokens and Refresh Tokens:</strong> Used to maintain authenticated sessions and manage access.</li>
          <li><strong>Firebase/Google Authentication Data:</strong> If you choose to sign in using Google, we receive authentication information from Firebase, including your email address and verification status.</li>
        </UL>

        <SubHeading>G. Notification Information</SubHeading>
        <Para>When you enable push notifications, we collect <strong>Push Notification Tokens (FCM)</strong> used to send real-time notifications about complaints, status updates, assignments, escalations, and Lost &amp; Found activity.</Para>

        <SubHeading>H. Device and Technical Information</SubHeading>
        <Para>The Platform may collect certain technical information automatically, including:</Para>
        <UL>
          <li>Device type and operating system version;</li>
          <li>App version;</li>
          <li>Network connectivity status;</li>
          <li>Timestamps of interactions with the Platform.</li>
        </UL>

        <SubHeading>I. Logs and Security Information</SubHeading>
        <Para>UniFiX maintains audit logs of certain activities, including user actions, administrative actions, authentication events, and system events. These logs are used for security monitoring, troubleshooting, and operational purposes.</Para>

        <Divider />

        <SectionHeading>5. How We Use Information</SectionHeading>
        <Para>UniFiX uses personal information for the following purposes:</Para>
        <UL>
          <li><strong>Creating and Managing Accounts:</strong> To register users, assign appropriate roles, and manage profiles.</li>
          <li><strong>Authenticating Users:</strong> To verify identity and maintain secure sessions.</li>
          <li><strong>Processing Complaints:</strong> To receive, categorize, assign, track, escalate, and resolve complaints.</li>
          <li><strong>Assigning Complaints to Staff:</strong> To route complaints to appropriate staff based on category and designation.</li>
          <li><strong>Tracking Complaint Status:</strong> To provide real-time updates on complaint progress.</li>
          <li><strong>Managing Lost &amp; Found:</strong> To facilitate the posting and claiming of lost and found items.</li>
          <li><strong>Sending Notifications:</strong> To send push notifications and emails regarding complaint status changes, assignments, escalations, and other system events.</li>
          <li><strong>Escalating Complaints:</strong> To notify administrators and Heads of Department when complaints remain unresolved beyond designated time limits.</li>
          <li><strong>Providing Administrative Functionality:</strong> To enable administrators to manage users, complaints, staff approvals, ID card requests, deletion requests, and security issues.</li>
          <li><strong>Maintaining Offline Synchronization:</strong> To cache data locally on your device and synchronize when connectivity is restored.</li>
          <li><strong>Preventing Abuse:</strong> To detect and prevent misuse of the Platform.</li>
          <li><strong>Maintaining System Security:</strong> To monitor for unauthorized access, maintain audit logs, and protect the integrity of the Platform.</li>
          <li><strong>Troubleshooting and Technical Support:</strong> To diagnose and resolve technical issues.</li>
          <li><strong>Improving Reliability:</strong> To analyze usage patterns and improve the Platform's performance and stability.</li>
        </UL>

        <Divider />

        <SectionHeading>6. Complaint and User-Submitted Information</SectionHeading>
        <Para>
          Users may voluntarily submit information through the Platform, including complaint details, descriptions, photographs, Lost &amp; Found posts, and profile information. Users are responsible for ensuring that the information they submit is accurate, truthful, and appropriate. Users should not submit information that is false, misleading, abusive, unlawful, or unrelated to the Platform's legitimate purposes.
        </Para>
        <Para>
          By submitting information, users acknowledge that authorized administrators and staff may access and process that information as necessary to operate the Platform.
        </Para>

        <Divider />

        <SectionHeading>7. How We Share Information</SectionHeading>

        <SubHeading>A. Institution Administrators and Staff</SubHeading>
        <UL>
          <li><strong>Administrators:</strong> Have access to user accounts, complaints, staff profiles, and administrative functions. They may view, manage, and process personal information as part of their oversight responsibilities.</li>
          <li><strong>Authorized Staff:</strong> Have access to complaints assigned to them, including reporter information, location details, and photographs, in order to resolve the issue.</li>
          <li><strong>Other Authorized Users:</strong> In limited circumstances, information may be shared with other users as necessary for complaint resolution.</li>
        </UL>

        <SubHeading>B. Third-Party Service Providers</SubHeading>
        <Para>UniFiX relies on third-party services to provide certain functionality:</Para>
        <UL>
          <li><strong>Cloudinary:</strong> For hosting and delivering images and files uploaded by users.</li>
          <li><strong>Firebase Cloud Messaging (FCM):</strong> For delivering push notifications to mobile devices.</li>
          <li><strong>Brevo (Sendinblue):</strong> For sending email communications, including OTPs, notifications, and administrative messages.</li>
          <li><strong>PostgreSQL / Redis Hosting:</strong> For data storage and caching.</li>
          <li><strong>Sentry:</strong> For error tracking and performance monitoring.</li>
        </UL>

        <SubHeading>C. Legal and Institutional Requirements</SubHeading>
        <Para>
          UniFiX may disclose personal information where required by law, regulation, legal process, or institutional policy, or where necessary to protect the rights, property, or safety of UniFiX, the Institution, users, or others.
        </Para>

        <Divider />

        <SectionHeading>8. Data Storage</SectionHeading>

        <SubHeading>A. Backend/Database Storage</SubHeading>
        <Para>Personal information is stored on UniFiX's backend servers using a PostgreSQL database. This includes account and profile information, complaint data and history, Lost &amp; Found data, audit logs, and system configuration data.</Para>

        <SubHeading>B. Local Storage on Device</SubHeading>
        <Para>
          The UniFiX mobile application uses local storage (SQLite) to cache certain information including complaint data for offline viewing, Lost &amp; Found data, and user profile information. This local storage allows the application to function even without an internet connection.
        </Para>

        <SubHeading>C. Cloud Storage</SubHeading>
        <Para>Images and files uploaded to the Platform are stored using Cloudinary. This includes profile photos, ID cards, complaint photographs, and Lost &amp; Found images.</Para>

        <Divider />

        <SectionHeading>9. Offline and Local Storage</SectionHeading>
        <Para>
          The UniFiX mobile application includes offline functionality that allows users to view previously loaded complaint and Lost &amp; Found data when no internet connection is available. When connectivity is restored, the application will attempt to synchronize with the backend to ensure data is up to date.
        </Para>
        <Para>Users are responsible for protecting access to their devices and should not share their devices without appropriate security measures.</Para>

        <Divider />

        <SectionHeading>10. Data Retention</SectionHeading>
        <Para>UniFiX retains personal information for as long as reasonably necessary for the purposes described in this Privacy Policy. Specific retention practices include:</Para>
        <UL>
          <li><strong>Account Information:</strong> Retained while your account is active. Certain information may be retained after deletion for legitimate operational, legal, security, or institutional purposes.</li>
          <li><strong>Complaint Records:</strong> Retained for institutional accountability and auditing purposes.</li>
          <li><strong>Audit Logs:</strong> Retained for security monitoring and operational purposes.</li>
          <li><strong>Local Cached Data:</strong> Remains on your device until cleared by the application or until the app is uninstalled.</li>
        </UL>

        <Divider />

        <SectionHeading>11. Account Deletion</SectionHeading>

        <SubHeading>A. Student and Teacher Accounts</SubHeading>
        <Para>
          Students and Teachers may delete their accounts through the Platform. Account deletion will permanently remove access to the account. Certain information may be retained after account deletion where required for legitimate operational, legal, security, or institutional purposes.
        </Para>

        <SubHeading>B. Staff Accounts</SubHeading>
        <Para>
          Staff members who wish to delete their accounts must submit a deletion request through the Platform. These requests are subject to administrative review and approval. Staff accounts are not immediately deleted upon request.
        </Para>

        <SubHeading>C. Locally Cached Data</SubHeading>
        <Para>
          When you delete your account, any locally cached data on your device will not be automatically removed. You should uninstall the application or manually clear application data from your device settings to remove locally stored information.
        </Para>

        <Divider />

        <SectionHeading>12. Data Security</SectionHeading>
        <Para>UniFiX implements reasonable security measures to protect personal information, including:</Para>
        <UL>
          <li><strong>Secure Authentication:</strong> Password-based authentication with Argon2 hashing for password storage.</li>
          <li><strong>JWT (JSON Web Tokens):</strong> For secure session management and access control.</li>
          <li><strong>Role-Based Access Control (RBAC):</strong> To ensure users can only access information appropriate to their role.</li>
          <li><strong>Input Validation:</strong> To prevent injection attacks and malicious input.</li>
          <li><strong>Authorization Middleware:</strong> To enforce access restrictions on API endpoints.</li>
          <li><strong>Rate Limiting:</strong> To prevent abuse and automated attacks.</li>
          <li><strong>Audit Logging:</strong> To monitor system activity and detect potential security incidents.</li>
          <li><strong>Secure API Communication:</strong> All communications between the mobile app and backend are transmitted over HTTPS.</li>
        </UL>
        <Para>While UniFiX takes reasonable precautions, no system can guarantee absolute security. Users are responsible for protecting their account credentials and devices.</Para>

        <Divider />

        <SectionHeading>13. User Rights</SectionHeading>
        <Para>Depending on applicable law and institutional policy, you may have certain rights regarding your personal information:</Para>
        <UL>
          <li><strong>Right to Access:</strong> You may request information about the personal information we hold about you.</li>
          <li><strong>Right to Correction:</strong> You may request that we correct inaccurate or incomplete information.</li>
          <li><strong>Right to Deletion:</strong> You may request the deletion of your account and associated information, subject to operational, legal, and institutional retention requirements.</li>
          <li><strong>Right to Withdraw Consent:</strong> Where processing is based on consent, you may withdraw your consent at any time.</li>
          <li><strong>Right to Information:</strong> You may request information about how your personal data is processed.</li>
        </UL>
        <Para>To exercise these rights, please contact us at <a href="mailto:unifixofficial365@gmail.com">unifixofficial365@gmail.com</a>.</Para>

        <Divider />

        <SectionHeading>14. Children's Privacy</SectionHeading>
        <Para>
          UniFiX is designed for use by individuals affiliated with Vidyavardhini's College of Engineering &amp; Technology (VCET), including students who are typically of college age or older. The Platform is not directed at children. If we become aware that we have inadvertently collected personal information from a minor without appropriate consent, we will take steps to delete that information as soon as reasonably possible.
        </Para>

        <Divider />

        <SectionHeading>15. Cookies and Tracking Technologies</SectionHeading>
        <Para>
          UniFiX does not currently use cookies or similar tracking technologies for advertising or analytics purposes. The Platform's technical operation relies on standard HTTP and API communication mechanisms. If this changes in the future, this Privacy Policy will be updated accordingly.
        </Para>

        <Divider />

        <SectionHeading>16. Push Notifications</SectionHeading>
        <Para>With your permission, UniFiX uses Firebase Cloud Messaging (FCM) to send push notifications to your device. Notifications may include:</Para>
        <UL>
          <li>Complaint status updates (accepted, in progress, completed, rejected);</li>
          <li>Complaint assignment notifications;</li>
          <li>Escalation notifications;</li>
          <li>Lost &amp; Found updates;</li>
          <li>System announcements and reminders.</li>
        </UL>
        <Para>You may disable push notifications at any time through your device settings.</Para>

        <Divider />

        <SectionHeading>17. Permissions</SectionHeading>
        <Para>The UniFiX mobile application requests certain permissions to provide its functionality:</Para>
        <UL>
          <li><strong>Camera:</strong> To allow users to take photographs of issues for complaints and Lost &amp; Found posts.</li>
          <li><strong>Photos/Media/Storage:</strong> To allow users to upload images from their device for complaints, Lost &amp; Found, and profile updates.</li>
          <li><strong>Notifications:</strong> To send push notifications regarding complaint updates, assignments, escalations, and other system events.</li>
        </UL>
        <Para>These permissions are requested only when necessary for the specific feature, and you may choose to deny or revoke permissions at any time through your device settings. Denying certain permissions may affect the functionality of the Platform.</Para>

        <Divider />

        <SectionHeading>18. International Data Transfers</SectionHeading>
        <Para>
          UniFiX and its third-party service providers may process information in jurisdictions outside India. Third-party services used by UniFiX, including Cloudinary, Firebase, Brevo, and Sentry, may store or process data in multiple regions. Users should review the privacy policies of these services for information about their data processing practices.
        </Para>

        <Divider />

        <SectionHeading>19. Institutional Access</SectionHeading>
        <Para>Authorized administrators and staff of the Institution may access personal information on the Platform to perform their roles:</Para>
        <UL>
          <li><strong>Administrators:</strong> Full access to user accounts, complaints, staff management, and system settings.</li>
          <li><strong>Staff:</strong> Access to complaints assigned to them, including reporter information, location details, and photographs.</li>
        </UL>
        <Para>Access is governed by role-based permissions and institutional policies. Administrators and staff are expected to handle personal information in accordance with applicable law and institutional policy.</Para>

        <Divider />

        <SectionHeading>20. Changes to This Privacy Policy</SectionHeading>
        <Para>
          UniFiX may update this Privacy Policy from time to time to reflect changes in the Platform, data practices, legal requirements, or institutional policies. We will notify users of material changes through the Platform, email, or other reasonable means. Your continued use of the Platform after changes to this Privacy Policy constitutes your acceptance of the updated terms.
        </Para>

        <Divider />

        <SectionHeading>21. Contact Us</SectionHeading>
        <Para><strong>Institution:</strong> Vidyavardhini's College of Engineering &amp; Technology (VCET)</Para>
        <Para>K.T. Marg, Annasaheb Vartak College Campus, Vasai Road West, Palghar - 401202, Maharashtra, India</Para>
        <UL>
          <li><strong>Admin Contact:</strong> <a href="mailto:unifixofficial365@gmail.com">unifixofficial365@gmail.com</a></li>
          <li><strong>Support Email:</strong> <a href="mailto:unifixsupport@gmail.com">unifixsupport@gmail.com</a></li>
        
        </UL>

        <Divider />

        <SectionHeading>22. Grievance / Privacy Concerns</SectionHeading>
        <Para>If you have a privacy-related concern or wish to raise a grievance regarding the handling of your personal information, please contact:</Para>
        <UL>
          <li><strong>UniFiX Administrator:</strong> Shahid</li>
          <li><strong>Email:</strong> <a href="mailto:unifixofficial365@gmail.com">unifixofficial365@gmail.com</a></li>
        </UL>
        <Para>We will acknowledge and address your concern in accordance with applicable law and institutional policy.</Para>

        <Divider />

      </div>
      <Footer />
    </div>
  );
}