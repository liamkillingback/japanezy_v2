import React, {useEffect} from 'react'
import { useDispatch } from 'react-redux';
import { setLogout } from '../state';

const Account = () => {
  useEffect(() => {
    window.scroll({top: 0})
  }, [])

  const dispatch = useDispatch();

  return (
    <div className='min-h-screen pt-40'>
      <button onClick={() => dispatch(setLogout())}>Logout</button>

    </div>
  )
}

export default Account