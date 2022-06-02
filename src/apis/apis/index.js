import axios from '../request';
export function getHistory (infor) {
  return axios({
      method: 'get',
      url: '/msg/history_msg',
      params: infor
    }
  )
};
export function createUser (infor) {
  return axios({
    method: 'post',
    url: '/user/create_user_demo1',
    data: infor
    }
  )
};
export function sendMessage (infor) {
  return axios({
    method: 'post',
    url: '/msg/send_msg_demo1',
    params: infor
  })
};
export function evaluateMessage (infor) {
  return axios({
    method: 'post',
    url: '/msgs/evaluate',
    data: infor
  })
};
export function getHistoryMsgSingleDay (infor) {
  return axios({
    method: 'get',
    url: '/msg/history_msg_singleday',
    params: infor
  })
};
export function downloadApp () {
  return new Promise(() => {
    axios({
      method:'get',
      url:'/file/download_app',
      responseType: 'blob'
    }).then(response => {
      let url = window.URL.createObjectURL(response)
      let link = document.createElement('a')
      link.style.display = 'none'
      link.href = url
      link.setAttribute('download', 'dianbot')
      document.body.appendChild(link)
      link.click()
    }).catch(error => {
        return error
    })
  })
}