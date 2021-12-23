#!/usr/bin/env bash

# Install node 14 through nvm
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash


export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion

nvm install 14
nvm use 14
npm install --global npm yarn @teambit/bvm
bvm install

# rm ~/.bashrc
# rm  ~/.npmrc
echo 'export PATH=${HOME}/bin:${PATH}' >> ~/.bashrc
echo "Adding bit.dev to npm registry"
echo "always-auth=true" >> ~/.npmrc
echo "@bit:registry=https://node.bit.dev" >> ~/.npmrc
echo "//node.bit.dev/:_authToken={$BIT_TOKEN}" >> ~/.npmrc
echo "Completed adding bit.dev to npm registry"