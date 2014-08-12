git filter-branch -f --env-filter '
export GIT_AUTHOR_NAME="stevemayszak@gmail.com"
export GIT_AUTHOR_EMAIL="stevemayszak@gmail.com"
export GIT_COMMITTER_NAME="stevemayszak@gmail.com"
export GIT_COMMITTER_EMAIL="stevemayszak@gmail.com" 
'

