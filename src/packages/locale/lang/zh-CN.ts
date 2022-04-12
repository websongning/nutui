import { BaseLang } from './baseLang';
const lang: BaseLang = {
  save: '保存',
  confirm: '确认',
  cancel: '取消',
  done: '完成',
  noData: '暂无数据',
  placeholder: '请输入',
  select: '请选择',
  video: {
    errorTip: '视频加载失败',
    clickRetry: '点击重试'
  },
  fixednav: {
    activeText: '收起导航',
    unActiveText: '快速导航'
  },
  pagination: {
    prev: '上一页',
    next: '下一页'
  },
  calendaritem: {
    weekdays: ['日', '一', '二', '三', '四', '五', '六'],
    end: '结束',
    start: '开始',
    title: '日历选择',
    monthTitle: (year: number, month: number) => `${year}年${month}月`,
    today: '今天'
  },
  shortpassword: {
    title: '请输入密码',
    desc: '您使用了虚拟资产，请进行验证',
    tips: '忘记密码'
  },
  uploader: {
    ready: '准备完成',
    readyUpload: '准备上传',
    waitingUpload: '等待上传',
    uploading: '上传中',
    success: '上传成功',
    error: '上传失败'
  },
  countdown: {
    day: '天',
    hour: '时',
    minute: '分',
    second: '秒'
  }
};
export default lang;