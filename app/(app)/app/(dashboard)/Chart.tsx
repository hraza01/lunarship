'use client'
import { createChart, CrosshairMode } from 'lightweight-charts'
import { useEffect, useRef, useState } from 'react'
import { format, fromUnixTime } from 'date-fns'
import { Spinner } from 'flowbite-react'

// @ts-ignore
export default function Chart({ accountId }) {
  const [loading, setLoading] = useState(true)
  const [accountBalance, setAccountBalance] = useState([])

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

    newSeries.priceScale().applyOptions({
      autoScale: false,
      scaleMargins: {
        top: 0.1,
        bottom: 0.2,
      },
    })

    async function getAccountBalance() {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_HOST}/api/account/${accountId}/portfolio`
      )
      const data = await res.json()

      setAccountBalance(
        data.timestamp.map((day, index) => {
          return {
            time: format(fromUnixTime(day), 'yyyy-MM-dd'),
            value: Number(data.equity[index]),
          }
        })
      )

      setLoading(false)
    }

    getAccountBalance().then(() => newSeries.setData(accountBalance))

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)

      chart.remove()
    }
  }, [accountId])

  if (loading) {
    return (
      <Spinner color='purple' aria-label='Purple spinner example' size='lg' />
    )
  }

  return (
    <div className='flex w-full flex-col gap-2'>
      <h3 className='font-bold'>Account Balance</h3>
      <div className='h-[24rem] w-full grow rounded bg-white/5 p-4'>
        <div className='h-full' ref={chartContainerRef} />
      </div>
    </div>
  )
}
