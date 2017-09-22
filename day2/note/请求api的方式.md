在vuejs里面
可以使用jquery的ajax
这个就是引入jquery使用里面ajax

vue-resource
    目前官方已经不再维护，作者建议使用axios
    支持：post get jsonp

    使用方式需要引入 vue-resource
    引入后
    在vue里面 直接使用
    this.$http.get()
    this.$http.post('url链接'，传的参数)

    List of shortcut methods:

    http的请求方式 7种
    get(url, [options])
    head(url, [options])
    delete(url, [options])
    jsonp(url, [options])
    post(url, [body], [options])
    put(url, [body], [options])
    patch(url, [body], [options])

axios
    支持：post get 
    自己本身不支持jsonp

    使用方式
        引入axios插件
        axios.get()
        可以选择两种传参方式：
        1.直接在url后面拼接
            user?id=1221
```
            axios.get('/user?ID=12345')
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
```
        2.在第二个参数传惨
```
            axios.get('/user', {
                params: {
                ID: 12345
                }
            })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
```
    axios post

    ```
        axios.post('/user', {
            firstName: 'Fred',
            lastName: 'Flintstone'
        })
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
    ```
    区别：
    get 传参需要：
    
    params:{
        name:'stark',
        age:18
    }

    post 传参
    {
        name:'shudong',
        age:19
    }