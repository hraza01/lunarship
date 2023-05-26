'use client'
import React, { useEffect, useRef } from 'react'

let tvScriptLoadingPromise: any

export default function Chart({ ticker }) {
  const onLoadScriptRef: any = useRef()

  useEffect((): any => {
    onLoadScriptRef.current = createWidget

    if (!tvScriptLoadingPromise) {
      tvScriptLoadingPromise = new Promise((resolve) => {
        const script = document.createElement('script')
        script.id = 'tradingview-widget-loading-script'
        script.src = 'https://s3.tradingview.com/tv.js'
        script.type = 'text/javascript'
        script.onload = resolve
        document.head.appendChild(script)
      })
    }

    tvScriptLoadingPromise.then(
      () => onLoadScriptRef.current && onLoadScriptRef.current()
    )

    return () => (onLoadScriptRef.current = null)

    function createWidget() {
      if (
        document.getElementById('tradingview-chart') &&
        'TradingView' in window
      ) {
        new window.TradingView.widget({
          autosize: true,
          symbol: ticker,
          interval: 'M',
          timezone: 'Etc/UTC',
          theme: 'dark',
          style: '1',
          locale: 'en',
          toolbar_bg: '#f1f3f6',
          enable_publishing: false,
          allow_symbol_change: false,
          save_image: false,
          container_id: 'tradingview-chart',
        })
      }
    }
  }, [ticker])

  return (
    <div className='h-full w-full' key={ticker} id='tradingview-chart'></div>
  )
}
