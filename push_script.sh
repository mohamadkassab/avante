git add .
git commit -m "Update"
eval "$(ssh-agent -s)"
ssh-add ~/.ssh/id_rsa
git push -u origin main