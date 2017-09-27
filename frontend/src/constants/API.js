export const COURSE_TYPE = {
  BACK_DEV: 'back_dev',
  FRONT_DEV: 'front_dev',
  DESIGN_DEV: 'design_dev',
  GAME_DEV: 'game_dev'
};
const HOST = 'http://119.23.79.230:8080/study';

//课程模块信息
export const FETCH_COURSE_LIST = `${HOST}/user/getCascadedType`;

//获取课程详情
export const FETCH_COURSE_BY_ID = `${HOST}/user/getCourseById`;
