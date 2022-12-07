import { Route, Routes } from "react-router-dom";
import "./App.scss";
import { RequireToken } from "./Auth";
import About from "./pages/AboutUs";
import AgentReport from "./pages/AgentReport";
import DashboardOverview from "./pages/DashboardOverview";
import DummyPage from "./pages/DummyPage";
import Events from "./pages/Events/Events";
import HelpSupport from "./pages/HelpAndSupport/HelpSupport";
import History from "./pages/History";
import HomePageB from "./pages/HomePageB";
import PressArticle from "./pages/PressArticle";
import Press from "./pages/PressPage";
import Pricing from "./pages/Pricing";
import SentimentAnalysis from "./pages/SentimentAnalysis";
import Services from "./pages/Services/Services";
import Solutions from "./pages/Solutions/Solutions";
import TermsAndCondition from "./pages/TermsAndCondition";
import TranscribePage from "./pages/TranscribePage";
import TryForFree from "./pages/TryForFree";
// import WithAuth from "./HOCs";
import Account from "./pages/Account";
import BlogPostPage from "./pages/BlogPostPage";
import Blogs from "./pages/BlogsPage";
import Careers from "./pages/Careers";
import Error from "./pages/Error/Error";
import FAQs from "./pages/FaqsPage";
import ForgetPassword from "./pages/ForgetPassword/ForgetPassword";
import General from "./pages/HelpAndSupport/components/General";
import PromotedArticles from "./pages/HelpAndSupport/components/PromotedArticles";
import HomePageRedesign from "./pages/HomePageRedesign";
import LeaderboardPage from "./pages/LeaderBoard/Leaderboard";
import LandingPageSalesTeam from "./pages/NewLandingPageSalesTeam/index";
import PartnersPage from "./pages/PartnersPage";
import PasswordResetSuccessful from "./pages/PasswordResetSuccessful/PasswordResetSuccessful";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Reviews from "./pages/Reviews/Reviews";
import SetNewPassword from "./pages/SetNewPassword/SetNewPassword";
import SettingsIndex from "./pages/Settings/SettingsIndex";
import AccountSettings from "./pages/Settings/SettingsPageSubPages/AccountSettings/AccountSettings";
import NotificationSettings from "./pages/Settings/SettingsPageSubPages/Notifications/NotificationSettings";
import PersonalInformation from "./pages/Settings/SettingsPageSubPages/PersonalInformation/PersonalInformationSettings";
import Signin from "./pages/SignIn/SignIn";
import Signup from "./pages/SignUp/SignUp";
import SignUpVerify from "./pages/SignUpVerify/SignUpVerify";
import Successful from "./pages/Successful/Successful";
import Support from "./pages/Support/support";
import TermsOfService from "./pages/TermsOfService";
import TryProcessing from "./pages/TryForFree/tryProcessing";
import TryResults from "./pages/TryForFree/tryResults";
import UploadedRecordings from "./pages/UploadRecordings";
import { UploadModal } from "./pages/UploadRecordingsModal";
import Logout from "./pages/Logout";
import EmailVerify from "./pages/VerificationEmail/EmailVerify";
import CheckMail from "./pages/CheckMail";

