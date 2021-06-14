export const useDomParse = () => {
  const handleDomParse = (representation) => {
    const parser = new DOMParser()
    return parser.parseFromString(`<!doctype html><body>${representation}`, 'text/html').body.textContent
  }

  return{
    handleDomParse
  }
}