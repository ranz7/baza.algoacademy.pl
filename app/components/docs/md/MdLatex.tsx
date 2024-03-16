var Latex = require('react-latex')

const MdLatex = (props: any) => {
  return <Latex>{props?.text}</Latex>
}

export default MdLatex
