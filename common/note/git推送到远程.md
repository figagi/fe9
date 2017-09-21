推送到远程
step1:
    创建一个空文件夹
    git init
    git status  查看git的文件状态
    git remote add origin https://github.com/itguide/fe9.git  给本地的仓库添加远程地址

    git add . 把本地的文件添加到本地仓库
    git commit -am"init" 提交到本地仓库

    git push  origin master

    git remote -v


http://jingyan.baidu.com/article/a65957f4e91ccf24e77f9b11.html
在本地配置ssh密钥
ssh-keygen -t rsa -C "xxxxxx@yy.com"
cd ~ 切换家目录
cd .ssh
cat id_rsa.pub

把这个公钥复制到个github里面

点击github的setting
在左侧点击下面按钮
SSH and GPG keys
new ssh key

