# Main differences between the ```git pull``` and ```git fetch``` commands

## You can download content from a remote repository using two commands: ```git pull``` and ```git fetch```. Of these two commands, git fetch can be considered a "safe" option. 

\* _It downloads remote content, but does not update the working state of the local repository, leaving the current work intact._

\*_The git pull command is more aggressive: it loads remote content for the active local branch and immediately executes the git merge command, creating a merge commit for the new remote content. If you have pending changes, conflicts will occur and the merge conflict resolution process will start._