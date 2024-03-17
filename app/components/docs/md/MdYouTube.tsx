import React from 'react'
import YouTube from 'react-youtube'

const YoutubeEmbed = ({
  linkOrId,
  title,
  startSeconds = '-1',
  endSeconds = '-1',
}: {
  linkOrId: string
  startSeconds: string
  endSeconds: string
  title?: string
}) => {
  return (
    <span className="flex-col my-5 video-responsive flex justify-center m-auto">
      <YouTube
        videoId={linkOrId} // defaults -> ''
        title={'string'} // defaults -> ''
        opts={{
          playerVars: {
            rel: 0,
            color: 'white',
            playsinline: 0,
            start: Number(startSeconds),
            end: Number(endSeconds),
          },
        }}
        className="self-center"
      />
      {title && <span className="self-center ">{title}</span>}
    </span>
  )
}

export default YoutubeEmbed
