export function formatNumber(number: Number) {
  return Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(number)
}

export async function getAssetLogo(ticker: String) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_TICKER_LOGO_URL}/${ticker}?${new URLSearchParams(
      // @ts-ignore
      {
        apiKey: process.env.NEXT_PUBLIC_POLYGON_API_KEY,
      }
    )}`
  )
  const data = await res.json()
  console.log(data)

  if (data.results.branding) {
    // @ts-ignore
    return `${data?.results.branding.logo_url}?${new URLSearchParams({
      apiKey: process.env.NEXT_PUBLIC_POLYGON_API_KEY,
    })}`
  }

  return '#'
}
