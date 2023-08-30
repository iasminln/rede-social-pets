import { useState, useEffect } from 'react'
import FeedPhotos from './FeedPhotos';

const Feed = ({ user, total, preview }) => {
  const [pages, setPages] = useState([1])
  const [infinite, setInfinite] = useState(true)


  useEffect(() => {
    let wait = false
    const infiniteScroll = () => {

      if (infinite) {
        const scroll = window.scrollY;
        const height = document.body.offsetHeight - window.innerHeight;

        if (scroll > height * 0.75 && !wait) {

          setPages((pages) => [...pages, pages.length + 1])
          wait = true
          setTimeout(() => {
            wait = false
          }, 500);
        }
      }
    }

    if (!preview) {
      window.addEventListener('wheel', infiniteScroll)
      window.addEventListener('scroll', infiniteScroll)
    }

    return () => {
      window.removeEventListener('wheel', infiniteScroll)
      window.removeEventListener('scroll', infiniteScroll)
    }
  }, [infinite, preview]);


  return (
    <div className="Feed">
      <ul className={`feed ${preview ? 'feed-preview' : ''}`}>
        {pages.map((page) =>
          <FeedPhotos key={page} user={user} total={total} page={page} setInfinite={setInfinite} />
        )}
      </ul>
    </div>
  )
}

export default Feed;