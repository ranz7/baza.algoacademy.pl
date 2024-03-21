import React from 'react'

const YoutubeEmbed = ({
  linkOrId,
  title,
  startSeconds = '0',
  endSeconds = '-1',
}: {
  linkOrId: string
  startSeconds: string
  endSeconds: string
  title?: string
}) => {
  return (
    <span className="flex-col my-5 flex justify-center m-auto ">
      <span className="self-center w-full responsive-iframe-container">
        <span>
          <iframe
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            width="640"
            height="360"
            src={`https://www.youtube.com/embed/${linkOrId}?rel=0&amp;color=white&amp;playsinline=0&amp;start=${startSeconds}&amp;end=${endSeconds}&amp;enablejsapi=1&amp`}
          ></iframe>
        </span>
      </span>
      {title && <span className="self-center ">{title}</span>}
    </span>
  )
}

export default YoutubeEmbed
