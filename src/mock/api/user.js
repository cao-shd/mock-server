const data = require('../data/user');

const user = {
  // curl http://127.0.0.1:3000/api/user
  'GET /api/user': data.user,
  // curl http://127.0.0.1:3000/api/users
  'GET /api/users': data.users,
  // curl -d "username=admin&password=123456" http://127.0.0.1:3000/api/user
  // curl -d "{\"username\":\"admin\", \"password\": \"123456\"}" -H "Content-Type:application/json" http://127.0.0.1:3000/api/user
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
  // curl -X DELETE http://127.0.0.1:3000/api/user/1
  'DELETE /api/user/:id': (req, res) => {
    console.log('取得url地址中传递过来的参数', req.params.id);
    res.send({ status: 'ok', message: '删除成功！' });
  },
};

module.exports = user;
