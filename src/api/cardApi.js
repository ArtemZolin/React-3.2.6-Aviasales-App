/* eslint-disable no-continue */
/* eslint-disable no-await-in-loop */
/* eslint-disable no-return-await */
import { createAsyncThunk } from '@reduxjs/toolkit'

// eslint-disable-next-line import/no-cycle
import { addTickets } from '../components/store/ticketsSlice'

import { notificationError } from './notificationError'

const URL = 'https://aviasales-test-api.kata.academy'

const fetchSearchId = async () => {
  const response = await fetch(`${URL}/search`)
  if (!response.ok) {
    if (response.status < 500) {
      throw new Error('Ошибка при загрузке searchId')
    }
    const error = new Error('Ошибка сервера при загрузке searchId')
    error.response = response
    throw error
  }
  const data = await response.json()
  return data.searchId
}

const fetchTicketsBatch = async (searchId) => {
  const response = await fetch(`${URL}/tickets?searchId=${searchId}`)
  if (!response.ok) {
    const error = new Error(`Ошибка при загрузке билетов: ${response.statusText}`)
    error.response = response
    throw error
  }
  return await response.json()
}

// eslint-disable-next-line import/prefer-default-export
export const fetchTickets = createAsyncThunk('tickets/fetchTickets', async (_, { dispatch }) => {
  let searchId
  try {
    searchId = await fetchSearchId()  
  } catch (error) {
    if (error.response?.status < 500) {
      notificationError('Произошла непредвиденная ошибка при получении searchId') 
      return
    }
  }
  let stop = false

  while (!stop) {
    try {
      const { tickets, stop: batchStop } = await fetchTicketsBatch(searchId)
      dispatch(addTickets(tickets))
      stop = batchStop
    } catch (error) {
      if (error.response.status >= 500) {
        continue
      } else {
        notificationError('Произошла непредвиденная ошибка')
        return
      }
    }
  }
})
