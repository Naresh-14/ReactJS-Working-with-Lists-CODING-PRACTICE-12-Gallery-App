import './index.css'

const ThumbnailItem = props => {
  const {imagesList, setActiveThumbnail, isActive} = props
  const {id, thumbnailUrl, thumbnailAltText} = imagesList
  const onClickThumbnailItem = () => {
    setActiveThumbnail(id)
  }

  const thumbnailClassName = isActive ? 'active-thumbnail-btn' : ''

  return (
    <li className="list-item-container">
      <button
        type="button"
        className={`thumbnail-btn ${thumbnailClassName}`}
        onClick={onClickThumbnailItem}
      >
        <img
          src={thumbnailUrl}
          alt={thumbnailAltText}
          className="thumbnail-img"
        />
      </button>
    </li>
  )
}

export default ThumbnailItem
