import Script from "next/script";

interface SeoScriptsProps {
  analytics: Record<string, string>;
}

export function SeoScripts({ analytics }: SeoScriptsProps) {
  const gaId = analytics.google_analytics_id;
  const gtmId = analytics.google_tag_manager_id;
  const naverAnalyticsId = analytics.naver_analytics_id;
  const fbPixelId = analytics.facebook_pixel_id;
  const kakaoPixelId = analytics.kakao_pixel_id;

  return (
    <>
      {/* Google Tag Manager */}
      {gtmId && (
        <>
          <Script
            id="gtm-script"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${gtmId}');`,
            }}
          />
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`}
              height="0"
              width="0"
              style={{ display: "none", visibility: "hidden" }}
            />
          </noscript>
        </>
      )}

      {/* Google Analytics (GA4) — GTM 없을 때만 */}
      {gaId && !gtmId && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
            strategy="afterInteractive"
          />
          <Script
            id="ga-script"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${gaId}');`,
            }}
          />
        </>
      )}

      {/* 네이버 애널리틱스 */}
      {naverAnalyticsId && (
        <Script
          id="naver-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `if(!wcs_add)var wcs_add={};wcs_add["wa"]="${naverAnalyticsId}";if(window.wcs){wcs_do();}`,
          }}
        />
      )}

      {/* Facebook Pixel */}
      {fbPixelId && (
        <Script
          id="fb-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');fbq('init','${fbPixelId}');fbq('track','PageView');`,
          }}
        />
      )}

      {/* 카카오 픽셀 */}
      {kakaoPixelId && (
        <Script
          id="kakao-pixel"
          strategy="afterInteractive"
          src="//t1.daumcdn.net/kas/static/kp.js"
          onLoad={() => {
            // @ts-expect-error kakaoPixel is a global
            if (window.kakaoPixel) window.kakaoPixel(kakaoPixelId).pageView();
          }}
        />
      )}
    </>
  );
}
