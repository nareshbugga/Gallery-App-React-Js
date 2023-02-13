/* eslint-disable no-unused-vars */
// Write your code here.
import './index.css'

const ThumbnailItem = props => {
  const {eachItem, displayImage, condition} = props
  const {id, thumbnailUrl, thumbnailAltText} = eachItem
  const onDisplay = () => displayImage(id)
  const style = condition ? 'remove-opacity' : ''
  return (
    <li>
      <button type="button" onClick={onDisplay}>
        <img
          src={thumbnailUrl}
          alt={thumbnailAltText}
          className={`list-item ${style}`}
        />
      </button>
    </li>
  )
}

export default ThumbnailItem
