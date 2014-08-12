git filter-branch -f --env-filter '
export GIT_AUTHOR_NAME="smayszak"
export GIT_AUTHOR_EMAIL="stevemayszak@gmail.com"
export GIT_COMMITTER_NAME="smayszak"
export GIT_COMMITTER_EMAIL="stevemayszak@gmail.com" 
'

