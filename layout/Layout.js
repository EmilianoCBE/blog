import React from 'react';
import Head from "next/head";
import Script from "next/script";

function Layout({children, title="Next JS App"}) {
    return (
        <div>
            {/* Google Adsense */}
            <Script data-ad-client="ca-pub-9235619139318053" async
            src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></Script>
            {/* Google Analytics */}
            <Head>
                <link rel="shortcut icon" href={"/static/favicon.svg"}/>
                <meta name="robots" content="index, follow"/>
                <meta httpEquiv="Content-Type" content="text/html; charset=utf-8"/>
                <meta name="language" content="English"/>
                <meta name="author" content="Author Name"/>
                <title>{title}</title>
            </Head>
            {children}
        </div>
    );
}

export default Layout;