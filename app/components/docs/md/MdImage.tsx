import React from 'react'

const MdImage = (
  props: React.DetailedHTMLProps<
    React.ImgHTMLAttributes<HTMLImageElement>,
    HTMLImageElement
  > & { title?: string; float?: 'left' | 'right' }
) => {
  if (props.float === 'left') {
    return (
      <img
        alt={'Not found'}
        {...props}
        className={`self-center my-3 mr-3 float-left`}
      />
    )
  }

  if (props.float === 'right') {
    return (
      <img
        alt={'Not found'}
        {...props}
        className={`self-center my-3 ml-3 float-right`}
      />
    )
  }

  return (
    <div className={`flex-col my-5  flex justify-center m-auto`}>
      <img alt={'Not found'} {...props} className="self-center mb-2 mt-0" />
      {props.title && <span className="self-center">{props.title}</span>}
    </div>
  )
}

export default MdImage
