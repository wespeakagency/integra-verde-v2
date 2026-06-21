"use client"

import { useEffect, useRef, useState } from "react"

declare global {
  interface Window {
    MyApp?: {
      init: (config: { apiKey: string }) => void
    }
  }
}

const SUNWISE_WIDGET_SCRIPT_ID = "sunwise-widget-script"
const SUNWISE_WIDGET_SRC = "https://widget.sunwise.mx/bundle.min.js"
const SUNWISE_WIDGET_API_KEY = "fpYvbn6KUdnw1x7eIbB7DevBscge6jmNzT-5XrSjO9Qtwd8"

export default function SunwiseWidget() {
  const mountRef = useRef<HTMLDivElement>(null)
  const [hasError, setHasError] = useState(false)

  useEffect(() => {
    const mountNode = mountRef.current

    if (!mountNode) {
      return
    }

    const initWidget = () => {
      if (!mountRef.current || !window.MyApp?.init) {
        return
      }

      if (mountRef.current.dataset.sunwiseReady === "true") {
        return
      }

      try {
        mountRef.current.innerHTML = ""
        window.MyApp.init({ apiKey: SUNWISE_WIDGET_API_KEY })
        mountRef.current.dataset.sunwiseReady = "true"
        setHasError(false)
      } catch (error) {
        delete mountRef.current.dataset.sunwiseReady
        console.error("No se pudo inicializar el widget de Sunwise.", error)
        setHasError(true)
      }
    }

    const handleError = () => {
      setHasError(true)
    }

    const existingScript = document.getElementById(SUNWISE_WIDGET_SCRIPT_ID) as HTMLScriptElement | null

    if (window.MyApp?.init) {
      initWidget()

      return
    }

    if (existingScript) {
      existingScript.addEventListener("load", initWidget)
      existingScript.addEventListener("error", handleError)

      return () => {
        existingScript.removeEventListener("load", initWidget)
        existingScript.removeEventListener("error", handleError)
      }
    }

    const script = document.createElement("script")
    script.id = SUNWISE_WIDGET_SCRIPT_ID
    script.src = SUNWISE_WIDGET_SRC
    script.async = true
    script.addEventListener("load", initWidget)
    script.addEventListener("error", handleError)
    document.body.appendChild(script)

    return () => {
      script.removeEventListener("load", initWidget)
      script.removeEventListener("error", handleError)
    }
  }, [])

  return (
    <div className="w-full">
      <div id="root" ref={mountRef} data-ttq-form-scope="sunwise_widget" className="min-h-[720px] w-full" />

      {hasError ? (
        <div className="border-t border-gray-200 bg-white px-6 py-5 text-sm text-gray-600">
          No pudimos cargar el cotizador en este momento. También puedes escribir a{" "}
          <a href="mailto:contacto@integraverde.com" className="font-medium text-green-700 underline">
            contacto@integraverde.com
          </a>{" "}
          o por{" "}
          <a
            href="https://wa.me/5215526555508"
            target="_blank"
            rel="noopener noreferrer"
            data-ttq-event="Contact"
            data-ttq-label="whatsapp"
            data-ttq-content="sunwise_fallback_whatsapp"
            data-ttq-placement="sunwise_widget_fallback"
            className="font-medium text-green-700 underline"
          >
            WhatsApp
          </a>
          .
        </div>
      ) : null}
    </div>
  )
}
