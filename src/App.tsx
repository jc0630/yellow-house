import { Route, Switch, useLocation } from "wouter";
import { useEffect } from "react";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Home } from "./pages/Home";
import { Services } from "./pages/Services";
import { Company } from "./pages/Company";
import { Cases } from "./pages/Cases";
import { CaseDetail } from "./pages/CaseDetail";
import { News } from "./pages/News";
import { NewsDetail } from "./pages/NewsDetail";
import { Careers } from "./pages/Careers";
import { Contact } from "./pages/Contact";
import { LanguageProvider } from "./lib/LanguageContext";

function ScrollToTop() {
  const [pathname] = useLocation();
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant" as ScrollBehavior,
    });
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <LanguageProvider>
      <div className="flex flex-col min-h-screen">
        <ScrollToTop />
        <Header />
        <main className="flex-grow">
          <Switch>
            <Route path="/" component={Home} />
            <Route path="/services" component={Services} />
            <Route path="/company" component={Company} />
            <Route path="/cases/:slug" component={CaseDetail} />
            <Route path="/cases" component={Cases} />
            <Route path="/news/:slug" component={NewsDetail} />
            <Route path="/news" component={News} />
            <Route path="/careers" component={Careers} />
            <Route path="/contact" component={Contact} />
            {/* Fallback route to Home */}
            <Route component={Home} />
          </Switch>
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}
