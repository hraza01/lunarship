import Link from 'next/link'
import { format, parseISO } from 'date-fns'

async function getNews() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/news`)
  return res.json()
}
export default async function News() {
  const { news } = await getNews()

  return (
    <div className='col-span-2 flex w-full flex-col gap-2'>
      <h3 className='font-bold'>Financial News</h3>
      <div className='text-white'>
        <div className='grid grid-cols-7 items-center gap-4 rounded-t bg-gray-700 px-10 py-4 text-base uppercase text-gray-300'>
          <p className='font-bold uppercase text-gray-100'>source</p>
          <p className='font-bold uppercase text-gray-100'>author</p>
          <p className='col-span-2 font-bold uppercase text-gray-100'>
            headline
          </p>
          <p className='font-bold uppercase text-gray-100'>published</p>
          <p className='font-bold uppercase text-gray-100'>updated</p>
          <p className='font-bold uppercase text-gray-100'>tags</p>
        </div>
        <div className='overflow-y-auto rounded-b'>
          {news.map((article) => (
            <div
              key={article.id}
              className='grid grid-cols-7 items-center gap-4 border-b border-gray-400/30 bg-white/5 px-10 py-2 last:border-none'
            >
              <p className='uppercase'>{article.source}</p>
              <p>{article.author}</p>
              <Link
                className='col-span-2 text-indigo-400'
                href={article.url}
                target='_blank'
              >
                {article.headline}
              </Link>
              <p>{format(parseISO(article.created_at), 'MMM dd, yyyy')}</p>
              <p>{format(parseISO(article.updated_at), 'MMM dd, yyyy')}</p>
              <div className='flex flex-wrap gap-2'>
                {article.symbols.map((symbol, index) => (
                  <p key={index}>{symbol}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
