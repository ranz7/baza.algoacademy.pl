import { Callout } from 'frontend/components/Callout'
import { QuickLink, QuickLinks } from 'frontend/components/QuickLinks'
import { Image } from 'frontend/components/Image'
import YouTube from 'react-youtube'

const tags = {
  callout: {
    attributes: {
      title: { type: String },
      type: {
        type: String,
        default: 'note',
        matches: ['note', 'warning'],
        errorLevel: 'critical',
      },
    },
    render: Callout,
  },
  figure: {
    selfClosing: true,
    attributes: {
      src: { type: String },
      alt: { type: String },
      caption: { type: String },
    },
    render: ({ src, alt = '', caption }) => (
      <figure>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={src} alt={alt} />
        <figcaption>{caption}</figcaption>
      </figure>
    ),
  },
  'quick-links': {
    render: QuickLinks,
  },
  'quick-link': {
    selfClosing: true,
    render: QuickLink,
    attributes: {
      title: { type: String },
      description: { type: String },
      icon: { type: String },
      href: { type: String },
    },
  },
  image: {
    selfClosing: true,
    render: Image,
    attributes: {
      src: { type: String },
      alt: { type: String },
    },
  },
  youtube: {
    selfClosing: true,
    render: ({ props }) => (
      <div className="overflow-hidden rounded-2xl">
        <YouTube
          opts={{
            height: '390',
            width: '640',
          }}
          {...props}
        />
      </div>
    ),
  },
}

export default tags
