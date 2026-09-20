const firebaseConfig = {
  apiKey: "AIzaSyANWLqV5bIFfMX_-byunnEBQ-gZmSn1cj4",
  authDomain: "driver-s-shift-report.firebaseapp.com",
  databaseURL: "https://driver-s-shift-report-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "driver-s-shift-report",
  storageBucket: "driver-s-shift-report.firebasestorage.app",
  messagingSenderId: "790331468274",
  appId: "1:790331468274:web:a0cecd6a8d5f8e157ba36b"
};

const CONFIG = {
  TRIGGER_DISTANCE: 100,
  GPS_TIMEOUT: 20000,
  GPS_ACCURACY_THRESHOLD: 50,
  GPS_RETRY_DELAY: 5000,
  MIN_SPEED_FOR_TRIGGER: 1.0,
  SMOOTHING_WINDOW: 3,
  VOICE_BITRATE: 24000,
  RECORD_MAX_SECONDS: 30,
  ACTIVE_BUS_TIMEOUT: 300000,
  MESSAGE_LIMIT: 100
};

const SUPER_ADMIN_EMAILS = ['cheungyiufai1810@gmail.com', 'hujiaboy@gmail.com'];

const VOICE_TEXTS = {
  startDuty: '開始當值',
  stopDuty: '已停止當值',
  arrived: '到達 ',
  nextStation: '下一站 ',
  lastStation: '已到達總站',
  turnAround: '已調頭',
  arrivedTerminus: '已到達總站，清客完畢，現已調頭',
  welcomeAdmin: '管理員登入成功',
  welcomeDriver: '司機登入成功',
  welcomePassenger: '乘客登入成功',
  loggedOut: '已登出，下次見',
  permissionDenied: '權限不足',
  passengerPage: '乘客頁面',
  driverPage: '司機頁面',
  adminPage: '管理後台',
  backToLobby: '返回大堂',
  backToList: '返回列表',
  sent: '已發送',
  announce: '自動報站已開啟',
  announceOff: '自動報站已關閉',
  modeBusy: '西鐵快線',
  modeNormal: '市中心循環線',
  switchedTo: '已切換至 ',
  carPlateSet: '車牌已設定'
};