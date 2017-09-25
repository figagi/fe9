每天都使用git push origin master

想把它简化gpm

切换到家目录
cd ~

然后在找到.bash_profile

在这个里面写
另起一行就可以写了

alias ggpull=’git pull origin $(git_current_branch)’

即刻生效 source .bash_profile

alias gpm='git push origin master'

https://raw.githubusercontent.com/7fe/guide/master/gitguide/alias.md