import Script from "next/script";
import RastreoConversiones from "./RastreoConversiones";

// IDs de medicion. Vacios = no se carga nada (ni scripts ni cookies), asi el
// sitio sigue funcionando igual mientras no esten configurados.
//   GA_ID:      Google Analytics 4 -> Administrar > Flujos de datos > ID de medicion (G-XXXXXXXXXX)
//   CLARITY_ID: Microsoft Clarity  -> Settings > Overview > Project ID
// Si se agrega o quita una herramienta, actualizar tambien /privacidad.
export const GA_ID = "";
export const CLARITY_ID = "";

export default function Analitica() {
  return (
    <>
      {GA_ID && (
        <>
          {/* afterInteractive: no compite con la carga del hero (LCP). */}
          <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
          <Script id="ga4" strategy="afterInteractive">
            {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${GA_ID}');`}
          </Script>
        </>
      )}
      {CLARITY_ID && (
        <Script id="clarity" strategy="lazyOnload">
          {`(function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);})(window,document,"clarity","script","${CLARITY_ID}");`}
        </Script>
      )}
      {(GA_ID || CLARITY_ID) && <RastreoConversiones />}
    </>
  );
}
