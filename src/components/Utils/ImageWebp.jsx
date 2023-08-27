
const ImageWebp = ({ srcWebp, src, alt, ...props }) => {

  return (
    <>
      <picture>
        <source srcSet={srcWebp} type="image/webp" />
        <img src={src} alt={alt} {...props} />
      </picture>
    </>
  )
}

export default ImageWebp;