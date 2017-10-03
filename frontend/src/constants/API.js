export const COURSE_TYPE_FRONT = {
  HTML: '10',
  CSS: '11',
  JS: '22',
  AS: '23'
};

export const COURSE_TYPE_BACK = {
  JAVA: '8',
  PYTHON: '18',
  PHP: '24',
  C: '25'
};


export const COURSE_TYPE_UI = {
  AXURE: '16',
  COREIDRAW: '20',
  PHOTOSHOP: '21',
  ILLUSTRATOR: '30'
};

export const COURSE_TYPE_GAME = {
  PHONE: '26',
  PC: '27',
  STAND: '28',
  MINI: '29'
};

const HOST = 'http://119.23.79.230:8080/study';

//课程模块信息
export const FETCH_COURSE_LIST = `${HOST}/user/getCourseByType`;

//获取课程详情
export const FETCH_COURSE_BY_ID = `${HOST}/user/getCourseById`;

//菜单栏获取课程页
export const FETCH_COURSE_BY_MENU = `${HOST}/user/getCascadedType`;