function App() {
  return (
    <>
      <Routes>
        {/* access without sign in */}
        <Route path="/" element={<HomePageRedesign />} />
        <Route path="/check-mail" element={<CheckMail />} />
        <Route path="/try" element={<TryForFree />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/services" element={<Services />} />
        <Route path="/solutions" element={<Solutions />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/terms" element={<TermsAndCondition />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
        <Route path="/faq" element={<FAQs />} />
        <Route path="/help-support" element={<HelpSupport />} />
        <Route path="/create-account" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/reset-successful" element={<Successful />} />
        <Route path="/verify-signup" element={<SignUpVerify />} />
        <Route path="/support-team" element={<Support />} />
        <Route path="/logout" element={<Logout />} />
        <Route
          path="/set-new-password?token=:token"
          element={<SetNewPassword />}
        />
        <Route path="/emailverification" element={<EmailVerify />} />
        <Route path="/try-processing" element={<TryProcessing />} />
        <Route path="/try-results" element={<TryResults />} />
        <Route path="/forget-password" element={<ForgetPassword />} />
        <Route path="/sales-team" element={<LandingPageSalesTeam />} />
        <Route
          path="/pw-reset-successful"
          element={<PasswordResetSuccessful />}
        />
        <Route path="*" element={<Error />} />
        <Route path="/demos" element={<DummyPage someText="demo pages" />} />
        <Route path="/blog" element={<Blogs />} />
        <Route path="/blog/:id" element={<BlogPostPage />} />
        <Route path="press" element={<Press />} />
        <Route path="/partners" element={<PartnersPage />} />
        <Route path="press-article" element={<PressArticle />} />
        <Route path="pricing" element={<Pricing />} />
        <Route path="/events" element={<Events />} />
        <Route path="/dashboard" element={<DashboardOverview />} />
        <Route path="/leaderboard" element={<LeaderboardPage />} />
        <Route path="/homeB" element={<HomePageB />} />
        <Route path="/uploaded-recordings" element={<UploadedRecordings />} />
        <Route path="/agent-report/:agentId" element={<AgentReport />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/try-processing" element={<TryProcessing />} />
        <Route path="/try-results/:transcribeId" element={<TryResults />} />
        <Route
          path="settings/personal-information"
          element={<PersonalInformation />}
        />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/blog" element={<Blogs />} />
        <Route path="/blog/:id" element={<BlogPostPage />} />
        <Route path="press" element={<Press />} />
        <Route path="/partners" element={<PartnersPage />} />
        <Route path="press-article" element={<PressArticle />} />
        <Route path="pricing" element={<Pricing />} />
        <Route path="/help-support-general" element={<General />} />
        <Route path="/promoted-articles" element={<PromotedArticles />}></Route>

        {/* access without sign in */}

        {/* cant access without signin */}

        <Route element={<RequireToken />}>
          {/* <Route
            path="/account"
            element={
              <WithAuth>
                <Account />
              </WithAuth>
            }
          /> */}
          <Route path="/account" element={<Account />} />
          <Route path="/uploaded-recordings" element={<UploadedRecordings />} />
          <Route path="/agent-report/:Agent_id" element={<AgentReport />} />
          <Route path="/upload-new-file" element={<UploadModal />} />
          <Route
            path="/sentiment-analysis/:AudioId"
            element={<SentimentAnalysis />}
          />
          <Route path="/transcriptions/:userId" element={<TranscribePage />} />
          <Route path="/history" element={<History />} />
          <Route path="/dashboard" element={<DashboardOverview />} />
          <Route path="/leaderboard" element={<LeaderboardPage />} />
          <Route path="/homeB" element={<HomePageB />} />
          <Route path="/agent-report/:agentId" element={<AgentReport />} />
          <Route path="/settings" element={<SettingsIndex />} />
          <Route
            path="settings/account-security"
            element={<AccountSettings />}
          />
          <Route
            path="settings/notifications"
            element={<NotificationSettings />}
          />
          <Route
            path="settings/personal-information"
            element={<PersonalInformation />}
          />
        </Route>
        {/* cant access without signin */}

        {/* <Route
          path="/uploaded"
          element={<DummyPage someText="uploaded recordings" />}
        />
        <Route
          path="/report"
          element={<DummyPage someText="report and performance" />}
        />
        <Route path="/upload" element={<DummyPage someText="upload pages" />} />
        <Route
          path="/help"
          element={<DummyPage someText="help and supprt" />}
        />
        <Route path="/demos" element={<DummyPage someText="demo pages" />} /> */}

        {/* <Route path="/verification" element={<EmailVerify />} /> */}
        {/* <Route path="/logout" element={<Logout />} /> */}
        {/* <Route path="/industry" exact element={<Industry />} /> */}
        {/* <Route path="/industry-article" element={<IndustryArticles />} />
        <Route path="/how-it-works" element={<HowitWorks />} /> */}
        {/* leaderboard */}

        {/* <Route path="/help-support-general" element={<General />}>
          <Route index element={<General1 />} />
          <Route path="articles" element={<General2 />} />
        </Route> */}
        {/* <Route
          path="/help-support-general/promoted-articles"
          element={<PromotedArticles />}
        >
          <Route index element={<PromotedArticle1 />} />
          <Route path="*" element={<PromotedArticle1 />} />
        </Route> */}
        {/* <Route
          path="/help-support/promoted-articles"
          element={<PromotedArticles />}
        >
          <Route index element={<PromotedArticle1 />} />
          <Route path="*" element={<PromotedArticle1 />} />
        </Route> */}

        {/* <Route path="/create-account" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/reset-successful" element={<Successful />} />
        <Route path="/verify-signup" element={<SignUpVerify />} />
        <Route path="/set-new-password" element={<SetNewPassword />} />
        <Route path="/forget-password" element={<ForgetPassword />} />
        <Route
          path="/pw-reset-successful"
          element={<PasswordResetSuccessful />}
        /> */}
        {/* <Route path="/uploaded-recordings" element={<UploadedRecordings />} />
        <Route path="/agent-report" element={<AgentReport />} />
        <Route path="/upload-new-file" element={<UploadModal />} /> */}

        {/* ROutes without working paths

        <Route
          path="/uploaded"
          element={<DummyPage someText="uploaded recordings" />}
        />
        <Route
          path="/report"
          element={<DummyPage someText="report and performance" />}
        />
        <Route path="/upload" element={<DummyPage someText="upload pages" />} />
        <Route
          path="/help"
          element={<DummyPage someText="help and supprt" />}
        />
        <Route path="/demos" element={<DummyPage someText="demo pages" />} /> */}
        {/* <Route path="/blog" element={<Blogs />} />
        <Route path="/blog/:id" element={<BlogPostPage />} />
        <Route path="/reviews" element={<Reviews />} /> */}

        {/* Settings Pages */}
        {/* <Route path="/settings" element={<SettingsIndex />} />
        <Route path="settings/account-security" element={<AccountSettings />} />
        <Route
          path="settings/notifications"
          element={<NotificationSettings />}
        />

        <Route
          path="settings/personal-information"
          element={<PersonalInformation />}
        /> */}

        {/* Press  */}
        {/* <Route path="press" element={<Press />} />
        <Route path="/partners" element={<PartnersPage />} />
        <Route path="press-article" element={<PressArticle />} /> */}
      </Routes>
    </>
  );
}

export default App;
