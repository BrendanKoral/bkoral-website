#!/bin/bash

CYAN='\033[0;36m'
GREEN='\033[1;32m'
NC='\033[0m'

echo "Running deploy"

eval "$(ssh-agent -s)" # Start ssh-agent cache
chmod 600 .travis/deploy_key # Allow read access to the private key
ssh-add .travis/deploy_key # Add the private key to SSH



# Skip this command if you don't need to execute any additional commands after deploying.
ssh -o StrictHostKeyChecking=no koralbuild@$IP -p $PORT <<EOF
  cd $DEPLOY_DIR
  
  if [ ! -d $DEPLOY_DIR ]; then
    # clone the repo on to the server
    echo -e "${CYAN}Cloning repo from github${NC} \n"
    git clone $REPO $DEPLOY_DIR
    cd $DEPLOY_DIR
  else
    # pull changes
    echo -e "${CYAN}Pulling changes from github ${NC} \n"
    cd $DEPLOY_DIR

    git fetch --all

    git reset --hard origin/master

    git pull
  fi
  
  echo -e "${CYAN}INSTALLING NODE PACKAGES${NC} \n"
  npm install

  echo -e "${CYAN}UPDATING PACKAGES JUST TO BE SURE${NC} \n"
  npm update

  echo -e "${CYAN}BUILDING BKORAL.IO${NC} \n"
  
  npm run build

  echo -e "${GREEN}Restarting Bkoral.io server.${NC} \n"

  pm2 restart bkoralio-server

  echo -e "${GREEN}Bkoral.io build complete.${NC} \n"
EOF