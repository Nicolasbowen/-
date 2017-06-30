/**
 * Created by hama on 2017/5/9.
 */
module.exports = {
    host: 'localhost',
    port: 27017,
    db: 'zhangqiblog',
    PSDkey: 'zhangqi',
    //邮箱发送的设置
    mail_opts: {
        //邮箱的服务器地址
        host: 'pop.qq.com',
        //权限授权码
        auth: {
            user: '526169225@qq.com',
            pass: 'nizwizwjszjbbgbe'
        }
    },
    //社区名称
    name: 'nodeJS社区问答系统',
    //cookie的名称
    auth_cookie_name: 'nodejs-ask',
    //cookie加密
    cookie_secret: 'nodejs-ask',
    // 版块
    categorys: [
        ['share', '分享'],
        ['ask', '问答'],
        ['job', '招聘'],
    ],
    //本地缓存设置
    redis_host: '127.0.0.1',
    redis_port: 6379,
    redis_psd: '',
    redis_db: 0,
}