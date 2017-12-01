#!/bin/bash

echo "Running deploy"

eval "$(ssh-agent -s)" # Start ssh-agent cache
chmod 600 .travis/deploy_key # Allow read access to the private key
ssh-add .travis/deploy_key # Add the private key to SSH



# Skip this command if you don't need to execute any additional commands after deploying.
ssh -o StrictHostKeyChecking=no koralbuild@$IP -p $PORT <<EOF
  cd $DEPLOY_DIR
  
  if [ ! "$(ls -A $DEPLOY_DIR)" ]; then
    # clone the repo on to the server
    echo "Cloning repo from github \n"
    git clone $REPO $DEPLOY_DIR
    cd $DEPLOY_DIR
  else
    # pull changes
    echo "Pulling changes from github \n"
    cd $DEPLOY_DIR
    git pull
  fi
  
  echo "INSTALLING NODE PACKAGES \n"
  npm install

  echo "UPDATING PACKAGES JUST TO BE SURE \n"
  npm update

  echo "BUILDING BKORAL.IO \n"
  npm run build
EOF