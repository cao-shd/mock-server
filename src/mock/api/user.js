const data = require('../data/user');

const user = {
  'GET /api/user': data.user,
  'GET /api/users': data.users,
  'POST /api/user': (req, res) => {
    console.log('取得body中传递过来的参数', req.params.id);
    const { password, username } = req.body;
    if (password === '123456' && username === 'admin') {
      return res.json({
        status: 'ok',
        code: 0,
        token: 'xxxxxxxxxxx',
        data: {
          id: 1,
          username: 'tom',
          sex: 0,
        },
      });
    }
    return res.status(403).json({
      status: 'username/password error!',
      code: 403,
    });
  },
  'DELETE /api/user/:id': (req, res) => {
    console.log('取得url地址中传递过来的参数', req.params.id);
    res.send({ status: 'ok', message: '删除成功！' });
  },
};

module.exports = user;
