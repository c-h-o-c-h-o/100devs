# Hey you, yea you, want to learn Git/Github and emulate a dev team environment?

Then join me in this 100devs collaboration project open to anyone doing the 100devs bootcamp!

If you are completely new to git and Github, I'll do my best to outline resources for you to read/view that will get you set up:

# The resources I've followed thus far are:

1. [The Odin Project](https://www.theodinproject.com/courses/foundations/lessons/installation-overview): 
This walks you through setting up a virtual machine on your computer so you can code in Linux OS. It shows you how to set up git on your OS and [the following section](https://www.theodinproject.com/courses/foundations/lessons/introduction-to-git) teaches you the most basic git commands you'll need to know and how to use CLI. 

2. [Corey Schafer](https://www.youtube.com/watch?v=HVsySz-h9r4) is the best youtube resource I've found for explaining coding in general. He has a great video that covers the basic git commands and how you'd use git in a team.

3. Finally, to understand Opensource and how to contribute to any opensource project on Github, I've been reading [this site](https://www.digitalocean.com/community/tutorial_series/an-introduction-to-open-source).

4. For a visual interactive guide to understanding git, Imran recommends [this resource](https://learngitbranching.js.org/). Try it out!

## At this point in time, the current workflow that must be followed to properly share your code for peer review is:

1. Fork this repo and clone the fork to your local drive. 

2. Make a branch with a name that identifies you (ex: cho-cho-branch) `git branch branch-name` and switch into that branch with `git checkout branch-name`

3. Organize your files in a directory (folder) that identifies you (ex: 100devs/cho-cho-bbc-webpage/) This will keep everyones code organized with clearly identifiable owners. Keep your files in that folder and work out of that directory. Once you are done working, commit your edits locally with `git add -A` and `git commit -m'commit message'`

4. Before pushing your code, it is very important to keep your fork and your local repository up to date with the original repository. This keeps everyone on the same page and prevents potential conflicts. To do this, make sure you're on branch master on your local repository with command `git branch -a`. It should look like: *master (in green) to indicate you're on branch master. Use `git checkout master` to switch to master if you're on a different branch. Pull (update) your forked repository from this repo. This is done with the git command: `git remote add upstream https://github.com/c-h-o-c-h-o/100devs.git`  

    4b. 
    Once the upstream is set to the original repo, you won't have to do so again. Now you can update your local repository with: `git pull upstream master`  

    4c.
    Next, update your fork of the repository on github with command `git push origin master`. Your fork of the repository should now say it is even with c-h-o-c-h-o:master on Github. Now you are ready to push your contributions in the branch you made!
        
5. Push your branch. First, make sure to switch back to your branch with `git checkout branch-name` You'll need to use the command `git push --set-upstream origin branch-name` (ex: git push --set-upstream origin cho-cho-branch). This pushes your branch to your fork. On the Github website, create a pull request at your forked repo's webpage. So long as you have followed the aforementioned steps, I will accept your code and merge it with the original repo. From now on any new edits you want to push from your branch can be pushed with `git push` as long as you are on that branch.  

    5b. 
    To prevent clutter in your local repo, delete branches that have been merged to the original repository. Use `git branch -d branch-name` to delete locally. Then `git push origin --delete branch-name` to delete the pushed branch on your fork. 
        
6. Once your fork and repository are set up correctly. The order of commands to input are:  
    
    Update your local repo and your forked repo: `git checkout master` `git pull upstream master` `git push origin master`  

    Make a new branch and switch into that branch `git branch branch-name` `git checkout branch-name`  

    Add a copy of the assignments/code you'd like peer reviewed to a directory that identifies you and then stage and commit them `git add -A` and `git commit -m'commit message'`  

    Push your branch `git push --set-upstream origin branch name` (if first time pushing on that branch) or `git push` if pushing on a branch that already has an established upstream. Make a pull request at your forked repo's webpage. Wait for it to be merged.  
      
    Congrats! Your work is ready for peer review! 


7. If you want someone to review your code, please create a new Issue in the Issues tab and clearly indicate the directory that your code will be in so that anyone who wants to help can easily identify your work. 

8. When peer-reviewing other people's work, we should comment out our suggestions so that the original code is preserved and the owner can clearly see the suggestions offered by the reviewer. Github also makes it really easy to see exactly what edits were made if you simply click on the commit made by the last person to edit a file. 

9. Teamwork makes the dream work (?)


### Please DM me on Discord: cho_cho #8835 if you have suggestions on how to make this project work more efficiently. I am still new to Git/Github myself.

O almost forgot, as an added bonus, those of us who are active in this repo should all vote on the best submission for each week's assignment. Once we choose the best user submission, I'll deploy the site on Netlify to show off to our classmates!

The current sites in this repo are deployed here: 
* https://pedantic-blackwell-40a88c.netlify.app/
* https://lucid-mclean-e5431f.netlify.app/
* https://ecstatic-lewin-bef382.netlify.app/

#### Shoutout to Imran, Hailie and Xnasero for helping me test out the workflow!

##### Will look into making an organization for this repo once we have enough collaborators so we can designate roles and better emulate a professional workflow
