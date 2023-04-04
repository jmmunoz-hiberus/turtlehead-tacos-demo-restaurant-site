    
import { Link, useAnalytics } from "@yext/pages/components";   
import * as React from "react";

type Cta = {
  buttonText: string;
  url: string;
  style?: string;
};

const Cta = (props: Cta) => {
  const { buttonText, url, style } = props;
  const conversionData = { cid: "<YOUR_CONVERSION_ID>", cv: "12" }
  const analytics = useAnalytics()                                     // New 
  const visitor = { id: '1234', method: '<YOUR_ID_METHOD>' }

  return (
    <Link                                                             
    href={url}
    className={
      `${style}` + " py-4 px-6 text-base font-bold text-white rounded-lg"
    }
    target="_blank"
    rel="noopener noreferrer"
    eventName={`cta Click: ${buttonText}`}                        
    conversionDetails={conversionData}
    onClick={analytics?.identify(visitor)} 
    >
      {buttonText}
    </Link>   
  );
};

export default Cta;
