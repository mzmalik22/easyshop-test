import { AsyncThunk } from '@reduxjs/toolkit'
import { useReduxDispatch } from '@store'
import { useEffect, useState } from 'react'

const usePagination = <T extends AsyncThunk<any, any, any>>(
  action: T,
  onEndReached: boolean,
) => {
  const [refreshing, setRefresh] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)

  const dispatch = useReduxDispatch()
  const onRefresh = async () => {
    setRefresh(true)
    setCurrentPage(1)
    await dispatch(action({ page: currentPage }))
    setRefresh(false)
  }

  const handleLoadMore = () => {
    if (onEndReached) {
      return
    }
    const newPage = currentPage + 1
    dispatch(action({ page: newPage }))
    setCurrentPage(newPage)
  }
  useEffect(() => {
    dispatch(action({ page: currentPage }))
  }, [])
  return { refreshing, onRefresh, handleLoadMore }
}

export { usePagination }
