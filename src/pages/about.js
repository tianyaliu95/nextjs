import { setCacheStaleWhileRevalidate } from '@/serverless/cdn'

import Page from '@/components/Page'
import ImageBlock from '@/components/ImageBlock'
import ImageSlider from '@/components/ImageSlider'
import Text from '@/components/Text'
import EmailSubscription from '@/components/EmailSubscription'

import aboutContent from '@/content/about/about.json'

export default function About ({ content }) {
  return (
    <Page>
      <ImageBlock
        CTA={{ label: '关于我们', href: '' }}
        imagePosition='50% 77%'
        image='/assets/wallpaper3.jpg'
      />
      <div className='flex flex-col mx-auto container px-4 lg:px-20 mt-4'>
        {aboutContent.map((section, index) => {
          const { label = '', content = '', images } = section

          return (
            <div key={index} className='my-2 lg:my-4'>
              <span className='flex justify-center lg:justify-start p-2 text-2xl font-bold'>{label}</span>
              <Text className='text-grays-600 px-2 py-2 lg:py-4 leading-7' text={content} />
              {images &&
                <ImageSlider images={images} />}
            </div>
          )
        })}
      </div>
      <EmailSubscription height='h-72' />
    </Page>

  )
}

export async function getServerSideProps ({ req, res, query }) {
  setCacheStaleWhileRevalidate(res)

  const content = {
    name: 'Tianya'
  }

  return {
    props: {
      content
    }
  }
}
