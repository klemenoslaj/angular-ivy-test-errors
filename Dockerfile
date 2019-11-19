FROM node:12

USER root

RUN apt-get update && \
    apt-get install -y wget && \
    wget -q https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb && \
    dpkg --unpack google-chrome-stable_current_amd64.deb && \
    apt-get install -f -y && \
    apt-get clean && \
    rm google-chrome-stable_current_amd64.deb

ENV CHROME_BIN /usr/bin/google-chrome
ENV PATH /app/node_modules/.bin:$PATH

ADD package.json /app/
ADD package-lock.json /app/
WORKDIR /app
RUN npm install --unsafe-perm

ADD . /app

CMD ng test example --watch=false --browsers=ChromeHeadlessNoSandbox
