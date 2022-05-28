import axios from '../request';
export function getHistory (userid) {
  return axios({
      method: 'get',
      url: '/msg/history_msg',
      params: userid
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
}