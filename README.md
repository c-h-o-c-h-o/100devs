I'm making this repository for collaboration with fellow classmates in the 100devs bootcamp. I'm still new to Git so I want to get comfortable sharing and collaborating code on git and understanding the proper workflow and use of branching and merging to main with other people's contributions. 

Please read the Wiki and let me know if you have suggestions/ideas for how we can learn to code together with Git/GitHub!

So I practiced and successfully contributed to my project from a separate branch that I made for the first HW assignment. 

The workflow is as follows:

1: Create specific branch for your code contributions
2: Work on that branch
3: When done, push that branch to the repo which will create a remote copy of your branch on the repo
4: Make a pull request for your contribution to be checked and cleared by the repo owner/maintainer
5: Once the pull request is cleared either the maintainer will merge or you can merge through the cli by switching from your local branch to the local master branch that you have pulled. (Not sure if non-owners can merge through cli)
6: Pull from origin master first to make sure your local master branch is up to date.
7: Merge your local branch with your local master
8: Push the merged master branch to the Repo
9: Delete your local branch with git branch -d branch name
10: Delete the remote branch with git push origin --delete branch name

Feel free to DM me on Discord: cho_cho #8835
