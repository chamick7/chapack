import "./App.css";
import { Routes, Route } from "react-router-dom";

import Homepage from "./pages/homepage/homepage.component";
import LoginPage from "./pages/login/login.components";
import Navbar from "./components/navbar/navbar.component";
import { AuthProvider } from "./context/auth.provider";
import { AuthRoute } from "./utils/auth-route.route";
import { ProtectRoute } from "./utils/protect-route.route";
import MemberDashboard from "./pages/member-dashboard/member-dashboard.component";
import InvitePage from "./pages/invite/invite/invite.component";
import InviteTokenPage from "./pages/invite/invite-token/invite-token.component";

function App() {
  return (
    <AuthProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<ProtectRoute element={<MemberDashboard />} />} />
        <Route path="/login" element={<AuthRoute element={<LoginPage />} />} />
        <Route path="/invite" element={<ProtectRoute element={<InvitePage />} />} />
        <Route path="/invite/:token" element={<InviteTokenPage />} />
      </Routes>
    </AuthProvider>
  );
}

export default App;
