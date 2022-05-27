import axios from '../request';
export function getHistory () {
  const userid = 'putaopi';
  return axios(
    {
      method: 'get',
      url: '/api/v0/msg/history_msg',
      params: userid
    }
  )
} 