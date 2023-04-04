import * as React from "react";
import Site from "../types/Site";
import Header from "./Header";
import Footer from "./Footer";
import { AnalyticsProvider, AnalyticsScopeProvider } from "@yext/pages/components";     
import { TemplateProps } from "@yext/pages";                    
    
type Props = {
  _site: Site;
  children?: React.ReactNode;
  templateData: TemplateProps;                                  
};
    
const PageLayout = ({ _site, children, templateData }: Props) => {
  return (
    <AnalyticsProvider templateData={templateData}
    enableDebugging={true}
    requireOptIn={true}
    enableTrackingCookie={true}
    >           
      <div className="min-h-screen">
      <AnalyticsScopeProvider name={"header"}> 
        <Header _site={_site} />
      </AnalyticsScopeProvider>  
        {children}
        <Footer _site={_site}></Footer>
      </div>
    </AnalyticsProvider>                                        
    
  );
};
    
export default PageLayout;