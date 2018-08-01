import { param2Obj } from 'utils';

const userMap = {
    administrator: {
    role: ['admin'],
    token: 'administrator',
    introduction: '我是超级管理员',
    name: '烟消云散',
        password:'telecommunication',
    uid: '001'
  },
  editor: {
    role: ['editor'],
    token: 'editor',
    introduction: '我是编辑',
      password:'telecommunication',
      name: '且听吾言',
    uid: '002'
  },
  developer: {
    role: ['developer'],
    token: 'developer',
      password:'telecommunication',
      introduction: '我是开发',
    name: '攻城狮郝力',
    uid: '003'
  },
    fallingDown: {
        role: ['admin'],
        password:'telecommunication',
        token: 'fallingDown',
        introduction: '我是超级管理员',
        name: '一言不合',
        uid: '004'
    }
};
const tableList =[
    {title:'第一个菜单',
    type:'url',
        value:'http://www.baidu.com'
    },
    {title:'第一个菜单',
        type:'url',
        value:'http://www.baidu.com',
        children:[
            {title:'第一个菜单',
                type:'reply',
                value:'星分翼轸'
            }
        ]
    }
];
export default {
  loginByEmail: config => {
    const { email,password } = JSON.parse(config.body);
    console.log({email,password});
    if(userMap[email] && userMap[email].password===password) {
        return userMap[email];
    }
  },
  getInfo: config => {
    const { token } = param2Obj(config.url);
    if (userMap[token]) {
      return userMap[token];
    } else {
      return Promise.reject('a');
    }
  },
    findTableList: config => {
      return tableList
    },
  logout: () => 'success'
};
