export const COURSE_TYPE_FRONT = {
  HTML: '10',
  CSS: '11',
  JS: '12',
  REACT: '13'
};
const HOST = 'http://119.23.79.230:8080/study';

//课程模块信息
export const FETCH_COURSE_LIST = `${HOST}/user/getCourseByType`;

//获取课程详情
export const FETCH_COURSE_BY_ID = `${HOST}/user/getCourseById`;
