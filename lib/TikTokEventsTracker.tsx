"use client"

import { useEffect } from "react"
import type { TikTokTrackProperties, TikTokWindow } from "@/lib/tiktok"

const trackTikTokEvent = (eventName: string, properties: TikTokTrackProperties = {}) => {
  if (typeof window === "undefined") {
    return
  }

  const ttq = (window as TikTokWindow).ttq

  if (!ttq?.track) {
    return
  }

  ttq.track(eventName, properties)
}

export default function TikTokEventsTracker() {
  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const target = event.target instanceof Element ? event.target.closest("[data-ttq-event]") : null

      if (!(target instanceof HTMLElement)) {
        return
      }

      const eventName = target.dataset.ttqEvent

      if (!eventName) {
        return
      }

      trackTikTokEvent(eventName, {
        button_name: target.dataset.ttqLabel,
        content_name: target.dataset.ttqContent,
        placement: target.dataset.ttqPlacement,
        destination: target.getAttribute("href") ?? undefined,
      })
    }

    const handleSubmit = (event: SubmitEvent) => {
      const form = event.target instanceof HTMLFormElement ? event.target : null

      if (!form) {
        return
      }

      const scope = form.closest("[data-ttq-form-scope]")

      if (!(scope instanceof HTMLElement)) {
        return
      }

      trackTikTokEvent("SubmitForm", {
        form_name: scope.dataset.ttqFormScope,
        form_id: form.id || undefined,
      })
    }

    document.addEventListener("click", handleClick, true)
    document.addEventListener("submit", handleSubmit, true)

    return () => {
      document.removeEventListener("click", handleClick, true)
      document.removeEventListener("submit", handleSubmit, true)
    }
  }, [])

  return null
}
