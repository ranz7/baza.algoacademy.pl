import * as React from 'react'

export function Carbon() {
  const ref = React.useRef<HTMLDivElement>(null!)

  // React.useEffect(() => {
  //   ref.current.innerHTML = ''
  //   const s = document.createElement('script')
  //   s.id = '_carbonads_js'
  //   s.src = `//cdn.carbonads.com/carbon.js?serve=CE7DEKQI&placement=`
  //   ref.current.appendChild(s)
  // }, [])

  return <div className="carbon-outer" />
}
