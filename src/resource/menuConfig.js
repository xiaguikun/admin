const menuList = [
  {
    title: '首页',
    key: '/admin/home',
    auth: '1'
  },
  {
    title: 'UI',
    key: '/admin/ui',
    auth: '2',
    children: [
      {
        title: '按钮',
        key: '/admin/ui/buttons',
        auth: '12',
      },
      {
        title: '弹框',
        key: '/admin/ui/modals',
        auth: '13',
      },
      {
        title: 'Loading',
        key: '/admin/ui/loadings',
        auth: '14',
      },
      {
        title: '通知提醒',
        key: '/admin/ui/notification',
        auth: '15',
      },
      {
        title: '全局Message',
        key: '/admin/ui/messages',
        auth: '16',
      },
      {
        title: 'Tab页签',
        key: '/admin/ui/tabs',
        auth: '17',
      },
      {
        title: '图片画廊',
        key: '/admin/ui/gallery',
        auth: '18',
      },
      {
        title: '轮播图',
        key: '/admin/ui/carousel',
        auth: '19',
      }
    ]
  },
  {
    title: '表单',
    key: '/admin/form',
    auth: '3',
    children: [
      {
        title: '登录',
        key: '/admin/form/login',
        auth: '20',
      },
      {
        title: '注册',
        key: '/admin/form/reg',
        auth: '21',
      }
    ]
  },
  {
    title: '表格',
    key: '/admin/table',
    auth: '4',
    children: [
      {
        title: '基础表格',
        key: '/admin/table/basic',
        auth: '22',
      },
      {
        title: '高级表格',
        key: '/admin/table/high',
        auth: '23',
      }
    ]
  },
  {
    title: '富文本',
    key: '/admin/rich',
    auth: '5',
  },
  {
    title: '城市管理',
    key: '/admin/city',
    auth: '6',
  },
  {
    title: '订单管理',
    key: '/admin/order',
    auth: '7',
    btnList: [
      {
        title: '订单详情',
        key: 'detail'
      },
      {
        title: '结束订单',
        key: 'finish'
      }
    ]
  },
  {
    title: '员工管理',
    key: '/admin/user',
    auth: '8',
  },
  {
    title: '车辆地图',
    key: '/admin/bikeMap',
    auth: '9',
  },
  {
    title: '图标',
    key: '/admin/charts',
    auth: '10',
  },
  {
    title: '权限设置',
    key: '/admin/permission',
    auth: '11',
  },
];
export default menuList;