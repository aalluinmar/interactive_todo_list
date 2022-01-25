# Interactive Todo List

> Interactive Todo List Application

    A TODO list application will add the items to the database and lists all the existing items.

## Tech Stack

- Vue.js
- Python Django framework
- PostgreSQL ([download](https://www.pgadmin.org/download/))


## Setup Development Environment

    sudo apt-get -y update
    sudo apt-get -y install git python-pip postgresql postgresql-contrib wkhtmltopdf libcurl4-openssl-dev libssl-dev xvfb
    sudo pip install virtualenv

## Clone the code

    cd ~/
    git clone git@github.com:aalluinmar/interactive_todo_list.git
    cd interactive_todo_list

## Install Application Requirements for Development.

- For Backend Setup, go through ([Backend README](https://github.com/aalluinmar/interactive_todo_list/blob/main/interactive_backend/README.md))

- For Frontend Setup, go through ([Frontend README](https://github.com/aalluinmar/interactive_todo_list/blob/main/interactive_frontend/README.md))


## Start App Server by using following Commands

- For Backend Setup, after configuring Docker Desktop in your local Environment. Open Terminal with this application path and just switch to backend directory and up the Docker Container.

    `cd backend/product_reviews/`

    `docker-compose up --build`

- For Frontend Setup, open another terminal with this application path and just switch to frontend/product_reviews_frontend directory and up the Docker Container.

    `cd frontend/product_reviews_frontend/`

    `docker-compose up --build`
    
- Open the Application using ([localhost](http://localhost:8080/))

## In production server, Create virtual environment and activate and Install Application Requirements regarding Backend.


    virtualenv -p python3 ~/env/interactive_todo
    source ~/env/interactive_todo/bin/activate
    cd interactive_todo_list/interactive_backend/
    pip3 install -r ./requirements/test.txt

    `Configure the supervisor inorder to make Containers up every time.`

## In production server, Create virtual environment and activate and Install Application Requirements regarding Frontend.

    Install Node and Vue CLI Service and build the project for production environment setup and configure within the `S3` bucket.
