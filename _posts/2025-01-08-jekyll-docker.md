---
title:  "Setting up a local development environment for Jekyll with Docker"
date: 2025-01-08T15:15:26+10:00
weight: 1
categories: ["Development"]
featured-img: /images/illustrations/nasa-Q1p7bh3SHj8-unsplash.jpg
author: "Daniel M. Krätschmer"
categories: ["Development"]
---


This webpage is build with [Jekyll](https://jekyllrb.com) and hosted by GitHub Pages. 
Jekyll is a static site generator that combines content and layout information to generate a static site.
As my favourite markup language is [markdown](https://www.markdownguide.org) 
and I am quite used to write technical documentations with markdown,
it is a reasonable choice to step into Jekyll and [Liquid](https://github.com/Shopify/liquid/wiki). 

## Let's start

> [Ruby 101](https://jekyllrb.com/docs/ruby-101/) - Jekyll is written in Ruby. If you are new to Ruby, this page helps to learn some of the terminology. 
>
> – _Jekyll Documentation_

Perfect Start. As I'm not a backend programmer I have no glue about
[Ruby Programming Language](https://www.ruby-lang.org/en/) and its terminology at all. 
But not a big problem so far as it seems to be quite straightforward.

> Jekyll is a Ruby gem. First, install Ruby on your machine. Go to Installation and follow the instructions for your operating system.
>
> – _Jekyll Documentation_

Do I really have in install Ruby locally? As I have a macOS, Ruby is presintalled and a homebrew installation to cover the version requirements on Ruby is also fine. But is this really the way to go? </b>
**Let's check first if there is a jekyll docker image available.**

I searched in dockerhub and there is an official [jekyll image](https://hub.docker.com/r/jekyll/jekyll/) available. 
Sounds easy to proceed: Let's pull the image from dockerhub and run it for further testing.  

>```shell
>    docker pull jekyll/jekyll
>    docker run jekyll/jekyll:latest 
>```

But then I got this warning message: 

>```shell
>    WARNING: The requested image's platform (linux/amd64) does not match the
>    detected host platform (linux/arm64/v8) and no specific platform was
>    requested ruby 3.1.1p18 (2022-02-18 revision 53f5fc4236) [x86_64-linux-musl]
>```

As I work with arm64 system (M3 Mac) and the image is built for amd64 I am in troubles:  
I could run an AMD64 image via emulation as stated here: 

> Not all images are available for ARM64 architecture. You can add --platform linux/amd64 to run an Intel image under emulation.
>
> – [_stackoverflow_](https://stackoverflow.com/questions/67458621/how-to-run-amd64-docker-image-on-arm64-host-platform)

**Maybe the right time to setup Ruby and Jekyll for my own.**

Let's check for a Ruby image first. Et voilà: [Ruby Docker official image](https://hub.docker.com/_/ruby) 
that is offically curated and supports various architectures including ARMv8 64-bit. Seems to be the way to go. 
Let's setup the Docker file for Ruby using the documentated docker setup example for Ruby as our reference. The dockerfile needs to be stored in a folder where the necessary Gem-files are also located.

>```shell
>FROM ruby:3.3.0
>
>RUN apt-get update && apt-get install -y build-essential openssl bundler
>
># throw errors if Gemfile has been modified since Gemfile.lock
>RUN bundle config --global frozen true
>
>RUN mkdir -p /spdm
>WORKDIR /spdm
>
>COPY Gemfile Gemfile.lock ./
>RUN bundle install
>COPY . ./
>
>EXPOSE 4000
>
>ENTRYPOINT ["bundle", "exec"]
>CMD jekyll serve --host 0.0.0.0 --livereload
>```

It is important here to copy both <span style="background-color: lightgrey">Gemfile</span> 
and if not initially generated at runtime by Bundler 
<span style="background-color: lightgrey">Gemfile.lock</span> to the container. 
A <span style="background-color: lightblue">bundle install</span> will generate the <span style="background-color: lightgrey">Gemfile.lock</span> that describes the exact versions that were (to document) or are (to distribute) supposed to be installed via <span style="background-color: lightblue">bundle install</span>.
Within a gemfile all Rubygems (packages) and dependencies required are listed
that allows automatic installation by the Bundler.

For the Jekyll use case there are various Gemfiles available. I used this one: 
>```ruby
>source "https://rubygems.org"
>
>gem "webrick", "~> 1.7"
>gem "jekyll", "~> 4.3"
>gem "jekyll-environment-variables"
>```
In addtion to this ruby/jekyll container I want to include an nginx Proxy Server to have more security options as well as flexibility afterwards. 

So let's search for an approriate nginx Image. 

I again searched in dockerhub and there is an official [nginx image](https://hub.docker.com/_/nginx) available.   
This way I continued to write the <span style="background-color: lightgrey">compose.yaml</span> for docker compose. 

>```docker
>#version: "3.8"
>services:
>  nginx:
>    restart: always
>    image: nginx:1-alpine
>    ports:
>      - 8089:80
>    volumes:
>      - ./nginx/default.conf:/etc/nginx/conf.d/default.conf
>    depends_on:
>      - ruby
>  ruby:
>    build:
>      context: ./ruby
>    tty: true
>    volumes:
>      - ./app:/app
>    # ports:
>    #  - "4000:4000"
>```

I chosed the nginx:1-alpine image exposing the Nginx web server to port 8089 using port 80 within the container. 
Additionally I need a minimal configuration file: <span style="background-color: lightgrey">default.conf</span> for Nginx Proxy Server functionality
considering the default port 80, see here: 

>```shell
> server {
>    location / {
>        proxy_set_header Host $host;
>        proxy_set_header X-Real-IP $remote_addr;
>        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
>        proxy_set_header X-Forwarded-Proto $scheme;
>
>        proxy_pass http://ruby:4000/;
>    }
>}
>```

For Details configuring nginx, please refer to the official documentation:[nginx Documentation](https://nginx.org/en/docs/)

This files needs to copied or in my case mounted to the docker container. 
If you prefer copying the configuration file you have to provide a respective 
Docker Setup with <span style="background-color: lightblue">COPY</span> addressed in docker compose.  

As jekyll is providing the site hosting using 127.0.0.1:4000 
I define a proxy_pass using the service name with the default Jekyll port.  

## Conclusion

And that's it. No I can reach my containerized webpage using localhost:8089 as configured in nginx. 
Currently I work on to mount the content-containng files of my webpage so that I am able to modify it without rerunning the image and container generation for changes.  