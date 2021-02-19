import React, { useState, useEffect } from 'react'

const LikeButton = (props) => {
  const [count, setCount] = useState(0);
  const [limit, setLimit] = useState(true);

  const countUp = () => {
    setCount( count + 1 )
  }

  useEffect(() => {
    console.log("mount")
    document.getElementById('counter').addEventListener('click', () => countUp());
    if ( count >= 10 ) {
      setCount(0);
    }
    return () => {
      console.log("unmount")
      document.getElementById('counter').removeEventListener('click', () => this.countUp());
    }
  }, [limit] )

  return(
    <>
      <button id={"counter"}>いいね数: {count}</button>
      <button onClick={() => setLimit(!limit)} >もっといいねしたい！</button>
    </>
  )
}

export default LikeButton