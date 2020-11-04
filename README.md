# Hey you, yea you, want to learn Git/Github and emulate a dev team environment?

Then join me in this 100devs collaboration project open to anyone doing the 100devs bootcamp!

If you are completely new to git and Github, I'll do my best to outline resources for you to read/view that will get you set up:

# The 3 resources I've followed thus far are:

1. The Odin Project: https://www.theodinproject.com/courses/foundations/lessons/installation-overview
This walks you through setting up a virtual machine on your computer so you can code in Linux OS. It shows you how to set up git on your OS and the following section: https://www.theodinproject.com/courses/foundations/lessons/introduction-to-git teaches you the most basic git commands you'll need to know and how to use CLI. 

2. Corey Schafer is the best youtube resource I've found for explaining coding in general. He has a great video that covers the basic git commands and how you'd use git in a team: https://www.youtube.com/watch?v=HVsySz-h9r4

3. Finally, to understand Opensource and how to contribute to any opensource project on Github, I've been reading this site: https://www.digitalocean.com/community/tutorial_series/an-introduction-to-open-source

## At this point in time, the current workflow that must be followed to properly share your code for peer review is:

1. Fork this repo and clone it on your local drive. 

2. Make a branch with a name that identifies you (ex: cho-cho-branch) 

3. Organize your files in a directory (folder) that identifies you (ex: 100devs/cho-cho-bbc-webpage/) This will keep everyones code organized with clearly identifiable owners. Keep your files in that folder and work out of that directory. Once you are done working, commit your edits locally with `git add -A` and `git commit -m'commit message'`

4. Pull (update) your forked repository from this repo. This is done with the git command: `git remote add upstream https://github.com/c-h-o-c-h-o/100devs.git`  
    4b. 
    Once the upstream is set to this master repo, you shouldnt have to do so again. Now you can update your local repository with: `git pull upstream master`
        
5. Push your branch to this repo with `git push` and make a pull request. So long as you have followed the aforementioned steps, I will accept your code and merge it with master.  
    5b. 
    To delete your branch and the remote branch that you push use `git branch -d branch name` to delete locally. Then `git push origin --delete branch name` to delete your pushed branch. 
        
6. Now anyone who has this repo forked and updates their fork with git pull upstream master will have a copy of your work that they can view on their machine in their text editor to easily make suggestions/comments.

7. If you want someone to review your code, please create a new Issue in the Issues tab and clearly indicate the directory that your code will be in so that anyone who wants to help can easily identify your work. 

8. When peer-reviewing other people's work, we should comment out our suggestions so that the original code is preserved and the owner can clearly see the suggestions offered by the reviewer. Github also makes it really easy to see exactly what edits were made if you simply click on the commit made by the last person to edit a file. 

9. Teamwork makes the dream work (?)


### Please DM me on Discord: cho_cho #8835 if you have suggestions on how to make this project work more efficiently. I am still new to Git/Github myself.

O almost forgot, as an added bonus, those of us who are active in this repo should all vote on the best submission for each week's assignment. Once we choose the best user submission, I'll deploy the site on Netlify to show off to our classmates!

The current sites in this repo are deployed here: 
* https://pedantic-blackwell-40a88c.netlify.app/
* https://lucid-mclean-e5431f.netlify.app/

#### Shoutout to Imran for helping me test out the workflow!

Testing testing
