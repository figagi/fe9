git checkout -b stark
创建分支

git checkout master

什么情况下创建分支
当你的项目需要开发一个新的功能，这时候先把你的项目 从主分支拉取到最新
然后再创建一个分支

分支的概念

git branch  把所有分支列出了
git branch branchname 创建分支
git checkout -b branchname 创建并且切换到分支 相当于  
git branch branchname && git checkout branchname

git checkout  branchname 切换分支

想知道自己在这个分支上做了哪些动作
git status

git diff 查看自己修改了哪些东西
执行完这个命令之后，类似于 vim 模式
怎么退出：
:q! 

shift  zz   就是大写的ZZ
