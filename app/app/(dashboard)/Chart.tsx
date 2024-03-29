'use client'
import { createChart, CrosshairMode } from 'lightweight-charts'
<<<<<<<< HEAD:app/app/Chart.tsx
import React, { useEffect, useRef } from 'react'

// @ts-ignore
========
import { useEffect, useRef } from 'react'

>>>>>>>> develop:app/app/(dashboard)/Chart.tsx
export default function Chart({ data }) {
  const chartContainerRef = useRef()

  useEffect(() => {
    const handleResize = () => {
      chart.applyOptions({ width: chartContainerRef.current.clientWidth })
    }

    const chart = createChart(chartContainerRef.current, {
      layout: {
        background: { color: 'transparent' },
        textColor: '#DDD',
      },
      grid: {
        vertLines: { color: 'transparent' },
        horzLines: { color: 'transparent' },
      },
    })
    chart.timeScale().fitContent()

    // @ts-ignore
    chart.applyOptions({
      crosshair: {
        // Change mode from default 'magnet' to 'normal'.
        // Allows the crosshair to move freely without snapping to datapoints
        mode: CrosshairMode.Normal,

        // Vertical crosshair line (showing Date in Label)
        vertLine: {
          labelBackgroundColor: '#9B7DFF',
        },

        // Horizontal crosshair line (showing Price in Label)
        horzLine: {
          color: '#9B7DFF',
          labelBackgroundColor: '#9B7DFF',
        },
      },
    })

    const newSeries = chart.addAreaSeries({
      lineColor: '#4338ca',
      topColor: '#4338ca',
      bottomColor: 'transparent',
    })
    newSeries.setData(data)

    newSeries.priceScale().applyOptions({
      autoScale: false,
      scaleMargins: {
        top: 0.1,
        bottom: 0.2,
      },
    })

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)

      chart.remove()
    }
  }, [data])

  return <div className='h-full' ref={chartContainerRef} />
}
