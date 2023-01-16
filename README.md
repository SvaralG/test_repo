# Changing the Last Commit

##  Changing your most recent commit is probably the most common rewriting of history that you’ll do. You’ll often want to do two basic things to your last commit: simply change the commit message, or change the actual content of the commit by adding, removing and modifying files.

___If you simply want to modify your last commit message, that’s easy: 
```git commit --amend```___

The command above loads the previous commit message into an editor session, where you can make changes to the message, save those changes and exit. When you save and close the editor, the editor writes a new commit containing that updated commit message and makes it your new last commit.

_If, on the other hand, you want to change the actual content of your last commit, the process works basically the same way — first make the changes you think you forgot, stage those changes, and the subsequent ```git commit --amend``` replaces that last commit with your new, improved commit._

_You need to be careful with this technique because amending changes the SHA-1 of the commit. It’s like a very small ```rebase``` — don’t amend your last commit if you’ve already pushed it._
