import  request from '../utils/request'

export const get_car_news_list = () => {
  return request("http://localhost:3000/api/car");
}
